import Layout from '@/components/Layout';
import GlassCard from '@/components/GlassCard';
import { Users, Target, BookOpen, Award, Heart, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Education First',
      description: 'We prioritize learning and understanding of cricket through detailed analysis and discussions.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Community Driven',
      description: 'Built by cricket enthusiasts for cricket enthusiasts. Every voice matters in our discussions.',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Accurate Analysis',
      description: 'Our content is backed by statistics, historical data, and expert opinions.',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Quality Content',
      description: 'We maintain high standards for all discussions and analysis shared within our community.',
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Passion for Cricket',
      description: 'Our love for the game drives everything we do. Cricket is more than just a sport to us.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Safe Environment',
      description: 'We maintain a respectful and safe space for all members to express their views.',
    },
  ];

  return (
    <Layout>
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="cosmic-badge mb-4 inline-block">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              About Cricket Analysis Community
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate community dedicated to the art and science of cricket analysis
            </p>
          </div>

          {/* Main Content */}
          <GlassCard className="p-8 md:p-12 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Cricket Analysis Community was born from a simple idea: to create a space where cricket 
                enthusiasts could come together to discuss, analyze, and learn about the beautiful game 
                we all love.
              </p>
              <p>
                Our community brings together fans from around the world who share a passion for 
                understanding cricket at a deeper level. From match situation analysis to historical 
                data comparisons, from pitch reports to player statistics – we cover it all.
              </p>
              <p>
                What sets us apart is our commitment to education. Every discussion, every analysis, 
                and every opinion shared in our community is aimed at helping members understand cricket 
                better. We believe that knowledge enhances appreciation, and appreciation enhances the 
                joy of watching this incredible sport.
              </p>
            </div>
          </GlassCard>

          {/* Values Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value) => (
                <GlassCard key={value.title} className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Mission Statement */}
          <GlassCard className="p-8 md:p-12 text-center" neonBorder>
            <h2 className="text-2xl font-bold gradient-text mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              To foster a community of informed cricket enthusiasts who can engage in meaningful 
              discussions, share valuable insights, and grow their understanding of the game together 
              – all in a respectful and educational environment.
            </p>
          </GlassCard>
        </div>
      </section>
    </Layout>
  );
};

export default About;
