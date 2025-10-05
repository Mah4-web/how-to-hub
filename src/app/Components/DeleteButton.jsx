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

    return <button onClick={handleDelete}   
    className="bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 text-black font-semibold py-1 px-3 rounded transition duration-150">
        🗑️ Delete</button>;
}