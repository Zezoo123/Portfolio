
# 🌐 Zeyad Awadalla's Personal Website

A futuristic, full-stack personal website built to showcase my CV, provide a contact hub, and optionally host a blog. This project is designed with scalability, aesthetics, and modern tooling in mind.

---

## 🚀 Tech Stack

### Frontend

- **[Next.js](https://nextjs.org/)** – React-based framework for building performant, SEO-friendly web applications
- **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first CSS framework for fast, responsive, futuristic UI design

### Backend

- **[FastAPI](https://fastapi.tiangolo.com/)** – Python web framework for building fast, asynchronous APIs
- **[Uvicorn](https://www.uvicorn.org/)** – ASGI server for running FastAPI applications

### Database

- **[MongoDB Atlas](https://www.mongodb.com/cloud/atlas)** – NoSQL cloud database for storing CV data, contact form submissions, and blog posts

---

## 🏗️ Project Structure

```
/
├── frontend/                   # Next.js + Tailwind frontend
│   ├── pages/                  # Home, CV, Contact, Blog pages
│   └── components/             # Reusable UI components
│
├── backend/                    # FastAPI backend
│   ├── app/
│   │   ├── main.py             # Entry point for FastAPI
│   │   ├── routes/             # API endpoints
│   │   └── models/             # Pydantic models / schemas
│
├── database/                   # MongoDB setup and connection logic
│
├── README.md                   # This file
└── .env                        # Environment variables (e.g. DB URI)
```

---

## 📋 Features

- ✨ **Futuristic UI** with Tailwind CSS
- 📄 **CV Page** served dynamically from backend
- 📬 **Contact Form** with backend handling and MongoDB storage
- ✍️ **Blog System** (optional, future stage)
- 🔐 Optional Admin Panel for blog post management

---

## 🧭 Development Plan

### Phase 1: Frontend Skeleton

- [ ] Set up Next.js project with Tailwind CSS
- [ ] Create landing page with futuristic design
- [ ] Add navigation to CV and Contact pages

### Phase 2: Backend API

- [ ] Set up FastAPI project with endpoints for:
  - [ ] `/cv` – Fetch CV data
  - [ ] `/contact` – Submit and store contact form data
  - [ ] `/blog` – (Optional) Fetch blog posts
- [ ] Connect to MongoDB Atlas

### Phase 3: Integration

- [ ] Connect frontend to FastAPI backend using fetch/axios
- [ ] Test data flow between contact form and MongoDB
- [ ] Display dynamic CV data

### Phase 4: Blog System (Optional)

- [ ] Implement basic blog post model
- [ ] Create admin interface for blog post creation
- [ ] Display blog posts on frontend

---

## 🛠️ Tools & Services

- **Vercel** – Hosting for frontend (Next.js)
- **Render / Fly.io / Docker** – Hosting options for backend
- **MongoDB Atlas** – Cloud NoSQL database
- **Postman** – API testing
- **VSCode** – Recommended IDE

---

## 📌 Notes

- Environment variables (MongoDB URI, etc.) should be stored in `.env` and not committed.
- Backend and frontend run as separate services during development; configure CORS accordingly.

---

## 📣 Author

**Zeyad Awadalla**
Student @ University of Manchester | Full-stack Developer | AI & Blockchain Enthusiast
