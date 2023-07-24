import Container from "@/lib/ui/Container";
import Image from "next/image";

const items = [
  {
    icon: "/icons/categoryBar/Shoes.svg",
    title: "SHOES"
  },
  {
    icon: "/icons/categoryBar/Handbags.svg",
    title: "HANDBAGS"
  },
  {
    icon: "/icons/categoryBar/Heels.svg",
    title: "HEELS"
  },
  {
    icon: "/icons/categoryBar/Accesories.svg",
    title: "ACCESORIES"
  },
  {
    icon: "/icons/categoryBar/Girls.svg",
    title: "GIRLS"
  }
];

export default function CategoryBar() {
  return (
    <div className="bg-[rgba(255,190,206,1)] p-5">
      <div className="flex justify-between items-center mx-auto w-full max-w-[30rem] md:max-w-[68.75rem]">
        {items.map((item, index) => (
          <Item key={index} icon={item.icon} title={item.title} />
        ))}
      </div>
    </div>
  );
}

function Item({ icon, title }) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={icon}
        width={28}
        height={28}
        alt={title}
        className="scale-[1.4]"
      />
      <p className="text-xs mt-3 text-[rgba(36,50,50,1)]">{title}</p>
    </div>
  );
}
