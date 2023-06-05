import Link from "next/link";


const categories = [

    {

        name: "Shoes",

        href: "/shoes",

        icon: "/icons/categoryBar/Shoes.svg",
    },
    
    {

        name: "Handbags",

        href: "/shoes",

        icon: "/icons/categoryBar/Handbags.svg",
    },

    {

        name: "Heels",

        href: "/shoes",

        icon: "/icons/categoryBar/Heels.svg",
    },

    {

        name: "Accessories",

        href: "/shoes",

        icon: "/icons/categoryBar/Accesories.svg",
    },

    {

        name: "Jewelry",

        href: "/shoes",

        icon: "/icons/categoryBar/Jewelry.svg",
    },
    {

        name: "Girls",

        href: "/shoes",

        icon: "/icons/categoryBar/Girls.svg",
    },


]
const Category = ({ icon, name, href }) => {
  return (
    <Link
      href={href ?? "#"}
      className="bg-cpink-50 flex flex-col gap-2 items-center justify-center"
    >
      <img
        src={icon ?? "/icons/categoryBar/Bag.svg"}
        className="w-[30px] h-[30px]"
        alt="Category Icon"
      />

      <span className="text-[10px]">{name}</span>
    </Link>
  );
};

export default function CategoryBar() {
  return (
    <div className="bg-cpink-50 flex justify-center gap-4  h-[71px]">
      

      {

        categories.map((category, index) => (

            <Category key={index} {...category} />

        ))
      }
    </div>
  );
}
