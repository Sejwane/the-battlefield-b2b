// app/hospitality/page.tsx
import Link from "next/link";
import { hospitalityProducts } from "../../data/products";

export default function HospitalityPage() {
  return (
    <main className="bg-gray-50 min-h-screen pb-24">
      
      {/* 1. Category Banner */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-brand-matte">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519671482749-fd098f3828de?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-30 mix-blend-multiply"></div>
        {/* Luxury Gold Glow */}
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#D97706] opacity-20 blur-[100px] top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"></div>
        
        <div className="relative z-10 text-center px-6">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl inline-block mb-6 border border-white/20">
            <svg className="w-12 h-12 text-[#D97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"></path>
            </svg>
          </div>
          <h1 className="font-montserrat text-4xl md:text-6xl font-black text-white tracking-tight mb-4 text-shadow-custom">Hospitality Packages</h1>
          <p className="font-opensans text-lg text-gray-300 max-w-2xl mx-auto font-medium">Elevate your corporate events and boardroom meetings. Partner with The Battlefield for premium hosting, catering, and executive experiences.</p>
        </div>
      </section>

      {/* 2. Category Description & Subcategories */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-16 text-center">
        <div className="flex flex-wrap justify-center gap-4">
          <span className="px-6 py-2 bg-white border border-gray-200 rounded-full font-montserrat font-bold text-xs uppercase tracking-widest text-brand-matte shadow-sm">Boardroom Catering</span>
          <span className="px-6 py-2 bg-white border border-gray-200 rounded-full font-montserrat font-bold text-xs uppercase tracking-widest text-brand-matte shadow-sm">Event Support</span>
          <span className="px-6 py-2 bg-white border border-gray-200 rounded-full font-montserrat font-bold text-xs uppercase tracking-widest text-brand-matte shadow-sm">VIP Experiences</span>
          <span className="px-6 py-2 bg-white border border-gray-200 rounded-full font-montserrat font-bold text-xs uppercase tracking-widest text-brand-matte shadow-sm">Coffee Solutions</span>
        </div>
      </section>

      {/* 3. Featured Products Grid */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 mb-20">
        <h2 className="font-montserrat text-3xl font-black text-brand-matte mb-10 border-b-2 border-gray-200 pb-4">Corporate Hosting & Events</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {hospitalityProducts.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id} className="product-card group bg-white border border-gray-100 rounded-3xl overflow-hidden flex flex-col hover:shadow-xl hover:border-[#D97706] transition-all duration-300">
              
              <div className="relative h-56 bg-gray-50 flex items-center justify-center p-6">
                {product.isBulkAvailable && (
                  <div className="absolute top-4 left-4 bg-[#D97706] text-white text-[0.65rem] font-bold uppercase tracking-widest px-3 py-1 rounded-full z-10">Scalable Package</div>
                )}
                <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl mix-blend-multiply opacity-90" />
              </div>
              
              <div className="p-6 flex flex-col flex-grow border-t border-gray-50">
                <p className="font-montserrat text-xs text-gray-400 font-bold mb-1 uppercase tracking-widest">{product.category}</p>
                <h3 className="font-montserrat font-bold text-lg text-brand-matte mb-2">{product.title}</h3>
                
                <ul className="mb-4 space-y-1">
                  {product.specifications.slice(0,2).map((spec, i) => (
                    <li key={i} className="text-xs font-opensans text-gray-500 flex items-center gap-2"><span className="text-[#D97706]">▸</span>{spec}</li>
                  ))}
                </ul>

                <p className="font-montserrat text-xl font-black text-[#D97706] mb-4 mt-auto">
                  R {product.priceExVat.toLocaleString()} <span className="text-[0.6rem] text-gray-400 font-normal tracking-widest">EX VAT</span>
                </p>
                <button className="w-full py-3 border-2 border-brand-matte text-brand-matte font-montserrat font-bold text-xs uppercase tracking-widest rounded-xl group-hover:bg-brand-matte group-hover:text-white transition-colors">View Package Details</button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Corporate Procurement CTA */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="bg-brand-matte rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden border-l-4 border-[#D97706] shadow-2xl">
          <div className="absolute w-[400px] h-[400px] rounded-full bg-[#D97706] opacity-15 blur-[80px] top-0 right-0 transform translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-montserrat text-3xl md:text-4xl font-black text-white mb-4">Host with Confidence</h2>
            <p className="font-opensans text-gray-400 text-lg">Planning a major corporate function, summit, or executive retreat? Request a custom proposal for our premium event hospitality solutions.</p>
          </div>
          
          <div className="relative z-10 shrink-0 flex flex-col gap-4 w-full md:w-auto">
            <Link href="/#bulk-orders" className="cta-btn !bg-[#D97706] !border-none text-center font-montserrat font-bold px-10 py-5 rounded-xl text-sm uppercase tracking-wide text-white hover:bg-white hover:text-[#D97706] transition-all">
              Request Event Proposal
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}