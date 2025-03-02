# Finance Management Application (MERN Stack)

This project is a full-stack web application for managing personal finances, built using the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Table of Contents

* [Features](#features)
* [Technologies Used](#technologies-used)
* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
    * [Environment Variables](#environment-variables)
    * [Running the Application](#running-the-application)
* [Project Structure](#project-structure)
* [Usage](#usage)

## Features

* **User Authentication:** Secure user registration and login.
* **Expense Tracking:** Add and delete expense records.
* **Responsive Design:** Accessible on various devices.

## Technologies Used

* **Frontend:**
    * React.js
    * Axios (for API requests)
    * React Router (for routing)
    * Bootstrap (for UI components)
    * CSS3(for styling)
* **Backend:**
    * Node.js
    * Express.js
    * MongoDB (with Mongoose)
    * JSON Web Tokens (JWT) (for authentication)
    * Bcrypt (for password hashing)
    * NodeMon (for speedy development)
    * Dotenv (for environment variables)
* **Database:**
    * MongoDB Atlas

## Getting Started

### Prerequisites

* Node.js (>= 14.x)
* npm or Yarn
* MongoDB (local or cloud instance like MongoDB Atlas)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone [repository-url]
    cd [repository-name]
    ```

2.  **Install backend dependencies:**

    ```bash
    cd backend
    npm install
    ```

3.  **Install frontend dependencies:**

    ```bash
    cd ../frontend
    npm install
    ```

### Environment Variables

1.  **Create a `.env` file in the `backend` directory.**
2.  **Add the following environment variables:**

    ```
    PORT=8080 # Or any other port
    MONGO_CONN="mongodb+srv://<username>:<password>@<cluster-url>/<database-name>"
    JWT_SECRET="secret-123"
    ```

    * Replace `<username>`, `<password>`, `<cluster-url>`, and `<database-name>` with your MongoDB Atlas credentials.

3.  **Create a `.env` file in the `frontend` directory.**
4.  **Add the following environment variable:**

    ```
    REACT_APP_API_URL="http://localhost:8080" # Adjust if your backend runs on a different port or domain.
    ```

### Running the Application

1.  **Start the backend server:**

    ```bash
    cd ../backend
    npm run dev
    ```

2.  **Start the frontend development server:**

    ```bash
    cd ../frontend
    npm start
    ```

    The application will be accessible at `http://localhost:8080`.

## Project Structure

Finanace_Managemant_MERN/
├── backend/
│   ├── Controllers/
│   │   ├── AuthController.js
│   │   ├── ExpesnseController.js
│   ├── Models/
│   │   ├── user.js
│   │   ├── db.js
│   ├── Routes/
│   │   ├── AuthRouter.js
│   │   ├── ExpenseRouter.js
│   │   ├── ProductRouter.js
│   ├── Middlewares/
│   │   ├── Auth.js
│   │   ├── AuthValidation.js
│   ├── index.js
│   ├── package.json
│   └── .env
│   ├── vercel.json
│   └── package-lock.json
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── ExpenseDetails.css
│   │   │   ├── ExpenseDetails.js
│   │   │   ├── ExpensesTable.css
│   │   │   ├── ExpensesTable.js
│   │   │   ├── ExpenseTrackerForm.js
│   │   │   ├── ExpenseTrackerForm.css
│   │   │   ├── Home.css
│   │   │   ├── Home.js
│   │   │   ├── Login.css
│   │   │   ├── Login.js
│   │   │   ├── Signup.css
│   │   │   ├── Signup.js
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── logo.svg
│   │   ├── RefrshHandler.js
│   │   ├── reportWebVitals.js
│   │   ├── setupTests.js
│   │   ├── utils.js
│   ├── public/
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   ├── robots.txt
│   │   ├── logo192.png
│   │   ├── favicon.ico
│   │   ├── index.html
│   ├── package.json
│   ├── README.md
│   ├── package-lock.json
│   ├── vercel.json
│   └── .env
├── README.md

## Usage

1.  **Register or log in to your account.**
2.  **Add expense records.**
