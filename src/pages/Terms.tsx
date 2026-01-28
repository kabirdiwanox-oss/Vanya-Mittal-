import Layout from '@/components/Layout';
import GlassCard from '@/components/GlassCard';

const Terms = () => {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: `By accessing and using Cricket Analysis Community, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.

These terms apply to all users, members, and visitors of our community.`,
    },
    {
      title: '2. Eligibility',
      content: `To use our platform, you must:

• Be at least 18 years of age
• Have the legal capacity to enter into binding agreements
• Not be prohibited from using the service under applicable laws
• Agree to use the platform for educational purposes only

By using our platform, you represent and warrant that you meet all eligibility requirements.`,
    },
    {
      title: '3. Educational Purpose Only',
      content: `Cricket Analysis Community is strictly an educational and entertainment platform. All content, including but not limited to:

• Match analysis and reviews
• Player and team statistics
• Expert opinions and discussions
• Pitch and weather reports

Is provided for educational and informational purposes only. We do not provide financial advice or encourage any monetary activities.`,
    },
    {
      title: '4. User Conduct',
      content: `As a member of our community, you agree to:

• Engage in respectful and constructive discussions
• Not post false, misleading, or harmful content
• Not harass, threaten, or abuse other members
• Not share content that violates any laws
• Not attempt to circumvent community guidelines
• Report any violations or misconduct

Violation of these rules may result in immediate removal from the community.`,
    },
    {
      title: '5. Content Disclaimer',
      content: `All content shared on our platform represents opinions and analysis, not guarantees or predictions. 

• Sports outcomes are inherently unpredictable
• Past performance does not guarantee future results
• All analysis should be considered as educational material only
• Users must make their own informed decisions
• We are not responsible for any actions taken based on community discussions`,
    },
    {
      title: '6. Intellectual Property',
      content: `All content, trademarks, and materials on our platform are protected by intellectual property laws. You may not:

• Copy, reproduce, or distribute our content without permission
• Use our branding or logos without authorization
• Create derivative works from our materials
• Claim ownership of community-generated content`,
    },
    {
      title: '7. Limitation of Liability',
      content: `To the maximum extent permitted by law:

• We provide the platform "as is" without warranties
• We are not liable for any indirect, incidental, or consequential damages
• We are not responsible for third-party content or links
• Our total liability shall not exceed the amount you paid to use the service (if any)

You use the platform at your own risk.`,
    },
    {
      title: '8. Indemnification',
      content: `You agree to indemnify and hold harmless Cricket Analysis Community and its affiliates from any claims, damages, losses, or expenses arising from:

• Your use of the platform
• Your violation of these terms
• Your violation of any third-party rights
• Any content you post or share`,
    },
    {
      title: '9. Modifications to Terms',
      content: `We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of the platform after changes constitutes acceptance of the modified terms.

We encourage you to review these terms periodically.`,
    },
    {
      title: '10. Governing Law',
      content: `These Terms of Service shall be governed by and construed in accordance with applicable laws. Any disputes arising from these terms or your use of the platform shall be resolved through appropriate legal channels.`,
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
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: January 2025
            </p>
          </div>

          {/* Introduction */}
          <GlassCard className="p-8 mb-8">
            <p className="text-muted-foreground leading-relaxed">
              Welcome to Cricket Analysis Community. These Terms of Service govern your access to and use 
              of our platform, including any content, functionality, and services offered. Please read 
              these terms carefully before using our community.
            </p>
          </GlassCard>

          {/* Terms Sections */}
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

          {/* Agreement */}
          <GlassCard className="p-8 mt-8 text-center" neonBorder>
            <h2 className="text-xl font-bold text-foreground mb-4">Agreement</h2>
            <p className="text-muted-foreground">
              By using Cricket Analysis Community, you acknowledge that you have read, understood, 
              and agree to be bound by these Terms of Service.
            </p>
          </GlassCard>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
