import AnimatedSection from "./AnimatedSection";

const ReviewForm = () => {
  return (
    <section id="submit-review" className="py-20 px-6 bg-card">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-10">
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
              Share Your Experience
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              Submit a Review
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="rounded-2xl bg-background border border-border overflow-hidden shadow-[var(--shadow-soft)]">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSealP-4if1EOFIpkMYUZO_PwNve4DXQ3MYjMruLjq_RBuqVRQ/viewform?embedded=true"
              width="100%"
              height="700"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full"
              title="Review Form"
            >
              Loading…
            </iframe>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ReviewForm;
