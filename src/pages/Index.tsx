import { useState } from "react";
import { Star, ArrowRight } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

const Index = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleNext = () => {
    if (rating > 0) setStep(2);
  };

  const ratingLabels = ["", "Poor", "Fair", "Good", "Very Good", "Excellent"];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Star size={16} className="text-primary-foreground fill-primary-foreground" />
          </div>
          <span className="font-semibold text-foreground tracking-tight">
            Review AS Projects
          </span>
        </div>
      </nav>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-6 pt-20 pb-10">
        <div className="w-full max-w-lg">
          {/* Progress */}
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-10 justify-center">
              <div className={`w-2 h-2 rounded-full transition-all duration-500 ${step >= 1 ? "bg-primary scale-125" : "bg-border"}`} />
              <div className={`w-8 h-0.5 rounded-full transition-all duration-500 ${step >= 2 ? "bg-primary" : "bg-border"}`} />
              <div className={`w-2 h-2 rounded-full transition-all duration-500 ${step >= 2 ? "bg-primary scale-125" : "bg-border"}`} />
            </div>
          </AnimatedSection>

          {/* Step 1: Rating */}
          {step === 1 && (
            <AnimatedSection key="step1">
              <div className="text-center">
                <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
                  Step 1 of 2
                </p>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
                  Rate Your Experience
                </h1>
                <p className="text-muted-foreground mb-12">
                  How would you rate our project?
                </p>

                <div className="flex items-center justify-center gap-3 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onMouseEnter={() => setHoveredStar(star)}
                      onMouseLeave={() => setHoveredStar(0)}
                      onClick={() => setRating(star)}
                      className="group transition-transform duration-200 hover:scale-110 active:scale-95"
                    >
                      <Star
                        size={44}
                        className={`transition-all duration-300 ${
                          star <= (hoveredStar || rating)
                            ? "fill-primary text-primary"
                            : "fill-none text-border hover:text-muted-foreground"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <p className={`text-sm font-medium transition-all duration-300 mb-12 h-5 ${
                  (hoveredStar || rating) ? "text-primary opacity-100" : "opacity-0"
                }`}>
                  {ratingLabels[hoveredStar || rating]}
                </p>

                <button
                  onClick={handleNext}
                  disabled={rating === 0}
                  className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-sm transition-all duration-300 ${
                    rating > 0
                      ? "bg-primary text-primary-foreground hover:shadow-[var(--shadow-elevated)] hover:scale-[1.02] active:scale-[0.98]"
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                  }`}
                >
                  Next
                  <ArrowRight size={16} />
                </button>
              </div>
            </AnimatedSection>
          )}

          {/* Step 2: Google Form */}
          {step === 2 && (
            <AnimatedSection key="step2">
              <div className="text-center">
                <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
                  Step 2 of 2 · Optional
                </p>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
                  Share Your Feedback
                </h1>
                <p className="text-muted-foreground mb-4">
                  You rated us {rating} star{rating > 1 ? "s" : ""} — {ratingLabels[rating]}
                </p>

                {/* Selected Rating Display */}
                <div className="flex items-center justify-center gap-1.5 mb-8">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      className={`${
                        star <= rating ? "fill-primary text-primary" : "fill-none text-border"
                      }`}
                    />
                  ))}
                </div>

                {/* Google Form Embed */}
                <div className="rounded-2xl bg-card border border-border overflow-hidden shadow-[var(--shadow-soft)]">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSealP-4if1EOFIpkMYUZO_PwNve4DXQ3MYjMruLjq_RBuqVRQ/viewform?embedded=true"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    className="w-full"
                    title="Review Form"
                  >
                    Loading…
                  </iframe>
                </div>

                <button
                  onClick={() => setStep(1)}
                  className="mt-6 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  ← Back to rating
                </button>
              </div>
            </AnimatedSection>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <p className="text-center text-xs text-muted-foreground">
          © 2026 Review AS Projects
        </p>
      </footer>
    </div>
  );
};

export default Index;
