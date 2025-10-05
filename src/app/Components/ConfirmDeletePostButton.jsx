"use client";

export default function ConfirmDeletePostButton({ postId, onDelete }) {
  return (
    <form action={onDelete} method="POST">
      <input type="hidden" name="postId" value={postId} />
      <button
        type="submit"
        className="bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 text-black font-semibold py-2 px-4 rounded"
        onClick={(e) => {
          if (!confirm("Are you sure you want to delete this post?")) {
            e.preventDefault();
          }
        }}
      >
        🗑️ Delete Post
      </button>
    </form>
  );
}
