import Link from "next/link";

export default function FeaturedCollections() {
  return (
    <section id="featured-collections" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="font-montserrat uppercase tracking-[0.3em] text-xs text-brand-military font-bold mb-4 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald"></span>
              Curated Offerings
            </p>
            <h2 className="font-montserrat text-4xl md:text-5xl font-black text-brand-matte tracking-tight">Featured Collections</h2>
          </div>
          <Link href="/collections" className="font-montserrat font-bold text-sm text-brand-military hover:text-brand-emerald transition-colors uppercase tracking-widest flex items-center gap-2">
            View All Collections 
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>
        </div>
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[800px] md:h-[600px]">
          
          {/* Tile 1: Apple Collection (Tall) */}
          <Link href="/apple" className="group relative rounded-3xl overflow-hidden shadow-lg md:col-span-1 md:row-span-2 flex items-end">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-matte/90 via-brand-matte/20 to-transparent"></div>
            <div className="relative z-10 p-8 w-full">
              <h3 className="font-montserrat text-2xl font-bold text-brand-white mb-2">Apple Business Collection</h3>
              <p className="font-opensans text-gray-300 text-sm font-medium flex items-center gap-2 group-hover:text-brand-lime transition-colors">
                Shop Now 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </p>
            </div>
          </Link>
          
          {/* Tile 2: Office Tech (Wide) */}
          <Link href="/office-tech" className="group relative rounded-3xl overflow-hidden shadow-lg md:col-span-2 md:row-span-1 flex items-end">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-matte/90 via-brand-matte/20 to-transparent"></div>
            <div className="relative z-10 p-8 w-full">
              <h3 className="font-montserrat text-2xl font-bold text-brand-white mb-2">Office Technology Collection</h3>
              <p className="font-opensans text-gray-300 text-sm font-medium flex items-center gap-2 group-hover:text-brand-lime transition-colors">
                Shop Now 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </p>
            </div>
          </Link>
          
          {/* Tile 3: Smeg Business (Small) */}
          <Link href="/smeg" className="group relative rounded-3xl overflow-hidden shadow-lg md:col-span-1 md:row-span-1 flex items-end">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549488344-c49129ef9eb9?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-matte/90 via-brand-matte/20 to-transparent"></div>
            <div className="relative z-10 p-8 w-full">
              <h3 className="font-montserrat text-xl font-bold text-brand-white mb-2">Smeg Business</h3>
              <p className="font-opensans text-gray-300 text-sm font-medium flex items-center gap-2 group-hover:text-brand-lime transition-colors">
                Shop Now 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </p>
            </div>
          </Link>
          
          {/* Tile 4: Deals of the Month (Graphic) */}
          <Link href="/deals" className="group relative rounded-3xl overflow-hidden shadow-lg md:col-span-1 md:row-span-1 flex items-end">
            <div className="absolute inset-0 bg-brand-emerald transition-transform duration-700 group-hover:scale-105 flex items-center justify-center">
              <div className="absolute w-64 h-64 border-8 border-white/20 rounded-full -top-10 -right-10"></div>
              <div className="absolute w-40 h-40 border-8 border-white/20 rounded-full bottom-10 -left-10"></div>
            </div>
            <div className="relative z-10 p-8 w-full text-center">
              <h3 className="font-montserrat text-2xl font-bold text-brand-white mb-2">Deals of the Month</h3>
              <p className="font-opensans text-brand-military font-bold text-sm flex items-center justify-center gap-2 uppercase tracking-widest">
                View Offers 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </p>
            </div>
          </Link>
          
        </div>
      </div>
    </section>
  );
}