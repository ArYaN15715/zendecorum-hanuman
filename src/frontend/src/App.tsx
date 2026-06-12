import BoxContents from "@/components/BoxContents";
import ComparisonTable from "@/components/ComparisonTable";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import FAQSection from "@/components/FAQSection";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";
import HowToUse from "@/components/HowToUse";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import VideoSlider from "@/components/VideoSlider";
import { useEffect } from "react";

function useRevealObserver() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      for (const el of els) el.classList.add("visible");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" },
    );
    for (const el of els) observer.observe(el);
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  useRevealObserver();
  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: "#E8DFD6" }}>
      <Navbar />
      <main>
        <VideoSlider />
        <HowToUse />
        <BoxContents />
        <ComparisonTable />
        <Testimonials />
        <FAQSection />
      </main>
      <Footer />
      <FloatingCTA />
      <ExitIntentPopup />
    </div>
  );
}
