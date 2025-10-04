import Link from "next/link";

export default function PostCard({ post }) {
    return (
        <section className="border border-indigo-300 rounded shadow p-4 hover:shadow-lg transition">
            {post.image_url && (
                <img
                    src={post.image_url}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded mb-3"
                />
            )}
            <h2 className="text-2xl font-semibold mb-1">
                <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </h2>
            {post.description && <p className="mb-2">{post.description}</p>}
        </section>
    );
}
