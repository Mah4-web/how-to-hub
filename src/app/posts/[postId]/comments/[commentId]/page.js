import { NextResponse } from "next/server";
import { db } from "@/utils/dbConnection";

export async function DELETE(request, { params }) {
    const { commentId } = params;
    if (!commentId) {
    return NextResponse.error();
    }
    await db.query("DELETE FROM reviews WHERE id = $1", [commentId]);

    return NextResponse.json({ success: true });
}
