import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = [
    { path: '/about', label: 'About Us' },
    { path: '/privacy', label: 'Privacy Policy' },
    { path: '/terms', label: 'Terms of Service' },
    { path: '/disclaimer', label: 'Disclaimer' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="relative z-10 border-t border-border/30">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cosmic-cyan to-cosmic-purple flex items-center justify-center text-xl">
                🏏
              </div>
              <span className="text-lg font-bold gradient-text-cyan">
                Cricket Analysis Community
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Educational cricket discussion platform for match analysis, statistics, and expert opinions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Notice */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Legal Notice</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              This platform is strictly for educational and entertainment purposes. We do not promote, 
              encourage, or facilitate any form of monetary activity. All content is opinion-based 
              and should not be considered financial advice. Users must be 18+ and comply with local laws.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2025 Cricket Analysis Community — Educational Use Only
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span>18+ Only • Educational Purpose</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
