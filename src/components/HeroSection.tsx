import { ArrowRight, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

const TELEGRAM_LINK = 'https://telegram.me/+Sh0wI818fgczNjZl';

const HeroSection = () => {
  const [countdown, setCountdown] = useState(4);
  const [redirecting, setRedirecting] = useState(true);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (redirecting) {
      window.location.href = TELEGRAM_LINK;
      setRedirecting(false);
    }
  }, [countdown, redirecting]);
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4">
      {/* Redirect Timer Banner */}
      {redirecting && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 glass-card px-6 py-3 rounded-full border border-primary/30 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-primary font-bold">{countdown}</span>
            </div>
            <span className="text-sm text-muted-foreground">
              {countdown > 0 ? 'Redirecting to Telegram...' : 'Opening Telegram...'}
            </span>
          </div>
        </div>
      )}

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cosmic-purple/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cosmic-cyan/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="container mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 cosmic-badge mb-8 animate-fade-in">
          <span className="text-lg">🏏</span>
          <span>Educational Cricket Discussion</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          <span className="gradient-text">Cricket Analysis</span>
          <br />
          <span className="text-foreground">Community</span>
        </h1>

        {/* CTA Button - Below Title */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-button flex items-center gap-3 group"
          >
            <Users size={20} />
            <span>Join Telegram Community</span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
          Join our community for cricket match discussions, team statistics, 
          pitch reports, and expert opinions. Educational content only.
        </p>

        {/* Small Text */}
        <p className="text-sm text-muted-foreground">
          18+ Only • Educational Purpose
        </p>

        {/* Disclaimer Box */}
        <div className="max-w-3xl mx-auto mt-16 disclaimer-box">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">Important Disclaimer</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This Telegram channel shares cricket analysis and opinions for educational and entertainment 
                purposes only. We do not promote, encourage, or facilitate any monetary activities. 
                All sports outcomes are uncertain. Users must follow local laws. 18+ only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
