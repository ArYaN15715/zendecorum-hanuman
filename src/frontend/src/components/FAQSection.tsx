import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Is the ZenDecorum™ Hanuman ji crystal lamp real K9 crystal?",
    a: "Yes, 100%. Each lamp is crafted from premium imported K9 crystal with advanced 3D laser engraving — ensuring crystal-clear divine detailing that lasts a lifetime.",
  },
  {
    q: "Will the engraving fade or wear off over time?",
    a: "Never. The image of Hanuman Ji is laser-engraved inside the crystal sphere, not printed on the surface. It is 100% permanent and will not fade, scratch, or peel.",
  },
  {
    q: "Does it run on batteries? How is it powered?",
    a: "No batteries needed. It runs on USB power — plug it into any mobile charger, power bank, or laptop. Perfect for portable use anywhere in your home.",
  },
  {
    q: "Does the lamp get hot if I keep it on for long hours?",
    a: "Not at all. It uses a cool, energy-efficient LED, so it stays completely safe even during long puja sessions or overnight use.",
  },
  {
    q: "Is it a good gift for festivals or special occasions?",
    a: "Absolutely. ZenDecorum™ Hanuman ji is the perfect divine gift for Hanuman Jayanti, Diwali, Tuesdays (Mangalwar), birthdays, housewarmings, weddings, and corporate gifting. It comes in premium gift-ready packaging.",
  },
  {
    q: "Is Cash on Delivery (COD) available?",
    a: "Yes! We offer Cash on Delivery across India. Pay only when your divine lamp safely reaches your doorstep.",
  },
  {
    q: "How long will delivery take?",
    a: "Orders are dispatched within 24-48 hours and delivered Pan-India within 4–7 working days. You'll receive a tracking link via SMS & WhatsApp.",
  },
  {
    q: "What if my product arrives damaged?",
    a: "We offer a hassle-free 7-day replacement for any damage or defect. Just share an unboxing video and we'll arrange a free replacement immediately.",
  },
  {
    q: "Is the lamp blessed/energized?",
    a: "Yes 🛕. Every ZenDecorum™ Hanuman ji is energized with sacred mantras before being shipped — so when it enters your home, it carries divine blessings with it.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faqs"
      className="w-full py-12 sm:py-16"
      style={{ backgroundColor: "#FAF7F2" }}
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h2
          className="reveal mb-2 text-center text-xl font-bold leading-snug sm:text-2xl md:text-3xl"
          style={{ color: "#6B4A3E" }}
        >
          Frequently Asked Questions
        </h2>
        <p
          className="reveal mb-8 text-center text-sm font-medium"
          style={{ color: "#6B4A3E" }}
        >
          Everything you need to know before bringing Hanuman Ji home.
        </p>

        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="reveal rounded-xl border transition-all duration-300 hover:shadow-sm"
                style={{
                  backgroundColor: isOpen ? "#E8DFD6" : "#FAF7F2",
                  borderColor: "#E8DFD6",
                  transitionDelay: `${i * 40}ms`,
                }}
                data-ocid={`faq.item.${i + 1}`}
              >
                <button
                  type="button"
                  className="flex w-full min-h-[48px] items-center justify-between px-5 py-4 text-left transition-colors duration-200 active:opacity-80"
                  onClick={() => setOpen(isOpen ? null : i)}
                  data-ocid={`faq.toggle.${i + 1}`}
                >
                  <span
                    className="text-sm font-semibold sm:text-base"
                    style={{ color: isOpen ? "#D97706" : "#6B4A3E" }}
                  >
                    {f.q}
                  </span>
                  <ChevronDown
                    className="ml-3 h-5 w-5 flex-shrink-0 transition-transform duration-300"
                    style={{
                      color: isOpen ? "#D97706" : "#6B4A3E",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? 300 : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p
                    className="px-5 pb-4 text-sm leading-relaxed"
                    style={{ color: "#6B4A3E" }}
                  >
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
