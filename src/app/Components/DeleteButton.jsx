"use client";

export default function DeleteButton({ commentId, postId, onDeleteAction }) {
  return (
    <form action={onDeleteAction} className="inline">
      <input type="hidden" name="commentId" value={commentId} />
      <input type="hidden" name="postId" value={postId} />
      <button
        type="submit"
        className="bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 text-black font-semibold py-1 px-3 rounded transition duration-150"
        onClick={(e) => {
          if (!confirm("Are you sure you want to delete this comment?")) {
            e.preventDefault();
          }
        }}
      >
        🗑️ Delete
      </button>
    </form>
  );
}
