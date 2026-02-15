import AnimatedSection from "./AnimatedSection";
import StarRating from "./StarRating";

const reviews = [
  {
    name: "Arjun S.",
    rating: 5,
    text: "Exceptional quality of work. The attention to detail in every project is remarkable.",
    project: "Web Development",
    date: "2 days ago",
  },
  {
    name: "Priya M.",
    rating: 5,
    text: "Delivered ahead of schedule with outstanding results. Highly recommend for any project.",
    project: "App Design",
    date: "1 week ago",
  },
  {
    name: "Rahul K.",
    rating: 4,
    text: "Great communication throughout. The final product exceeded expectations.",
    project: "UI/UX Design",
    date: "2 weeks ago",
  },
  {
    name: "Sneha D.",
    rating: 5,
    text: "Professional, creative, and reliable. Will definitely work with them again.",
    project: "Branding",
    date: "3 weeks ago",
  },
  {
    name: "Vikram T.",
    rating: 5,
    text: "Transformed our vision into reality. Couldn't be happier with the outcome.",
    project: "Full Stack Development",
    date: "1 month ago",
  },
  {
    name: "Ananya R.",
    rating: 4,
    text: "Clean, modern, and functional. Exactly what we needed for our startup.",
    project: "MVP Development",
    date: "1 month ago",
  },
];

const ReviewsGrid = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
              What People Say
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              Client Reviews
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, index) => (
            <AnimatedSection key={index} delay={index * 0.08}>
              <div className="group rounded-2xl bg-card border border-border p-6 transition-all duration-500 hover:shadow-[var(--shadow-card)] hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <StarRating rating={review.rating} />
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
                <p className="text-foreground/90 text-[15px] leading-relaxed mb-5">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.project}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsGrid;
