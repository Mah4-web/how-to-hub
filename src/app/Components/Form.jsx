"use client";

export default function Form({ postId, onSubmitAction }) {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    await onSubmitAction(formData);
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-8 p-6 bg-white shadow-md rounded-md space-y-6">
      <fieldset className="space-y-4">
        <legend className="text-xl font-semibold text-indigo-700 mb-4">Leave a Comment</legend>

        <input type="hidden" name="postId" value={postId} />

        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">
            Your Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name please"
            required
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="comment" className="text-sm font-medium text-gray-700 mb-1">
            Your Comment:
          </label>
          <textarea
            id="comment"
            name="comment"
            placeholder="Your comment"
            rows={4}
            required
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-md transition duration-200"
        >
          Submit
        </button>
      </fieldset>
    </form>
  );
}
