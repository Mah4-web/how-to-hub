"use client";

export default function Form({ postId, onSubmitAction }) {
    async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    await onSubmitAction(formData);
    event.target.reset();
    }

    return (
    <form onSubmit={handleSubmit}>
        <fieldset>
        <legend>Leave a Comment</legend>

        <div>
            <label htmlFor="name">Your Name:</label>
            <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name please"
            required
            />
        </div>

        <div>
            <label htmlFor="comment">Your Comment:</label>
            <textarea
            id="comment"
            name="comment"
            placeholder="Your comment"
            rows={4}
            required
            ></textarea>
        </div>

        <button type="submit">Submit</button>
        </fieldset>
    </form>
    );
}
