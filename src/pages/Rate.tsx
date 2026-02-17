import { useState } from "react";
import { Star, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";

const Rate = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleNext = () => {
    if (rating > 0) {
      navigate("/feedback", { state: { rating } });
    }
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
              <div className="w-2 h-2 rounded-full bg-primary scale-125 transition-all duration-500" />
              <div className="w-8 h-0.5 rounded-full bg-border transition-all duration-500" />
              <div className="w-2 h-2 rounded-full bg-border transition-all duration-500" />
            </div>
          </AnimatedSection>

          <AnimatedSection>
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

export default Rate;
