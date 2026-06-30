
import HeroCarousel from "../components/home/HeroCarousel";
import ShopByBrand from "../components/home/ShopByBrand";
import TrendingProducts from "../components/home/TrendingProducts";
import DivisionsEcosystem from "../components/home/DivisionsEcosystem";
import ExpansionRoadmap from "../components/home/ExpansionRoadmap";
import CorporateHub from "../components/home/CorporateHub";
import BulkOrders from "../components/home/BulkOrders";
import FeaturedCollections from "../components/home/FeaturedCollections";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <ShopByBrand />
      <TrendingProducts />
      <DivisionsEcosystem />
      <ExpansionRoadmap />
      <CorporateHub />
      <BulkOrders />
      <FeaturedCollections />

      

    </main>
  );
}