import { db } from "@/utils/dbConnection";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default function AddPostPage() {
  async function handleAddPost(formData) {
    "use server";
    const title = formData.get("postTitle");
    const description = formData.get("postDescription");
    const content = formData.get("postContent");
    const imageUrl = formData.get("postImageUrl");
    const categoryName = formData.get("postCategory"); //renamed for clarity

    // Basic validation
    if (!title || !description || !content || !categoryName) return;

    
    const subjectResponse = await db.query(
      "SELECT id FROM subjects WHERE LOWER(name) = LOWER($1)",
      [categoryName]
    );

    if (subjectResponse.rows.length === 0) {
      throw new Error("Category not found");
    }

    const subjectId = subjectResponse.rows[0].id;

  
    await db.query(
      `INSERT INTO articles (title, description, content, image_url, subject_id)
        VALUES ($1, $2, $3, $4, $5)`,
      [title, description, content, imageUrl, subjectId]
    );

    revalidatePath("/posts");
    redirect("/posts");
  }

  return (
    <main>
      <h1 className="page-title">Create a New Post</h1>

      <form action={handleAddPost} className="post-form">
        <fieldset className="post-fieldset">
          <legend className="post-legend">Post Details</legend>

          <div className="form-group">
            <label htmlFor="postTitle" className="form-label">Title:</label>
            <input
              type="text"
              id="postTitle"
              name="postTitle"
              placeholder="Enter post title"
              required
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
              className="form-input"
            />
          </div>
        </fieldset>

        <button type="submit" className="btn-submit">Create Post</button>
      </form>
    </main>
  );
}
