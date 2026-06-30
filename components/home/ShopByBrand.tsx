import Link from "next/link";

export default function ShopByBrand() {
  return (
    <section id="shop-brand" className="py-24 bg-gray-50 border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Header Block */}
        <div className="text-center mb-16">
          <p className="font-montserrat uppercase tracking-[0.3em] text-xs text-brand-military font-bold mb-4 flex items-center justify-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime"></span>
            Verified Partners
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime"></span>
          </p>
          <h2 className="font-montserrat text-4xl md:text-5xl font-black text-brand-matte tracking-tight mb-4">Shop by Brand</h2>
          <p className="font-opensans text-gray-600 max-w-2xl mx-auto">Direct procurement from the world's most trusted lifestyle and technology brands.</p>
        </div>
        
        {/* Category 1: ICT & Technology */}
        <div className="mb-16">
          <h3 className="font-montserrat text-xl font-bold text-brand-matte border-b-2 border-gray-200 pb-3 mb-8">ICT & Technology</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <Link href="/apple" className="brand-tile flex items-center justify-center bg-white border border-gray-100 rounded-2xl h-32 group relative overflow-hidden px-6">
              <img src="/Apple_Logo_1.png" alt="Apple" className="brand-logo object-contain" />
            </Link>
            <Link href="/hp" className="brand-tile flex items-center justify-center bg-white border border-gray-100 rounded-2xl h-32 group relative overflow-hidden px-6">
              <img src="/HP_logo_2025.svg" alt="HP" className="brand-logo object-contain" />
            </Link>
            <Link href="/lenovo" className="brand-tile flex items-center justify-center bg-white border border-gray-100 rounded-2xl h-32 group relative overflow-hidden px-6">
              <img src="/Lenovo_logo.png" alt="Lenovo" className="brand-logo object-contain" />
            </Link>
            <Link href="/dell" className="brand-tile flex items-center justify-center bg-white border border-gray-100 rounded-2xl h-32 group relative overflow-hidden px-6">
              <img src="/dell_logo.png" alt="Dell" className="brand-logo object-contain" />
            </Link>
            <Link href="/microsoft" className="brand-tile flex items-center justify-center bg-white border border-gray-100 rounded-2xl h-32 group relative overflow-hidden px-6">
              <img src="/Microsoft_Logo_1.png" alt="Microsoft" className="brand-logo object-contain" />
            </Link>
            <Link href="/adobe" className="brand-tile flex items-center justify-center bg-white border border-gray-100 rounded-2xl h-32 group relative overflow-hidden px-6">
              <img src="/adobe_logo.png" alt="Adobe" className="brand-logo object-contain" />
            </Link>
            <Link href="/tarsus" className="brand-tile flex items-center justify-center bg-white border border-gray-100 rounded-2xl h-32 group relative overflow-hidden px-6">
              <img src="/Tarsus_Dell-Tinder-campaign_form_logo-1.png" alt="Tarsus" className="brand-logo object-contain" />
            </Link>
            <Link href="/axiz" className="brand-tile flex items-center justify-center bg-white border border-gray-100 rounded-2xl h-32 group relative overflow-hidden px-6">
              <span className="brand-text axiz font-montserrat font-bold text-2xl tracking-widest italic text-brand-matte">AXIZ</span>
            </Link>
            <Link href="/core-group" className="brand-tile flex items-center justify-center bg-white border border-gray-100 rounded-2xl h-32 group relative overflow-hidden px-6">
              <img src="/Core_New_Logo_1_d4a42467-1417-49b7-aeba-4a105779bc49_200x.avif" alt="Core Group" className="brand-logo object-contain" />
            </Link>
          </div>
        </div>

        {/* Category 2: IMC, Gifting & Lifestyle */}
        <div>
          <h3 className="font-montserrat text-xl font-bold text-brand-matte border-b-2 border-gray-200 pb-3 mb-8">IMC, Gifting & Lifestyle</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            <Link href="/carrol-boyes" className="brand-tile flex items-center justify-center bg-white border border-gray-100 rounded-2xl h-32 group relative overflow-hidden px-6">
              <img src="/carrolboyes-logo-transparent.webp" alt="Carrol Boyes" className="brand-logo object-contain" />
            </Link>
            <Link href="/smeg" className="brand-tile flex items-center justify-center bg-white border border-gray-100 rounded-2xl h-32 group relative overflow-hidden px-6">
              <img src="/Smeg_idPF1Ehn35_1.png" alt="Smeg" className="brand-logo object-contain" />
            </Link>
            <Link href="/sir-juice" className="brand-tile flex items-center justify-center bg-white border border-gray-100 rounded-2xl h-32 group relative overflow-hidden px-6">
              <img src="/sir-fruit-sir-fruit-logo.jpeg" alt="Sir Juice" className="brand-logo object-contain" />
            </Link>
            <Link href="/le-creuset" className="brand-tile flex items-center justify-center bg-white border border-gray-100 rounded-2xl h-32 group relative overflow-hidden px-6">
              <img src="/Le_Creuset.png" alt="Le Creuset" className="brand-logo object-contain" />
            </Link>
            <Link href="/haus" className="brand-tile flex items-center justify-center bg-white border border-gray-100 rounded-2xl h-32 group relative overflow-hidden px-6">
              <span className="brand-text haus font-opensans font-semibold text-2xl tracking-[0.3em] text-brand-matte">HAUS</span>
            </Link>
            
            {/* Pure Visual Categories */}
            <Link href="/health-hygiene" className="brand-tile flex flex-col items-center justify-center bg-white border border-gray-100 rounded-2xl h-32 group relative overflow-hidden px-4 text-center transition-all duration-300">
              <svg className="w-8 h-8 text-brand-military mb-2 group-hover:text-brand-emerald transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
              </svg>
              <span className="brand-text font-montserrat font-bold text-[0.75rem] tracking-wide text-brand-matte">HEALTH & HYGIENE</span>
            </Link>
            <Link href="/hospitality" className="brand-tile flex flex-col items-center justify-center bg-white border border-gray-100 rounded-2xl h-32 group relative overflow-hidden px-4 text-center transition-all duration-300">
              <svg className="w-8 h-8 text-brand-military mb-2 group-hover:text-brand-emerald transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
              <span className="brand-text font-montserrat font-bold text-[0.75rem] tracking-wide text-brand-matte">HOSPITALITY</span>
            </Link>
            <Link href="/food-beverage" className="brand-tile flex flex-col items-center justify-center bg-white border border-gray-100 rounded-2xl h-32 group relative overflow-hidden px-4 text-center transition-all duration-300">
              <svg className="w-8 h-8 text-brand-military mb-2 group-hover:text-brand-emerald transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"></path>
              </svg>
              <span className="brand-text font-montserrat font-bold text-[0.75rem] tracking-wide text-brand-matte">FOOD & BEVERAGE</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}