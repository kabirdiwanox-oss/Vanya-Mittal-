import Layout from '@/components/Layout';
import GlassCard from '@/components/GlassCard';
import { MessageCircle, Mail, Clock, Users, ArrowRight } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Telegram Community',
      description: 'Join our Telegram community for instant access to discussions and updates.',
      action: {
        label: 'Join Now',
        href: 'https://telegram.me/+Sh0wI818fgczNjZl',
      },
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Community Discussions',
      description: 'Engage with fellow cricket enthusiasts in our community chat.',
      action: {
        label: 'Join Community',
        href: 'https://telegram.me/+Sh0wI818fgczNjZl',
      },
    },
  ];

  const faqs = [
    {
      question: 'What is Cricket Analysis Community?',
      answer: 'We are an educational platform dedicated to cricket analysis, discussions, and sharing expert opinions about the sport.',
    },
    {
      question: 'Is the community free to join?',
      answer: 'Yes, joining our Telegram community is completely free. We believe in making cricket education accessible to all enthusiasts.',
    },
    {
      question: 'What kind of content do you share?',
      answer: 'We share match analysis, team statistics, pitch reports, historical data, and expert opinions – all for educational purposes.',
    },
    {
      question: 'Are there any age restrictions?',
      answer: 'Yes, you must be at least 18 years of age to join our community. This is a strict requirement.',
    },
    {
      question: 'How can I participate in discussions?',
      answer: 'Once you join our Telegram community, you can participate in ongoing discussions, share your analysis, and learn from others.',
    },
  ];

  return (
    <Layout>
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="cosmic-badge mb-4 inline-block">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? Want to join the community? We're here to help.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {contactMethods.map((method) => (
              <GlassCard key={method.title} className="p-8" neonBorder>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cosmic-cyan to-cosmic-blue flex items-center justify-center text-cosmic-deep mb-6">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{method.title}</h3>
                <p className="text-muted-foreground mb-6">{method.description}</p>
                <a
                  href={method.action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  {method.action.label}
                  <ArrowRight size={16} />
                </a>
              </GlassCard>
            ))}
          </div>

          {/* Community Stats */}
          <GlassCard className="p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-1">Growing</h4>
                <p className="text-sm text-muted-foreground">Active Members</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-1">Daily</h4>
                <p className="text-sm text-muted-foreground">Discussions</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-1">24/7</h4>
                <p className="text-sm text-muted-foreground">Community Active</p>
              </div>
            </div>
          </GlassCard>

          {/* FAQs */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <GlassCard key={index} className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* CTA */}
          <GlassCard className="p-8 md:p-12 text-center" neonBorder>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cosmic-cyan to-cosmic-purple flex items-center justify-center text-3xl mx-auto mb-6">
              🏏
            </div>
            <h2 className="text-2xl font-bold gradient-text mb-4">Ready to Join?</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Connect with fellow cricket enthusiasts and access our educational content today.
            </p>
            <a
              href="https://telegram.me/+Sh0wI818fgczNjZl"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button inline-flex items-center gap-3 group"
            >
              <MessageCircle size={20} />
              <span>Join on Telegram</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </GlassCard>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
