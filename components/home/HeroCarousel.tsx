"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <section className="relative w-full h-[75vh] min-h-[550px] overflow-hidden bg-brand-matte border-b border-gray-200">
      <div id="hero-carousel" className="relative w-full h-full z-10">
        
        {/* Slide 1 */}
        <div className={`slide ${currentSlide === 0 ? 'active' : ''}`} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1600&q=80')" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-matte/90 via-brand-matte/30 to-brand-matte/60 z-0"></div>
          {/* Added pb-24 here to push the content up slightly */}
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6 text-center pb-24">
            <p className="font-montserrat uppercase tracking-[0.4em] text-sm text-brand-lime font-bold mb-6 drop-shadow-lg">Executive Selection</p>
            <h1 className="font-montserrat text-5xl md:text-7xl font-bold leading-tight mb-6 text-brand-white text-shadow-custom tracking-tighter">Premium Corporate Gifting <br className="hidden md:block"/> for <span className="text-gray-300">Business</span></h1>
            <p className="font-opensans text-lg text-gray-200 mb-10 max-w-2xl leading-relaxed font-medium mx-auto text-shadow-custom">Curated executive gifts and premium packages designed to leave a lasting impression on your clients and staff.</p>
            <Link href="/#corporate-hub" className="cta-btn inline-flex items-center justify-center font-montserrat font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wide mx-auto">
              Shop Corporate Gifts
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
          </div>
        </div>

        {/* Slide 2 */}
        <div className={`slide ${currentSlide === 1 ? 'active' : ''}`} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&w=1600&q=80')" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-matte/90 via-brand-matte/30 to-brand-matte/60 z-0"></div>
          {/* Added pb-24 here */}
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6 text-center pb-24">
            <p className="font-montserrat uppercase tracking-[0.4em] text-sm text-brand-lime font-bold mb-6 drop-shadow-lg">Premium Brands Only</p>
            <h1 className="font-montserrat text-5xl md:text-7xl font-bold leading-tight mb-6 text-brand-white text-shadow-custom tracking-tighter">Apple, Smeg, Carrol Boyes, <br className="hidden md:block"/> <span className="text-brand-lime">Sir Juice & More</span></h1>
            <p className="font-opensans text-lg text-gray-200 mb-10 max-w-2xl leading-relaxed font-medium mx-auto text-shadow-custom">Source directly from a curated B2B marketplace of the world's most trusted lifestyle and technology brands.</p>
            <Link href="/#shop-brand" className="cta-btn inline-flex items-center justify-center font-montserrat font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wide mx-auto">
              Shop by Brand
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
          </div>
        </div>

        {/* Slide 3 */}
        <div className={`slide ${currentSlide === 2 ? 'active' : ''}`} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80')" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-matte/90 via-brand-matte/30 to-brand-matte/60 z-0"></div>
          {/* Added pb-24 here */}
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6 text-center pb-24">
            <p className="font-montserrat uppercase tracking-[0.4em] text-sm text-brand-lime font-bold mb-6 drop-shadow-lg">B2B Scalability</p>
            <h1 className="font-montserrat text-5xl md:text-7xl font-bold leading-tight mb-6 text-brand-white text-shadow-custom tracking-tighter">Bulk Orders for Companies <br className="hidden md:block"/> <span className="text-gray-300">and Events</span></h1>
            <p className="font-opensans text-lg text-gray-200 mb-10 max-w-2xl leading-relaxed font-medium mx-auto text-shadow-custom">Seamlessly request quantity-based pricing and custom branding specifications for your next major corporate requirement.</p>
            <Link href="/#bulk-orders" className="cta-btn inline-flex items-center justify-center font-montserrat font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wide mx-auto">
              Request a Quote
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            </Link>
          </div>
        </div>

        {/* Slide 4 */}
        <div className={`slide ${currentSlide === 3 ? 'active' : ''}`} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80')" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-matte/90 via-brand-matte/30 to-brand-matte/60 z-0"></div>
          {/* Added pb-24 here */}
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6 text-center pb-24">
            <p className="font-montserrat uppercase tracking-[0.4em] text-sm text-brand-lime font-bold mb-6 drop-shadow-lg">Enterprise Solutions</p>
            <h1 className="font-montserrat text-5xl md:text-7xl font-bold leading-tight mb-6 text-brand-white text-shadow-custom tracking-tighter">Business Procurement <br className="hidden md:block"/> <span className="text-brand-lime">Made Simple</span></h1>
            <p className="font-opensans text-lg text-gray-200 mb-10 max-w-2xl leading-relaxed font-medium mx-auto text-shadow-custom">From office technology to essential supplies, streamline your corporate purchasing through our verified supplier network.</p>
            <Link href="/#divisions-ecosystem" className="cta-btn inline-flex items-center justify-center font-montserrat font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wide mx-auto">
              Explore Categories
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
            </Link>
          </div>
        </div>

      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-10 left-0 w-full z-20 flex justify-center items-center gap-6">
        <button onClick={prevSlide} className="text-brand-white hover:text-brand-lime transition-colors p-3 z-30 relative bg-brand-matte/40 backdrop-blur-md rounded-full hover:bg-brand-matte/80">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <div className="flex gap-3 z-30 relative bg-brand-matte/40 backdrop-blur-md px-5 py-3.5 rounded-full">
          {[0, 1, 2, 3].map((i) => (
             <button key={i} className={`nav-dot ${currentSlide === i ? 'active' : ''}`} onClick={() => goToSlide(i)}></button>
          ))}
        </div>
        <button onClick={nextSlide} className="text-brand-white hover:text-brand-lime transition-colors p-3 z-30 relative bg-brand-matte/40 backdrop-blur-md rounded-full hover:bg-brand-matte/80">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>
    </section>
  );
}