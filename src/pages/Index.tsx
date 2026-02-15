import { Star, ArrowDown } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import ReviewsGrid from "../components/ReviewsGrid";
import ReviewForm from "../components/ReviewForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Star size={16} className="text-primary-foreground fill-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground tracking-tight">
              Review AS Projects
            </span>
          </div>
          <a
            href="#submit-review"
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-300"
          >
            Submit Review
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
              Trusted Reviews
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08] mb-6">
              Review AS
              <br />
              <span className="text-gradient">Projects</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10">
              Real feedback from real clients. Discover what makes our projects stand out.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <a
              href="#submit-review"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-all duration-300 hover:shadow-[var(--shadow-elevated)] hover:scale-[1.02] active:scale-[0.98]"
            >
              Write a Review
              <ArrowDown size={16} />
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 border-y border-border">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground mt-1">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-foreground">4.9</p>
                <p className="text-sm text-muted-foreground mt-1">Average Rating</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-foreground">100%</p>
                <p className="text-sm text-muted-foreground mt-1">Client Satisfaction</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsGrid />

      {/* Form */}
      <ReviewForm />

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Review AS Projects. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
