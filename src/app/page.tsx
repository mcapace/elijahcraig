"use client";

import LoadingScreen from "@/components/LoadingScreen";
import StickyNav from "@/components/StickyNav";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import WhiskeyInfographic from "@/components/WhiskeyInfographic";
import ProductFeature from "@/components/ProductFeature";
import Timeline from "@/components/Timeline";
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
        <VideoSection />
        <BrandStory />
        <WhiskeyInfographic />
        <ProductFeature />
        <Timeline />
        <Accolades />
        <PressQuotes />
      </main>
      <Footer />
    </>
  );
}
