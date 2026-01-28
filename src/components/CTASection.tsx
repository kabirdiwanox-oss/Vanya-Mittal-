import { ArrowRight, Users } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cosmic-cyan/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cosmic-purple/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cosmic-cyan to-cosmic-purple flex items-center justify-center text-4xl mx-auto mb-8 animate-float">
            🏏
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Join Our Cricket</span>
            <br />
            <span className="text-foreground">Community</span>
          </h2>

          {/* Subtext */}
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Access cricket discussions and analysis from passionate enthusiasts. 
            Educational content, expert opinions, and a respectful community await you.
          </p>

          {/* CTA Button */}
          <a
            href="https://telegram.me/+Sh0wI818fgczNjZl"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-button inline-flex items-center gap-3 group pulse-glow"
          >
            <Users size={20} />
            <span>Join on Telegram</span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span>Active Community</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span>Expert Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cosmic-purple"></span>
              <span>Educational Focus</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
