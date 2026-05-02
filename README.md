# Team Task Manager

This is a simple full-stack web application built to manage projects and tasks within a team.  
The idea behind this project is to simulate how real teams organize work, assign tasks, and track progress.

---

## 🚀 Features

- User Authentication (Signup & Login)
- Create and manage projects
- Add tasks under projects
- Assign tasks to users
- Update task status (pending → in progress → completed)
- Dashboard to track overall progress
- Role-based access (Admin / Member)

---

## 👥 Roles

**Admin**
- Can create projects
- Can assign tasks to users
- Can manage overall workflow

**Member**
- Can view assigned tasks
- Can update task status

---

## 🛠 Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express  
- **Database:** MongoDB  
- **Authentication:** JWT  

---

## 📁 Project Structure
Team_Task_Manager/
│
├── frontend/ # All UI files (HTML, CSS)
├── routes/ # API routes
├── models/ # Database models
├── middleware/ # Auth & role handling
├── server.js # Main server file
├── package.json
└── .env # Environment variables (not pushed)

## ⚙️ Setup Instructions

1. Clone the repository  

2. Install dependencies 

3. Create a `.env` file in root  

4. Run the server  

5. Open in browser
   
---

## 🌐 Deployment

The backend is deployed on Railway and connected with MongoDB Atlas.

---

## 💡 What I Learned

While building this project, I got hands-on experience with:
- Building REST APIs
- Handling authentication using JWT
- Structuring a backend project properly
- Connecting frontend with backend APIs
- Managing real-world features like roles and permissions

---

## 📌 Note

This project is built for learning purposes and demonstrates how a basic team collaboration system works.

---

## 🙌 Author

Yash Raj
