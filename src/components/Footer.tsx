import { Github, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About the Tool</h3>
            <p className="text-gray-400 text-sm">
              Standard Deviation Calculator is a free statistical tool designed to help researchers, 
              students, and professionals calculate standard deviation quickly and accurately. Our tool 
              ensures precise statistical analysis for your research needs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-blue-400 transition text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-blue-400 transition text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-3">
              <a 
                href="mailto:contact@standarddeviationcalculator.me" 
                className="flex items-center text-gray-400 hover:text-blue-400 transition text-sm"
              >
                <Mail className="h-5 w-5 mr-2" />
                contact@standarddeviationcalculator.me
              </a>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com" 
                  className="text-gray-400 hover:text-blue-400 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="https://twitter.com" 
                  className="text-gray-400 hover:text-blue-400 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Standard Deviation Calculator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}