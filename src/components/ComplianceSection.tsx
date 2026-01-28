import GlassCard from './GlassCard';
import { CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';

const ComplianceSection = () => {
  const complianceCards = [
    {
      title: 'What We Provide',
      icon: <CheckCircle2 className="w-6 h-6" />,
      iconBg: 'bg-green-500/20 text-green-400',
      items: [
        'Cricket match analysis',
        'Team & player statistics',
        'Educational discussions',
        'Pitch condition reports',
        'Historical data insights',
        'Expert opinion sharing',
      ],
    },
    {
      title: 'What We Do NOT Promote',
      icon: <XCircle className="w-6 h-6" />,
      iconBg: 'bg-red-500/20 text-red-400',
      items: [
        'Any form of monetary activity',
        'Financial advice or tips',
        'Guaranteed outcome claims',
        'Illegal activities',
        'Underage participation',
        'Irresponsible behavior',
      ],
    },
    {
      title: 'User Responsibilities',
      icon: <AlertTriangle className="w-6 h-6" />,
      iconBg: 'bg-amber-500/20 text-amber-400',
      items: [
        'Must be 18+ years old',
        'Follow local laws & regulations',
        'Use content for education only',
        'Make informed decisions',
        'Respect community guidelines',
        'Report any misconduct',
      ],
    },
  ];

  return (
    <section className="relative py-24 px-4">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cosmic-purple/5 to-transparent" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="cosmic-badge mb-4 inline-block">Compliance</span>
          <h2 className="section-title gradient-text">Transparency & Trust</h2>
          <p className="section-subtitle mt-4">
            We believe in complete transparency about our platform and your responsibilities
          </p>
        </div>

        {/* Compliance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {complianceCards.map((card) => (
            <GlassCard key={card.title} className="p-8">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center`}>
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground">{card.title}</h3>
              </div>

              {/* Items */}
              <ul className="space-y-3">
                {card.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>

        {/* Legal Paragraph */}
        <GlassCard className="p-8 max-w-4xl mx-auto" hover={false}>
          <h4 className="text-lg font-semibold text-foreground mb-4">Legal Compliance Statement</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This platform operates in full compliance with applicable laws including the Information Technology 
            Act 2000 and Consumer Protection Act 2019. All content is provided for educational and entertainment 
            purposes only. We do not provide financial advice, and all sports outcomes are inherently unpredictable. 
            Users are solely responsible for their actions and must ensure compliance with their local jurisdiction's 
            laws and regulations. Past performance or analysis does not guarantee future results. By using this 
            platform, you acknowledge that you are 18 years of age or older and agree to use the content 
            responsibly and legally.
          </p>
        </GlassCard>
      </div>
    </section>
  );
};

export default ComplianceSection;
