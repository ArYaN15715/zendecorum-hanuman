import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Videos", href: "#videos" },
  { label: "How To Use", href: "#howtouse" },
  { label: "Box", href: "#box" },
  { label: "Compare", href: "#compare" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b transition-smooth ${
        scrolled ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm" : "bg-[#FAF7F2]"
      }`}
      style={{ borderColor: "#E8DFD6" }}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="/"
          className="text-xl font-bold tracking-tight"
          style={{ color: "#6B4A3E" }}
          data-ocid="navbar.brand_link"
        >
          ZenDecorum
        </a>

        <div className="hidden items-center gap-4 sm:flex">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium transition-colors duration-200 hover:opacity-80"
              style={{ color: "#6B4A3E" }}
            >
              {l.label}
            </a>
          ))}
          <Button
            asChild
            className="rounded-full px-5 py-2 text-sm font-semibold text-white shadow-md transition-all duration-200 active:scale-[0.98] sm:hover:scale-[1.02]"
            style={{ backgroundColor: "#D97706" }}
            data-ocid="navbar.order_button"
          >
            <a href="/">Order Now</a>
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full sm:hidden"
          style={{ backgroundColor: "#E8DFD6" }}
          onClick={() => setMenuOpen((v) => !v)}
          data-ocid="navbar.menu_toggle"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="h-5 w-5" style={{ color: "#6B4A3E" }} />
          ) : (
            <Menu className="h-5 w-5" style={{ color: "#6B4A3E" }} />
          )}
        </button>
      </div>

      {menuOpen && (
        <div
          className="border-t px-4 py-3 sm:hidden"
          style={{ backgroundColor: "#FAF7F2", borderColor: "#E8DFD6" }}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium transition-colors active:bg-[#E8DFD6]"
                style={{ color: "#6B4A3E" }}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <Button
              asChild
              className="mt-1 w-full rounded-full py-3 text-sm font-semibold text-white shadow-md"
              style={{ backgroundColor: "#D97706" }}
              data-ocid="navbar.mobile_order_button"
            >
              <a href="/">Order Now</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
