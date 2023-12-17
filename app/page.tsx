import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl text-yellow-400 font-bold mb-4">
          Welcome to the Galaxy
        </h1>
        <p className="text-white text-lg mb-8">May the Force be with you!</p>
        <Link href="/characters">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded">
            Explore
          </button>
        </Link>
      </div>
    </main>
  );
}
