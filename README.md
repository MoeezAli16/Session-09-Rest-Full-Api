Task Management App
This is a simple task management application built using React for the frontend and Express for the backend. It allows users to view, create, mark as complete, and delete tasks. The tasks are stored in a MongoDB database.

Table of Contents:
Technologies Used
Installation Instructions
API Endpoints
Frontend Setup
Backend Setup
License
Technologies Used
Frontend: React.js
Backend: Node.js with Express
Database: MongoDB (using Mongoose ODM)
Styling: Tailwind CSS (for the UI)
Installation Instructions
Prerequisites
Node.js and npm installed on your system
MongoDB running locally or use MongoDB Atlas for a cloud database
1. Clone the Repository
Clone this repo to your local machine using:

bash
Copy code
git clone https://github.com/MoeezAli16/Session-09-Rest-Full-Api.git

2. Install Dependencies for Backend
Navigate to the backend directory:

bash
Copy code
cd backend
Install the backend dependencies:

bash
Copy code
npm install

3. Install Dependencies for Frontend
Navigate to the frontend directory:

bash
Copy code
cd frontend
Install the frontend dependencies:

bash
Copy code
npm install
4. Running the Application
Start Backend Server
In the backend folder, start the Express server:

bash
Copy code
npm start
The backend server will run on http://localhost:5000.

Start Frontend Server
In the frontend folder, start the React development server:

bash
Copy code
npm run dev
The frontend server will run on http://localhost:5173/.


Frontend Setup
The frontend is built using React.js and uses Tailwind CSS for styling. The frontend interacts with the backend via the API to perform CRUD operations (Create, Read, Update, Delete).

Features:
View all tasks
Mark tasks as complete
Delete tasks
Backend Setup
The backend is built using Express.js and connects to MongoDB using Mongoose. It provides a REST API to interact with tasks.

Features:
Retrieve all tasks (GET /api/tasks)
Create new tasks (POST /api/tasks)
Update task status (PUT /api/tasks/:id)
Delete tasks (DELETE /api/tasks/:id)
License
This project is open-source and available under the MIT License.

