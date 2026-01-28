import GlassCard from './GlassCard';
import { BarChart3, BookOpen, Users, TrendingUp, MessageCircle, Award, Target, Shield } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      category: 'Match Analysis',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'from-cosmic-cyan to-cosmic-blue',
      items: [
        'Match situation reviews',
        'Team performance breakdown',
        'Player statistics & form',
        'Pitch & weather analysis',
      ],
    },
    {
      category: 'Educational Content',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'from-cosmic-purple to-cosmic-pink',
      items: [
        'Historical match data',
        'Tactical cricket concepts',
        'Expert commentary discussion',
        'Learning-based insights',
      ],
    },
    {
      category: 'Community Guidelines',
      icon: <Users className="w-6 h-6" />,
      color: 'from-cosmic-blue to-cosmic-purple',
      items: [
        'Respectful discussion',
        'Fact-based analysis',
        'Opinion sharing',
        'Education-first mindset',
      ],
    },
  ];

  const statsIcons = [
    { icon: <TrendingUp />, label: 'Live Updates' },
    { icon: <MessageCircle />, label: 'Active Discussions' },
    { icon: <Award />, label: 'Expert Insights' },
    { icon: <Target />, label: 'Accurate Analysis' },
  ];

  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="cosmic-badge mb-4 inline-block">Features</span>
          <h2 className="section-title gradient-text">What We Offer</h2>
          <p className="section-subtitle mt-4">
            Comprehensive cricket analysis and educational discussions for enthusiasts
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <GlassCard
              key={feature.category}
              className="p-8"
              neonBorder
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-cosmic-deep mb-6`}
              >
                {feature.icon}
              </div>

              {/* Category Title */}
              <h3 className="text-xl font-bold text-foreground mb-4">{feature.category}</h3>

              {/* Items List */}
              <ul className="space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {statsIcons.map((stat, index) => (
            <GlassCard key={index} className="p-6 text-center" hover={false}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                {stat.icon}
              </div>
              <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
