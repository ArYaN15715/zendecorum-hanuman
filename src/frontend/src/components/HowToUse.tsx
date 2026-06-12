import { ImageIcon, Package, Plug, TreePine } from "lucide-react";

const steps = [
  {
    icon: Package,
    num: "01",
    title: "Unbox with Devotion",
    desc: "Carefully unbox your ZenDecorum™ Hanuman ji crystal lamp from its premium gift packaging.",
  },
  {
    icon: TreePine,
    num: "02",
    title: "Place on Wooden Base",
    desc: "Set the engraved K9 crystal sphere gently on the handcrafted wooden LED base.",
  },
  {
    icon: Plug,
    num: "03",
    title: "Plug & Pray",
    desc: "Connect the USB cable to any charger, power bank, or laptop — watch Hanuman Ji's divine form light up your space with a warm golden glow.",
  },
];

export default function HowToUse() {
  return (
    <section
      id="howtouse"
      className="w-full py-12 sm:py-16"
      style={{ backgroundColor: "#FAF7F2" }}
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h2
          className="reveal mb-8 text-center text-xl font-bold leading-snug sm:text-2xl md:text-3xl"
          style={{ color: "#6B4A3E" }}
        >
          Bring Bajrangbali's Blessings Home — In Just 3 Easy Steps
        </h2>

        <div className="grid gap-6 sm:grid-cols-3">
          {steps.map((s, idx) => (
            <div
              key={s.title}
              className="reveal group rounded-2xl border p-6 text-center transition-all duration-300 active:scale-[0.98] sm:hover:-translate-y-1 sm:hover:shadow-lg"
              style={{
                backgroundColor: "#E8DFD6",
                borderColor: "#E8DFD6",
                boxShadow: "0 4px 14px rgba(107,74,62,0.08)",
                transitionDelay: `${idx * 100}ms`,
              }}
              data-ocid={`howtouse.step.${idx + 1}`}
            >
              <div
                className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-300 group-active:scale-110 sm:group-hover:scale-110"
                style={{ backgroundColor: "#D97706" }}
              >
                <s.icon className="h-6 w-6 text-white" />
              </div>
              <p
                className="mb-1 text-sm font-bold"
                style={{ color: "#D97706" }}
              >
                Step {s.num}
              </p>
              <h3
                className="mb-2 text-base font-bold"
                style={{ color: "#6B4A3E" }}
              >
                {s.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#6B4A3E" }}
              >
                {s.desc}
              </p>

              {/* Inline image placeholder */}
              <div
                className="mx-auto mt-4 flex h-28 w-full max-w-[220px] flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed transition-all duration-300 active:shadow-md sm:hover:shadow-md sm:h-32 sm:max-w-[240px]"
                style={{
                  backgroundColor: "rgba(107,74,62,0.06)",
                  borderColor: "rgba(107,74,62,0.30)",
                  color: "#6B4A3E",
                }}
              >
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#C9A227" }}
                >
                  <ImageIcon className="h-4 w-4 text-white" />
                </div>
                <p className="text-xs font-semibold">Your image here</p>
              </div>
            </div>
          ))}
        </div>

        <p
          className="reveal mt-8 text-center text-sm font-medium"
          style={{ color: "#6B4A3E" }}
        >
          Works on USB power — perfect for your mandir, bedside, study table,
          office desk, or as a divine gift.
        </p>
      </div>
    </section>
  );
}
