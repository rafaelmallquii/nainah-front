export default function Container({ children }) {
  return (
    <div className="mx-auto w-full max-w-[30rem] md:max-w-[68.75rem]">
      {children}
    </div>
  );
}
