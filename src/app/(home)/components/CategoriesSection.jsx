"use client";
import { useHome } from "@/lib/context/HomeContext";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";

export default function CategoriesSection() {
  const { categories, settings } = useHome();
  const [components, setComponents] = useState([]);

  useEffect(() => {
    buildComponents();
  }, []);

  const buildComponents = () => {
    const current = categories?.map((category) => {
      return {
        id: category.id,
        render: () => (
          <InsideLink title={category.title}>
            <CustomImage src={category.src} />
          </InsideLink>
        )
      };
    });

    current.push({
      id: 3,
      render: () => (
        <InsideLink title="SEE MORE">
          <img
            src={settings.site_banner_collections}
            className="w-full h-full object-cover"
          />
        </InsideLink>
      )
    });

    current.push({
      id: 5,
      render: () => (
        <div className="w-full h-full rounded-[20px] border-solid border-[1px] border-black flex flex-col items-center justify-center gap-2">
          <span className="text-xs">MODERNITY FOR YOU</span>
          <h3 className="text-base">WOMEN'S BAGS</h3>
          <button className="text-xs border-[1px] border-solid border-black py-[5px] px-[13px]">
            BUY NOW
          </button>
        </div>
      )
    });

    setComponents(current);
  };

  const InsideLink = ({ title, href = "/", children }) => {
    return (
      <div className="relative h-full">
        {children}
        <div className="absolute inset-0 flex items-center justify-center">
          <Link
            href={href}
            className="block text-xs rounded-sm shadow-lg bg-white/75 text-cpink-300 py-[5px] px-[13px]"
          >
            {title}
          </Link>
        </div>
      </div>
    );
  };

  return (
    <section className="p-5">
      <div className="text-center">
        <h2 className="text-xl text-black font-bold">CATEGORIES</h2>
        <p className="text-xs text-[rgba(36,50,50,0.5)] mt-3 max-w-[35ch] mx-auto">
          Discover a stunning collection of products that combine style and
          functionality.
        </p>
      </div>
      <div className="grid grid-gallery gap-4 mt-4">
        {(components || []).map((component) => {
          return (
            <CategoryItem key={component.id} category={component}>
              {component.render()}
            </CategoryItem>
          );
        })}
      </div>
    </section>
  );
}

function CustomImage({ src }) {
  return <img src={src} alt="" className="w-full h-full object-cover" />;
}

function CategoryItem({ category, children }) {
  return (
    <div
      className="relative"
      style={{
        gridArea: `img${category.id}`
      }}
    >
      {children}
    </div>
  );
}
