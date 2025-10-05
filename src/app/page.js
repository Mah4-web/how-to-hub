import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <div className="mb-4 bg-indigo-100 text-indigo-600 rounded-full px-6 py-2 font-semibold uppercase tracking-wide">
    Learn, Create, Share
  </div>
      <h1 className="text-9xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 hover:bg-purple-300 p-2 rounded transition">
        Welcome to The How-To Hub
      </h1>
      <p className="mt-4 text-gray-700">
        Your ultimate destination for step-by-step tutorials, practical guides, and expert tips. 
        From cooking and gardening to programming and fitness, we&apos;ve got you covered!
      </p>
      
      <Link href="/posts">
        <button className="mt-6 bg-indigo-600 hover:bg-purple-500 text-white font-semibold py-2 px-4 rounded transition">
          Explore Posts
        </button>
      </Link>
    </main>
  );
}
