# Frontend Dashboard Project - React.js with RBAC (Role-Based Access Control)

This is the **frontend** for the Dashboard project built using **React.js**, where Role-Based Access Control (RBAC) is implemented to manage user access based on their roles. Users are either assigned an **Admin** or **User** role, with access to different sections of the dashboard based on their permissions.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Role-Based Access Control (RBAC)](#role-based-access-control-rbac)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

This is the **React.js** frontend for the dashboard project. It communicates with the backend API, handles user authentication with JWT, and renders the dashboard UI based on the user's role (Admin or User). The frontend utilizes **React Router** for routing and **Material-UI** for UI components.

---

## Features

- **Role-Based Access Control (RBAC)**: Dynamically adjusts UI elements based on the user’s role (Admin or User).
- **User Authentication**: Includes login, registration, and logout functionality using JWT tokens.
- **Protected Routes**: Only authorized users (based on role) can access certain parts of the dashboard.
- **Responsive UI**: Uses Material-UI components to create a modern and responsive user interface.
- **State Management**: Uses Redux to manage authentication state, user data, and role-based access.

---

## Technologies Used

- **React.js**: Frontend JavaScript library for building the UI.
- **React Router**: For managing routing and navigation within the app.
- **Axios**: For making HTTP requests to the backend API.
- **React Context / Hooks**: For managing the authentication flow and user roles.

---

## Project Structure

```bash
frontend/
├── public/                   # Public files (index.html, favicon, etc.)
│
└── src/                      # React application source code
    ├── assets/                # Static assets (images, icons, etc.)
    ├── components/            # Reusable components (Navbar, Sidebar, etc.)
    ├── pages/                 # Pages (AdminDashboard, UserDashboard, Login, etc.)
    ├── redux/                 # Redux state management (actions, reducers)
    ├── services/              # API requests (using Axios)
    ├── utils/                 # Utility functions (like role checks)
    ├── App.js                 # Main entry point for the React app
    └── index.js               # React DOM render entry point

```
---

## Setup Instructions

### 1. Clone the Repository

Clone the frontend repository to your local machine:

```bash
git clone https://github.com/your-username/dashboard-frontend.git
cd dashboard-frontend

```
### 2. Install Dependencies
Navigate to the frontend directory and install the required dependencies:
```bash
npm install
```
### 4. Start the Development Server
Run the following command to start the React development server:
```bash
npm run dev
```
Your app will be live at **http://localhost:3000.**

### Image
![DashboardImg](https://github.com/user-attachments/assets/0b0e7dfc-11bc-4ff7-8499-df70129ce72c)






