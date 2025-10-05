"use client";

import DeleteButton from "./DeleteButton";

export default function CommentList({ comments, postId }) {
    if (!comments || comments.length === 0) {
    return <p>No comments yet. Be the first to comment!</p>;
    }

    return (
      <ul className="max-w-2xl mx-auto space-y-6 text-center">
      {comments.map((comment) => (
        <li
          key={comment.id}
          className="border rounded-lg p-4 shadow-sm"
        >
          <strong className="block mb-2 text-lg">{comment.name}</strong>
          <p className="mb-3">{comment.comment}</p>
          <DeleteButton
            commentId={comment.id}
            postId={postId}
            className="bg-red-600 hover:bg-red-700 text-black px-3 py-1 rounded"
          />
        </li>
      ))}
    </ul>
  );
}
