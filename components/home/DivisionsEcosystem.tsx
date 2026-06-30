export default function DivisionsEcosystem() {
  return (
    <section id="divisions-ecosystem" className="py-24 bg-brand-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Header Area */}
        <div className="text-center mb-16">
          <p className="font-montserrat uppercase tracking-[0.3em] text-xs text-brand-military font-bold mb-4 flex items-center justify-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald"></span>
            Comprehensive Solutions
            <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald"></span>
          </p>
          <h2 className="font-montserrat text-4xl md:text-5xl font-black text-brand-matte tracking-tight mb-4">Divisions & Ecosystem</h2>
          <p className="font-opensans text-gray-600 max-w-2xl mx-auto">Explore our full ecosystem of premium brands, corporate procurement solutions, and specialized business divisions.</p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          
          {/* Card 1: Corporate Gifting */}
          <div className="group flex flex-col p-8 bg-gray-50 border border-gray-200 rounded-3xl hover:bg-white hover:border-brand-emerald hover:shadow-[0_15px_30px_-10px_rgba(80,200,120,0.3)] transition-all duration-400">
            <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-brand-military mb-6 group-hover:bg-brand-emerald group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg>
            </div>
            <h3 className="font-montserrat font-black text-lg text-brand-matte mb-4 uppercase tracking-wide">Corporate Gifting</h3>
            <ul className="space-y-3 font-opensans text-sm text-gray-600 flex-1">
              <li className="flex items-start gap-2"><span className="text-brand-emerald mt-0.5">▸</span> Executive gifts</li>
              <li className="flex items-start gap-2"><span className="text-brand-emerald mt-0.5">▸</span> Luxury gifts</li>
              <li className="flex items-start gap-2"><span className="text-brand-emerald mt-0.5">▸</span> Branded hampers</li>
              <li className="flex items-start gap-2"><span className="text-brand-emerald mt-0.5">▸</span> Client & Employee gifts</li>
              <li className="flex items-start gap-2"><span className="text-brand-emerald mt-0.5">▸</span> Embassy & Conference gifts</li>
            </ul>
          </div>

          {/* Card 2: ICT & Technology */}
          <div className="group flex flex-col p-8 bg-gray-50 border border-gray-200 rounded-3xl hover:bg-white hover:border-brand-emerald hover:shadow-[0_15px_30px_-10px_rgba(80,200,120,0.3)] transition-all duration-400">
            <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-brand-military mb-6 group-hover:bg-brand-emerald group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <h3 className="font-montserrat font-black text-lg text-brand-matte mb-4 uppercase tracking-wide">ICT & Technology</h3>
            <ul className="space-y-3 font-opensans text-sm text-gray-600 flex-1">
              <li className="flex items-start gap-2"><span className="text-brand-emerald mt-0.5">▸</span> Laptops, Desktops & Tablets</li>
              <li className="flex items-start gap-2"><span className="text-brand-emerald mt-0.5">▸</span> Apple products & Accessories</li>
              <li className="flex items-start gap-2"><span className="text-brand-emerald mt-0.5">▸</span> Software & Cloud solutions</li>
              <li className="flex items-start gap-2"><span className="text-brand-emerald mt-0.5">▸</span> Cybersecurity</li>
              <li className="flex items-start gap-2"><span className="text-brand-emerald mt-0.5">▸</span> Audio visual equipment</li>
            </ul>
          </div>

          {/* Card 3: Food & Beverages */}
          <div className="group flex flex-col p-8 bg-gray-50 border border-gray-200 rounded-3xl hover:bg-white hover:border-brand-emerald hover:shadow-[0_15px_30px_-10px_rgba(80,200,120,0.3)] transition-all duration-400">
            <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-brand-military mb-6 group-hover:bg-brand-emerald group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"></path></svg>
            </div>
            <h3 className="font-montserrat font-black text-lg text-brand-matte mb-4 uppercase tracking-wide">Food & Beverages</h3>
            <ul className="space-y-3 font-opensans text-sm text-gray-600 flex-1">
              <li className="flex items-start gap-2"><span className="text-brand-emerald mt-0.5">▸</span> Sir Juice range</li>
              <li className="flex items-start gap-2"><span className="text-brand-emerald mt-0.5">▸</span> Premium beverages</li>
              <li className="flex items-start gap-2"><span className="text-brand-emerald mt-0.5">▸</span> Coffee solutions</li>
              <li className="flex items-start gap-2"><span className="text-brand-emerald mt-0.5">▸</span> Corporate catering packs</li>
              <li className="flex items-start gap-2"><span className="text-brand-emerald mt-0.5">▸</span> Event refreshments</li>
            </ul>
          </div>

          {/* Card 4: Premium Appliances */}
          <div className="group flex flex-col p-8 bg-gray-50 border border-gray-200 rounded-3xl hover:bg-white hover:border-brand-emerald hover:shadow-[0_15px_30px_-10px_rgba(80,200,120,0.3)] transition-all duration-400">
            <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-brand-military mb-6 group-hover:bg-brand-emerald group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
            </div>
            <h3 className="font-montserrat font-black text-lg text-brand-matte mb-4 uppercase tracking-wide">Premium Appliances</h3>
            <ul className="space-y-3 font-opensans text-sm text-gray-600 flex-1">
              <li className="flex items-start gap-2"><span className="text-brand-emerald mt-0.5">▸</span> Smeg appliances</li>
              <li className="flex items-start gap-2"><span className="text-brand-emerald mt-0.5">▸</span> Office appliances</li>
              <li className="flex items-start gap-2"><span className="text-brand-emerald mt-0.5">▸</span> Kitchen appliances</li>
              <li className="flex items-start gap-2"><span className="text-brand-emerald mt-0.5">▸</span> Premium lifestyle appliances</li>
            </ul>
          </div>

          {/* Card 5: Events & Hospitality */}
          <div className="group flex flex-col p-8 bg-gray-50 border border-gray-200 rounded-3xl hover:bg-white hover:border-brand-emerald hover:shadow-[0_15px_30px_-10px_rgba(80,200,120,0.3)] transition-all duration-400">
            <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-brand-military mb-6 group-hover:bg-brand-emerald group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
            </div>
            <h3 className="font-montserrat font-black text-lg text-brand-matte mb-4 uppercase tracking-wide">Events & Hospitality</h3>
            <ul className="space-y-3 font-opensans text-sm text-gray-600 flex-1">
              <li className="flex items-start gap-2"><span className="text-brand-emerald mt-0.5">▸</span> Catering & Décor support</li>
              <li className="flex items-start gap-2"><span className="text-brand-emerald mt-0.5">▸</span> Hospitality packages</li>
              <li className="flex items-start gap-2"><span className="text-brand-emerald mt-0.5">▸</span> Event gifting</li>
              <li className="flex items-start gap-2"><span className="text-brand-emerald mt-0.5">▸</span> Conference support</li>
            </ul>
          </div>

          {/* Card 6: Promotional Merch */}
          <div className="group flex flex-col p-8 bg-gray-50 border border-gray-200 rounded-3xl hover:bg-white hover:border-brand-emerald hover:shadow-[0_15px_30px_-10px_rgba(80,200,120,0.3)] transition-all duration-400">
            <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-brand-military mb-6 group-hover:bg-brand-emerald group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
            </div>
            <h3 className="font-montserrat font-black text-lg text-brand-matte mb-4 uppercase tracking-wide">Promotional Merch</h3>
            <ul className="space-y-3 font-opensans text-sm text-gray-600 flex-1">
              <li className="flex items-start gap-2"><span className="text-brand-emerald mt-0.5">▸</span> Branded merchandise</li>
              <li className="flex items-start gap-2"><span className="text-brand-emerald mt-0.5">▸</span> Corporate clothing</li>
              <li className="flex items-start gap-2"><span className="text-brand-emerald mt-0.5">▸</span> Promotional items</li>
              <li className="flex items-start gap-2"><span className="text-brand-emerald mt-0.5">▸</span> Event giveaways</li>
              <li className="flex items-start gap-2"><span className="text-brand-emerald mt-0.5">▸</span> Marketing campaign products</li>
            </ul>
          </div>

          {/* Card 7: Business Procurement (Spans 2 Columns) */}
          <div className="group flex flex-col p-8 bg-gray-50 border border-gray-200 rounded-3xl hover:bg-white hover:border-brand-emerald hover:shadow-[0_15px_30px_-10px_rgba(80,200,120,0.3)] transition-all duration-400 xl:col-span-2">
            <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-brand-military mb-6 group-hover:bg-brand-emerald group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-.586-1.414l-4.5-4.5A2 2 0 0012.5 3H11m8 14h-8M11 3v4a2 2 0 002 2h4"></path></svg>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="font-montserrat font-black text-lg text-brand-matte mb-4 uppercase tracking-wide">Business Procurement</h3>
                <p className="font-opensans text-sm text-gray-600 mb-4">A complete, seamless procurement solution designed to scale with your enterprise operations and office needs.</p>
              </div>
              <ul className="space-y-3 font-opensans text-sm text-gray-600 flex-1">
                <li className="flex items-start gap-2"><span className="text-brand-emerald mt-0.5">▸</span> Office supplies & Stationery</li>
                <li className="flex items-start gap-2"><span className="text-brand-emerald mt-0.5">▸</span> Office Furniture</li>
                <li className="flex items-start gap-2"><span className="text-brand-emerald mt-0.5">▸</span> Workplace solutions</li>
                <li className="flex items-start gap-2"><span className="text-brand-emerald mt-0.5">▸</span> Bulk procurement items</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}