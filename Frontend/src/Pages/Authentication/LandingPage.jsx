import { Link } from "react-router-dom";
import {
  BarChart3,
  Target,
  TrendingUp,
  Shield,
  Users,
  FileText,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Zap,
  Globe,
} from "lucide-react";

import kpiImage from "../../assets/images/kpi.jpeg";

const features = [
  {
    icon: Target,
    title: "KPI Planning & Setup",
    desc: "Define strategic goals, assign measurable KPIs, and set evaluation criteria across all university sectors.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Monitoring",
    desc: "Track progress with live dashboards that surface trends, outliers, and performance gaps instantly.",
  },
  {
    icon: TrendingUp,
    title: "Evaluation & Scoring",
    desc: "Automated performance scoring with weighted metrics ensures fair, transparent evaluations every cycle.",
  },
  {
    icon: FileText,
    title: "Comprehensive Reporting",
    desc: "Generate detailed PDF and Excel reports for leadership reviews, audits, and accreditation processes.",
  },
];

const benefits = [
  "Centralized data eliminates redundant spreadsheets",
  "Role-based access keeps sensitive data secure",
  "Automated alerts ensure deadlines are never missed",
  "Cross-sector comparison drives healthy competition",
  "Audit-ready records simplify accreditation",
  "Actionable insights accelerate decision-making",
];

const stats = [
  { value: "12+", label: "University Sectors" },
  { value: "250+", label: "KPIs Tracked" },
  { value: "98%", label: "Reporting Accuracy" },
  { value: "4x", label: "Faster Evaluations" },
];

const Landing = () => {
  return (
    <div className="flex-1 bg-background overflow-x-hidden w-full">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08] object-cover"
          style={{
            backgroundImage: `url(${kpiImage})`,
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8  animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-medium border border-primary/10">
                <Zap className="w-3.5 h-3.5" />
                Arba Minch University
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.1] tracking-tight text-wrap-balance">
                Driving Institutional{" "}
                <span className="text-primary">Excellence</span> Through Smart
                Management
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                A centralized digital platform designed to plan, monitor,
                evaluate, and report institutional performance across all
                sectors and subsectors.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {/* Hero Buttons as normal buttons */}
                <button className="px-6 py-3 text-sm rounded-md bg-primary text-primary-foreground shadow-lg shadow-primary/20 flex items-center gap-2 hover:bg-primary/90 transition-colors">
                  <a href="#about" className="flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </button>
                <button className="px-6 py-3 text-sm rounded-md border border-input bg-background flex items-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors">
                  <Link to="/signin" className="flex items-center gap-2">
                    Sign In
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </button>
              </div>
            </div>

            {/* Hero visual */}
            <div
              className="relative  animate-fade-in-up"
              style={{ animationDelay: "150ms" }}
            >
              <div className="relative bg-card rounded-2xl border border-border/60 shadow-xl shadow-primary/5 p-8 lg:p-10">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: Target,
                      label: "Strategic Goals",
                      color: "text-primary",
                    },
                    {
                      icon: BarChart3,
                      label: "Performance",
                      color: "text-success",
                    },
                    {
                      icon: Users,
                      label: "Team Metrics",
                      color: "text-warning",
                    },
                    {
                      icon: Globe,
                      label: "University-Wide",
                      color: "text-primary",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col items-center gap-3 p-5 rounded-xl bg-accent/40 border border-border/40 hover:border-primary/20 transition-colors"
                    >
                      <div
                        className={`w-11 h-11 rounded-lg bg-background flex items-center justify-center shadow-sm ${item.color}`}
                      >
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-xl bg-accent/30 border border-border/40">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-muted-foreground">
                      Overall Progress
                    </span>
                    <span className="text-xs font-semibold text-primary tabular-nums">
                      78%
                    </span>
                  </div>
                  <div className="h-2 bg-border/60 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: "78%" }}
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-2xl bg-primary/5 border border-primary/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border/60 bg-card/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center space-y-1">
                <div className="text-3xl font-bold text-primary tabular-nums">
                  {s.value}
                </div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-foreground tracking-tight">
              Everything you need to manage KPIs
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              From planning to reporting, every stage of your performance
              management cycle is covered.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="group p-6 rounded-xl bg-card border border-border/60 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center mb-5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-24 bg-accent/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground tracking-tight">
                Why institutions choose this system
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Built specifically for higher education, the platform addresses
                the unique challenges of multi-sector institutional performance
                tracking.
              </p>
              <div className="space-y-3 pt-2">
                {benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-2xl border border-border/60 shadow-lg p-8 space-y-5">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="font-semibold text-foreground text-lg">
                  Security & Compliance
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Role-based access control ensures each user sees only what they
                need. All data is encrypted, audit-logged, and compliant with
                institutional governance standards.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Role-Based Access",
                  "Encrypted Data",
                  "Audit Logs",
                  "SOC 2 Ready",
                ].map((item) => (
                  <div
                    key={item}
                    className="px-3 py-2.5 rounded-lg bg-accent/60 text-xs font-medium text-foreground text-center border border-border/40"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground tracking-tight">
            Ready to transform your performance management?
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Join Arba Minch University in building a culture of measurable
            excellence.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            {/* Normal button styled like before */}
            <button className="px-6 py-3 text-lg rounded-md bg-primary text-primary-foreground shadow-lg shadow-primary/20 flex items-center gap-2 hover:bg-primary/90 transition-colors">
              <Link to="/signin" className="flex items-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>© 2026 Arba Minch University. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
