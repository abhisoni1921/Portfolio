import React from 'react';
import { Terminal } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-8 border-t border-slate-800 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-bold text-blue-400 mb-4 md:mb-0">
            <Terminal className="inline mr-2" size={24} />
            Abhishek.dev
          </div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Abhishek Kumar Soni. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;