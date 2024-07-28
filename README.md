# Employee Management System Frontend

This is the frontend part of the Employee Management System, built with React.js. It allows users to register, login, and manage employees.

## Features

- User Authentication (Register, Login, Logout)
- Add Employee
- View All Employees
- Conditional Rendering based on Authentication Status

## Technologies Used

- React.js
- React Router DOM

## Getting Started

### Prerequisites

- Node.js installed
- npm (Node Package Manager) installed

### Installation

1. Clone the repository:

   git clone https://github.com/yourusername/employee-management-system-frontend.git
   cd employee-management-system-frontend

2. ## Install the dependencies: ##
    npm install

## Running the Application ##

1. ## Start the development server: ##
                npm run dev

2.The application will run on http://127.0.0.1:5173/

## Components ##
### LandingPage.jsx ### 

This component manages the state for showing different sections of the application (Login, Register, Add Employee, All Employees, Welcome) based on user actions and authentication status.

### Navbar.jsx ###

This component displays the navigation bar with options to login, register, and logout.

### Sidebar.jsx ###

This component displays the sidebar with options to show the Add Employee form and view all employees.

### Forms ###

    AddEmployee.jsx: Form for adding a new employee.
    Login.jsx: Form for user login.
    Register.jsx: Form for user registration.
    
### Other Components ###
    AllEmployees.jsx: Displays a list of all employees.
    Welcome.jsx: Displays a welcome message.

## API Integration ##

Update the API_PATH in src/utilities/ApiPath.js with your backend API path:

export const API_PATH = "http://localhost:4000/";

## Authentication ##

User authentication is managed using localStorage. On successful login, a token is stored in localStorage, which is used to conditionally render components.

## Example Usage ##

    Register a new user.
    Login with the registered user.
    Add a new employee.
    View the list of all employees.
    Logout.
