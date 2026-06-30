import Link from "next/link";

export default function TrendingProducts() {
  return (
    <section id="trending-products" className="py-24 bg-white border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="font-montserrat uppercase tracking-[0.3em] text-xs text-brand-military font-bold mb-4 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald"></span>
              Top Picks
            </p>
            <h2 className="font-montserrat text-4xl font-black text-brand-matte tracking-tight">Trending Corporate Products</h2>
          </div>
          <Link href="/product" className="hidden md:flex font-montserrat font-bold text-sm text-brand-military hover:text-brand-emerald transition-colors uppercase tracking-widest items-center gap-2">
            View All Products 
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Product 1 */}
          <Link href="/product" className="product-card group bg-white border border-gray-100 rounded-3xl overflow-hidden flex flex-col hover:shadow-xl hover:border-brand-emerald transition-all duration-300">
            <div className="relative h-64 bg-gray-50 flex items-center justify-center p-6">
              <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80" alt="MacBook" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <p className="font-montserrat text-xs text-gray-400 font-bold mb-1 uppercase tracking-widest">Apple</p>
              <h3 className="font-montserrat font-bold text-lg text-brand-matte mb-2 line-clamp-1">MacBook Pro 16-inch</h3>
              <p className="font-montserrat text-xl font-black text-brand-emerald mb-4">R 79,999.00 <span className="text-[0.6rem] text-gray-400 font-normal tracking-widest">EX VAT</span></p>
              <button className="mt-auto w-full py-3 border-2 border-brand-matte text-brand-matte font-montserrat font-bold text-xs uppercase tracking-widest rounded-xl group-hover:bg-brand-matte group-hover:text-white transition-colors">View Product</button>
            </div>
          </Link>

          {/* Product 2 */}
          <Link href="/product" className="product-card group bg-white border border-gray-100 rounded-3xl overflow-hidden flex flex-col hover:shadow-xl hover:border-brand-emerald transition-all duration-300">
            <div className="relative h-64 bg-gray-50 flex items-center justify-center p-6">
              <img src="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=400&q=80" alt="Smeg Kettle" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <p className="font-montserrat text-xs text-gray-400 font-bold mb-1 uppercase tracking-widest">Smeg</p>
              <h3 className="font-montserrat font-bold text-lg text-brand-matte mb-2 line-clamp-1">Retro Variable Temp Kettle</h3>
              <p className="font-montserrat text-xl font-black text-brand-emerald mb-4">R 4,299.00 <span className="text-[0.6rem] text-gray-400 font-normal tracking-widest">EX VAT</span></p>
              <button className="mt-auto w-full py-3 border-2 border-brand-matte text-brand-matte font-montserrat font-bold text-xs uppercase tracking-widest rounded-xl group-hover:bg-brand-matte group-hover:text-white transition-colors">View Product</button>
            </div>
          </Link>

          {/* Product 3 */}
          <Link href="/product" className="product-card group bg-white border border-gray-100 rounded-3xl overflow-hidden flex flex-col hover:shadow-xl hover:border-brand-emerald transition-all duration-300">
            <div className="relative h-64 bg-gray-50 flex items-center justify-center p-6">
              <img src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=400&q=80" alt="Carrol Boyes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply opacity-80" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <p className="font-montserrat text-xs text-gray-400 font-bold mb-1 uppercase tracking-widest">Carrol Boyes</p>
              <h3 className="font-montserrat font-bold text-lg text-brand-matte mb-2 line-clamp-1">Man Business Card Holder</h3>
              <p className="font-montserrat text-xl font-black text-brand-emerald mb-4">R 1,495.00 <span className="text-[0.6rem] text-gray-400 font-normal tracking-widest">EX VAT</span></p>
              <button className="mt-auto w-full py-3 border-2 border-brand-matte text-brand-matte font-montserrat font-bold text-xs uppercase tracking-widest rounded-xl group-hover:bg-brand-matte group-hover:text-white transition-colors">View Product</button>
            </div>
          </Link>

          {/* Product 4 (With Bulk Tag) */}
          <Link href="/product" className="product-card group bg-white border border-gray-100 rounded-3xl overflow-hidden flex flex-col hover:shadow-xl hover:border-brand-emerald transition-all duration-300">
            <div className="relative h-64 bg-gray-50 flex items-center justify-center p-6">
              <div className="absolute top-4 left-4 bg-brand-military text-white text-[0.65rem] font-bold uppercase tracking-widest px-3 py-1 rounded-full z-10">Bulk Case</div>
              <img src="https://images.unsplash.com/photo-1622597467836-f38240662c8e?auto=format&fit=crop&w=400&q=80" alt="Sir Juice" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <p className="font-montserrat text-xs text-gray-400 font-bold mb-1 uppercase tracking-widest">Sir Juice</p>
              <h3 className="font-montserrat font-bold text-lg text-brand-matte mb-2 line-clamp-1">Orange Juice (Case of 12)</h3>
              <p className="font-montserrat text-xl font-black text-brand-emerald mb-4">R 340.00 <span className="text-[0.6rem] text-gray-400 font-normal tracking-widest">EX VAT</span></p>
              <button className="mt-auto w-full py-3 border-2 border-brand-matte text-brand-matte font-montserrat font-bold text-xs uppercase tracking-widest rounded-xl group-hover:bg-brand-matte group-hover:text-white transition-colors">View Product</button>
            </div>
          </Link>

          {/* Product 5 */}
          <Link href="/product" className="product-card group bg-white border border-gray-100 rounded-3xl overflow-hidden flex flex-col hover:shadow-xl hover:border-brand-emerald transition-all duration-300">
            <div className="relative h-64 bg-gray-50 flex items-center justify-center p-6">
              <img src="https://images.unsplash.com/photo-1527443195645-1133f7f28990?auto=format&fit=crop&w=400&q=80" alt="HP EliteBook" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <p className="font-montserrat text-xs text-gray-400 font-bold mb-1 uppercase tracking-widest">HP</p>
              <h3 className="font-montserrat font-bold text-lg text-brand-matte mb-2 line-clamp-1">EliteBook 840 G9 Enterprise</h3>
              <p className="font-montserrat text-xl font-black text-brand-emerald mb-4">R 32,500.00 <span className="text-[0.6rem] text-gray-400 font-normal tracking-widest">EX VAT</span></p>
              <button className="mt-auto w-full py-3 border-2 border-brand-matte text-brand-matte font-montserrat font-bold text-xs uppercase tracking-widest rounded-xl group-hover:bg-brand-matte group-hover:text-white transition-colors">View Product</button>
            </div>
          </Link>

          {/* Product 6 */}
          <Link href="/product" className="product-card group bg-white border border-gray-100 rounded-3xl overflow-hidden flex flex-col hover:shadow-xl hover:border-brand-emerald transition-all duration-300">
            <div className="relative h-64 bg-gray-50 flex items-center justify-center p-6">
              <img src="https://images.unsplash.com/photo-1584990347449-a6e14a2a67e7?auto=format&fit=crop&w=400&q=80" alt="Le Creuset" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply opacity-90" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <p className="font-montserrat text-xs text-gray-400 font-bold mb-1 uppercase tracking-widest">Le Creuset</p>
              <h3 className="font-montserrat font-bold text-lg text-brand-matte mb-2 line-clamp-1">Signature Cast Iron Casserole</h3>
              <p className="font-montserrat text-xl font-black text-brand-emerald mb-4">R 6,899.00 <span className="text-[0.6rem] text-gray-400 font-normal tracking-widest">EX VAT</span></p>
              <button className="mt-auto w-full py-3 border-2 border-brand-matte text-brand-matte font-montserrat font-bold text-xs uppercase tracking-widest rounded-xl group-hover:bg-brand-matte group-hover:text-white transition-colors">View Product</button>
            </div>
          </Link>

        </div>

        {/* Bottom CTA Button */}
        <div className="text-center">
          <Link href="/product" className="cta-btn inline-flex items-center justify-center font-montserrat font-bold px-10 py-4 rounded-full text-sm uppercase tracking-wide">
            View Full Catalogue 
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}