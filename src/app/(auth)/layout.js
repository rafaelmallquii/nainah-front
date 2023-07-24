export default function ({ children }) {
  return (
    <div className="h-screen flex items-center">
      <div className="max-w-[370px] mx-auto rounded-lg shadow-lg p-6">
        {children}
      </div>
    </div>
  );
}
