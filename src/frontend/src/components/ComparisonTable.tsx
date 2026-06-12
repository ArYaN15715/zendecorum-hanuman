import { Button } from "@/components/ui/button";
import { Check, Star, X } from "lucide-react";

const rows = [
  {
    feature: "Crystal-Clear 3D Hanuman Ji Engraving",
    us: "Ultra HD Laser",
    them: "Blurry / Low Detail",
  },
  {
    feature: "Premium K9 Crystal Quality",
    us: "Imported Grade",
    them: "Cheap Glass",
  },
  {
    feature: "Solid Handcrafted Wooden Base",
    us: "Long-lasting",
    them: "Plastic Base",
  },
  {
    feature: "Warm Golden LED (not harsh white)",
    us: "Soothing Glow",
    them: "Cold Blue/White",
  },
  { feature: "Energized & Blessed Before Shipping", us: "Yes 🛕", them: "No" },
  {
    feature: "Safe Packaging (gift-ready)",
    us: "Premium Box",
    them: "Plain Wrap",
  },
  {
    feature: "Cash on Delivery + 7-Day Replacement",
    us: "Available",
    them: "Not Available",
  },
  {
    feature: "Trusted by 10,000+ Indian Devotees",
    us: "⭐ 4.9/5",
    them: "Unknown Sellers",
  },
];

export default function ComparisonTable() {
  return (
    <section
      id="compare"
      className="w-full py-12 sm:py-16"
      style={{ backgroundColor: "#FAF7F2" }}
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h2
          className="reveal mb-2 text-center text-xl font-bold leading-snug sm:text-2xl md:text-3xl"
          style={{ color: "#6B4A3E" }}
        >
          Why 10,000+ Devotees Chose ZenDecorum™ Over Others
        </h2>
        <p
          className="reveal mb-8 text-center text-sm font-medium"
          style={{ color: "#6B4A3E" }}
        >
          Not all crystal lamps are made equal. Here's the ZenDecorum
          difference.
        </p>

        <div
          className="reveal overflow-x-auto rounded-2xl border"
          style={{ borderColor: "#E8DFD6" }}
        >
          <table className="w-full min-w-[600px] text-sm">
            <thead>
              <tr style={{ backgroundColor: "#E8DFD6" }}>
                <th
                  className="px-4 py-3 text-left font-bold"
                  style={{ color: "#6B4A3E" }}
                >
                  Feature
                </th>
                <th
                  className="px-4 py-3 text-center font-bold"
                  style={{ backgroundColor: "#D97706", color: "#FAF7F2" }}
                >
                  ZenDecorum™ Hanuman ji
                </th>
                <th
                  className="px-4 py-3 text-center font-bold"
                  style={{ color: "#6B4A3E" }}
                >
                  Others / Local Sellers
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={r.feature}
                  className="border-t transition-all duration-200 active:bg-[#E8DFD6]/40 sm:hover:bg-[#E8DFD6]/40 active:shadow-sm sm:hover:shadow-sm"
                  style={{
                    borderColor: "#E8DFD6",
                    backgroundColor: i % 2 === 0 ? "#FAF7F2" : "#E8DFD6/20",
                  }}
                  data-ocid={`comparison.row.${i + 1}`}
                >
                  <td
                    className="px-4 py-3 font-medium"
                    style={{ color: "#6B4A3E" }}
                  >
                    {r.feature}
                  </td>
                  <td
                    className="px-4 py-3 text-center font-semibold"
                    style={{ color: "#6B4A3E" }}
                  >
                    <span className="inline-flex items-center gap-1">
                      <Check className="h-4 w-4" style={{ color: "#D97706" }} />{" "}
                      {r.us}
                    </span>
                  </td>
                  <td
                    className="px-4 py-3 text-center font-medium"
                    style={{ color: "#6B4A3E" }}
                  >
                    <span className="inline-flex items-center gap-1">
                      <X className="h-4 w-4" style={{ color: "#b91c1c" }} />{" "}
                      {r.them}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="reveal mt-8 flex justify-center">
          <Button
            asChild
            className="shimmer pulse-golden rounded-full px-8 py-3 text-sm font-bold text-white shadow-lg transition-all duration-200 active:scale-[0.98] sm:hover:scale-[1.02] active:shadow-xl sm:hover:shadow-xl"
            style={{ backgroundColor: "#D97706" }}
            data-ocid="comparison.order_button"
          >
            <a href="/" className="inline-flex items-center gap-2">
              <Star className="h-4 w-4" fill="white" />
              Bring Hanuman Ji Home — Order Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
