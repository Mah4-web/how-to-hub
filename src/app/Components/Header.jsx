import Link from "next/link";

export default function Header() {
    return (
    <header className="bg-purple-50 p-4 shadow-md max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
    
        <h1 className="text-2xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
        How-To-Hub
        </h1>

        <nav className="flex space-x-6">
        <Link
            href="/"
            className="text-lg font-medium text-indigo-600 hover:bg-purple-300 hover:text-black transition-colors"
        >
            Home
        </Link>

        <Link
            href="/posts"
            className="text-lg font-medium text-indigo-600 hover:bg-purple-300 hover:text-black transition-colors"
        >
            Posts
        </Link>
       
        </nav>
    </header>
    );
}
