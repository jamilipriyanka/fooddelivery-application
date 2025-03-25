# 🍔 Food Ordering Application

*A full-stack food ordering application built using React, Node.js, Express, and MongoDB.*

This app allows users to browse food items, add them to their cart, place orders, make payments via PayPal, and users can browse through their cart history.

---

## 📌 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Run the Application](#-run-the-application)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [License](#-license)

---

## 🚀 Features
- *User Authentication* (Register/Login) with JWT  
- *Food Browsing & Search*  
- *Cart Management* with Local Storage  
- *Order Placement & Payment* (PayPal Integration)  
- *Map Integration and order placing* with Real-Time location
- *Profile & Order History Management*  

## 🛠 Tech Stack
- *Frontend*: React, React Router, Axios, CSS Modules  
- *Backend*: Node.js, Express, MongoDB, Mongoose  
- *Authentication*: JSON Web Token (JWT)  
- *Payment Integration*: PayPal  
- *Deployment*: Render  

## 🔧 Installation
1. *Clone the Repository*  
   sh
   git clone https://github.com/Manu040405/foodminereact.git
   cd food-ordering-app
   

2. *Install Dependencies*
   sh
   cd frontend
   npm install
   cd ../backend
   npm install
   

## 🌍 Environment Variables
Create a .env file in the backend directory:
sh
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PAYPAL_CLIENT_ID=your_paypal_client_id


## ▶ Run the Application 
1. *Run Backend*
   sh
   cd backend
   npm run dev
   
   
2. *Run Frontend*
   sh
   cd frontend
   npm start
   

3. *Open in Browser*
   
   http://localhost:3000
   

## 📁 Project Structure

<details>
<summary><b>1. Setup & Installation</b></summary>

