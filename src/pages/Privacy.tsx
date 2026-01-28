import Layout from '@/components/Layout';
import GlassCard from '@/components/GlassCard';

const Privacy = () => {
  const sections = [
    {
      title: '1. Information We Collect',
      content: `We may collect the following types of information when you interact with our community:
      
• Contact information (if voluntarily provided)
• Usage data and interaction patterns
• Device and browser information
• Communication preferences

We do not collect sensitive personal information without your explicit consent.`,
    },
    {
      title: '2. How We Use Your Information',
      content: `Your information may be used to:

• Provide and improve our educational content
• Communicate community updates and announcements
• Ensure community guidelines are followed
• Analyze usage patterns to enhance user experience
• Respond to inquiries and support requests`,
    },
    {
      title: '3. Information Sharing',
      content: `We do not sell, trade, or otherwise transfer your personal information to third parties. Information may only be shared:

• With your explicit consent
• To comply with legal requirements
• To protect our rights and safety of community members
• With trusted service providers who assist in platform operations`,
    },
    {
      title: '4. Data Security',
      content: `We implement appropriate security measures to protect your information:

• Encryption of data in transit
• Secure storage practices
• Regular security assessments
• Limited access to personal data

However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.`,
    },
    {
      title: '5. Your Rights',
      content: `You have the right to:

• Access your personal information
• Request correction of inaccurate data
• Request deletion of your data
• Opt-out of communications
• Withdraw consent at any time

To exercise these rights, please contact us through our contact page.`,
    },
    {
      title: '6. Cookies and Tracking',
      content: `Our platform may use cookies and similar technologies to:

• Remember your preferences
• Analyze traffic patterns
• Improve user experience

You can control cookie settings through your browser preferences.`,
    },
    {
      title: '7. Third-Party Links',
      content: `Our community may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.`,
    },
    {
      title: '8. Changes to This Policy',
      content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated revision date. Your continued use of the platform after changes constitutes acceptance of the updated policy.`,
    },
  ];

  return (
    <Layout>
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="cosmic-badge mb-4 inline-block">Legal</span>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: January 2025
            </p>
          </div>

          {/* Introduction */}
          <GlassCard className="p-8 mb-8">
            <p className="text-muted-foreground leading-relaxed">
              Cricket Analysis Community ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our platform or join our community. Please read this policy carefully to 
              understand our practices regarding your information.
            </p>
          </GlassCard>

          {/* Policy Sections */}
          <div className="space-y-6">
            {sections.map((section) => (
              <GlassCard key={section.title} className="p-8">
                <h2 className="text-xl font-bold text-foreground mb-4">{section.title}</h2>
                <div className="text-muted-foreground whitespace-pre-line leading-relaxed text-sm">
                  {section.content}
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Contact */}
          <GlassCard className="p-8 mt-8 text-center" neonBorder>
            <h2 className="text-xl font-bold text-foreground mb-4">Questions About This Policy?</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this Privacy Policy, please contact us through our contact page.
            </p>
          </GlassCard>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
