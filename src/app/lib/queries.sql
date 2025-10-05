-- categories table
CREATE TABLE IF NOT EXISTS subjects (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL
);

-- posts/blogs table
CREATE TABLE IF NOT EXISTS articles (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title TEXT NOT NULL,
  description TEXT,
  content TEXT NOT NULL,
  image_url TEXT, 
  subject_id INT NOT NULL REFERENCES subjects(id) ON DELETE CASCADE
);

-- Comments table
CREATE TABLE IF NOT EXISTS reviews (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  comment TEXT NOT NULL,
  article_id INT NOT NULL REFERENCES articles(id) ON DELETE CASCADE
);

INSERT INTO subjects (name) VALUES 
('Cooking'), 
('Coding'), 
('Planting'), 
('Lifestyle');

INSERT INTO articles (title, description, content, image_url, subject_id) VALUES
(
  'How to Grow Basil Indoors',
  'A beginner''s guide to growing fresh basil in your kitchen.',
  'Basil is a great herb to grow indoors with minimal sunlight. Start by choosing a small pot with drainage, use nutrient-rich soil, and water it regularly without overwatering. Place it near a window with indirect sunlight.',
  'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80',
  1
),
(
  'Organize Your Pantry in 30 Minutes',
  'A quick and easy guide to make your pantry clean and accessible.',
  'Start by removing all items. Clean shelves, throw out expired products, and group similar items in bins or jars. Label everything and place the most-used items at eye level.',
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
  1
),
(
  'Beginner''s Guide to CSS Flexbox',
  'Understand the basics of flexbox layout in CSS for responsive design.',
  'Flexbox makes it easier to design flexible responsive layout structures. Use display: flex on a container and then adjust alignment using justify-content and align-items. It''s perfect for navbar, cards, and galleries.',
  'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=80',
  2
),
(
  'Throw a Budget-Friendly Birthday Party',
  'Plan a beautiful birthday celebration without spending too much.',
  'Choose a theme, use DIY decorations, bake your own cake, and use your backyard or local park. Invite only close friends and family. Use digital invitations to save money.',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
  4
),
(
  'How to Start Coding with HTML',
  'Learn the basic structure of HTML to build your first webpage.',
  'HTML structures web content. Use tags like <head>, <body>, <h1>, and <p> to organize content. Save your file with a .html extension and open it in a browser.',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
  2
),
(
  'Tips for Thriving Succulents',
  'Keep your succulents healthy and vibrant indoors.',
  'Succulents need bright light and well-draining soil. Water sparingly and ensure pots have drainage holes. Rotate plants occasionally for even growth.',
  'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80',
  3
),
(
  'Morning Routine for a Productive Day',
  'Simple habits that can boost your productivity.',
  'Wake up early, hydrate, meditate for 5 minutes, review your goals, and plan your day. Avoid phone distractions first thing in the morning.',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  4
);

-- Insert comments
INSERT INTO reviews (name, comment, article_id) VALUES
('Alice', 'Great tips! I never knew basil needed indirect sunlight.', 1),
('Bob', 'I cleaned out my pantry and it looks amazing now.', 2),
('Charlie', 'Flexbox finally makes sense. Thanks!', 3),
('Dana', 'Planning my kid’s party with these tips — so helpful.', 4),
('Eve', 'Starting HTML today, this was super helpful.', 5),
('Frank', 'Can I grow basil without sunlight?', 1),
('Grace', 'What’s the best way to label jars?', 2),
('Heidi', 'Where can I learn more about Flexbox?', 3),
('Ivan', 'My succulents are thriving thanks to these tips!', 6),
('Judy', 'I added a morning routine and feel so productive now!', 7);