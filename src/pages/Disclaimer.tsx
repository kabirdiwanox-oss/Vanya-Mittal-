import Layout from '@/components/Layout';
import GlassCard from '@/components/GlassCard';
import { AlertTriangle, CheckCircle2, XCircle, Info } from 'lucide-react';

const Disclaimer = () => {
  return (
    <Layout>
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="cosmic-badge mb-4 inline-block">Important</span>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Disclaimer
            </h1>
            <p className="text-lg text-muted-foreground">
              Please read this disclaimer carefully before using our platform
            </p>
          </div>

          {/* Main Disclaimer */}
          <div className="disclaimer-box mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-amber-400 mb-3">Important Notice</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cricket Analysis Community is an educational and entertainment platform. All content 
                  shared on this platform, including match analysis, statistics, opinions, and discussions, 
                  is provided solely for educational and informational purposes. We do not promote, 
                  encourage, or facilitate any form of monetary activities.
                </p>
              </div>
            </div>
          </div>

          {/* What We Are */}
          <GlassCard className="p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-green-500/20 text-green-400 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-foreground">What We Are</h2>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                <span>An educational community for cricket enthusiasts</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                <span>A platform for sharing analysis and expert opinions</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                <span>A space for learning about cricket statistics and tactics</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                <span>A community for respectful cricket discussions</span>
              </li>
            </ul>
          </GlassCard>

          {/* What We Are Not */}
          <GlassCard className="p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center">
                <XCircle className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-foreground">What We Are NOT</h2>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                <span>We are NOT a financial advisory service</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                <span>We do NOT promote or facilitate any monetary activities</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                <span>We do NOT guarantee any outcomes or results</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                <span>We are NOT responsible for user decisions</span>
              </li>
            </ul>
          </GlassCard>

          {/* Legal Compliance */}
          <GlassCard className="p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center">
                <Info className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Legal Compliance</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This platform operates in accordance with applicable laws and regulations, including but 
              not limited to:
            </p>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• Information Technology Act, 2000</li>
              <li>• Consumer Protection Act, 2019</li>
              <li>• All applicable local and national regulations</li>
            </ul>
          </GlassCard>

          {/* User Acknowledgment */}
          <GlassCard className="p-8 mb-6">
            <h2 className="text-xl font-bold text-foreground mb-4">User Acknowledgment</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              By using this platform, you acknowledge and agree that:
            </p>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>All sports outcomes are inherently unpredictable</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Past performance or analysis does not guarantee future results</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>You are solely responsible for your own decisions and actions</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>You must comply with all applicable laws in your jurisdiction</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>You are at least 18 years of age</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>The platform is not liable for any decisions you make based on content shared here</span>
              </li>
            </ul>
          </GlassCard>

          {/* Final Statement */}
          <GlassCard className="p-8 text-center" neonBorder>
            <h2 className="text-xl font-bold gradient-text mb-4">Final Statement</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cricket Analysis Community is committed to providing educational content in a responsible 
              manner. We encourage all members to use the information shared on this platform responsibly 
              and in accordance with all applicable laws. If you do not agree with any part of this 
              disclaimer, please refrain from using our platform.
            </p>
          </GlassCard>
        </div>
      </section>
    </Layout>
  );
};

export default Disclaimer;
