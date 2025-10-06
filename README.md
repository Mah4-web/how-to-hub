# 🧠 The How-To Hub: Your Guide to Everyday Life

A full-stack app for sharing, reading, and commenting on how-to articles.

Built using **Next.js App, PostgreSQL, and Tailwind CSS, deployed on Vercel**.

## 🚀 Overview

The How-To Hub is a full-stack Next.js application designed to let users create, browse, and categorize how-to guides for everyday topics. Users can leave comments, filter by category, and sort posts A–Z or Z–A. Built with clean UI, thoughtful planning, and a focus on learning, accessibility, and simplicity.

---

## 🛠️ 🔥 Features

- ✅ Create and delete posts using Next.js Server Actions

- ✅ Add and delete comments on individual posts

- ✅ Dynamic routing with category filters and post pages

- ✅ Sort posts alphabetically using query parameters (/posts?sort=asc)

- ✅ Clean and responsive UI with Tailwind CSS

- ✅ SEO via metadata 

- ✅ Image rendering with next/image and user-defined URLs

- ✅ Deployed on Vercel with PostgreSQL

---

## Requirements

- 🎯 Display all posts on the page, with an option to sort them in ascending or descending order.✅
- 🎯 Create a SQL schema for a posts table and a comments table, with the comments being connected to the posts table with a foreign key.✅
- 🎯 Create a delete button on posts that allows users to delete the post from the database.✅
- 🎯 Create a form which saves comments to a dedicated comments table, with the comments being connected to the posts table with a foreign key.✅
- 🎯 Allow users to comment on individual posts in their dynamic routes. Comments should be associated with posts, and have a dynamic route (e.g. /posts/:postid).✅
- 🎯 Add a redirect when a user creates a post to redirect them to the posts page.✅

---

## Stretch Requirements

- 🏹 Implement a select input (or similar mechanism) that allows users to categorise posts during creation, storing them in their own table in the database. Ensure appropriate routing for categories, with endpoints such as /categories and /categories/:id to enable users to browse and interact with posts by category.✅
- 🏹 Create an edit functionality accessible via /posts/:id/edit, which pre-fills a form for post data. Create a working PUT route to update the post in the database.✅
- 🏹 Develop an edit comment feature accessible via /posts/:id/comments/:id/edit, which pre-fills a form for comment data. Create a working PUT route to update the comment in the database.✅ (posts edit)

---

## 🛠️🗂️ Planning

- I originally planned to make categories route dynamic in navigation, but later decided to keep them static and added them directly to the navigation instead — it felt cleaner and more intuitive for users. My focus shifted toward improving the user experience, so I also added confirmation popups when deleting a comment or a post, just to help prevent any accidental deletions. It’s a small thing, but it felt important from a user perspective.
- Started with posts and comments — where only I could post and user could only delete comments, I prioritized requirements first then more features due to time and health constraints since my body is giving me 404 energy not found.
- Used Tailwind CSS to simplify styling and reduce naming errors.
- Planned out consistent naming between files, components, because of name changing in DB tables (e.g., articles for posts, reviews for comments and subjects for categories).
- Created reusable components:
- PostCard, Form, CommentList, ConfirmDeletePostButton
- Focused on UX by including features like:
- Delete confirmation
- Redirects after actions
- Category-based navigation
- **Planning.md**

---

## Wireframe
![Wireframe](/images/home.png)
![Wireframe](/images/posts.png)

---

## DrawSQL- sql tables
![Drawsql](/images/DrawSql.png)

---

## Trello
![Trello](/images/Trello.png)

---

## Lighthouse
![Auditing](/images/Lighthouse.png)

---

## 🧪 Challenges and Fixes

- ⚙️ Server Actions in Client Components

- ❌ Can't directly use server actions in client components

- ✅ Solution: Split logic and marked components as "use client"

- 🗃️ Routing & Dynamic Params

- ❌ Dynamic routing failed when using category ID instead of name

- ✅ Used category name instead of ID for clean URLs (/posts/category/Lifestyle)

- 🧹 Tailwind CSS & Naming

- ❌ Inconsistent class names caused confusion

- ✅ Used Tailwind exclusively to avoid conflicts and reused class patterns

- 🔁 Cascade Delete & Foreign Key Errors

- ❌ ON DELETE CASCADE removed child records, started with posts, comments and due to an existing post table encountered error on early stage so decided to make blogs for posts then another error because when user delete post comments should delete too so instead of altering tables decided to delete it which was the biggest mistake and when created the table again then all the dummy data was there twice so decided to delete the data from the tables manually then the id's started from 16 and after so many trials and error added new data with different names and added *Delete Cascade* 

- ✅ Reviewed schema, reset IDs, and tested cascading behavior

- 🧼 ESLint Errors

- ❌ Used <a> tags instead of <Link>, forgot importing link from next link

- ✅ Replaced with next/link for internal routing

- 🧠 Form vs <Form> Naming Conflicts

- ❌ Component named Form clashed with JSX <form>

- ✅ Renamed/structured properly to avoid ambiguity

