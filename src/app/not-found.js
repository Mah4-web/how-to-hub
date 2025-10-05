
import Link from "next/link";

export default function NotFound() {
    return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-8">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-2xl font-semibold mb-2">Oops! You wandered into the void 🤯</p>
        <p className="text-lg text-gray-600 mb-6">
        This page doesn’t exist… or maybe it’s just hiding from you 🕵️‍♀️
        </p>

        <Link
        href="/"
        className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
        🏠 Take me home
        </Link>

        <p className="mt-6 text-sm text-gray-400">
        Tip: If you see a black cat next, turn around 😼
        </p>
    </main>
    );
}
