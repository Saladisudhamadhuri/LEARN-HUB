# LearnHub 🎓

LearnHub is a full-stack, role-based educational platform designed to deliver polished learning experiences with certificate generation, course management, and user dashboards.

Built with:
-  React + Vite + Material UI (frontend)
-  Node.js + Express + MongoDB Atlas (backend)
-  jsPDF for certificate creation
-  Deployed on Vercel (frontend) and Render (backend)

---

##  Live Project

- **Frontend**: [learnhub.vercel.app](https://learnhub.vercel.app)
- **Backend API**: [learnhub-api.onrender.com](https://learnhub-api.onrender.com)

---

##  Project Structure

##  Live Project

- **Frontend**: [learnhub.vercel.app](https://learnhub.vercel.app)
- **Backend API**: [learnhub-api.onrender.com](https://learnhub-api.onrender.com)

---

##  Project Structure

LearnHub/ ├── learnhub-frontend/ # React, jsPDF, Material UI ├── learnhub-backend/ # Express, MongoDB, RESTful API └── README.md # This file


---

##  Features

### Frontend
-  Role-based Dashboards (Student, Teacher, Admin)
-  Branded Certificate Generation (jsPDF)
-  Responsive Material UI Design
-  Vite for optimized performance

### Backend
-  RESTful APIs using Express
- User & Course Schemas with Mongoose
  Course Management & User Enrollment
-  Hosted on Render with MongoDB Atlas

---

## How to Run Locally

###  Frontend

```bash
cd learnhub-frontend
npm install
npm run dev


cd learnhub-backend
npm install
touch .env # Add your MONGO_URI here
npm run start
