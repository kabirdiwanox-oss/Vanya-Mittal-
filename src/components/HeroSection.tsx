import { ArrowRight, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4">
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
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="gradient-text">Cricket Analysis</span>
          <br />
          <span className="text-foreground">Community</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Join our community for cricket match discussions, team statistics, 
          pitch reports, and expert opinions. Educational content only.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="https://telegram.me/+Sh0wI818fgczNjZl"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-button flex items-center gap-3 group"
          >
            <Users size={20} />
            <span>Join Community</span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

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
