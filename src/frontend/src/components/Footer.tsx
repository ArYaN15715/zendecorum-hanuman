import { Landmark, RefreshCw, Truck, Wallet } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full border-t py-8"
      style={{ backgroundColor: "#FAF7F2", borderColor: "#E8DFD6" }}
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div
          className="mb-4 flex flex-wrap items-center justify-center gap-3 text-xs font-medium"
          style={{ color: "#6B4A3E" }}
        >
          <span className="inline-flex items-center gap-1">
            <Truck className="h-3.5 w-3.5" style={{ color: "#D97706" }} /> Free
            Shipping
          </span>
          <span className="inline-flex items-center gap-1">
            <Wallet className="h-3.5 w-3.5" style={{ color: "#D97706" }} /> COD
            Available
          </span>
          <span className="inline-flex items-center gap-1">
            <RefreshCw className="h-3.5 w-3.5" style={{ color: "#D97706" }} />{" "}
            7-Day Replacement
          </span>
          <span className="inline-flex items-center gap-1">
            <Landmark className="h-3.5 w-3.5" style={{ color: "#D97706" }} />{" "}
            Energized & Blessed
          </span>
        </div>
        <p
          className="text-center text-xs font-medium"
          style={{ color: "#6B4A3E" }}
        >
          © {year} ZenDecorum. All rights reserved.
        </p>
        <p
          className="mt-1 text-center text-xs font-semibold"
          style={{ color: "#6B4A3E" }}
        >
          Jai Hanuman! 🙏
        </p>
      </div>
    </footer>
  );
}
