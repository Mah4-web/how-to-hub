import Link from "next/link";
import Image from "next/image";

export default function PostCard({ post }) {
    const textPreview =
    post.content.length > 100
        ? post.content.slice(0, 100) + "..."
        : post.content;

    return (
    <section className="border border-indigo-300 rounded shadow p-4 hover:shadow-lg transition">
        {post.image_url && (
        <div className="relative w-full h-48 mb-3 rounded overflow-hidden">
            <Image
            src={post.image_url}
            alt={post.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority={false}
            />
        </div>
        )}

        <h2 className="text-2xl font-semibold mb-1">
        <Link href={`/articles/${post.id}`} className="hover:underline">
            {post.title}
        </Link>
        </h2>

        {post.description && <p className="mb-2 text-gray-700">{post.description}</p>}

        {post.content && (
        <p className="text-gray-600">
            {textPreview}{" "}
            {post.content.length > 100 && (
            <Link href={`/posts/${post.id}`} className="text-indigo-600 hover:underline">
                Read More
            </Link>
            )}
        </p>
        )}
    </section>
    );
}
