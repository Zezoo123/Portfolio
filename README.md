# 🌐 Zeyad Awadalla's Personal Website

A futuristic, full-stack personal website built to showcase my CV, provide a contact hub, and optionally host a blog. This project is designed with scalability, aesthetics, and modern tooling in mind.

---

## 🧠 Tech Stack

### Frontend

- **[Next.js](https://nextjs.org/)** – React-based framework for building performant, SEO-friendly web applications
- **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first CSS framework for fast, responsive, futuristic UI design

### Backend

- **[FastAPI](https://fastapi.tiangolo.com/)** – Python web framework for building fast, asynchronous APIs
- **[Uvicorn](https://www.uvicorn.org/)** – ASGI server for running FastAPI applications

### Database

- **[MongoDB Atlas](https://www.mongodb.com/cloud/atlas)** – NoSQL cloud database for storing CV data, contact form submissions, and blog posts

---

## 📁 Project Structure

```
/
├── frontend/               # Next.js + Tailwind frontend
│   ├── app/                # App Router pages
│   │   ├── page.tsx        # Home page
│   │   ├── cv/             # CV page
│   │   ├── contact/        # Contact form
│   │   └── blog/           # Blog listing and posts
│   └── components/         # Reusable UI components
│
├── backend/                # FastAPI backend
│   ├── app/
│   │   ├── main.py         # FastAPI entry point
│   │   ├── models.py       # Pydantic models
│   │   └── database.py     # MongoDB connection logic
│   └── .env                # Environment variables (e.g., MONGO_URI)
│
└── README.md               # Project overview and setup instructions
```

---

## ✨ Features

- **Home Page**: Introduction and navigation links.
- **CV Page**: Styled layout displaying education, experience, and skills.
- **Contact Page**: Functional form that sends messages to the backend and stores them in MongoDB.
- **Blog Page**: Placeholder for future blog posts.


---

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed
- Python 3.10+ installed
- MongoDB Atlas account

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```
Visit http://localhost:3000 to view the frontend.

---

### Backend Setup

```bash
cd backend
python -m venv venv

# Activate the virtual environment:
# Windows:
venv\Scripts\activate
# MacOS/Linux:
source venv/bin/activate

pip install fastapi uvicorn pymongo python-dotenv "pydantic[email]" fastapi[all]
uvicorn app.main:app --reload
```

Ensure you have a `.env` file in `backend/` with your MongoDB connection string:
```ini
MONGO_URI=your_mongodb_connection_string
```
The backend will run at http://localhost:8000.


## 👨‍💻 Author

**Zeyad Awadalla**
[GitHub - @Zezoo123](https://github.com/Zezoo123)

University of Manchester – BSc Computer Science

Full-stack & Blockchain Developer