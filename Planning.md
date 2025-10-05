# Brainstorming 

## Step 1: Draw Wireframe

Tools Figma ✅, optional: Trello

## Step 2: Set up database tables using schema

- Tools: drawsql ✅
- Tools: SQL editor on Supabase. ✅
Purpose: to create our tables and seed dummy data.

## Step 3: Set up Project & GitHub ✅

- Npx create-next-app@latest
- Project-name
- Typescript : No
- ESlint
- Tailwind CSS: YES
- src/directory: YES
- APP Router: YES
- Turbopack: YES
- Import Alias: No
- Remember: Don’t do git init in here
- Cd project name
- New Repository (no readme)
- Copy paste git remote add origin…..
- Git add . 
- Git commit -m “chore: add project template”
- Git push
- Git push -u origin main
- Code .

## Step 4: Setup Environment Variables
- .env (.gitignore)


## Step 5: Deployment

Deploy on Vercel — set env variables on Vercel dashboard

## Step 6: Plan Folder Structure ✅

**📂src**

- **📂 App**
- 📂 lib - *queries.sql*
- 📂 blogs - *page.js*
-  📂 [blogId] - *page.js* - **📂 comments** - 📂 [commentId] - *page.js*
NOTE: in commentId I will give user to edit comment since I am not letting user to post posts. (stretch goal)

-**📂 Components**
- *Header.jsx —- navigation links (import links from next/links)*
- *Footer.jsx*
- *postCard.jsx*
- *CommentList.jsx*
- *DeleteButton.jsx*
- *Form.jsx*

- **📂 utils**
- *dbConnection.js
set up our database pool using the pg package (install it, please)

- **📂 Images**

## Step 7: Setup Next.js

- /blogs — show all posts, sortable
- /blogs/[id] — show one post + comments
- / — redirect to /blogs and comment

## Step 8: Build Components

- Header & Footer — site navigation and footer
- PostCard — display post preview in list
- CommentList — fetch and show comments for that post
- Form — form for name + comment text input
- Implement delete button on comments

## Step 9: Fetch

- Fetch all blogs
- Fetch blog details and comments for /blogs/[id]
- Insert new comments from form, associated to correct blog_id
- Delete comments by comment id
- (Stretch) Confirm deletion before removing

## Step 10: Styling

- Use Tailwind, google fonts 
- Simple cards, forms, buttons, spacing

## Step 11: Testing

- Test adding comments on individual posts
- Test deleting comment
- Test sorting posts ascending/descending
- Confirm navigation works smoothly
- Test edit comment (stretch)

## Step 12: Reflection

---
## MORE FOLDERS AND FILES

I added few more files for category and posts delete.