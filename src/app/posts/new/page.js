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
    const topicId = formData.get("postCategory");
    if (!title || !description || !content || !topicId) return; 

    await db.query(
        `INSERT INTO articles (title, description, content, image_url, subject_id)
        VALUES ($1, $2, $3, $4, $5)`,
        [title, description, content, imageUrl, topicId]
    );
    revalidatePath("/posts");
    redirect("/posts");
    }

    return (
        <main>
        <h1>Create a New Post</h1>

        <form action={handleAddPost}>
        <fieldset>
            <legend>Post Details</legend>

            <div>
            <label htmlFor="postTitle">Title:</label>
            <input
                type="text"
                id="postTitle"
                name="postTitle"
                placeholder="Enter post title"
                required
            />
            </div>

            <div>
            <label htmlFor="postDescription">Description:</label>
            <textarea
                id="postDescription"
                name="postDescription"
                placeholder="Short description (optional)"
                rows={2}
            />
            </div>

            <div>
            <label htmlFor="postContent">Content:</label>
            <textarea
                id="postContent"
                name="postContent"
                placeholder="Write your full post content here"
                rows={6}
                required
            />
            </div>

            <div>
            <label htmlFor="postImageUrl">Image URL/ Unsplash image URL:</label>
            <input
                type="url"
                id="postImageUrl"
                name="postImageUrl"
                placeholder="https://example.com/image.jpg"
            />
            </div>

            <div>
            <label htmlFor="postCategory">Category:</label>
            <input
                type="text"
                id="postCategory"
                name="postCategory"
                placeholder="Enter category e.g. Lifestyle"
                required
            />
            </div>

        </fieldset>

        <button type="submit">Create Post</button>
        </form>
    </main>
    );
}
