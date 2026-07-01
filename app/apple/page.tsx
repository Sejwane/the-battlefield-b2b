// app/apple/page.tsx
import Link from "next/link";
import { appleProducts } from "../../data/products";

export default function AppleBrandPage() {
  return (
    <main className="bg-gray-50 min-h-screen pb-24">
      
      {/* 1. Brand Banner */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-brand-matte">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-40"></div>
        <div className="relative z-10 text-center px-6">
          <img src="/Apple_Logo_1.png" alt="Apple Logo" className="h-24 md:h-32 mx-auto mb-6 drop-shadow-2xl invert" />
          <h1 className="font-montserrat text-4xl md:text-6xl font-black text-white tracking-tight mb-4 text-shadow-custom">Apple for Enterprise</h1>
          <p className="font-opensans text-lg text-gray-300 max-w-2xl mx-auto font-medium">Empower your workforce with the world's most innovative technology, procured directly through The Battlefield Online.</p>
        </div>
      </section>

      {/* 2. Brand Description & Categories */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-16 text-center">
        <div className="flex flex-wrap justify-center gap-4">
          <span className="px-6 py-2 bg-white border border-gray-200 rounded-full font-montserrat font-bold text-xs uppercase tracking-widest text-brand-matte shadow-sm">MacBook</span>
          <span className="px-6 py-2 bg-white border border-gray-200 rounded-full font-montserrat font-bold text-xs uppercase tracking-widest text-brand-matte shadow-sm">iPad</span>
          <span className="px-6 py-2 bg-white border border-gray-200 rounded-full font-montserrat font-bold text-xs uppercase tracking-widest text-brand-matte shadow-sm">iPhone</span>
          <span className="px-6 py-2 bg-white border border-gray-200 rounded-full font-montserrat font-bold text-xs uppercase tracking-widest text-brand-matte shadow-sm">Accessories</span>
        </div>
      </section>

      {/* 3. Featured Products Grid (Dynamic Data!) */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 mb-20">
        <h2 className="font-montserrat text-3xl font-black text-brand-matte mb-10 border-b-2 border-gray-200 pb-4">Featured Apple Hardware</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {appleProducts.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id} className="product-card group bg-white border border-gray-100 rounded-3xl overflow-hidden flex flex-col hover:shadow-xl hover:border-brand-emerald transition-all duration-300">
              
              <div className="relative h-56 bg-gray-50 flex items-center justify-center p-6">
                {/* Bulk Tag Badge */}
                {product.isBulkAvailable && (
                  <div className="absolute top-4 left-4 bg-brand-military text-white text-[0.65rem] font-bold uppercase tracking-widest px-3 py-1 rounded-full z-10">Bulk Order</div>
                )}
                <img src={product.image} alt={product.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" />
              </div>
              
              <div className="p-6 flex flex-col flex-grow border-t border-gray-50">
                <p className="font-montserrat text-xs text-gray-400 font-bold mb-1 uppercase tracking-widest">{product.brand}</p>
                <h3 className="font-montserrat font-bold text-lg text-brand-matte mb-2">{product.title}</h3>
                
                <ul className="mb-4 space-y-1">
                  {product.specifications.slice(0,2).map((spec, i) => (
                    <li key={i} className="text-xs font-opensans text-gray-500 flex items-center gap-2"><span className="text-brand-emerald">▸</span>{spec}</li>
                  ))}
                </ul>

                <p className="font-montserrat text-xl font-black text-brand-emerald mb-4 mt-auto">
                  R {product.priceExVat.toLocaleString()} <span className="text-[0.6rem] text-gray-400 font-normal tracking-widest">EX VAT</span>
                </p>
                <button className="w-full py-3 border-2 border-brand-matte text-brand-matte font-montserrat font-bold text-xs uppercase tracking-widest rounded-xl group-hover:bg-brand-matte group-hover:text-white transition-colors">View Product</button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Corporate Procurement CTA */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="bg-brand-matte rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden border-l-4 border-brand-emerald shadow-2xl">
          <div className="absolute w-[400px] h-[400px] rounded-full bg-brand-emerald opacity-10 blur-[80px] top-0 right-0 transform translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-montserrat text-3xl md:text-4xl font-black text-white mb-4">Need Apple devices for your whole team?</h2>
            <p className="font-opensans text-gray-400 text-lg">Whether it's deploying 50 new MacBooks or securing executive iPads for corporate gifting, our procurement team is ready to assist with quantity-based volume pricing.</p>
          </div>
          
          <div className="relative z-10 shrink-0 flex flex-col gap-4 w-full md:w-auto">
            <Link href="/#bulk-orders" className="cta-btn text-center font-montserrat font-bold px-10 py-5 rounded-xl text-sm uppercase tracking-wide">
              Request Bulk Quotation
            </Link>
            <Link href="/#corporate-hub" className="text-center font-montserrat font-bold px-10 py-4 rounded-xl text-sm uppercase tracking-wide text-brand-lime border border-brand-lime hover:bg-brand-lime hover:text-brand-matte transition-colors">
              Explore Executive Gifting
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}