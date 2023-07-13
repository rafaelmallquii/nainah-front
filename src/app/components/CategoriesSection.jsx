import Image from "next/image";

const images = [
  {
    id: 1,
    src: "https://images.placeholders.dev/?width=100&height=100&text=1"
  },
  ,
  {
    id: 2,
    src: "https://images.placeholders.dev/?width=100&height=100&text=2"
  },
  {
    id: 3,
    src: "https://images.placeholders.dev/?width=100&height=100&text=3"
  },
  {
    id: 4,
    src: "https://images.placeholders.dev/?width=100&height=100&text=4"
  },
  {
    id: 5,
    src: "https://images.placeholders.dev/?width=100&height=100&text=5"
  }
];

export default function CategoriesSection() {
  return (
    <div className="bg-white p-5">
      <div className="text-center">
        <h2 className="text-xl text-black font-bold">CATEGORIES</h2>
        <p className="text-xs text-[rgba(36,50,50,0.5)] mt-3 max-w-[35ch] mx-auto">
          Discover a stunning collection of products that combine style and
          functionality.
        </p>
      </div>
      <div className="grid grid-gallery gap-4 mt-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative"
            style={{
              gridArea: `img${image.id}`
            }}
          >
            <img
              src={image.src}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
