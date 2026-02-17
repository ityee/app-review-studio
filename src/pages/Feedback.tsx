import { useState } from "react";
import { Star, ArrowLeft, Send, CheckCircle2 } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";

const FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSealP-4if1EOFIpkMYUZO_PwNve4DXQ3MYjMruLjq_RBuqVRQ/formResponse";
const ENTRY_RATING = "entry.1981960126";
const ENTRY_MESSAGE = "entry.1748537632";

const Feedback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const rating = (location.state as { rating?: number })?.rating || 0;
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const ratingLabels = ["", "Poor", "Fair", "Good", "Very Good", "Excellent"];

  const handleSubmit = async () => {
    setSubmitting(true);

    const formData = new URLSearchParams();
    formData.append(ENTRY_RATING, String(rating));
    formData.append(ENTRY_MESSAGE, message);

    try {
      await fetch(FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });
    } catch {
      // no-cors will always "fail" but submission goes through
    }

    setSubmitting(false);
    setSubmitted(true);
  };

  if (!rating) {
    navigate("/", { replace: true });
    return null;
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
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

        <main className="flex-1 flex items-center justify-center px-6 pt-20 pb-10">
          <AnimatedSection>
            <div className="text-center max-w-md mx-auto">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={32} className="text-primary" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
                Thank You!
              </h1>
              <p className="text-muted-foreground mb-8">
                Your feedback helps us improve. We appreciate you taking the time to share your experience.
              </p>
              <button
                onClick={() => navigate("/")}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-sm bg-primary text-primary-foreground hover:shadow-[var(--shadow-elevated)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Submit Another Review
              </button>
            </div>
          </AnimatedSection>
        </main>

        <footer className="py-8 px-6 border-t border-border">
          <p className="text-center text-xs text-muted-foreground">
            © 2026 Review AS Projects
          </p>
        </footer>
      </div>
    );
  }

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
              <div className="w-8 h-0.5 rounded-full bg-primary transition-all duration-500" />
              <div className="w-2 h-2 rounded-full bg-primary scale-125 transition-all duration-500" />
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="text-center">
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
                Step 2 of 2 · Optional
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
                Share Your Feedback
              </h1>
              <p className="text-muted-foreground mb-2">
                You rated us {rating} star{rating > 1 ? "s" : ""} — {ratingLabels[rating]}
              </p>

              {/* Rating display */}
              <div className="flex items-center justify-center gap-1.5 mb-8">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className={
                      star <= rating ? "fill-primary text-primary" : "fill-none text-border"
                    }
                  />
                ))}
              </div>

              {/* Custom form */}
              <div className="rounded-2xl bg-card border border-border p-6 sm:p-8 shadow-[var(--shadow-soft)] text-left">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your message to the developer
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what you liked, or how we can improve..."
                  maxLength={1000}
                  rows={5}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ring-offset-background resize-none transition-all duration-200"
                />
                <p className="text-xs text-muted-foreground mt-2 text-right">
                  {message.length} / 1000
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3 mt-6">
                  <button
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-medium text-sm bg-primary text-primary-foreground hover:shadow-[var(--shadow-elevated)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit
                        <Send size={16} />
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    Skip & submit rating only
                  </button>
                </div>
              </div>

              <button
                onClick={() => navigate("/")}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <ArrowLeft size={14} />
                Back to rating
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

export default Feedback;
