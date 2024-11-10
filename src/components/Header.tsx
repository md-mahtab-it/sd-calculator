import { Calculator, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start py-4 md:py-0">
            <Link to="/" className="flex items-center h-[60px]">
              <Calculator className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">SD Calculator</span>
            </Link>
          </div>
          <div className="flex justify-center pb-4 md:pb-0">
            <div className="flex flex-wrap items-center justify-center gap-4 h-[60px]">
              <Link
                to="/"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition"
              >
                <Home className="h-4 w-4 mr-2" />
                Home
              </Link>
              <Link
                to="/se-calculator"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition"
              >
                <Calculator className="h-4 w-4 mr-2" />
                SE Calculator
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}