"use client";

export default function ConfirmDeletePostButton({ postId }) {
  function handleClick(e) {
    if (!confirm("Are you sure you want to delete this post?")) {
      e.preventDefault();
    }
  }

  return (
      <form action="/posts/delete" method="POST" className="mt-4">
      <input type="hidden" name="postId" value={postId} />
      <button
        type="submit"
        onClick={handleClick}
        className="bg-red-600 hover:bg-red-700 text-indigo-600 font-semibold py-2 px-4 rounded shadow transition duration-200"
      >
        Delete Post 🗑️
      </button>
    </form>
  );
}
