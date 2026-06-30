export default function BulkOrders() {
  return (
    <section id="bulk-orders" className="py-24 bg-brand-white border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Column: Text & Features */}
        <div>
          <p className="font-montserrat uppercase tracking-[0.3em] text-xs text-brand-military font-bold mb-4 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald"></span>
            B2B Procurement
          </p>
          <h2 className="font-montserrat text-4xl md:text-5xl font-black text-brand-matte tracking-tight mb-6">Business Bulk Orders</h2>
          <p className="font-opensans text-lg text-gray-600 mb-10 leading-relaxed">
            Allow companies to request quantity-based pricing seamlessly. Whether you need enterprise tech deployments or large-scale promotional gear, our dedicated procurement team is ready to assist.
          </p>
          
          <ul className="space-y-6 mb-10">
            <li className="flex items-center gap-4 font-montserrat font-bold text-sm text-brand-matte uppercase tracking-wide">
              <div className="w-10 h-10 rounded-full bg-brand-lime/10 flex items-center justify-center text-brand-lime shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              Quantity-Based Volume Discounts
            </li>
            <li className="flex items-center gap-4 font-montserrat font-bold text-sm text-brand-matte uppercase tracking-wide">
              <div className="w-10 h-10 rounded-full bg-brand-lime/10 flex items-center justify-center text-brand-lime shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              Custom Branding & Personalization
            </li>
            <li className="flex items-center gap-4 font-montserrat font-bold text-sm text-brand-matte uppercase tracking-wide">
              <div className="w-10 h-10 rounded-full bg-brand-lime/10 flex items-center justify-center text-brand-lime shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              SADC & International Delivery Support
            </li>
          </ul>
        </div>

        {/* Right Column: The Form */}
        <div className="bg-gray-50 p-8 md:p-12 rounded-[2rem] border border-gray-200 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-emerald opacity-10 rounded-bl-[100px] pointer-events-none"></div>
          <form action="#" method="POST" className="space-y-6 relative z-10">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="form-label">Company Details *</label>
                <input type="text" placeholder="Company Name" className="form-input" required />
              </div>
              <div>
                <label className="form-label">Contact Person *</label>
                <input type="text" placeholder="Full Name" className="form-input" required />
              </div>
            </div>

            <div>
              <label className="form-label">Product Interest *</label>
              <select className="form-input text-gray-500" required defaultValue="">
                <option value="" disabled>Select Category or Brand...</option>
                <option value="ict">ICT & Technology Devices</option>
                <option value="gifting">Premium Corporate Gifting</option>
                <option value="apparel">Corporate Clothing & Merchandise</option>
                <option value="other">Other Procurement Need</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="form-label">Quantity Required *</label>
                <input type="number" placeholder="e.g., 500" className="form-input" required />
              </div>
              <div>
                <label className="form-label">Delivery Province / Country *</label>
                <input type="text" placeholder="e.g., Gauteng, South Africa" className="form-input" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="form-label">Branding Required?</label>
                <div className="flex items-center gap-6 mt-3">
                  <label className="flex items-center gap-2 cursor-pointer font-opensans text-sm font-semibold">
                    <input type="radio" name="branding" className="w-4 h-4 text-brand-emerald focus:ring-brand-emerald border-gray-300" defaultChecked /> Yes
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer font-opensans text-sm font-semibold">
                    <input type="radio" name="branding" className="w-4 h-4 text-brand-emerald focus:ring-brand-emerald border-gray-300" /> No
                  </label>
                </div>
              </div>
              <div>
                <label className="form-label">Required Delivery Date *</label>
                <input type="date" className="form-input text-gray-500" required />
              </div>
            </div>

            <div>
              <label className="form-label">Upload Brief / Purchase Specification</label>
              <label className="mt-2 flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-xl appearance-none cursor-pointer hover:border-brand-emerald hover:bg-gray-50 focus:outline-none">
                <span className="flex flex-col items-center justify-center space-y-2">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                  </svg>
                  <span className="font-opensans font-semibold text-sm text-gray-500">
                    Drop files to attach, or <span className="text-brand-emerald underline">browse</span>
                  </span>
                </span>
                <input type="file" name="file_upload" className="hidden" />
              </label>
            </div>

            <button type="submit" className="cta-btn w-full font-montserrat font-bold py-4 rounded-xl text-sm uppercase tracking-wide mt-4">
              Request Bulk Quote
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}