- [x] Install [NodeJs](https://nodejs.org/en)
- [x] Install [Visual Studio Code](https://code.visualstudio.com)
- [x] Install [Git](https://git-scm.com)
</details>

<details>
<summary><b>2. Creating React App</b></summary>

- [x] Create React App
- [x] Remove Unnecessary Codes
</details>

<details>
<summary><b>3. Building Header Component</b></summary>

- [x] Add Header.js
- [x] Use Header in App.js
- [x] Install react-router-dom in frontend
- [x] Add header.module.css
- [x] Use BrowserRouter inside index.js
- [x] Update Header.js
- [x] Update header.module.css
</details>

<details>
<summary><b>4. Adding Food Thumbnails</b></summary>

- [x] Add HomePage component
- [x] Add AppRoutes component
- [x] Use AppRoutes in App.js
- [x] Add data.js
- [x] Add food Images
- [x] Add foodService.js
- [x] Update HomePage.js with reducer, food loading and thumbnails
</details>

<details>
<summary><b>5. Adding Search Functionality</b></summary>

- [x] Add Search Route to AppRoutes.js
- [x] Add Search function to foodService.js
- [x] Use Search Inside HomePage.js
- [x] Add Search Component with CSS
</details>

<details>
<summary><b>6. Adding Tags Bar</b></summary>

- [x] Add sample_tags to data.js
- [x] Add getAllTags function to foodService.js
- [x] Add Tags Component with CSS
- [x] Add Tag route to AppRoutes.js
- [x] Add getAllByTag function to foodService.js
</details>

<details>
<summary><b>7. Food Page</b></summary>

- [x] Create FoodPage Component
- [x] Add route to AppRoutes.js
- [x] Add getById function to foodService.js
- [x] Update FoodPage Component with template and styling
</details>

<details>
<summary><b>8. Cart Page</b></summary>

- [x] Create Cart Page Component with CSS
- [x] Add cart route to the Routes
- [x] Create useCart Hook with CartProvider
- [x] Implement cart functionality (add/remove/change quantity)
- [x] Save cart to LocalStorage
</details>

<details>
<summary><b>9. Not Found Page</b></summary>

- [x] Create NotFound Component with CSS
- [x] Add Not Found to HomePage, FoodPage, and CartPage
- [x] Fix Search Issue
</details>

<details>
<summary><b>10. Connect To Backend</b></summary>

- [x] Create backend folder and initialize NPM project
- [x] Set up Express server with Cors
- [x] Create Food Router with APIs
- [x] Connect frontend food service to backend APIs
</details>

<details>
<summary><b>11. Login Page</b></summary>

- [x] Create User Router with JWT authentication
- [x] Create user service for frontend
- [x] Create useAuth hook for authentication state
- [x] Create LoginPage component with custom form elements
</details>

<details>
<summary><b>12. Connecting MongoDB</b></summary>

- [x] Install MongoDB and set up connection
- [x] Create User and Food Models
- [x] Implement database config with seeding
- [x] Update routers to use MongoDB models
</details>

<details>
<summary><b>13. Register Page</b></summary>

- [x] Add Register Page Component
- [x] Add register API to user router
- [x] Implement register functionality in frontend
</details>

<details>
<summary><b>14. Loading Component</b></summary>

- [x] Create useLoading hook with provider
- [x] Create Loading component with animation
- [x] Implement loading interceptor
</details>

<details>
<summary><b>15. Checkout Page</b></summary>

- [x] Create Checkout Page component with order items list
- [x] Implement Maps Component with leaflet
- [x] Create Order router with authentication
- [x] Connect frontend to backend order service
</details>

<details>
<summary><b>16. Payment Page</b></summary>

- [x] Create PaymentPage component
- [x] Update Order Router with payment APIs
- [x] Implement PayPal integration
</details>

<details>
<summary><b>17. Order Track Page</b></summary>

- [x] Create Order Track Page with status visualization
- [x] Implement DateTime Component
- [x] Set up map with delivery tracking
- [x] Add order tracking API
</details>

<details>
<summary><b>18. Profile Page</b></summary>

- [x] Create ProfilePage Component
- [x] Implement profile update functionality
- [x] Create password change component
- [x] Add profile APIs to user router
</details>

<details>
<summary><b>19. Orders Page</b></summary>

- [x] Create Orders Page with order history
- [x] Update Order Service with listing functions
- [x] Add order history APIs
</details>

## 📸 Screenshots

<p align="center">
  <img src="https://github.com/jamilipriyanka/fooddelivery-application/blob/main/homepage.jpg" alt="Home Page" width="600"/>
  <p align="center"><strong>Home Page</strong></p>
</p>

<p align="center">
  <img src="https://github.com/jamilipriyanka/fooddelivery-application/blob/main/fooddetails.jpg" alt="Food Details" width="600"/>
  <p align="center"><strong>Food Details Page</strong></p>
</p>

<p align="center">
  <img src="https://github.com/jamilipriyanka/fooddelivery-application/blob/main/search.jpg" alt="Search Results" width="600"/>
  <p align="center"><strong>Search Results</strong></p>
</p>

<p align="center">
  <img src="https://github.com/jamilipriyanka/fooddelivery-application/blob/main/cartpage.jpg" alt="Shopping Cart" width="600"/>
  <p align="center"><strong>Shopping Cart</strong></p>
</p>

<p align="center">
  <img src="https://github.com/jamilipriyanka/fooddelivery-application/blob/main/paypal.jpg" alt="Payment Page" width="600"/>
  <p align="center"><strong>Payment Page</strong></p>
</p>

<p align="center">
  <img src="https://github.com/jamilipriyanka/fooddelivery-application/blob/main/orderform.jpg" alt="Order Tracking" width="600"/>
  <p align="center"><strong>Order Tracking</strong></p>
</p>

<p align="center">
  <img src="https://github.com/jamilipriyanka/fooddelivery-application/blob/main/profileupdate.jpg" alt="User Profile" width="600"/>
  <p align="center"><strong>User Profile</strong></p>
</p>

<p align="center">
  <img src="https://github.com/jamilipriyanka/fooddelivery-application/blob/main/orderhistory.jpg" alt="Order History" width="600"/>
  <p align="center"><strong>Order History</strong></p>
</p>

<p align="center">
  <img src="https://github.com/jamilipriyanka/fooddelivery-application/blob/main/login.jpg" alt="Login Page" width="600"/>
  <p align="center"><strong>Login Page</strong></p>
</p>
