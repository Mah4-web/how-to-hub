"use client";

import DeleteButton from "./DeleteButton";

export default function CommentList({ comments, postId }) {
    if (!comments || comments.length === 0) {
    return <p>No comments yet. Be the first to comment!</p>;
    }

    return (
    <ul>
        {comments.map((comment) => (
        <li key={comment.id}>
            <strong>{comment.name}</strong>
            <p>{comment.comment}</p>
            <DeleteButton commentId={comment.id} postId={postId} />
        </li>
        ))}
    </ul>
    );
}
