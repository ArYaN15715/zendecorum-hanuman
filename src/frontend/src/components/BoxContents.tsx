import { Check, Gem, Landmark, Lightbulb, Ruler } from "lucide-react";

const items = [
  "1× ZenDecorum™ Hanuman ji Crystal Sphere (3D laser-engraved K9 crystal)",
  "1× Handcrafted Wooden LED Base with built-in warm golden light",
  "1× Premium USB Power Cable",
  "1× ZenDecorum Authenticity & Blessing Card 🛕",
  "🎁 FREE Surprise Gift on orders above ₹1,499",
];

const specs = [
  { icon: Ruler, label: "Height", value: "8 cm (perfect tabletop size)" },
  { icon: Gem, label: "Material", value: "Premium K9 Crystal + Wood" },
  { icon: Lightbulb, label: "Power", value: "USB (works on power bank too)" },
  { icon: Landmark, label: "Blessed", value: "Energized at sacred mandir" },
];

export default function BoxContents() {
  return (
    <section
      id="box"
      className="w-full py-12 sm:py-16"
      style={{ backgroundColor: "#E8DFD6" }}
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h2
          className="reveal mb-2 text-center text-xl font-bold leading-snug sm:text-2xl md:text-3xl"
          style={{ color: "#6B4A3E" }}
        >
          What's Inside Your ZenDecorum™ Hanuman ji Box
        </h2>
        <p
          className="reveal mb-8 text-center text-sm font-medium"
          style={{ color: "#6B4A3E" }}
        >
          Every box is a divine experience — packed with care, blessed with
          devotion.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          <div
            className="reveal flex h-64 items-center justify-center rounded-2xl border-2 text-sm font-semibold transition-all duration-300 active:shadow-lg sm:hover:shadow-lg sm:h-auto"
            style={{
              backgroundColor: "#FAF7F2",
              borderColor: "#C9A227",
              color: "#6B4A3E",
            }}
          >
            Product Flat-lay Placeholder
          </div>

          <div className="reveal flex flex-col justify-center gap-3">
            {items.map((item, _idx) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-lg p-2 transition-all duration-200 active:bg-[#FAF7F2]/60 sm:hover:bg-[#FAF7F2]/60"
              >
                <Check
                  className="mt-0.5 h-5 w-5 flex-shrink-0"
                  style={{ color: "#D97706" }}
                />
                <p
                  className="text-sm font-medium leading-relaxed"
                  style={{ color: "#6B4A3E" }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {specs.map((s, idx) => (
            <div
              key={s.label}
              className="reveal group rounded-xl border p-4 text-center transition-all duration-300 active:scale-[0.98] active:shadow-md sm:hover:-translate-y-1 sm:hover:shadow-md"
              style={{
                backgroundColor: "#FAF7F2",
                borderColor: "#E8DFD6",
                transitionDelay: `${idx * 80}ms`,
              }}
              data-ocid={`specs.item.${idx + 1}`}
            >
              <s.icon
                className="mx-auto mb-2 h-5 w-5 transition-transform duration-300 group-active:scale-110 sm:group-hover:scale-110"
                style={{ color: "#D97706" }}
              />
              <p className="text-xs font-bold" style={{ color: "#6B4A3E" }}>
                {s.label}
              </p>
              <p
                className="mt-1 text-xs font-medium"
                style={{ color: "#6B4A3E" }}
              >
                {s.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
