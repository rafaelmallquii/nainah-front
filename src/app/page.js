"use client";

import HeroBanner from "@/app/components/HeroBanner";
import CategoryBar from "@/app/components/CategoryBar";
import CategoriesSection from "@/app/components/CategoriesSection";
import BestSellerSection from "@/app/components/BestSellerSection";
import NewCollectionSection from "@/app/components/NewCollectionSection";
import HandbagsSection from "@/app/components/HandbagsSection";
import Main from "@/lib/ui/Main";

export const metadata = {
  title: "Home",
  description:
    "This is a meta description. Welcome to slingacademy.com. Happy coding and have a nice day"
};

export default function () {
  return (
    <div>
      <HeroBanner
        src={"/img/hero-banner.jpg"}
        width={343}
        height={247}
        alt="Hero Banner"
      />
      <CategoryBar />
      <Main>
        <CategoriesSection />
        <BestSellerSection />
      </Main>
      <NewCollectionSection />
      <HandbagsSection />
    </div>
  );
}
