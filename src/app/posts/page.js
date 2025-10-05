import Link from "next/link";

import { db } from "@/utils/dbConnection";
import PostCard from "../Components/PostCard";
import Styles from "./posts.module.css";

export default async function PostsPage({ searchParams }) {

    const query = await searchParams;
    const filter = query.filter || null;
    const sort = query.sort || null;

  // Fetch all posts (articles)
    const response = await db.query("SELECT * FROM articles");
    let posts = response.rows;

  // Filter by subject_id if filter is present for categories
    if (filter) {
    posts = posts.filter((post) => String(post.subject_id) === filter);
    }

  // Sort by title asc or desc
    if (sort === "asc") {
    posts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === "desc") {
    posts.sort((a, b) => b.title.localeCompare(a.title));
    }

    return (
    <>
        <h1 className="text-5xl font-bold text-center mb-6 underline bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
        Posts
        </h1>

        <section className={Styles.postFilters}>
        <Link href="/posts?sort=asc"
            className="text-indigo-600 font-bold hover:bg-purple-300 hover:text-black mr-4"
        >
            Sort alphabetical A-Z
        </Link>
        <Link
            href="/posts?sort=desc"
            className="text-indigo-600 font-bold hover:bg-purple-300 hover:text-black"
        >
            Sort reverse alphabetical Z-A
       </Link>
        </section>

        <section className={Styles.posts}>
        {posts.length > 0 ? (
            posts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
            <p>No posts found for this category.</p>
        )}
        </section>
    </>
    );
}
