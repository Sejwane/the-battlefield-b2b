import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-brand-white sticky top-0 z-50 border-b border-gray-200 shadow-sm">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between gap-8">
        <Link href="/" className="flex items-center gap-3.5 shrink-0 group">
          <div className="w-12 h-12 rounded-full border-[3.5px] border-brand-military flex items-center justify-center text-2xl font-montserrat font-black text-brand-lime transition-transform duration-300 group-hover:scale-105">B</div>
          <span className="text-[1.35rem] font-montserrat font-bold tracking-[0.2em] text-brand-military pt-0.5">THE BATTLEFIELD</span>
        </Link>
        <div className="flex-1 max-w-3xl relative hidden lg:block">
          <input type="text" placeholder="Search premium brands, products, or categories..." className="w-full bg-gray-50 border border-gray-200 text-brand-matte text-sm rounded-full pl-6 pr-12 py-3.5 focus:outline-none focus:bg-brand-white focus:border-brand-emerald focus:ring-2 focus:ring-brand-emerald/20 transition-all placeholder-gray-400 shadow-inner font-opensans" />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-matte text-brand-white p-2 rounded-full hover:bg-brand-emerald transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
        </div>
        <div className="flex items-center gap-6 shrink-0 font-montserrat">
          <Link href="/#bulk-orders" className="hidden xl:block text-xs font-semibold text-brand-matte hover:text-brand-emerald transition-colors uppercase tracking-wider">Request Quote</Link>
          <Link href="#" className="flex flex-col items-center text-brand-matte hover:text-brand-emerald transition-colors"><svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg><span className="text-[0.65rem] font-semibold uppercase">Login</span></Link>
          <Link href="#" className="flex flex-col items-center text-brand-matte hover:text-brand-emerald transition-colors relative"><span className="absolute -top-1 -right-2 bg-brand-emerald text-brand-white text-[0.6rem] font-bold w-4 h-4 flex items-center justify-center rounded-full">0</span><svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg><span className="text-[0.65rem] font-semibold uppercase">Cart</span></Link>
          <Link href="#" className="bg-brand-emerald text-brand-white p-2.5 rounded-full hover:bg-brand-lime transition-colors shadow-md shadow-brand-emerald/20"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"/></svg></Link>
        </div>
      </div>
      <nav className="bg-brand-white border-t border-gray-100 shadow-sm relative z-10">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 overflow-x-auto flex justify-center">
          <ul className="flex items-center gap-8 xl:gap-10 text-[0.8rem] font-montserrat font-bold text-brand-matte uppercase tracking-widest whitespace-nowrap py-4">
            <li><Link href="/" className="hover:text-brand-emerald transition-colors">Home</Link></li>
            <li><Link href="/#shop-brand" className="hover:text-brand-emerald transition-colors">Shop by Brand</Link></li>
            <li><Link href="/#divisions-ecosystem" className="hover:text-brand-emerald transition-colors">Shop by Category</Link></li>
            <li><Link href="/#corporate-hub" className="text-brand-emerald hover:text-brand-lime transition-colors">Corporate Gifting</Link></li>
            <li><Link href="/#bulk-orders" className="hover:text-brand-emerald transition-colors">Bulk Orders</Link></li>
            <li><Link href="/#featured-collections" className="text-brand-military hover:text-brand-matte transition-colors">Deals & Offers</Link></li>
            <li><Link href="/#about" className="hover:text-brand-emerald transition-colors">About</Link></li>
            <li><Link href="/#contact" className="hover:text-brand-emerald transition-colors">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}