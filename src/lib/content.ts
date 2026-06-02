export const siteConfig = {
  brand: {
    name: "Elijah Craig",
    tagline: "The Father of Bourbon",
    logo: "/assets/logos/elijah-craig-logo-white.svg",
    logoColor: "/assets/logos/elijah-craig-logo.svg",
    url: "https://elijahcraig.com",
  },
  publisher: {
    name: "Whisky Advocate",
    logo: "/assets/logos/WA_WHITE-removebg-preview.png",
    logoColor: "/assets/logos/WA_BLUE-removebg-preview.png",
    url: "https://whiskyadvocate.com",
    parent: "M. Shanken Communications",
  },
  hero: {
    imageSrc: "/assets/hero/barrel-proof-rye-hero-desktop.jpg",
    mobileImageSrc: "/assets/hero/barrel-proof-rye-hero-mobile.jpg",
    headline: "Barrel Proof Rye",
    subheadline: "Whisky Advocate's 2025 Whiskey of the Year",
  },
  brandStory: {
    heading: "About Elijah Craig",
    lead: "One of the most award-winning families of premium Bourbons and Ryes — now with its inaugural Barrel Proof Rye crowned Whisky Advocate's reigning Whiskey of the Year.",
    body: "Known as \"The Father of Bourbon,\" Rev. Elijah Craig established his distillery in 1789 on the banks of Elkhorn Creek in Georgetown, Kentucky — pioneering the charred oak barrel aging that defines American whiskey today. Produced by Heaven Hill Distillery with the same hand-selected barrel craftsmanship that began in 1986.",
    highlights: [
      { label: "Whiskey of the Year", value: "2025" },
      { label: "Established", value: "1789" },
      { label: "Distillery", value: "Heaven Hill" },
      { label: "Release", value: "Batch A925" },
    ],
  },
  infographic: {
    heading: "Batch A925",
    subheading: "The Inaugural Barrel Proof Rye",
    intro:
      "Elijah Craig Barrel Proof Batch A925 is the inaugural release of Elijah Craig's Barrel Proof Rye — the first barrel proof Kentucky straight rye in the portfolio, bottled uncut and non-chill filtered to preserve every note of flavor and natural cask character.",
    batchNote:
      "The name uses Elijah Craig's signature batching code: \"A\" indicates the first of three yearly releases, \"9\" denotes the release month (September), and \"25\" specifies the year (2025).",
    batchDecode: {
      letter: { symbol: "A", title: "Release", meaning: "First of three yearly releases" },
      month: { symbol: "9", title: "Month", meaning: "September" },
      year: { symbol: "25", title: "Year", meaning: "2025" },
    },
    process: [
      {
        step: "01",
        title: "The Recipe",
        body: "Elijah Craig's \"barely legal\" rye mash bill — 51% rye, 35% corn, and 14% malted barley.",
      },
      {
        step: "02",
        title: "Aging",
        body: "Exactly 12 years and 3 months in charred oak barrels before hand selection.",
      },
      {
        step: "03",
        title: "Bottling",
        body: "Pulled straight from the barrel — uncut and non-chill filtered to preserve natural cask oils.",
      },
      {
        step: "04",
        title: "Proof",
        body: "Bottled at 108 proof (54% ABV), full strength and unadulterated.",
      },
    ],
    mashBill: [
      { grain: "Rye", percent: 51, color: "#7A303F" },
      { grain: "Corn", percent: 35, color: "#D4A547" },
      { grain: "Malted Barley", percent: 14, color: "#C9A96E" },
    ],
    mashBillNote: "A high-corn rye recipe that leans remarkably sweet — approachable for a barrel proof rye.",
    flavorIntro:
      "Thanks to the mash bill and long 12-year maturation, A925 is soft, sweet, and inviting — complex without overwhelming the palate.",
    releases: ["January", "May", "September"],
  },
  product: {
    id: "barrel-proof-rye",
    name: "Elijah Craig Barrel Proof Rye",
    shortName: "Barrel Proof Rye",
    batch: "Batch A925",
    tagline: "The First-Ever Barrel Proof Kentucky Straight Rye Whiskey",
    description:
      "The inaugural Barrel Proof Rye from Elijah Craig — uncut, non-chill filtered, and bottled at full cask strength after 12 years and 3 months in charred oak.",
    stats: [
      { label: "Proof", value: "108" },
      { label: "Age", value: "12 Yrs, 3 Mo" },
      { label: "ABV", value: "54%" },
      { label: "Batch", value: "A925" },
    ],
    mashBill: "51% Rye · 35% Corn · 14% Malted Barley",
    tastingNotes: {
      nose: "Soft and buttery, with brown sugar, vanilla, and sweet old oak.",
      palate: "Honey, toasted sugar, and baking spices over subtle white pepper and rye spice.",
      finish: "Long, warm, and lingering — sweet oak and baking spice in balance.",
    },
    body: "Rich, deep copper-hued liquid with a warm, satisfying close",
    imageSrc: "/assets/products/barrel-proof-rye-bottle.png",
    ambientImageSrc: "/assets/hero/barrel-proof-rye-hero-desktop.jpg",
    ctaText: "Buy Now",
    ctaUrl: "https://elijahcraig.com/buy-now?p=barrel-proof",
    secondaryCtaText: "Explore the Rye",
    secondaryCtaUrl: "https://elijahcraig.com/introducing-elijah-craig-barrel-proof-rye",
    serving: "Kentucky Straight Rye Whiskey · Bardstown, KY",
    quote: {
      text: "Our signature Elijah Craig spice and complexity shine through beautifully in our inaugural Barrel Proof Rye, in an approachable way that makes it ideal for barrel proof first-timers and experienced palates alike.",
      source: "Conor O'Driscoll, Master Distiller, Elijah Craig Bourbon",
    },
  },
  timeline: {
    heading: "Craftsmanship & Legacy",
    milestones: [
      {
        year: "1789",
        label: "The Father of Bourbon",
        body: "Rev. Elijah Craig pioneers charred oak barrel aging in Georgetown, Kentucky.",
      },
      {
        year: "1986",
        label: "Small Batch Begins",
        body: "Heaven Hill Master Distillers hand-select barrels — long before \"small batch\" existed.",
      },
      {
        year: "2025",
        label: "Whiskey of the Year",
        body: "Barrel Proof Rye becomes the first rye ever named Whisky Advocate's Whiskey of the Year.",
      },
    ],
  },
  accolades: [
    {
      quote: "#1 Top 20",
      source: "Whisky Advocate",
      detail: "Whiskey of the Year 2025",
    },
    {
      quote: "First Rye Whiskey of the Year",
      source: "Whisky Advocate",
      detail: "Historic category first",
    },
    {
      quote: "Best Small Batch",
      source: "SF World Spirits Competition",
      detail: "Elijah Craig family",
    },
    {
      quote: "Best Single Barrel",
      source: "SF World Spirits Competition",
      detail: "Aged 11+ years",
    },
  ],
  press: {
    heading: "Recognition at the Highest Level",
    intro:
      "Elijah Craig Barrel Proof Rye has been named Whisky Advocate's 2025 Whiskey of the Year, topping the publication's coveted Top 20 list — the first time a rye whiskey has earned the highest honor.",
    quotes: [
      {
        text: "To have Elijah Craig Barrel Proof Rye recognized as Whisky of the Year during our 90th anniversary year is profoundly meaningful. For nine decades, our family has remained committed to elevating American Whiskey with patience, integrity, and a deep respect for tradition.",
        source: "Max L. Shapira, Executive Chairman, Heaven Hill Brands",
      },
      {
        text: "We are honored to see Elijah Craig's first-ever Barrel Proof Rye recognized at the highest level. To be chosen as Whisky of the Year is a proud milestone for our entire team and we thank Whisky Advocate for the recognition and the value they provide to all whiskey fans.",
        source: "Max Stefka, AVP Global Whiskey Brands, Heaven Hill",
      },
    ],
  },
  video: {
    enabled: true,
    heading: "Whiskey of the Year",
    subheading:
      "David Fleming, Executive Editor, on Elijah Craig Barrel Proof Rye — Whisky Advocate's 2025 Whiskey of the Year",
    mediaId: "FsApcH5G",
    playerId: "w6TeWEoR",
    embedUrl: "",
    iframeTitle: "Elijah Craig Barrel Proof Rye — Whisky Advocate Whiskey of the Year",
  },
  cta: {
    heading: "Experience Barrel Proof Rye",
    body: "Elijah Craig Barrel Proof Rye is available nationwide in 750 ml bottles. For more information, please visit elijahcraig.com.",
    buttonText: "Buy Now",
    buttonUrl: "https://elijahcraig.com/buy-now?p=barrel-proof",
    secondaryButtonText: "Visit Elijah Craig",
    secondaryButtonUrl: "https://elijahcraig.com",
  },
  seo: {
    title: "Elijah Craig Barrel Proof Rye — Whiskey of the Year 2025 | Whisky Advocate",
    description:
      "Elijah Craig is one of the most award-winning families of premium Bourbons and Ryes. Its inaugural Barrel Proof Rye release (2025) is Whisky Advocate's reigning Whiskey of the Year. Presented by Whisky Advocate.",
    ogImage: "/assets/hero/barrel-proof-rye-hero-desktop.jpg",
  },
};

export type SiteConfig = typeof siteConfig;
export type Accolade = (typeof siteConfig.accolades)[number];
