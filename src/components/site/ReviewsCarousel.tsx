import { Star } from "lucide-react";

const reviews = [
  {
    name: "Tauheed Hussain",
    time: "2 months ago",
    text: "Had my car towed from Birmingham to Leicester & the service provided was amazing. From their attention to detail & care into responding to me to loading my car & taking it to my drop off location. 100% recommend & will definitely use again.",
  },
  {
    name: "Emilio Daka",
    time: "5 days ago",
    text: "Excellent service! Fast response, arrived on time, and took great care of my car. Very professional, friendly, and reasonably priced. I highly recommend to anyone needing vehicle recovery or transport. ⭐⭐⭐⭐⭐",
  },
  {
    name: "Alessandro Cesarini",
    time: "a month ago",
    text: "Great service, very quick response and professional throughout. Arrived on time and got everything sorted without any issues. Highly recommended.",
  },
  {
    name: "Mohammed Rashid",
    time: "a month ago",
    text: "Absolutely lovely recovery — arrived within 20 minutes and got me and my car home safe and sound all the way to Nottingham.",
  },
  {
    name: "Ava Lek",
    time: "2 weeks ago",
    text: "⭐⭐⭐⭐⭐ 10/10 Service! Absolutely brilliant service from start to finish. Worked incredibly hard and went above and beyond.",
  },
  {
    name: "Younis Miah",
    time: "2 months ago",
    text: "Fast, reliable and the best prices around. Came through when most companies were busy or charging too much. Kind and respectful — definitely recommend and will use again.",
  },
  {
    name: "Dan Dan",
    time: "a week ago",
    text: "Very good service and fair prices. Always gives accurate timing and helps as much as he can. Friendly — would highly recommend.",
  },
  {
    name: "Chad Newell",
    time: "a month ago",
    text: "Good customer service — was with me within 15 minutes and at a fantastic price. I would recommend and will use again.",
  },
  {
    name: "Anas Mohamed",
    time: "5 days ago",
    text: "Fantastic service. Took my car carefully and with good behaviour at a reasonable price. Very pleased with the whole experience.",
  },
  {
    name: "Marco Cesarini",
    time: "2 weeks ago",
    text: "Absolutely lovely — arrived within 20 minutes and got me and my van home safe and sound all the way to Brighton.",
  },
];

function StarRow() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <div className="w-72 flex-shrink-0 rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-xl">
      <StarRow />
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{review.text}"</p>
      <div className="mt-5 text-sm font-semibold">
        {review.name}
        <span className="font-normal text-muted-foreground"> · {review.time}</span>
      </div>
    </div>
  );
}

export function ReviewsCarousel() {
  const doubled = [...reviews, ...reviews];

  return (
    <section className="py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-4xl md:text-5xl font-black text-center">What Our Customers Say</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Real reviews from Birmingham & West Midlands drivers on Google.
        </p>
      </div>

      <div className="mt-12 relative">
        <div
          className="flex gap-5"
          style={{
            width: "max-content",
            animation: "reviews-scroll 48s linear infinite",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.animationPlayState = "paused")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.animationPlayState = "running")}
        >
          {doubled.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://www.google.com/maps/place/Birmingham+Recovery+%26+Towing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-secondary transition"
        >
          <Star className="h-4 w-4 fill-primary text-primary" /> Read all Google Reviews
        </a>
      </div>

      <style>{`
        @keyframes reviews-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
