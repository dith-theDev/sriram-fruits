"use client";

import { Logo } from "@/components/Logo";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* TopAppBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#f5ebd9]/95 backdrop-blur-md border-b border-[#b8956a]/20">
        <div className="flex justify-between items-center max-w-container-max mx-auto px-gutter h-20">
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-lg">
            <a className="font-label-md text-label-md text-primary font-bold border-b-2 border-primary" href="#heritage">HERITAGE</a>
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#cultivation">CULTIVATION</a>
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#grading">GRADING</a>
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#logistics">LOGISTICS</a>
            <a
              href="tel:+918897635459"
              className="px-md py-xs bg-primary-container text-on-primary-container font-label-md text-label-md rounded-lg hover:scale-95 transition-transform active:opacity-80 flex items-center gap-xs"
            >
              <span className="material-symbols-outlined text-[18px] leading-none">call</span>
              CALL NOW
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[32px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#f5ebd9] border-t border-[#b8956a]/20">
            <div className="flex flex-col px-gutter py-md space-y-sm">
              <a
                className="font-label-md text-label-md text-primary font-bold py-sm border-b border-outline-variant/30"
                href="#heritage"
                onClick={() => setMobileMenuOpen(false)}
              >
                HERITAGE
              </a>
              <a
                className="font-label-md text-label-md text-on-surface-variant py-sm border-b border-outline-variant/30"
                href="#cultivation"
                onClick={() => setMobileMenuOpen(false)}
              >
                CULTIVATION
              </a>
              <a
                className="font-label-md text-label-md text-on-surface-variant py-sm border-b border-outline-variant/30"
                href="#grading"
                onClick={() => setMobileMenuOpen(false)}
              >
                GRADING
              </a>
              <a
                className="font-label-md text-label-md text-on-surface-variant py-sm border-b border-outline-variant/30"
                href="#logistics"
                onClick={() => setMobileMenuOpen(false)}
              >
                LOGISTICS
              </a>
              <a
                href="tel:+918897635459"
                className="mt-sm px-md py-md bg-primary-container text-on-primary-container font-label-md text-label-md rounded-lg flex items-center justify-center gap-xs"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="material-symbols-outlined text-[18px] leading-none">call</span>
                CALL NOW
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="heritage">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/50 to-transparent z-10"></div>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{backgroundImage: "url('/images/hero-bg.jpg')"}}
          ></div>
        </div>
        <div className="relative z-20 max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-lg items-center">
          <AnimatedSection animation="slide-up" delay={100}>
            <div className="space-y-md">
              <div className="inline-flex items-center gap-xs px-sm py-1.5 bg-tertiary/10 text-tertiary rounded-full border border-tertiary/20">
                <span className="material-symbols-outlined text-[18px] leading-none">verified</span>
                <span className="font-label-md text-label-md leading-none">TIRUPATI&apos;S FINEST HARVEST</span>
              </div>
              <h1 className="font-display-lg text-display-lg text-primary leading-tight font-extrabold drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)]">
                The Sacred Ruby of <br/><span className="italic font-normal">Sriram Fruits.</span>
              </h1>
              <p className="text-[18px] leading-[28px] text-on-surface-variant font-bold max-w-2xl font-sans drop-shadow-[0_2px_8px_rgba(255,255,255,0.9)]">
                Second-generation pomegranate specialists with 25+ years of expertise. Unlike 90% of fruit sellers who rely on commission-based agents, we handle everything directly from field to your doorstep.
              </p>
              <div className="flex flex-wrap gap-xs pt-sm pb-base">
                <span className="inline-flex items-center gap-xs px-sm py-1.5 bg-green-50 text-green-700 rounded-full border border-green-200 text-[13px] font-semibold">
                  <span className="material-symbols-outlined text-[16px] leading-none">eco</span>
                  100% Chemical-Free
                </span>
                <span className="inline-flex items-center gap-xs px-sm py-1.5 bg-green-50 text-green-700 rounded-full border border-green-200 text-[13px] font-semibold">
                  <span className="material-symbols-outlined text-[16px] leading-none">water_drop_off</span>
                  Zero Preservatives
                </span>
                <span className="inline-flex items-center gap-xs px-sm py-1.5 bg-green-50 text-green-700 rounded-full border border-green-200 text-[13px] font-semibold">
                  <span className="material-symbols-outlined text-[16px] leading-none">local_shipping</span>
                  Daily Fresh Harvest
                </span>
              </div>
              <div className="flex gap-md pt-base">
                <button className="bg-primary-container text-white px-lg py-md rounded-xl font-label-md text-label-md hover:opacity-90 transition-opacity">EXPLORE OUR HARVEST</button>
                <button className="border-2 border-tertiary bg-white text-tertiary px-lg py-md rounded-xl font-label-md text-label-md font-bold hover:bg-tertiary hover:text-white transition-all shadow-lg">OUR LEGACY</button>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="scale" delay={300}>
            <div className="hidden md:block relative">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="relative bg-white p-base rounded-full shadow-2xl organic-glow animate-floating-hero">
                <img
                  className="rounded-full aspect-square object-cover w-full h-[500px]"
                  src="/images/pomegranate-hero.jpg"
                  alt="Premium pomegranate"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why We're Different - Direct Field Sourcing Banner */}
      <section className="py-lg bg-gradient-to-br from-[#6B8E23] via-[#7BA428] to-[#556B2F] relative overflow-hidden">
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.08)_0%,transparent_50%)]"></div>

        <AnimatedSection animation="fade" delay={100}>
          <div className="max-w-container-max mx-auto px-gutter relative z-10">
            <div className="bg-gradient-to-br from-[#556B2F]/40 to-[#3D5016]/40 backdrop-blur-md rounded-2xl p-lg border border-[#9ACD32]/30 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-md items-center">
                <div className="md:col-span-8 space-y-sm">
                  <div className="flex items-center gap-xs mb-xs">
                    <span className="material-symbols-outlined text-lime-100 text-[28px]">verified</span>
                    <span className="text-lime-100 font-label-md text-label-md tracking-wider">THE SRIRAM DIFFERENCE</span>
                  </div>
                  <h3 className="text-white font-display-md text-[32px] leading-tight drop-shadow-md">
                    No Middlemen. No Agents. <span className="italic font-normal text-lime-100">Just Pure Quality.</span>
                  </h3>
                  <p className="text-lime-50 font-body-md text-[17px] leading-[26px] max-w-3xl drop-shadow-sm">
                    While 90% of fruit sellers rely on commission-based agents who mix quality and harvest in bulk, we personally visit every field. Our team inspects, harvests, and packs directly at source - ensuring zero compromise on quality, size, or freshness.
                  </p>
                </div>
                <div className="md:col-span-4 flex justify-center">
                  <div className="bg-white/20 backdrop-blur rounded-xl p-md text-center border border-[#9ACD32]/40 shadow-lg">
                    <div className="text-[48px] font-bold text-white leading-none mb-xs drop-shadow-md">25+</div>
                    <div className="text-lime-100 font-label-md text-[14px] leading-tight mb-xs font-semibold">Years Experience</div>
                    <div className="text-lime-50 text-[13px] leading-tight">Second Generation<br/>Pomegranate Specialists</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* The Heart of Cultivation - Bento Grid */}
      <section className="py-xl bg-surface-container-low" id="cultivation">
        <div className="max-w-container-max mx-auto px-gutter">
          <AnimatedSection animation="fade" delay={100}>
            <div className="text-center mb-lg">
              <h2 className="font-headline-md text-headline-md text-primary mb-xs">The Heart of Cultivation</h2>
              <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
              <p className="mt-md text-on-surface-variant max-w-3xl mx-auto font-body-md">We visit pomegranate fields directly - no local agents, no quality mixing. Our team harvests and packages at source with premium cotton boxes and protective paper cuttings. 365-day continuous supply chain ensures year-round availability.</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-md h-auto md:h-[600px]">
            {/* Main Feature */}
            <AnimatedSection animation="slide-right" delay={200} className="md:col-span-7">
              <div className="relative group overflow-hidden rounded-xl bg-white border border-outline-variant/30 shadow-sm transition-all hover:shadow-xl min-h-[400px] md:min-h-0 h-full">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{backgroundImage: "url('/images/orchard-main.jpg')"}}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 p-lg w-full">
                  <span className="text-yellow-300 font-label-md font-bold tracking-wide drop-shadow-lg">01. SUSTAINABLE FARMING</span>
                  <h3 className="text-white font-headline-sm font-bold mt-xs drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">Precision Orchard Management</h3>
                  <p className="text-white font-body-md font-semibold mt-sm max-w-xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">Using state-of-the-art drip irrigation and organic nutrient management to yield the densest nutrient profiles.</p>
                </div>
              </div>
            </AnimatedSection>
            {/* Secondary Features Stacked */}
            <div className="md:col-span-5 grid grid-rows-2 gap-md">
              <AnimatedSection animation="slide-left" delay={300}>
                <div className="relative group overflow-hidden rounded-xl bg-white border border-outline-variant/30 shadow-sm transition-all hover:shadow-xl min-h-[250px] md:min-h-0 h-full">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{backgroundImage: "url('/images/soil-analysis.jpg')"}}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
                  <div className="absolute inset-y-0 left-0 p-md flex flex-col justify-center max-w-[240px]">
                    <h4 className="text-white font-headline-sm text-[20px] font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">Direct Field Inspection</h4>
                    <p className="text-white font-caption font-semibold mt-xs drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">Our team personally visits every orchard. No agents, no quality mixing.</p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-left" delay={400}>
                <div className="relative group overflow-hidden rounded-xl bg-white border border-outline-variant/30 shadow-sm transition-all hover:shadow-xl min-h-[250px] md:min-h-0 h-full">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{backgroundImage: "url('/images/hand-pruned.jpg')"}}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
                  <div className="absolute inset-y-0 left-0 p-md flex flex-col justify-center max-w-[240px]">
                    <h4 className="text-white font-headline-sm text-[20px] font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">Hand-Pruned</h4>
                    <p className="text-white font-caption font-semibold mt-xs drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">Each tree is manually tended by third-generation farmers.</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Trust Section */}
      <section className="py-xl bg-surface" id="quality">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
            <AnimatedSection animation="slide-right" delay={100}>
              <div className="space-y-md">
                <div className="inline-flex items-center gap-xs px-sm py-1.5 bg-primary/5 text-primary rounded-full">
                  <span className="material-symbols-outlined text-[18px] leading-none">stars</span>
                  <span className="font-label-md text-label-md leading-none">THE BENCHMARK OF EXCELLENCE</span>
                </div>
                <h2 className="font-display-lg text-display-lg text-primary leading-tight">Rooted in Tradition, <br/><span className="italic font-normal">Sustained by Trust.</span></h2>
                <p className="text-[18px] leading-[28px] text-on-surface-variant font-sans">Our commitment goes beyond the harvest. We foster a sustainable ecosystem where every pomegranate reflects two decades of expertise and a shared prosperity with our local farming community.</p>
                <div className="pt-base">
                  <a className="inline-flex items-center gap-xs font-label-md text-primary border-b border-primary pb-1 hover:gap-md transition-all" href="#heritage">
                    LEARN ABOUT OUR STANDARDS
                    <span className="material-symbols-outlined">arrow_right_alt</span>
                  </a>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-left" delay={200}>
              <div className="grid grid-cols-2 gap-md">
              <div className="p-lg bg-surface-container-low rounded-xl border border-outline-variant/30 hover:border-primary/30 transition-colors group">
                <div className="text-primary mb-md">
                  <span className="material-symbols-outlined text-[32px] group-hover:scale-110 transition-transform block">history</span>
                </div>
                <div className="text-headline-sm text-primary font-bold leading-none">25+ Years</div>
                <div className="text-on-surface-variant font-label-md mt-xs normal-case">Second Generation Business</div>
              </div>
              <div className="p-lg bg-surface-container-low rounded-xl border border-outline-variant/30 hover:border-primary/30 transition-colors group">
                <div className="text-primary mb-md">
                  <span className="material-symbols-outlined text-[32px] group-hover:scale-110 transition-transform block">groups</span>
                </div>
                <div className="text-headline-sm text-primary font-bold leading-none">5000+</div>
                <div className="text-on-surface-variant font-label-md mt-xs normal-case">Happy Customers</div>
              </div>
              <div className="p-lg bg-surface-container-low rounded-xl border border-outline-variant/30 hover:border-primary/30 transition-colors group">
                <div className="text-primary mb-md">
                  <span className="material-symbols-outlined text-[32px] group-hover:scale-110 transition-transform block">eco</span>
                </div>
                <div className="text-headline-sm text-primary font-bold leading-none">500+</div>
                <div className="text-on-surface-variant font-label-md mt-xs normal-case">Local Farmers Supported</div>
              </div>
              <div className="p-lg bg-surface-container-low rounded-xl border border-outline-variant/30 hover:border-primary/30 transition-colors group">
                <div className="text-primary mb-md">
                  <span className="material-symbols-outlined text-[32px] group-hover:scale-110 transition-transform block">local_shipping</span>
                </div>
                <div className="text-headline-sm text-primary font-bold leading-none">24-Hour</div>
                <div className="text-on-surface-variant font-label-md mt-xs normal-case">Express Delivery</div>
              </div>
              <div className="col-span-2 p-lg bg-primary text-white rounded-xl shadow-lg flex items-center justify-between group">
                <div>
                  <div className="flex items-center gap-xs">
                    <span className="material-symbols-outlined leading-none">support_agent</span>
                    <span className="text-headline-sm font-bold leading-none">24/7 Dedicated Support</span>
                  </div>
                  <p className="text-primary-fixed text-caption mt-sm">Real-time assistance for all wholesale & export partners.</p>
                </div>
                <span className="material-symbols-outlined text-[32px] opacity-50 group-hover:opacity-100 transition-opacity">trending_up</span>
              </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Premium Grading Section */}
      <section className="py-xl" id="grading">
        <div className="max-w-container-max mx-auto px-gutter">
          <AnimatedSection animation="fade" delay={100}>
            <div className="flex flex-col md:flex-row justify-between items-end mb-lg gap-md">
              <div className="max-w-3xl">
                <h2 className="font-headline-md text-headline-md text-primary">Master Grading Standards</h2>
                <p className="text-[18px] leading-[28px] text-on-surface-variant mt-sm font-sans">We categorize our harvest into three elite tiers, ensuring that every export and domestic bulk order meets the highest standards of uniform weight, color, and brix level.</p>
              </div>
              <div className="flex gap-xs">
                <button className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {/* Grade A+ */}
            <AnimatedSection animation="slide-up" delay={200}>
              <div className="group bg-white rounded-xl overflow-hidden border border-outline-variant/20 organic-glow hover:-translate-y-2 transition-all duration-300 card-shimmer relative h-full">
              <div className="h-64 relative">
                <img
                  className="w-full h-full object-cover"
                  src="/images/grade-a-plus.jpg"
                  alt="Grade A+ pomegranates"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-white font-label-md rounded shadow-lg">GRADE A+ EXPORT</div>
              </div>
              <div className="p-md space-y-sm">
                <div className="flex justify-between items-center">
                  <span className="text-secondary font-bold font-label-md leading-none">PREMIUM SELECTION</span>
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed px-2 py-1 rounded text-[10px] font-bold leading-none">IN STOCK</span>
                </div>
                <h3 className="font-headline-sm text-on-surface leading-tight">The Emperor&apos;s Choice</h3>
                <p className="text-on-surface-variant font-body-md">400g+ per fruit. Deep ruby skin with maximum brix levels. Tailored for premium international markets.</p>
                <ul className="space-y-xs pt-base">
                  <li className="flex items-start gap-xs text-on-surface-variant font-label-md normal-case">
                    <span className="material-symbols-outlined text-tertiary text-[18px] mt-0.5 flex-shrink-0">check_circle</span>
                    <span>100% Surface Uniformity</span>
                  </li>
                  <li className="flex items-start gap-xs text-on-surface-variant font-label-md normal-case">
                    <span className="material-symbols-outlined text-tertiary text-[18px] mt-0.5 flex-shrink-0">check_circle</span>
                    <span>Air-Freight Packaging</span>
                  </li>
                </ul>
              </div>
              </div>
            </AnimatedSection>
            {/* Grade A */}
            <AnimatedSection animation="slide-up" delay={300}>
              <div className="group bg-white rounded-xl overflow-hidden border border-outline-variant/20 organic-glow hover:-translate-y-2 transition-all duration-300 h-full">
              <div className="h-64 relative">
                <img
                  className="w-full h-full object-cover"
                  src="/images/grade-a.jpg"
                  alt="Grade A pomegranates"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-tertiary text-white font-label-md rounded shadow-lg">GRADE A RETAIL</div>
              </div>
              <div className="p-md space-y-sm">
                <div className="flex justify-between items-center">
                  <span className="text-secondary font-bold font-label-md leading-none">RETAIL EXCELLENCE</span>
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed px-2 py-1 rounded text-[10px] font-bold leading-none">IN STOCK</span>
                </div>
                <h3 className="font-headline-sm text-on-surface leading-tight">Royal Domestic</h3>
                <p className="text-on-surface-variant font-body-md">300g - 400g range. Vibrant skin and sweet arils. The standard for luxury retail chains across India.</p>
                <ul className="space-y-xs pt-base">
                  <li className="flex items-start gap-xs text-on-surface-variant font-label-md normal-case">
                    <span className="material-symbols-outlined text-tertiary text-[18px] mt-0.5 flex-shrink-0">check_circle</span>
                    <span>Cold-Chain Compatible</span>
                  </li>
                  <li className="flex items-start gap-xs text-on-surface-variant font-label-md normal-case">
                    <span className="material-symbols-outlined text-tertiary text-[18px] mt-0.5 flex-shrink-0">check_circle</span>
                    <span>Bulk Palletizing Available</span>
                  </li>
                </ul>
              </div>
              </div>
            </AnimatedSection>
            {/* Bulk Tier */}
            <AnimatedSection animation="slide-up" delay={400}>
              <div className="group bg-white rounded-xl overflow-hidden border border-outline-variant/20 organic-glow hover:-translate-y-2 transition-all duration-300 h-full">
              <div className="h-64 relative">
                <img
                  className="w-full h-full object-cover"
                  src="/images/grade-bulk.jpg"
                  alt="Bulk culinary grade"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-outline text-white font-label-md rounded shadow-lg leading-none">BULK CULINARY</div>
              </div>
              <div className="p-md space-y-sm">
                <div className="flex justify-between items-center">
                  <span className="text-secondary font-bold font-label-md leading-none">CULINARY GRADE</span>
                  <span className="bg-secondary-fixed text-on-secondary-fixed px-2 py-1 rounded text-[10px] font-bold leading-none">LIMITED</span>
                </div>
                <h3 className="font-headline-sm text-on-surface leading-tight">Harvest Bulk</h3>
                <p className="text-on-surface-variant font-body-md">Varied sizing with guaranteed internal quality. Perfect for high-volume juicing and culinary extract partners.</p>
                <ul className="space-y-xs pt-base">
                  <li className="flex items-start gap-xs text-on-surface-variant font-label-md normal-case">
                    <span className="material-symbols-outlined text-tertiary text-[18px] mt-0.5 flex-shrink-0">check_circle</span>
                    <span>High Brix Content</span>
                  </li>
                  <li className="flex items-start gap-xs text-on-surface-variant font-label-md normal-case">
                    <span className="material-symbols-outlined text-tertiary text-[18px] mt-0.5 flex-shrink-0">check_circle</span>
                    <span>Competitive Bulk Pricing</span>
                  </li>
                </ul>
              </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Logistics Section */}
      <section className="py-xl bg-tertiary text-white overflow-hidden" id="logistics">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-lg items-center">
          <AnimatedSection animation="slide-right" delay={100}>
            <div className="relative z-10">
            <span className="font-label-md tracking-widest text-on-tertiary-container">LOGISTICS EXCELLENCE</span>
            <h2 className="font-display-lg text-[48px] leading-tight mt-xs mb-md">Nationwide Freshness, <br/>Delivered Overnight.</h2>
            <div className="space-y-md">
              {/* Logistics Timeline */}
              <div className="flex gap-md">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-secondary-container ring-4 ring-secondary-container/20 flex-shrink-0"></div>
                  <div className="w-0.5 h-full bg-on-tertiary-container/30"></div>
                </div>
                <div className="pb-md">
                  <h4 className="font-headline-sm text-[20px] leading-tight">Harvested in Tirupati</h4>
                  <p className="text-on-tertiary-container font-body-md mt-xs">Picked at peak ripeness at 4:00 AM.</p>
                </div>
              </div>
              <div className="flex gap-md">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-on-tertiary-container flex-shrink-0"></div>
                  <div className="w-0.5 h-full bg-on-tertiary-container/30"></div>
                </div>
                <div className="pb-md">
                  <h4 className="font-headline-sm text-[20px] leading-tight">Temperature Controlled</h4>
                  <p className="text-on-tertiary-container font-body-md mt-xs">Cold-chain transit within 4 hours of harvest.</p>
                </div>
              </div>
              <div className="flex gap-md">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-on-tertiary-container flex-shrink-0"></div>
                </div>
                <div>
                  <h4 className="font-headline-sm text-[20px] leading-tight">Global Reach</h4>
                  <p className="text-on-tertiary-container font-body-md mt-xs">Hub-to-hub delivery across major Indian metros and international ports.</p>
                </div>
              </div>
            </div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="slide-left" delay={200}>
            <div className="relative">
            {/* Map Placeholder */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-md backdrop-blur-sm">
              <div className="h-[400px] w-full rounded-xl overflow-hidden bg-surface-dim relative">
                <div
                  className="absolute inset-0 grayscale opacity-50 bg-cover bg-center"
                  style={{backgroundImage: "url('/images/logistics-map.jpg')"}}
                ></div>
                {/* Custom Map Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="relative w-full h-full">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full animate-ping"></div>
                    <div className="absolute top-[40%] left-[30%] w-2 h-2 bg-secondary rounded-full"></div>
                    <div className="absolute top-[20%] left-[45%] w-2 h-2 bg-secondary rounded-full"></div>
                    <div className="absolute top-[70%] left-[60%] w-2 h-2 bg-secondary rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="mt-md grid grid-cols-3 gap-md text-center">
                <div>
                  <div className="text-headline-sm font-bold text-secondary-container leading-none mb-1">12h</div>
                  <div className="text-caption text-on-tertiary-container">Avg. Transit Time</div>
                </div>
                <div>
                  <div className="text-headline-sm font-bold text-secondary-container leading-none mb-1">25+</div>
                  <div className="text-caption text-on-tertiary-container">States Served</div>
                </div>
                <div>
                  <div className="text-headline-sm font-bold text-secondary-container leading-none mb-1">0%</div>
                  <div className="text-caption text-on-tertiary-container">Spoilage Rate</div>
                </div>
              </div>
            </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-xl bg-gradient-to-br from-surface via-surface-container-low to-surface" id="enquire">
        <div className="max-w-[1400px] mx-auto px-gutter">
          <AnimatedSection animation="scale" delay={100}>
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left side - Content */}
              <div className="p-8 lg:p-xl bg-primary text-white relative overflow-hidden min-h-[500px]">
                {/* Decorative pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="space-y-md">
                    <div className="inline-flex items-center gap-xs px-sm py-1.5 bg-white/10 text-primary-fixed rounded-full mb-md">
                      <span className="material-symbols-outlined text-[18px] leading-none">support_agent</span>
                      <span className="text-[14px] leading-[20px] font-sans font-semibold tracking-[0.05em] uppercase">DIRECT SUPPORT</span>
                    </div>

                    <h2 className="font-serif text-[36px] lg:text-[40px] leading-[1.2]">
                      Get in Touch<br/>
                      <span className="italic font-normal">We&apos;re Here to Help.</span>
                    </h2>

                    <p className="text-[17px] lg:text-[18px] leading-[27px] text-primary-fixed/90 font-sans">
                      Feel free to enquire about anything - from product specifications to bulk orders. Our team is available to assist you with all your pomegranate needs.
                    </p>
                  </div>

                  <div className="space-y-3 text-primary-fixed/70 mt-8">
                    <p className="flex items-center gap-2 text-[15px] lg:text-[16px] leading-[22px] font-sans">
                      <span className="material-symbols-outlined text-[20px] flex-shrink-0">schedule</span>
                      <span className="whitespace-nowrap">Available 7 Days a Week</span>
                    </p>
                    <p className="flex items-center gap-2 text-[15px] lg:text-[16px] leading-[22px] font-sans">
                      <span className="material-symbols-outlined text-[20px] flex-shrink-0">verified</span>
                      <span className="whitespace-nowrap">Quick Response Guaranteed</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side - Contact Options */}
              <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-surface-container-low to-white">
                <div className="w-full space-y-8">
                  <div className="text-center mb-10 px-8">
                    <h3 className="font-serif text-[26px] lg:text-[32px] leading-[1.25] text-on-surface mb-4">
                      Choose Your Preferred Way
                    </h3>
                    <p className="text-[16px] lg:text-[17px] leading-[26px] text-on-surface-variant font-sans">
                      Reach out via WhatsApp or call us directly
                    </p>
                  </div>

                  {/* WhatsApp Button */}
                  <a
                    href="https://wa.me/918897635459"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block w-full"
                  >
                    <div className="relative bg-[#25D366] text-white rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
                      {/* Animated background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#25D366] to-[#128C7E] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                      <div className="relative z-10 flex items-center justify-between gap-6">
                        <div className="flex items-center gap-6 flex-1">
                          <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                            <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24">
                              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.522-2.961-2.638-.087-.117-.708-.941-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.001.332.005c.109.004.258-.041.404.311.159.389.542 1.32.59 1.416.048.096.08.208.016.336-.064.128-.096.208-.192.32s-.192.231-.274.311c-.096.096-.197.199-.085.389.112.19.498.821 1.073 1.334.74.66 1.364.864 1.556.96.192.096.304.08.416-.048s.48-.56.608-.752c.128-.192.256-.16.432-.096s1.12.528 1.312.624.32.144.368.224c.048.08.048.464-.096.869z"></path>
                            </svg>
                          </div>
                          <div className="text-left flex-1">
                            <div className="text-[14px] leading-[20px] text-white/90 mb-2 font-sans font-semibold tracking-wide">Message Us On</div>
                            <div className="font-serif text-[28px] leading-none mb-2">WhatsApp</div>
                            <div className="text-[17px] leading-[24px] text-white/95 font-sans">+91 88976 35459</div>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-[36px] group-hover:translate-x-1 transition-transform flex-shrink-0">arrow_forward</span>
                      </div>
                    </div>
                  </a>

                  {/* Call Button */}
                  <a
                    href="tel:+918897635459"
                    className="group block w-full"
                  >
                    <div className="relative bg-primary text-white rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
                      {/* Animated background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-0 group-hover:opacity-100 transition-opacity"></div>

                      <div className="relative z-10 flex items-center justify-between gap-6">
                        <div className="flex items-center gap-6 flex-1">
                          <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                            <span className="material-symbols-outlined text-[44px]">call</span>
                          </div>
                          <div className="text-left flex-1">
                            <div className="text-[14px] leading-[20px] text-white/90 mb-2 font-sans font-semibold tracking-wide">Call Us Directly</div>
                            <div className="font-serif text-[28px] leading-none mb-2">Phone</div>
                            <div className="text-[17px] leading-[24px] text-white/95 font-sans">+91 88976 35459</div>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-[36px] group-hover:translate-x-1 transition-transform flex-shrink-0">arrow_forward</span>
                      </div>
                    </div>
                  </a>

                  <div className="text-center pt-6 w-full px-8">
                    <p className="text-[15px] lg:text-[16px] leading-[24px] text-on-surface-variant font-sans">
                      <span className="inline-flex items-center gap-2 justify-center">
                        <span className="material-symbols-outlined text-[20px] text-tertiary flex-shrink-0">schedule</span>
                        <span className="whitespace-nowrap">Available 24/7</span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <AnimatedSection animation="fade" delay={100}>
        <footer className="w-full py-xl px-gutter bg-surface-container-highest rounded-t-xl mt-lg">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-md">
          <div className="space-y-md">
            <Logo />
            <p className="font-body-md text-on-surface-variant">The benchmark for premium pomegranates in Andhra Pradesh. Excellence from seed to skin.</p>
          </div>
          <div>
            <h5 className="font-label-md text-primary mb-md">RESOURCES</h5>
            <ul className="space-y-sm">
              <li><a className="font-body-md text-on-surface-variant hover:text-secondary underline transition-all" href="#">About Us</a></li>
              <li><a className="font-body-md text-on-surface-variant hover:text-secondary underline transition-all" href="#">Quality Standards</a></li>
              <li><a className="font-body-md text-on-surface-variant hover:text-secondary underline transition-all" href="#">Supply Chain</a></li>
              <li><a className="font-body-md text-on-surface-variant hover:text-secondary underline transition-all" href="#">Gallery</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-label-md text-primary mb-md">LEGAL</h5>
            <ul className="space-y-sm">
              <li><a className="font-body-md text-on-surface-variant hover:text-secondary underline transition-all" href="#">Privacy Policy</a></li>
              <li><a className="font-body-md text-on-surface-variant hover:text-secondary underline transition-all" href="#">Terms of Trade</a></li>
              <li><a className="font-body-md text-on-surface-variant hover:text-secondary underline transition-all" href="#">Certifications</a></li>
              <li><a className="font-body-md text-on-surface-variant hover:text-secondary underline transition-all" href="#">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-md">
            <h5 className="font-label-md text-primary mb-md">NEWSLETTER</h5>
            <div className="flex">
              <input
                className="bg-surface border border-outline-variant/30 rounded-l-lg p-md w-full focus:ring-0 focus:border-primary"
                placeholder="Your Email"
                type="text"
              />
              <button className="bg-primary text-white p-md rounded-r-lg">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-container-max mx-auto mt-xl pt-lg border-t border-outline-variant/30 text-center">
          <p className="font-label-md text-on-surface-variant">© 2024 Sriram Fruits Tirupati. Premium Logistics Across India.</p>
        </div>
        </footer>
      </AnimatedSection>

      {/* Floating WhatsApp Button */}
      <a className="fixed bottom-gutter right-gutter z-50 group" href="https://wa.me/918897635459" target="_blank" rel="noopener noreferrer">
        {/* Animated rings */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full whatsapp-ring"></div>
        <div className="absolute inset-0 bg-[#25D366] rounded-full whatsapp-ring" style={{animationDelay: '1s'}}></div>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>

        {/* Main button */}
        <div className="relative bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 active:scale-95 transition-all whatsapp-float">
          <svg className="w-9 h-9 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.522-2.961-2.638-.087-.117-.708-.941-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.001.332.005c.109.004.258-.041.404.311.159.389.542 1.32.59 1.416.048.096.08.208.016.336-.064.128-.096.208-.192.32s-.192.231-.274.311c-.096.096-.197.199-.085.389.112.19.498.821 1.073 1.334.74.66 1.364.864 1.556.96.192.096.304.08.416-.048s.48-.56.608-.752c.128-.192.256-.16.432-.096s1.12.528 1.312.624.32.144.368.224c.048.08.048.464-.096.869z"></path>
          </svg>
        </div>
      </a>
    </>
  );
}
