"use client";

import LoadingScreen from "@/components/LoadingScreen";
import StickyNav from "@/components/StickyNav";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import InfographicSection from "@/components/InfographicSection";
import ProductFeature from "@/components/ProductFeature";
import Timeline from "@/components/Timeline";
import Accolades from "@/components/Accolades";
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
        <ProductFeature />
        <InfographicSection block="process" />
        <InfographicSection block="mashbill" />
        <InfographicSection block="flavor" />
        <InfographicSection block="batch" />
        <Accolades />
        <Timeline />
      </main>
      <Footer />
    </>
  );
}
