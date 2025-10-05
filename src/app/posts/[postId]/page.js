import Link from "next/link";
import Image from "next/image";
import { db } from "@/utils/dbConnection";
import Form from "@/app/Components/Form";
import CommentList from "@/app/Components/CommentList";
import ConfirmDeletePostButton from "@/app/Components/ConfirmDeletePostButton";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function handleAddComment(formData) {
  "use server";
  const name = formData.get("name");
  const comment = formData.get("comment");
  const postId = formData.get("postId");
  if (!name || !comment || !postId) return;

  await db.query(
    `INSERT INTO reviews (name, comment, article_id) VALUES ($1, $2, $3)`,
    [name, comment, postId]
  );

  revalidatePath(`/posts/${postId}`);
  redirect(`/posts/${postId}`);
}

// Server action to delete a post
export async function handleDeletePost(formData) {
  "use server";
  const postId = formData.get("postId");
  if (!postId) return;

  await db.query("DELETE FROM articles WHERE id = $1", [postId]);

  revalidatePath("/posts");
  redirect("/posts");
}

// Server action to delete individual comment
async function handleDeleteComment(formData) {
  "use server";
  const commentId = formData.get("commentId");
  const postId = formData.get("postId");
  if (!commentId || !postId) return;

  await db.query("DELETE FROM reviews WHERE id = $1", [commentId]);

  revalidatePath(`/posts/${postId}`);
  redirect(`/posts/${postId}`);
}

export default async function PostDetailPage({ params }) {
  const { postId } = await params; 

  const postResponse = await db.query("SELECT * FROM articles WHERE id = $1", [postId]);
  const post = postResponse.rows[0];
  if (!post) {
    return <p>Post not found</p>;
  }

  const commentsResponse = await db.query(
    "SELECT * FROM reviews WHERE article_id = $1 ORDER BY id DESC",
    [postId]
  );
  const comments = commentsResponse.rows;

  return (
    <main className="max-w-3xl mx-auto my-8 p-4">
      <section>
        <h1 className="text-4xl font-bold mb-4 text-center">{post.title}</h1>

        {post.image_url && (
          <div className="flex justify-center mb-6">
            <Image
              src={post.image_url}
              alt={post.title}
              width={800}
              height={400}
              style={{ objectFit: "contain" }}
            />
          </div>
        )}

        {post.description && (
          <p className="text-lg mb-4 text-center">{post.description}</p>
        )}

        <article className="max-w-full mb-10 text-base leading-relaxed">{post.content}</article>

       
        <ConfirmDeletePostButton postId={postId} onDelete={handleDeletePost} />

        <Link
          href={`/posts/${postId}/edit`}
          className="text-medium bg-indigo-200 text-black underline hover:text-blue-800 block mt-2"
        >
          ✏️ Edit Post
        </Link>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">Leave a Comment</h2>
        <Form postId={postId} onSubmitAction={handleAddComment} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Comments</h2>
        <CommentList comments={comments} postId={postId} onDeleteComment={handleDeleteComment} />
      </section>
    </main>
  );
}
