import { Info, HelpCircle, CheckCircle2 } from 'lucide-react';

export function SEContent() {
  return (
    <div className="max-w-4xl mx-auto mt-12 px-4">
      <section id="understanding" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Standard Error</h2>
        <p className="text-gray-600 mb-6">
          Standard Error (SE) is a statistical measure that indicates the accuracy of a sample mean compared to the actual population mean. 
          It measures the standard deviation of the sampling distribution of a statistic, most commonly the mean.
        </p>
      
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Info className="w-5 h-5 mr-2 text-blue-500" />
            Formula
          </h3>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Standard Error of the Mean (SEM):</p>
                <p className="text-lg font-mono text-center">SE = s / √n</p>
              </div>
            </div>
          </div>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li><strong>s</strong> = sample standard deviation</li>
            <li><strong>n</strong> = sample size</li>
            <li><strong>√</strong> = square root</li>
          </ul>
        </div>
      </section>

      <section id="features" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <CheckCircle2 className="w-5 h-5 mr-2 text-blue-500" />
              Calculator Features
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Instant SE calculation</li>
              <li>• Sample size analysis</li>
              <li>• Mean computation</li>
              <li>• Standard deviation</li>
              <li>• Data visualization</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <CheckCircle2 className="w-5 h-5 mr-2 text-blue-500" />
              Applications
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Research analysis</li>
              <li>• Statistical inference</li>
              <li>• Data reliability</li>
              <li>• Sample accuracy</li>
              <li>• Population estimation</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="best-practices" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Best Practices</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start">
              <span className="font-semibold mr-2">1.</span>
              Ensure your data is normally distributed or your sample size is large enough (n {'>'}30)
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">2.</span>
              Remove any obvious outliers that might skew your results
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">3.</span>
              Use a sufficient sample size - larger samples provide more reliable estimates
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">4.</span>
              Verify that your measurements are independent of each other
            </li>
          </ul>
        </div>
      </section>

      <section id="faq" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <HelpCircle className="w-5 h-5 mr-2 text-blue-500" />
              What is the difference between standard error and standard deviation?
            </h3>
            <p className="text-gray-600">
              Standard deviation measures the spread of individual observations around the mean, while standard error measures the precision of the sample mean estimate.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <HelpCircle className="w-5 h-5 mr-2 text-blue-500" />
              When should I use standard error?
            </h3>
            <p className="text-gray-600">
              Use standard error when you want to understand how precise your sample mean is as an estimate of the population mean, particularly in inferential statistics.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <HelpCircle className="w-5 h-5 mr-2 text-blue-500" />
              How can I reduce standard error?
            </h3>
            <p className="text-gray-600">
              You can reduce standard error by increasing your sample size or reducing the population's standard deviation through better sampling methods.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}