- ❌ Accessing dynamic route parameters in Next.js App Router without awaiting caused runtime errors.
- ❌ Error: Route "/posts/[postId]" used params.postId. params should be awaited before using its properties.
- ✅ Await the params object before destructuring

---

## 🌟 Lessons Learned

- ⚙️ How to use Next.js Server Actions for DB writes and deletes

- 🌐 Built dynamic routes for post detail and categories

- 🎨 Used Tailwind CSS to avoid style duplication

- 🔄 Implemented revalidatePath and redirect in server actions

- 🧹 Cleaned up DB schema and managed ON DELETE CASCADE safely

- ✅ Consistent naming helps avoid many small bugs

---

## 🌐 Deployment

- ✅ Live Site: https://how-to-hub.vercel.app

- Hosted on Vercel

- PostgreSQL DB via Supabase

- .env file stores secrets like DATABASE_URL

- next.config.js updated to allow Unsplash image domains

---

## 🧪 Experiment: Responsive Heading (h1) with Tailwind ✅

- In every assignment I try something, experiment with codes. During this assignment, I experimented with how Tailwind handles responsive design, especially for large headings *h1* elements.

- I discovered that we don’t need to manually add media queries in the tailwind.config.js or in global.css.

- Tailwind provides built-in responsive utility classes like sm:, md:, and lg: which can be applied directly in the className.

**My successful experiment:**

```<h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 hover:bg-purple-300 p-2 rounded transition">
        Welcome to The How-To Hub
  </h1>```

✅ This approach fixed the issue I had with titles not resizing well on mobile. The heading now looks great across screen sizes — no custom media queries needed and no need to do in tailwind.config.js. It saved a lot of time.

### Tailwind Documentation
- Customizing Screens
- Customizing the default breakpoints for your project.
- Configuring custom screens
- You define your project’s breakpoints in the theme.screens section of your tailwind.config.js file. The keys become your responsive modifiers (like md:text-center), and the values are the min-width where that breakpoint should start.

- The default breakpoints are inspired by common device resolutions:
![Tailwind](/images/tailwind.png)
- Overriding the defaults
- To completely replace the default breakpoints, add your custom screens configuration directly under the theme key:
![Tailwind](/images/tailwind1.png)


## 👩‍💻 Developer Notes

- I planned carefully to manage scope, especially due to health constraints.
- Started with the core: posts + comments, then added stretch goals.
- I will add more features and focus on design in the future and change naviagtion from static to dynamic so users can add categories
- I'm proud of the progress, and editing features are my next step!

---

## 🙏 Credits

- Big Thanks to the Instructors for all the support and notes
- Google fonts: Playfair Display
- UI: Tailwind CSS
- Framework: Next.js (App Router)
- Icons: Emojis
- Image Provider: Unsplash
- Figma: Wireframe
- Trello: project management and planning
- My best friend AI: for dummy data and paraphrasing overview and features

---

## 🙌 Final Thoughts

The How-To Hub is more than just a how-to blog — it’s a full-stack learning journey.
Through dynamic routing, server actions, and real database integrations, I learned how to manage both technical and project-level challenges. While there's still room for features like styling, this app is a solid, production-ready foundation for future work and learning.

If you're looking for a creative, dedicated developer who builds with both heart and strategy — I would love to connect.

Notes: My initial planning is in Planning.md.

---

## 📘 Resources

- [Next.js](https://nextjs.org/docs)
- [Route Handler](https://nextjs.org/docs/app/api-reference/file-conventions/route)
- [Routing Fundamental](https://nextjs.org/docs/app/getting-started/layouts-and-pages)
- [Redirect](https://nextjs.org/docs/app/api-reference/functions/redirect)
- [Revalidate Path](https://nextjs.org/docs/app/api-reference/functions/revalidatePath)
- [Fetching Data](https://nextjs.org/docs/app/getting-started/fetching-data)
- [Postgress](https://neon.com/postgresql/tutorial)
- [SQL Joins](https://www.w3schools.com/sql/sql_join.asp)
- [Caching](https://nextjs.org/docs/app/guides/caching)
- [Filter](https://www.youtube.com/watch?v=u6VTP244Puw)
- [Delete Cascade](https://www.youtube.com/watch?v=vANfY96ccOY)
- [Images](https://nextjs.org/docs/pages/api-reference/components/image)
- [Colour combination and gradient](https://color.adobe.com/create/image-gradient)
- [Tailwind Responsive font](https://v3.tailwindcss.com/docs/screens)

## 🗑️ Note About the Delete Function

This is something I want to highlight:
- I attempted to implement a delete button with router logic I found in an article.
Unfortunately, the copied code didn't work as expected, and I wasn’t able to test it due to time and health reasons. I had in my mind that my instructor said we can't have any name for page.js and I added the code in page.js and was getting errors because in the example it was in router.js.
To avoid breaking the app, I removed the code — but I wanted to mention it here in case the change was noticed during review.
[Delete](https://stackoverflow.com/questions/77348738/what-is-the-right-way-to-do-a-delete-in-nextjs-13-4-api-response-nextapirespo)