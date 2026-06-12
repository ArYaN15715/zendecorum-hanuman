import { Flame, Landmark, Play, Star, Truck, Wallet } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const videos = [
  { label: "Mandir Corner" },
  { label: "Study Desk" },
  { label: "Bedside" },
  { label: "Gifting Unboxing" },
  { label: "Festival Decor" },
];

export default function VideoSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let startX = 0;
    let startScroll = 0;
    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startScroll = el.scrollLeft;
    };
    const onTouchMove = (e: TouchEvent) => {
      const dx = startX - e.touches[0].clientX;
      el.scrollLeft = startScroll + dx;
    };
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <section
      id="videos"
      className="w-full py-10 sm:py-14"
      style={{ backgroundColor: "#E8DFD6" }}
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h2
          className="reveal mb-2 text-center text-xl font-bold leading-snug sm:text-2xl md:text-3xl"
          style={{ color: "#6B4A3E" }}
        >
          See Why Thousands of Devotees Have Welcomed Bajrangbali Into Their
          Homes
        </h2>
        <p
          className="reveal mb-6 text-center text-sm font-medium sm:text-base"
          style={{ color: "#6B4A3E" }}
        >
          Real homes. Real blessings. Real glow.
        </p>

        <div
          ref={scrollRef}
          className="scroll-hidden flex snap-x snap-mandatory gap-3 overflow-x-auto py-6 sm:gap-4 sm:py-8"
          style={{ scrollPaddingLeft: "1rem" }}
        >
          {videos.map((v, idx) => (
            <button
              key={v.label}
              type="button"
              className="tap-scale relative flex-shrink-0 snap-start rounded-2xl border-2 p-3 text-left transition-all duration-300 sm:hover:scale-[1.03] sm:hover:shadow-xl"
              style={{
                width: "clamp(140px, 42vw, 180px)",
                height: "clamp(260px, 78vw, 320px)",
                backgroundColor: "#FAF7F2",
                borderColor: activeIdx === idx ? "#D97706" : "#C9A227",
                boxShadow:
                  activeIdx === idx
                    ? "0 0 24px oklch(0.68 0.16 80 / 0.35)"
                    : "0 0 16px oklch(0.68 0.16 80 / 0.25)",
                transitionDelay: `${idx * 50}ms`,
              }}
              data-ocid={`video.item.${idx + 1}`}
              onClick={() =>
                setActiveIdx((prev) => (prev === idx ? null : idx))
              }
            >
              <div className="flex h-full flex-col items-center justify-center gap-3">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-300 sm:group-hover:scale-110"
                  style={{ backgroundColor: "#D97706" }}
                >
                  <Play className="h-5 w-5 text-white" fill="white" />
                </div>
                <p
                  className="text-center text-xs font-medium"
                  style={{ color: "#6B4A3E" }}
                >
                  ▶ Tap to play with sound
                </p>
                <p
                  className="mt-2 text-center text-sm font-semibold"
                  style={{ color: "#6B4A3E" }}
                >
                  {v.label}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div
          className="reveal mt-6 flex flex-wrap items-center justify-center gap-3 rounded-xl border px-4 py-3 text-xs font-medium sm:text-sm"
          style={{
            backgroundColor: "#FAF7F2",
            borderColor: "#E8DFD6",
            color: "#6B4A3E",
          }}
        >
          <span className="inline-flex items-center gap-1">
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
            4.9/5 from 10,000+ Verified Devotees
          </span>
          <span className="hidden sm:inline" style={{ color: "#E8DFD6" }}>
            |
          </span>
          <span className="inline-flex items-center gap-1">
            <Truck className="h-3.5 w-3.5" style={{ color: "#D97706" }} /> Free
            Shipping
          </span>
          <span className="hidden sm:inline" style={{ color: "#E8DFD6" }}>
            |
          </span>
          <span className="inline-flex items-center gap-1">
            <Wallet className="h-3.5 w-3.5" style={{ color: "#D97706" }} /> Cash
            on Delivery
          </span>
          <span className="hidden sm:inline" style={{ color: "#E8DFD6" }}>
            |
          </span>
          <span className="inline-flex items-center gap-1">
            <Landmark className="h-3.5 w-3.5" style={{ color: "#D97706" }} />{" "}
            Energized at Mandir
          </span>
        </div>

        <p
          className="reveal mt-4 text-center text-xs font-semibold"
          style={{ color: "#D97706" }}
        >
          <Flame className="mr-1 inline h-3.5 w-3.5" />
          Only 17 pieces left at this price · Selling out fast this Hanuman
          Jayanti
        </p>
      </div>
    </section>
  );
}
