"use client";

import LoadingScreen from "@/components/LoadingScreen";
import StickyNav from "@/components/StickyNav";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import ProductFeature from "@/components/ProductFeature";
import Craftsmanship from "@/components/Craftsmanship";
import Heritage from "@/components/Heritage";
import Accolades from "@/components/Accolades";
import PressQuotes from "@/components/PressQuotes";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <StickyNav />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <BrandStory />
        <ProductFeature />
        <Craftsmanship />
        <Heritage />
        <Accolades />
        <PressQuotes />
        <VideoSection />
      </main>
      <Footer />
    </>
  );
}
