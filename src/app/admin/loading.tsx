export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-16 h-16">
        <div className="absolute w-16 h-16 border-4 border-gray-200 rounded-full"></div>
        <div className="absolute w-16 h-16 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
      </div>
    </div>
  );
}
