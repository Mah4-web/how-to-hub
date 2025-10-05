import { db } from "@/utils/dbConnection";
import PostCard from "@/app/Components/PostCard";

export default async function CategoryPage({ params }) {
  // Await params to get the dynamic route parameter
  const { categoryId } = await params;

  // if categoryId missing, return error early
  if (!categoryId) {
    return <p className="text-red-600 font-semibold">Invalid category.</p>;
  }

  // subject ID by matching name (case-insensitive)
  const { rows: subjectRows } = await db.query(
    "SELECT id FROM subjects WHERE LOWER(name) = LOWER($1)",
    [categoryId]
  );

  if (subjectRows.length === 0) {
    return <p className="text-red-600 font-semibold">Category not found</p>;
  }

  const subjectId = subjectRows[0].id;

  // posts for this subject
  const { rows: posts } = await db.query(
    "SELECT * FROM articles WHERE subject_id = $1",
    [subjectId]
  );

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 capitalize">Category: {categoryId}</h1>

      {posts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p>No posts in this category yet.</p>
      )}
    </main>
  );
}
