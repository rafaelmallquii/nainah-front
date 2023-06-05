import Test from "@/components/test/test";

export const metadata = {
  title: "Catalogs",
  description:
    "This is a meta description. Welcome to slingacademy.com. Happy coding and have a nice day",
};

export default function ({ searchParams }) {
  const { perro } = searchParams;

  return (
    <div className="container">
      <Test />
    </div>
  );
}
