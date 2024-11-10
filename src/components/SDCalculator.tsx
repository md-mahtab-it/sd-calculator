{/* Previous imports and code remain the same until the last section */}
import { useState } from 'react';
import { Calculator as CalculatorIcon, RefreshCw } from 'lucide-react';

export function SDCalculator() {
  const [input, setInput] = useState('');
  const [isPopulation, setIsPopulation] = useState(true);
  const [numbers, setNumbers] = useState<number[]>([]);
  const [results, setResults] = useState<{
    n: number;
    sum: number;
    mean: number;
    variance: number;
    standardDeviation: number;
    standardError: number;
    confidenceIntervals: Array<{
      level: string;
      multiplier: number;
      margin: number;
      percentage: number;
    }>;
  } | null>(null);

  const calculateSD = (nums: number[]) => {
    if (nums.length < 2) return null;
    const n = nums.length;
    const sum = nums.reduce((a, b) => a + b, 0);
    const mean = sum / n;
    const squaredDiffs = nums.map(x => Math.pow(x - mean, 2));
    const variance = squaredDiffs.reduce((a, b) => a + b, 0) / (isPopulation ? n : n - 1);
    const standardDeviation = Math.sqrt(variance);
    const standardError = standardDeviation / Math.sqrt(n);

    // Calculate confidence intervals
    const confidenceLevels = [
      { level: '68.3%', multiplier: 1 },
      { level: '90%', multiplier: 1.645 },
      { level: '95%', multiplier: 1.96 },
      { level: '99%', multiplier: 2.576 },
      { level: '99.9%', multiplier: 3.291 },
      { level: '99.99%', multiplier: 3.891 },
      { level: '99.999%', multiplier: 4.417 },
      { level: '99.9999%', multiplier: 4.892 }
    ];

    const confidenceIntervals = confidenceLevels.map(({ level, multiplier }) => ({
      level,
      multiplier,
      margin: multiplier * standardError,
      percentage: (multiplier * standardError * 100) / mean
    }));

    return {
      n,
      sum,
      mean,
      variance,
      standardDeviation,
      standardError,
      confidenceIntervals
    };
  };

  const parseInput = (value: string) => {
    return value
      .split(',')
      .map(n => parseFloat(n.trim()))
      .filter(n => !isNaN(n));
  };

  const handleCalculate = () => {
    const nums = parseInput(input);
    if (nums.length > 1) {
      setNumbers(nums);
      const result = calculateSD(nums);
      if (result) setResults(result);
    }
  };

  const handleReset = () => {
    setInput('');
    setNumbers([]);
    setResults(null);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <label htmlFor="data" className="block text-sm font-medium text-gray-700 mb-2">
            Enter numbers (comma-separated)
          </label>
          <textarea
            id="data"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            rows={4}
            placeholder="e.g., 10,20,30,40,50"
          />
        </div>

        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-blue-600"
                  checked={isPopulation}
                  onChange={() => setIsPopulation(true)}
                />
                <span className="ml-2">Population</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-blue-600"
                  checked={!isPopulation}
                  onChange={() => setIsPopulation(false)}
                />
                <span className="ml-2">Sample</span>
              </label>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleCalculate}
              className="flex-1 sm:flex-none flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md hover:from-blue-700 hover:to-purple-700 transition shadow-sm"
            >
              <CalculatorIcon className="w-4 h-4 mr-2" />
              Calculate
            </button>
            <button
              onClick={handleReset}
              className="flex-1 sm:flex-none flex items-center justify-center px-6 py-2.5 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition shadow-sm"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Clear
            </button>
          </div>
        </div>

        {results && (
          <div className="p-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg mb-6">
              <h3 className="text-2xl font-bold mb-4">Results</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-white/80 mb-1">Standard Deviation (σ)</h4>
                  <p className="text-2xl font-bold">{results.standardDeviation.toFixed(14)}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-white/80 mb-1">Variance (σ²)</h4>
                  <p className="text-2xl font-bold">{results.variance.toFixed(14)}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-white/80 mb-1">Mean (μ)</h4>
                  <p className="text-2xl font-bold">{results.mean.toFixed(4)}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-white/80 mb-1">Sample Size (N)</h4>
                  <p className="text-2xl font-bold">{results.n}</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Calculation Steps</h4>
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <p className="font-mono">σ = √(1/{isPopulation ? 'N' : '(N-1)'} * Σ(xᵢ - μ)²)</p>
                  <p className="font-mono">σ² = Σ(xᵢ - μ)² / {isPopulation ? 'N' : '(N-1)'}</p>
                  <p className="font-mono">
                    = ({input.split(',')[0].trim()} - {results.mean.toFixed(4)})² + ... + ({input.split(',')[input.split(',').length-1].trim()} - {results.mean.toFixed(4)})² / {isPopulation ? results.n : results.n - 1}
                  </p>
                  <p className="font-mono">= {results.variance.toFixed(14)}</p>
                  <p className="font-mono">σ = √{results.variance.toFixed(14)}</p>
                  <p className="font-mono">= {results.standardDeviation.toFixed(14)}</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Margin of Error</h4>
                <p className="mb-4 text-gray-600">
                  The sampling mean follows a normal distribution. Standard error of the mean (SEM):
                </p>
                <p className="font-mono mb-6 text-lg bg-gray-50 p-3 rounded">
                  σx̄ = σ/√N = {results.standardError.toFixed(14)}
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      <tr>
                        <th className="p-3 text-left rounded-tl-lg">Confidence Level</th>
                        <th className="p-3 text-left">Margin of Error</th>
                        <th className="p-3 text-left rounded-tr-lg">Error Bar</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {results.confidenceIntervals.map((ci, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="p-3">
                            {ci.level}, {ci.multiplier}σx̄
                          </td>
                          <td className="p-3">
                            {results.mean.toFixed(4)} ±{ci.margin.toFixed(4)} (±{ci.percentage.toFixed(2)}%)
                          </td>
                          <td className="p-3 w-1/3">
                            <div className="relative h-6 bg-gray-100 rounded-full">
                              <div
                                className="absolute top-0 left-1/2 h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                                style={{
                                  width: `${Math.min(100, ci.percentage)}%`,
                                  transform: 'translateX(-50%)'
                                }}
                              >
                                <div className="absolute top-1/2 right-0 h-4 w-0.5 bg-red-500 transform -translate-y-1/2"></div>
                                <div className="absolute top-1/2 left-0 h-4 w-0.5 bg-red-500 transform -translate-y-1/2"></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}