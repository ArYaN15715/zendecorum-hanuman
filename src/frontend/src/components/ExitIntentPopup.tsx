import { Button } from "@/components/ui/button";
import { Landmark, RefreshCw, Truck, Wallet, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("zendecorum_exit_shown") === "1") return;

    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    let scrollTrigger = false;
    let timeTrigger = false;

    const onScroll = () => {
      if (scrollTrigger) return;
      const pct =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (pct > 0.4 && !visible) {
        scrollTrigger = true;
        setVisible(true);
        sessionStorage.setItem("zendecorum_exit_shown", "1");
      }
    };

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10 && !visible && !isTouch) {
        setVisible(true);
        sessionStorage.setItem("zendecorum_exit_shown", "1");
      }
    };

    const timer = setTimeout(() => {
      if (!timeTrigger && !visible && isTouch) {
        timeTrigger = true;
        setVisible(true);
        sessionStorage.setItem("zendecorum_exit_shown", "1");
      }
    }, 25000);

    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      style={{
        backgroundColor: "rgba(107,74,62,0.45)",
        backdropFilter: "blur(6px)",
      }}
      data-ocid="exitintent.dialog"
    >
      <div
        className="relative w-full max-w-md rounded-2xl border p-6 fade-in-up"
        style={{ backgroundColor: "#FAF7F2", borderColor: "#E8DFD6" }}
      >
        <button
          type="button"
          className="absolute right-3 top-3 rounded-full p-1 transition-colors active:bg-[#E8DFD6] sm:hover:bg-[#E8DFD6]"
          onClick={() => setVisible(false)}
          data-ocid="exitintent.close_button"
          aria-label="Close"
        >
          <X className="h-5 w-5" style={{ color: "#6B4A3E" }} />
        </button>

        <p className="mb-1 text-lg font-bold" style={{ color: "#6B4A3E" }}>
          ⏰ Wait! Don't miss out.
        </p>
        <p className="mb-4 text-sm font-medium" style={{ color: "#6B4A3E" }}>
          🎁 Get ₹100 OFF on your first ZenDecorum™ Hanuman ji
        </p>

        <div
          className="mb-4 inline-block rounded-lg border px-4 py-2 text-sm font-bold tracking-widest"
          style={{
            backgroundColor: "#E8DFD6",
            borderColor: "#C9A227",
            color: "#6B4A3E",
          }}
        >
          BLESSINGS100
        </div>

        <div
          className="mb-5 flex flex-wrap items-center gap-2 text-xs font-medium"
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

        <Button
          asChild
          className="w-full rounded-full py-3 text-sm font-bold text-white shadow-lg transition-all duration-200 active:scale-[0.98] sm:hover:scale-[1.02]"
          style={{ backgroundColor: "#D97706" }}
          data-ocid="exitintent.claim_button"
        >
          <a href="/">Claim Offer — Order Now</a>
        </Button>
      </div>
    </div>
  );
}
