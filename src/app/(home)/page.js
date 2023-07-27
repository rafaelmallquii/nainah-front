"use client";

import HeroBanner from "./components/HeroBanner.jsx";
import CategoryBar from "./components/CategoryBar";
import CategoriesSection from "./components/CategoriesSection";
import BestSellerSection from "./components/BestSellerSection";
import NewCollectionSection from "./components/NewCollectionSection";
import HandbagsSection from "./components/HandbagsSection";
import Container from "@/lib/ui/Container.jsx";
import { useHome } from "@/lib/context/HomeContext.jsx";

export default function () {
  const { catalogs, settings } = useHome();

  const sortedCatalogs = catalogs.sort((a, b) => a.order - b.order);

  return (
    <>
      <HeroBanner
        site_banner_small={settings.site_banner_small}
        site_banner_large={settings.site_banner_large}
      />
      <CategoryBar />
      <main>
        <Container>
          <CategoriesSection />
        </Container>
        <BestSellerSection />
        {sortedCatalogs.map((catalog, index) => (
          <NewCollectionSection
            key={index}
            active={catalog.active}
            banner={catalog.banner}
            name={catalog.name}
            description={catalog.description}
            products={catalog.products}
            show_quantity={catalog.show_quantity}
          />
        ))}
        <HandbagsSection />
      </main>
    </>
  );
}
