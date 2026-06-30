import Link from "next/link";

export default function CorporateHub() {
  return (
    <section id="corporate-hub" className="py-24 bg-brand-matte relative overflow-hidden border-t-4 border-brand-emerald">
      {/* Background Glow Effect */}
      <div className="absolute w-[800px] h-[800px] rounded-full bg-brand-emerald opacity-[0.07] blur-[120px] top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"></div>
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Area */}
        <div className="text-center mb-16">
          <p className="font-montserrat uppercase tracking-[0.3em] text-xs text-brand-lime font-bold mb-4 flex items-center justify-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime"></span>
            Premium Curations
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime"></span>
          </p>
          <h2 className="font-montserrat text-4xl md:text-5xl font-black text-brand-white tracking-tight mb-4">Corporate Gifting Hub</h2>
          <p className="font-opensans text-gray-400 max-w-2xl mx-auto">Elevate your business relationships with our exclusive selection of premium gifts, custom hampers, and tailored branding solutions.</p>
        </div>
        
        {/* Grid Container */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
          
          <Link href="#gift-executive" className="hub-card flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl group">
            <svg className="w-8 h-8 mb-4 text-gray-400 group-hover:text-brand-lime transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
            <span className="text-center font-montserrat font-bold text-[0.75rem] uppercase tracking-widest text-brand-white group-hover:text-brand-emerald transition-colors">Executive Gifts</span>
          </Link>

          <Link href="#gift-client" className="hub-card flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl group">
            <svg className="w-8 h-8 mb-4 text-gray-400 group-hover:text-brand-lime transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
            <span className="text-center font-montserrat font-bold text-[0.75rem] uppercase tracking-widest text-brand-white group-hover:text-brand-emerald transition-colors">Client Appreciation Gifts</span>
          </Link>

          <Link href="#gift-employee" className="hub-card flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl group">
            <svg className="w-8 h-8 mb-4 text-gray-400 group-hover:text-brand-lime transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <span className="text-center font-montserrat font-bold text-[0.75rem] uppercase tracking-widest text-brand-white group-hover:text-brand-emerald transition-colors">Employee Gifts</span>
          </Link>

          <Link href="#gift-event" className="hub-card flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl group">
            <svg className="w-8 h-8 mb-4 text-gray-400 group-hover:text-brand-lime transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span className="text-center font-montserrat font-bold text-[0.75rem] uppercase tracking-widest text-brand-white group-hover:text-brand-emerald transition-colors">Event Gifts</span>
          </Link>

          <Link href="#gift-conference" className="hub-card flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl group">
            <svg className="w-8 h-8 mb-4 text-gray-400 group-hover:text-brand-lime transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
            </svg>
            <span className="text-center font-montserrat font-bold text-[0.75rem] uppercase tracking-widest text-brand-white group-hover:text-brand-emerald transition-colors">Conference Gifts</span>
          </Link>

          <Link href="#gift-embassy" className="hub-card flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl group">
            <svg className="w-8 h-8 mb-4 text-gray-400 group-hover:text-brand-lime transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-center font-montserrat font-bold text-[0.75rem] uppercase tracking-widest text-brand-white group-hover:text-brand-emerald transition-colors">Embassy Gifts</span>
          </Link>

          <Link href="#gift-luxury" className="hub-card flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl group">
            <svg className="w-8 h-8 mb-4 text-gray-400 group-hover:text-brand-lime transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
            </svg>
            <span className="text-center font-montserrat font-bold text-[0.75rem] uppercase tracking-widest text-brand-white group-hover:text-brand-emerald transition-colors">Luxury Gift Sets</span>
          </Link>

          <Link href="#gift-branded" className="hub-card flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl group">
            <svg className="w-8 h-8 mb-4 text-gray-400 group-hover:text-brand-lime transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
            </svg>
            <span className="text-center font-montserrat font-bold text-[0.75rem] uppercase tracking-widest text-brand-white group-hover:text-brand-emerald transition-colors">Branded Gift Packs</span>
          </Link>

          <Link href="#gift-yearend" className="hub-card flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl group">
            <svg className="w-8 h-8 mb-4 text-gray-400 group-hover:text-brand-lime transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
            </svg>
            <span className="text-center font-montserrat font-bold text-[0.75rem] uppercase tracking-widest text-brand-white group-hover:text-brand-emerald transition-colors">Year-End Gifts</span>
          </Link>

          <Link href="#gift-custom" className="hub-card flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl group">
            <svg className="w-8 h-8 mb-4 text-gray-400 group-hover:text-brand-lime transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
            </svg>
            <span className="text-center font-montserrat font-bold text-[0.75rem] uppercase tracking-widest text-brand-white group-hover:text-brand-emerald transition-colors">Custom Corporate Hampers</span>
          </Link>
          
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <Link href="#quote-gifting" className="cta-btn inline-flex items-center justify-center font-montserrat font-bold px-10 py-5 rounded-full text-[0.85rem] uppercase tracking-wide shadow-[0_10px_30px_rgba(80,200,120,0.4)]">
            Request Corporate Gifting Quote
            <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}