🚀 QuickBlog – The Next-Gen AI-Powered Blogging Experience ✨

QuickBlog is a smart blogging platform built using the MERN stack (MongoDB, Express.js, React, and Node.js) 
that brings together human creativity and AI technology. It helps writers create high-quality content 
by offering real-time suggestions, ideas, and structure tips, making the writing process smoother and more 
enjoyable. Readers get a personalized experience on QuickBlog, with articles recommended based on their interests 
and habits. Interactive features like social highlighting and easy navigation make reading more engaging and fun. 
For content managers and administrators, QuickBlog provides strong tools for control and organization. With detailed 
analytics and flexible permission settings, it’s easy to manage blogs and connect with audiences more effectively.

QuickBlog is designed to be fast and user friendly on any device, whether user on a computer or a phone. Its clean, 
responsive design ensures that everyone can use it easily, no matter where they are. The platform supports every step 
of blogging, from writing and editing to publishing and sharing.Overall, QuickBlog makes blogging smarter, easier, and more 
enjoyable for everyone writers, readers, and managers alike. It’s a complete solution that helps you create, share, and grow 
users blog with confidence.

===========================================================================

🔥 Key Features

* For Content Creators

🤖 AI-Powered Writing – Generate blog drafts instantly with OpenAI
✍️ Rich Text Editor – Beautiful formatting 
📊 Dashboard Analytics – Track views, comments, and engagement

* For Readers

🔍 Smart Search – Find posts by title, category, or keywords
💬 Interactive Comments – Join discussions with other readers
📱 Mobile-Optimized – Flawless reading on any device

* For Admins

✅ Comment Moderation – Approve/reject comments with one click
🚀 Publish Control – Instantly publish or unpublish posts

===========================================================================

🛠️ Tech Stack

⚛️ Frontend : React.js + Vite

🎨 Styling : Tailwind CSS

🟢 Backend : Node.js + Express.js

🍃 Database : MongoDB (Mongoose)

🤖 AI Integration : OpenAI API

===========================================================================

🔧 Installed Dependencies

> Frontend Essentials

• Tailwind CSS → npm install tailwindcss @tailwindcss/vite
• React Icons → npm install react-icons
• Axios → npm install axios (For API requests)
• Quill Rich Text Editor → npm install quill
• Framer Motion → npm install framer-motion (Animations)

> Backend Core

• Express → npm install express (Server framework)
• Mongoose → npm install mongoose (MongoDB ODM)
• JSON Web Tokens → npm install jsonwebtoken (Authentication)
• Multer → npm install multer (File uploads)
• OpenAI → npm install openai (AI integration)

> Dev Tools

• Nodemon → npm install -D nodemon (Dev server)
• ESLint → npm install -D eslint (Code linting)

===========================================================================

▶️ How to Run the QuickBlog Project

📥 Clone the Repository

• git clone https://github.com/kithvin/QuickBlog.git

• cd QuickBlog

⚙️ Install backend Dependencies

# Backend setup (Node.js/Express)
• cd backend && npm install

⚙️ Install frontend Dependencies

# Frontend setup (React/Vite)
• cd ../frontend && npm install

🔐 Environment Configuration

• Configure environment variables

- backend/.env

# 🗄️ Database : MONGODB_URI="user_mongodb_connection_string"

# 🤖 AI Services : OPENAI_API_KEY="user_openai_key" (gemini developer API)

# 🔐 Authentication : JWT_SECRET="user_jwt_secret"

- frontend/.env

# VITE_API_BASE_URL="http://localhost:5000"

# 🌐 API Endpoint : 

🖥️ Launch Development Servers

# Start backend (Node.js)

cd ../server && npm run dev  # 🟢 Running on http://localhost:5000

# In new terminal tab:

cd ../client && npm run dev  # 🌈 Running on http://localhost:3000

===========================================================================

🌐 Deployment

• The project is live and accessible at: (https://quick-blog-rho.vercel.app/)

# Admin Credentials

ADMIN_EMAIL = "admin@example.com"
ADMIN_PASSWORD = "test@1234"
