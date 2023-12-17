export default function Loading() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {[...Array(12)].map((_, index) => (
        <li
          key={index}
          className="mb-8 w-full rounded-lg bg-gray-300 shadow-md overflow-hidden"
        >
          <div className="aspect-w-2 aspect-h-3">
            <div className="animate-pulse bg-gray-400 w-full h-full"></div>
          </div>
          <div className="p-4">
            <div className="animate-pulse bg-gray-400 h-4 w-3/4 mb-4"></div>
            <div className="animate-pulse bg-gray-400 h-4 w-1/2"></div>
          </div>
        </li>
      ))}
    </ul>
  );
}
