import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';
import Logo from './Logo';

const navItems: NavItem[] = [
  { label: '首页', href: '#home' },
  { label: '关于朗坤', href: '#about' },
  { label: '核心业务', href: '#business' },
  { label: '联系我们', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <Logo className={`h-16 md:h-20 w-auto transition-colors duration-300 ${isScrolled ? 'text-blue-700' : 'text-white'}`} />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium hover:text-blue-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-gray-100'}`}
            >
              {item.label}
            </a>
          ))}
          <button className="px-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
            商务合作
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100">
          <div className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 font-medium py-2 px-4 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;