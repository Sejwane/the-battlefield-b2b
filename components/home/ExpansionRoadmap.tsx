import Link from "next/link";

export default function ExpansionRoadmap() {
  return (
    <section id="expansion-vision" className="py-24 bg-brand-matte relative overflow-hidden border-t-2 border-brand-military">
      {/* Background Glow Effect */}
      <div className="absolute w-[800px] h-[800px] rounded-full bg-brand-emerald opacity-[0.05] blur-[100px] bottom-0 right-0 transform translate-x-1/3 translate-y-1/3 z-0 pointer-events-none"></div>
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text & Link Left Column */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <p className="font-montserrat uppercase tracking-[0.3em] text-xs text-brand-lime font-bold mb-4 flex items-center justify-center lg:justify-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-lime"></span>
              Built for Scale
            </p>
            <h2 className="font-montserrat text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
              Future Expansion <br className="hidden lg:block"/>Roadmap
            </h2>
            <p className="font-opensans text-gray-400 text-lg leading-relaxed mb-8">
              The Battlefield Online is continuously evolving. Our platform architecture is designed to rapidly onboard new enterprise features and entirely new business verticals.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-brand-emerald font-montserrat font-bold text-sm uppercase tracking-widest hover:text-brand-lime transition-colors">
              Learn about our vision
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>

          {/* Roadmap Tags Right Column */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
              <span className="px-6 py-3 border border-white/10 rounded-full text-brand-white text-sm font-montserrat font-semibold bg-white/5 hover:bg-brand-emerald hover:border-brand-emerald hover:text-white transition-all duration-300 cursor-default">Battlefield Merchandise</span>
              <span className="px-6 py-3 border border-white/10 rounded-full text-brand-white text-sm font-montserrat font-semibold bg-white/5 hover:bg-brand-emerald hover:border-brand-emerald hover:text-white transition-all duration-300 cursor-default">ICASA-Approved Products</span>
              <span className="px-6 py-3 border border-white/10 rounded-full text-brand-white text-sm font-montserrat font-semibold bg-white/5 hover:bg-brand-emerald hover:border-brand-emerald hover:text-white transition-all duration-300 cursor-default">Private-Label Electronics</span>
              <span className="px-6 py-3 border border-white/10 rounded-full text-brand-white text-sm font-montserrat font-semibold bg-white/5 hover:bg-brand-emerald hover:border-brand-emerald hover:text-white transition-all duration-300 cursor-default">Corporate Subscription Boxes</span>
              <span className="px-6 py-3 border border-white/10 rounded-full text-brand-white text-sm font-montserrat font-semibold bg-white/5 hover:bg-brand-emerald hover:border-brand-emerald hover:text-white transition-all duration-300 cursor-default">SADC Exports</span>
              <span className="px-6 py-3 border border-white/10 rounded-full text-brand-white text-sm font-montserrat font-semibold bg-white/5 hover:bg-brand-emerald hover:border-brand-emerald hover:text-white transition-all duration-300 cursor-default">International Gifting</span>
              <span className="px-6 py-3 border border-white/10 rounded-full text-brand-white text-sm font-montserrat font-semibold bg-white/5 hover:bg-brand-emerald hover:border-brand-emerald hover:text-white transition-all duration-300 cursor-default">Training & Toolkits</span>
              <span className="px-6 py-3 border border-white/10 rounded-full text-brand-white text-sm font-montserrat font-semibold bg-white/5 hover:bg-brand-emerald hover:border-brand-emerald hover:text-white transition-all duration-300 cursor-default">Digital Product Downloads</span>
              <span className="px-6 py-3 border border-white/10 rounded-full text-brand-white text-sm font-montserrat font-semibold bg-white/5 hover:bg-brand-emerald hover:border-brand-emerald hover:text-white transition-all duration-300 cursor-default">Business Convenience Store</span>
              <span className="px-6 py-3 border border-white/10 rounded-full text-brand-white text-sm font-montserrat font-semibold bg-white/5 hover:bg-brand-emerald hover:border-brand-emerald hover:text-white transition-all duration-300 cursor-default">Walk-in Store Integration</span>
              <span className="px-6 py-3 border border-brand-emerald/50 rounded-full text-brand-lime text-sm font-montserrat font-bold bg-brand-emerald/10 shadow-[0_0_15px_rgba(80,200,120,0.2)] cursor-default">Loyalty & Reseller Programs</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}