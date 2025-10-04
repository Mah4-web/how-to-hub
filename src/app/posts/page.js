import { db } from "@/utils/dbConnection";
import PostCard from "../components/PostCard";
import Styles from "./posts.module.css";

export default async function PostsPage({ searchParams }) {
    const query = await searchParams;
    const filter = query.filter;

// I wanted to do SELECT title.... from posts but I am doing it for less headache

    const response = await db.query("SELECT * FROM blogs");
    let posts = response.rows;

  // Filter by topic
    if (filter) {
    posts = posts.filter((post) => String(post.topic_id) === filter);
    }

  // Sort posts by post_title asc or desc 
    if (query.sort === "asc") {
    posts.sort((a, b) => {
        return a.post_title.localeCompare(b.post_title);
    });
    } else if (query.sort === "desc") {
    posts.sort((a, b) => {
        return b.post_title.localeCompare(a.post_title);
    });
    }

    return (
    <>
        <h1 className={Styles.h1}>Posts</h1>

        <section className={Styles.postFilters}>
        <p>Sort:</p>
        <a href="/posts?sort=asc"
        className="text-indigo-600 font-bold hover:bg-purple-300 hover:text-black"
        >Sort alphabetical A-Z
        </a>
        <a href="/posts?sort=desc" 
        className="text-indigo-600 font-bold hover:bg-purple-300 hover:text-black"
        >Sort reverse alphabetical Z-A
        </a>
        </section>

        <section className={Styles.posts}>
        {posts.length > 0 ? (
            posts.map((post) => 
            <PostCard key={post.id} post={post} />)
        ) : (
            <p>No posts found for this topic.</p>
        )}
        </section>
    </>
    );
}
