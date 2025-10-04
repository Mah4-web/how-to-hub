import Image from "next/image";
import { db } from "@/utils/dbConnection";
import Form from "@/app/Components/Form";
import CommentList from "@/app/Components/CommentList";
import DeleteButton from "@/app/Components/DeleteButton";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// handle deleting post
async function handleDeletePost(formData) {
    "use server";
    const postId = formData.get("postId");
    if (!postId) return;
    await db.query("DELETE FROM articles WHERE id = $1", [postId]);
    revalidatePath("/posts");
    redirect("/posts");
}

// handle deleting comment
async function handleAddComment(formData, postId) {
    "use server";
    const name = formData.get("name");
    const comment = formData.get("comment");
    if (!name || !comment) return;
    await db.query(
    `INSERT INTO reviews (name, comment, article_id) VALUES ($1, $2, $3)`,
    [name, comment, postId]
    );
    revalidatePath(`/posts/${postId}`);
    redirect(`/posts/${postId}`);
}

export default async function PostDetailPage({ params }) {
    const postId = params.postId;
    const postResponse = await db.query("SELECT * FROM articles WHERE id = $1", [postId]);
    const post = postResponse.rows[0];
    if (!post) {
    return <p>Post not found.</p>;
    }

    const commentsResponse = await db.query("SELECT * FROM reviews WHERE article_id = $1 ORDER BY id DESC", [postId]);
    const comments = commentsResponse.rows;

    return (
    <main>
{/* rendering individual post */}
        <section>
        <h1>{post.title}</h1>
        {post.image_url && (
            <Image
            src={post.image_url}
            alt={post.title}
            width={800}      // Adjust width as needed
            height={400}     // Adjust height as needed
            />
        )}

        {/* delete */}
        {post.description && <p>{post.description}</p>}
        <div>{post.content}</div>
        <form action={() => handleDeletePost(postId)}>
            <button
            type="submit"
            onClick={(e) => {
                if (!confirm("Are you sure you want to delete this post?")) {
                e.preventDefault();
                }
            }}
            >
            Delete Post 🗑️
            </button>
            </form>
        </section>

        <section>

    <h2>Leave a Comment</h2>
    <Form postId={postId} 
    onSubmitAction={(formData) => handleAddComment(formData, postId)} />
    
    <h2>Comments</h2>
    <CommentList comments={comments} postId={postId} />
</section>

    </main>
    );
}
