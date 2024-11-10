import { useState } from 'react';
import { Calculator as CalculatorIcon, RefreshCw } from 'lucide-react';
import { Chart } from './Chart';

export function Calculator() {
  const [input, setInput] = useState('');
  const [numbers, setNumbers] = useState<number[]>([]);
  const [results, setResults] = useState<{
    n: number;
    sum: number;
    mean: number;
    standardDeviation: number;
    standardError: number;
  } | null>(null);

  const calculateStandardError = (nums: number[]) => {
    if (nums.length < 2) return null;
    const n = nums.length;
    const sum = nums.reduce((a, b) => a + b, 0);
    const mean = sum / n;
    const squaredDiffs = nums.map(x => Math.pow(x - mean, 2));
    const variance = squaredDiffs.reduce((a, b) => a + b, 0) / (n - 1);
    const standardDeviation = Math.sqrt(variance);
    const standardError = standardDeviation / Math.sqrt(n);

    return {
      n,
      sum,
      mean,
      standardDeviation,
      standardError
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
      const result = calculateStandardError(nums);
      if (result) setResults(result);
    }
  };

  const handleReset = () => {
    setInput('');
    setNumbers([]);
    setResults(null);
  };

  const handleExampleA = () => {
    const exampleData = '10,20,30,40,50,60';
    setInput(exampleData);
    const nums = parseInput(exampleData);
    setNumbers(nums);
    const result = calculateStandardError(nums);
    if (result) setResults(result);
  };

  const handleExampleB = () => {
    const exampleData = '15,15.5,14.5,14.65,15.25,15.75';
    setInput(exampleData);
    const nums = parseInput(exampleData);
    setNumbers(nums);
    const result = calculateStandardError(nums);
    if (result) setResults(result);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Input Section */}
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
            placeholder="e.g., 1,2,3,4,5"
          />
        </div>

        {/* Action Buttons */}
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
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
              Reset
            </button>
            <button
              onClick={handleExampleA}
              className="flex-1 sm:flex-none flex items-center justify-center px-6 py-2.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition shadow-sm"
            >
              Example A
            </button>
            <button
              onClick={handleExampleB}
              className="flex-1 sm:flex-none flex items-center justify-center px-6 py-2.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition shadow-sm"
            >
              Example B
            </button>
          </div>
        </div>

        {/* Results Section */}
        {results && (
          <div className="p-6 border-b border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500">Sample Size (n)</h3>
                <p className="text-2xl font-bold text-gray-900">{results.n}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500">Sum</h3>
                <p className="text-2xl font-bold text-gray-900">{results.sum.toFixed(2)}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500">Mean</h3>
                <p className="text-2xl font-bold text-gray-900">{results.mean.toFixed(4)}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500">Standard Deviation</h3>
                <p className="text-2xl font-bold text-gray-900">{results.standardDeviation.toFixed(4)}</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Standard Error (SE)</h3>
              <p className="text-3xl font-bold text-blue-600">{results.standardError.toFixed(6)}</p>
            </div>
          </div>
        )}

        {/* Chart Section */}
        {numbers.length > 0 && (
          <div className="p-6">
            <Chart data={numbers} />
          </div>
        )}
      </div>
    </div>
  );
}