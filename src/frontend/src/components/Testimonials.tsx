import { useIsMobile } from "@/hooks/use-mobile";
import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    initials: "RS",
    bg: "#C9A227",
    color: "#FAF7F2",
    name: "Rohit Sharma, Jaipur",
    badge: "Verified Buyer",
    text: "Maine ye apne mandir mein rakha hai, raat ko jab glow karta hai toh ghar mein ek alag hi positive energy aati hai. Quality bahut premium hai, packaging bhi mast thi. Jai Bajrangbali! 🙏",
  },
  {
    initials: "PM",
    bg: "#D97706",
    color: "#FAF7F2",
    name: "Priya Mehta, Mumbai",
    badge: "Verified Buyer",
    text: "Gifted this to my father on his birthday and he literally had tears in his eyes. The engraving of Hanuman Ji is so detailed, you can see every expression. Worth every rupee.",
  },
  {
    initials: "AS",
    bg: "#6B4A3E",
    color: "#FAF7F2",
    name: "Aditya Singh, Lucknow",
    badge: "Verified Buyer",
    text: "Bahut hi sundar product hai. Padhai karte waqt desk pe rakha hua hai, ek confidence sa milta hai. COD bhi mila aur 4 din mein delivery ho gayi.",
  },
  {
    initials: "NA",
    bg: "#FAF7F2",
    color: "#6B4A3E",
    name: "Neha Agarwal, Delhi",
    badge: "Verified Buyer",
    text: "The warm golden light is exactly what I wanted for my pooja room. Not too bright, not too dim — perfect. ZenDecorum ki packaging ekdum gift-worthy hai.",
  },
];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !isMobile) return;
    let startX = 0;
    let startScroll = 0;
    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startScroll = track.scrollLeft;
      setIsPaused(true);
    };
    const onTouchMove = (e: TouchEvent) => {
      const dx = startX - e.touches[0].clientX;
      track.scrollLeft = startScroll + dx;
    };
    const onTouchEnd = () => setIsPaused(false);
    track.addEventListener("touchstart", onTouchStart, { passive: true });
    track.addEventListener("touchmove", onTouchMove, { passive: true });
    track.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      track.removeEventListener("touchstart", onTouchStart);
      track.removeEventListener("touchmove", onTouchMove);
      track.removeEventListener("touchend", onTouchEnd);
    };
  }, [isMobile]);

  return (
    <section
      id="reviews"
      className="w-full py-12 sm:py-16"
      style={{ backgroundColor: "#E8DFD6" }}
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h2
          className="reveal mb-2 text-center text-xl font-bold leading-snug sm:text-2xl md:text-3xl"
          style={{ color: "#6B4A3E" }}
        >
          What Our Devotees Are Saying
        </h2>
        <p
          className="reveal mb-8 text-center text-sm font-medium"
          style={{ color: "#6B4A3E" }}
        >
          <Star
            className="mr-1 inline h-3.5 w-3.5"
            style={{ color: "#C9A227" }}
            fill="#C9A227"
          />
          <Star
            className="mr-1 inline h-3.5 w-3.5"
            style={{ color: "#C9A227" }}
            fill="#C9A227"
          />
          <Star
            className="mr-1 inline h-3.5 w-3.5"
            style={{ color: "#C9A227" }}
            fill="#C9A227"
          />
          <Star
            className="mr-1 inline h-3.5 w-3.5"
            style={{ color: "#C9A227" }}
            fill="#C9A227"
          />
          <Star
            className="mr-1 inline h-3.5 w-3.5"
            style={{ color: "#C9A227" }}
            fill="#C9A227"
          />
          Over 10,000+ verified reviews from across India
        </p>

        <div
          ref={trackRef}
          className="reveal relative overflow-hidden"
          style={{ touchAction: isMobile ? "pan-x" : "auto" }}
        >
          <div
            className="flex gap-4 animate-scroll-x"
            style={{
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={`${t.initials}-${i}`}
                className="group w-[280px] flex-shrink-0 rounded-[14px] border p-5 transition-all duration-300 active:scale-[0.98] sm:hover:-translate-y-1 sm:hover:shadow-xl sm:w-[320px]"
                style={{
                  backgroundColor: "#FAF7F2",
                  borderColor: "#E8DFD6",
                  boxShadow: "0 4px 14px rgba(107,74,62,0.08)",
                }}
                data-ocid={`testimonial.item.${(i % testimonials.length) + 1}`}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-transform duration-300 group-active:scale-110 sm:group-hover:scale-110"
                    style={{ backgroundColor: t.bg, color: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p
                      className="text-sm font-bold"
                      style={{ color: "#6B4A3E" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-xs font-medium"
                      style={{ color: "#D97706" }}
                    >
                      ✓ {t.badge}
                    </p>
                  </div>
                </div>
                <div className="mb-2 flex gap-0.5">
                  <Star
                    className="h-3.5 w-3.5"
                    style={{ color: "#C9A227" }}
                    fill="#C9A227"
                  />
                  <Star
                    className="h-3.5 w-3.5"
                    style={{ color: "#C9A227" }}
                    fill="#C9A227"
                  />
                  <Star
                    className="h-3.5 w-3.5"
                    style={{ color: "#C9A227" }}
                    fill="#C9A227"
                  />
                  <Star
                    className="h-3.5 w-3.5"
                    style={{ color: "#C9A227" }}
                    fill="#C9A227"
                  />
                  <Star
                    className="h-3.5 w-3.5"
                    style={{ color: "#C9A227" }}
                    fill="#C9A227"
                  />
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#6B4A3E" }}
                >
                  "{t.text}"
                </p>
              </div>
            ))}
          </div>
        </div>

        <p
          className="reveal mt-6 text-center text-xs font-semibold"
          style={{ color: "#6B4A3E" }}
        >
          Join 10,000+ devotees who have welcomed Bajrangbali into their homes.
        </p>
      </div>

      <style>{`
        @keyframes scroll-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-x {
          animation: scroll-x 28s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-x {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
