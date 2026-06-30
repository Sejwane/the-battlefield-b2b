import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-matte pt-20 pb-10 border-t-4 border-brand-emerald">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: About & Branding */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-full border-2 border-brand-military flex items-center justify-center text-xl font-montserrat font-black text-brand-lime transition-transform group-hover:scale-105">
                B
              </div>
              <span className="text-lg font-montserrat font-bold tracking-[0.2em] text-brand-military pt-0.5">
                THE BATTLEFIELD
              </span>
            </Link>
            <p className="font-opensans text-gray-400 text-sm leading-relaxed mb-6">
              About The Battlefield Online. We are a premium B2B e-commerce platform specializing in corporate gifting, ICT infrastructure, and enterprise procurement.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-emerald hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-emerald hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div> {/* RESTORED: This closing div finishes Column 1 safely */}

          {/* Column 2: Explore links */}
          <div>
            <h4 className="font-montserrat font-bold text-white uppercase tracking-widest text-sm mb-6">
              Explore
            </h4>
            <ul className="space-y-3 font-opensans text-sm text-gray-400">
              <li>
                <Link href="/#shop-brand" className="hover:text-brand-emerald transition-colors">Shop by Brand</Link>
              </li>
              <li>
                <Link href="/#divisions-ecosystem" className="hover:text-brand-emerald transition-colors">Shop by Category</Link>
              </li>
              <li>
                <Link href="/#corporate-hub" className="hover:text-brand-emerald transition-colors">Corporate Gifting</Link>
              </li>
              <li>
                <Link href="/#bulk-orders" className="hover:text-brand-emerald transition-colors">Bulk Orders</Link>
              </li>
              <li>
                <a href="#" className="hover:text-brand-emerald transition-colors">SADC & International Orders</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Partnerships */}
          <div>
            <h4 className="font-montserrat font-bold text-white uppercase tracking-widest text-sm mb-6">
              Partnerships
            </h4>
            <ul className="space-y-3 font-opensans text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-brand-emerald transition-colors">Partner With Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-emerald transition-colors">Supplier Registration</a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-emerald transition-colors">Contact Details</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal policy options */}
          <div>
            <h4 className="font-montserrat font-bold text-white uppercase tracking-widest text-sm mb-6">
              Legal
            </h4>
            <ul className="space-y-3 font-opensans text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-brand-emerald transition-colors">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-emerald transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-emerald transition-colors">Refund Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-emerald transition-colors">Delivery Policy</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright notice & Holding link */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-opensans text-xs text-gray-500">
            © 2024 The Battlefield Online. All rights reserved.
          </p>
          <a href="https://thebattlefieldholdings.com" target="_blank" rel="noopener noreferrer" className="font-montserrat font-bold text-xs text-brand-military hover:text-brand-lime transition-colors uppercase tracking-widest">
            TheBattlefieldHoldings.com
          </a>
        </div>

      </div>
    </footer>
  );
}