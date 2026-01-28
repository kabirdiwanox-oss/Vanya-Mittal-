import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/disclaimer', label: 'Disclaimer' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="glass-card mx-4 mt-4 md:mx-8">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cosmic-cyan to-cosmic-purple flex items-center justify-center text-xl">
                🏏
              </div>
              <span className="text-lg font-bold gradient-text-cyan hidden sm:block">
                Cricket Analysis
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="https://telegram.me/+Sh0wI818fgczNjZl"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cosmic-cyan to-cosmic-blue text-cosmic-deep transition-all duration-300 hover:shadow-lg hover:shadow-cosmic-cyan/30"
            >
              Join Community
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted/50 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-border/50">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive(link.path)
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="https://telegram.me/+Sh0wI818fgczNjZl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-cosmic-cyan to-cosmic-blue text-cosmic-deep"
                >
                  Join Community
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
