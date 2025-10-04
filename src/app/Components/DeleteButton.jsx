"use client";

import { useRouter } from "next/navigation";

export default function DeleteButton({ commentId, postId }) {
    const router = useRouter();

    async function handleDelete() {
    if (!confirm("Are you sure you want to delete this comment?")) return;

    const response = await fetch(`/posts/${postId}/comments/${commentId}`, {
        method: "DELETE",
    });

    if (response.ok) {
        router.refresh();
    } else {
        alert("Failed to delete comment.");
    }
    }

    return <button onClick={handleDelete}>🗑️ Delete</button>;
}
