import { Info, HelpCircle, CheckCircle2 } from 'lucide-react';

export function SDContent() {
  return (
    <div className="max-w-4xl mx-auto mt-12 px-4">
      <section id="understanding" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Standard Deviation</h2>
        <p className="text-gray-600 mb-6">
          Standard Deviation (SD) is a fundamental statistical measure that quantifies the amount of variation or dispersion in a dataset. It provides insights into how spread out numbers are from their average value (mean).
        </p>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Info className="w-5 h-5 mr-2 text-blue-500" />
            Formulas
          </h3>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Population Standard Deviation (σ):</p>
                <p className="text-lg font-mono text-center">σ = √(1/N * Σ(xᵢ - μ)²)</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Sample Standard Deviation (s):</p>
                <p className="text-lg font-mono text-center">s = √(1/(N-1) * Σ(xᵢ - x̄)²)</p>
              </div>
            </div>
          </div>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li><strong>N</strong> = number of values</li>
            <li><strong>xᵢ</strong> = each value in the dataset</li>
            <li><strong>μ</strong> = population mean</li>
            <li><strong>x̄</strong> = sample mean</li>
            <li><strong>Σ</strong> = sum of values</li>
          </ul>
        </div>
      </section>

      <section id="features" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <CheckCircle2 className="w-5 h-5 mr-2 text-blue-500" />
              Calculation Options
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Population & Sample SD calculations</li>
              <li>• Variance computation</li>
              <li>• Mean calculation</li>
              <li>• Detailed step-by-step process</li>
              <li>• Confidence intervals</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <CheckCircle2 className="w-5 h-5 mr-2 text-blue-500" />
              Advanced Statistics
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Margin of error analysis</li>
              <li>• Multiple confidence levels</li>
              <li>• Error bar visualization</li>
              <li>• Percentage deviations</li>
              <li>• Standard error calculations</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="applications" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Applications</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Research</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Data analysis</li>
                <li>Experimental results</li>
                <li>Research validation</li>
                <li>Quality control</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Business</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Financial analysis</li>
                <li>Market research</li>
                <li>Performance metrics</li>
                <li>Risk assessment</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Education</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Grade distribution</li>
                <li>Student performance</li>
                <li>Educational research</li>
                <li>Assessment analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <HelpCircle className="w-5 h-5 mr-2 text-blue-500" />
              When should I use population vs. sample standard deviation?
            </h3>
            <p className="text-gray-600">
              Use population standard deviation when you have data for an entire population. Use sample standard deviation when you're working with a subset of a larger population. Sample SD is more common in research as it's rare to have data for an entire population.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <HelpCircle className="w-5 h-5 mr-2 text-blue-500" />
              What does a large standard deviation indicate?
            </h3>
            <p className="text-gray-600">
              A large standard deviation indicates that the values in your dataset are spread out over a wider range from the mean. This suggests more variability in your data. Conversely, a small standard deviation indicates that values tend to be closer to the mean.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <HelpCircle className="w-5 h-5 mr-2 text-blue-500" />
              How is variance related to standard deviation?
            </h3>
            <p className="text-gray-600">
              Variance is the square of the standard deviation. While both measure spread, standard deviation is more commonly used because it's in the same units as the original data, making it more interpretable.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <HelpCircle className="w-5 h-5 mr-2 text-blue-500" />
              What are confidence intervals used for?
            </h3>
            <p className="text-gray-600">
              Confidence intervals provide a range of values that likely contains the true population parameter. For example, a 95% confidence interval means we can be 95% confident that the true population value falls within that range.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Best Practices</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start">
              <span className="font-semibold mr-2">1.</span>
              Ensure your data is clean and free of errors before calculation
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">2.</span>
              Consider whether your data represents a population or a sample
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">3.</span>
              Check for outliers that might significantly affect your results
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">4.</span>
              Use appropriate precision in your final results
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">5.</span>
              Consider the context when interpreting standard deviation values
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}