import { Button } from "@/components/ui/button";
import { Landmark, RefreshCw, Truck, Wallet } from "lucide-react";

export default function FloatingCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t px-4 py-3 sm:hidden"
      style={{ backgroundColor: "#FAF7F2", borderColor: "#E8DFD6" }}
    >
      <Button
        asChild
        className="w-full rounded-full py-3 text-sm font-bold text-white shadow-lg pulse-golden transition-all duration-200 active:scale-[0.98] sm:hover:scale-[1.02]"
        style={{ backgroundColor: "#D97706" }}
        data-ocid="floatingcta.order_button"
      >
        <a href="/">🪔 Order Now — ₹699 (46% OFF)</a>
      </Button>
      <div
        className="mt-2 flex flex-wrap items-center justify-center gap-2 text-[10px] font-medium"
        style={{ color: "#6B4A3E" }}
      >
        <span className="inline-flex items-center gap-0.5">
          <Truck className="h-3 w-3" style={{ color: "#D97706" }} /> Free
          Shipping
        </span>
        <span className="inline-flex items-center gap-0.5">
          <Wallet className="h-3 w-3" style={{ color: "#D97706" }} /> COD
        </span>
        <span className="inline-flex items-center gap-0.5">
          <RefreshCw className="h-3 w-3" style={{ color: "#D97706" }} /> 7-Day
        </span>
        <span className="inline-flex items-center gap-0.5">
          <Landmark className="h-3 w-3" style={{ color: "#D97706" }} /> Blessed
        </span>
      </div>
    </div>
  );
}
