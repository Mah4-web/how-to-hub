
import { db } from "@/utils/dbConnection";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

// Fetch post data for pre-filling the form
async function getPost(postId) {
    const postRes = await db.query(
    `SELECT article.id, article.title, article.description, article.content, article.image_url, subject.name AS category_name
      FROM articles article
      JOIN subjects subject ON article.subject_id = subject.id
      WHERE article.id = $1
`,
    [postId]
    );

    return postRes.rows[0];
}

export default async function EditPostPage({ params }) {
    const { postId } = params;
    const post = await getPost(postId);

    if (!post) {
    return <p>Post not found</p>;
    }

  // Server action to handle update
  async function handleUpdatePost(formData) {
    "use server";

    const title = formData.get("postTitle");
    const description = formData.get("postDescription");
    const content = formData.get("postContent");
    const imageUrl = formData.get("postImageUrl");
    const categoryName = formData.get("postCategory");

    if (!title || !description || !content || !categoryName) return;

   
    const subjectRes = await db.query(
      "SELECT id FROM subjects WHERE LOWER(name) = LOWER($1)",
      [categoryName]
    );

    if (subjectRes.rows.length === 0) {
      throw new Error("Category not found");
    }

    const subjectId = subjectRes.rows[0].id;

    // Update the post record
    await db.query(
      `UPDATE articles 
       SET title = $1, description = $2, content = $3, image_url = $4, subject_id = $5
       WHERE id = $6`,
      [title, description, content, imageUrl, subjectId, postId]
    );

    // Revalidate and redirect to the post detail page
    revalidatePath(`/posts/${postId}`);
    redirect(`/posts/${postId}`);
  }

  return (
    <main>
      <h1 className="page-title">Edit Post</h1>

      <form action={handleUpdatePost} className="post-form">
        <fieldset className="post-fieldset">
          <legend className="post-legend">Edit Post Details</legend>

          <div className="form-group">
            <label htmlFor="postTitle" className="form-label">Title:</label>
            <input
              type="text"
              id="postTitle"
              name="postTitle"
              placeholder="Enter post title"
              required
              defaultValue={post.title}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="postDescription" className="form-label">Description:</label>
            <textarea
              id="postDescription"
              name="postDescription"
              placeholder="Short description (optional)"
              rows={2}
              defaultValue={post.description || ""}
              className="form-textarea"
            />
          </div>

          <div className="form-group">
            <label htmlFor="postContent" className="form-label">Content:</label>
            <textarea
              id="postContent"
              name="postContent"
              placeholder="Write your full post content here"
              rows={6}
              required
              defaultValue={post.content}
              className="form-textarea"
            />
          </div>

          <div className="form-group">
            <label htmlFor="postImageUrl" className="form-label">Image URL:</label>
            <input
              type="url"
              id="postImageUrl"
              name="postImageUrl"
              placeholder="https://example.com/image.jpg"
              defaultValue={post.image_url || ""}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="postCategory" className="form-label">Category:</label>
            <input
              type="text"
              id="postCategory"
              name="postCategory"
              placeholder="e.g. Lifestyle, Cooking, Coding"
              required
              defaultValue={post.category_name}
              className="form-input"
            />
          </div>
        </fieldset>

        <button type="submit" className="btn-submit">Update Post</button>
      </form>
    </main>
  );
}
