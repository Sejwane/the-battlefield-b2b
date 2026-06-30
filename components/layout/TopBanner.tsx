export default function TopBanner() {
  return (
    <div className="bg-brand-military text-brand-white text-xs font-montserrat font-semibold py-2.5 overflow-hidden flex items-center justify-center tracking-wide">
      <div className="w-full px-6 text-center">
        <span className="inline-block mx-4">★ Corporate gifting now available</span>
        <span className="inline-block mx-4">★ Request a bulk quotation</span>
        <span className="inline-block mx-4 hidden md:inline-block">★ SADC and international business enquiries welcome</span>
        <span className="inline-block mx-4 hidden lg:inline-block">★ Premium brand procurement for businesses</span>
      </div>
    </div>
  );
}