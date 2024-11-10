import { Header } from './components/Header';
import { SDCalculator } from './components/SDCalculator';
import { SDContent } from './components/SDContent';
import { SECalculator } from './components/SECalculator';
import { SEContent } from './components/SEContent';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Helmet>
              <title>Standard Deviation Calculator - Statistical Analysis Tool</title>
              <meta name="description" content="Calculate standard deviation, variance, and confidence intervals with our free online Standard Deviation Calculator. Perfect for research and statistical analysis." />
              <link rel="canonical" href="https://standarddeviationcalculator.me" />
            </Helmet>
            <main className="flex-grow container mx-auto px-4 py-8">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Standard Deviation Calculator</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Calculate the standard deviation of your data with our easy-to-use tool. Perfect for statistical analysis and research.
                </p>
              </div>
              <SDCalculator />
              <SDContent />
            </main>
          </>
        } />
        <Route path="/se-calculator" element={
          <>
            <Helmet>
              <title>Standard Error Calculator - Statistical Analysis Tool</title>
              <meta name="description" content="Calculate standard error of the mean (SEM) with our free online Standard Error Calculator. Essential tool for research, statistics, and data analysis." />
              <link rel="canonical" href="https://standarddeviationcalculator.me/se-calculator" />
            </Helmet>
            <main className="flex-grow container mx-auto px-4 py-8">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Standard Error Calculator</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Calculate the standard error of your data with our easy-to-use tool. Perfect for statistical analysis and research.
                </p>
              </div>
              <SECalculator />
              <SEContent />
            </main>
          </>
        } />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
      <Footer />
    </div>
  );
}