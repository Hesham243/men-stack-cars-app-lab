# 🚗 MEN Stack Cars App Lab

This is a full-stack web application built using the **MEN stack** (MongoDB, Express.js, Node.js) and **EJS** for templating. The app allows users to perform full **CRUD** (Create, Read, Update, Delete) operations on a **Cars** resource.

This project was developed as a lab exercise to solidify practical skills in building RESTful routes and managing a MongoDB-based backend with a dynamic front-end using EJS.

---

## 📚 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [RESTful Routes](#restful-routes)
- [Folder Structure](#folder-structure)
- [License](#license)

---

## ✨ Features

- Full CRUD functionality for car entries:
  - Add a new car
  - View all cars
  - View individual car details
  - Edit car details
  - Delete cars
- Server-side rendering using EJS
- MongoDB database integration with Mongoose ODM
- Clean, simple UI for interacting with data

---

## 🛠 Tech Stack

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [EJS](https://ejs.co/)
- [Method-Override](https://www.npmjs.com/package/method-override)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Hesham243/men-stack-cars-app-lab.git
   cd men-stack-cars-app-lab
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory:

   ```
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Run the app**

   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000/cars`

---

## 📡 RESTful Routes

| HTTP Verb | Route              | Description                        |
|-----------|-------------------|------------------------------------|
| GET       | /cars              | Index - Show all cars              |
| GET       | /cars/new          | New - Form to create a new car     |
| POST      | /cars              | Create - Add a new car to DB       |
| GET       | /cars/:id          | Show - Show details of one car     |
| GET       | /cars/:id/edit     | Edit - Form to edit a car          |
| PUT       | /cars/:id          | Update - Update a car in DB        |
| DELETE    | /cars/:id          | Delete - Remove a car from DB      |

---

## 🗂 Folder Structure

```
men-stack-cars-app-lab/
│
├── models/
│   └── car.js          # Mongoose schema for Car
│
├── views/
│   ├── cars/           # EJS templates for each route
│   │   ├── index.ejs
│   │   ├── new.ejs
│   │   ├── show.ejs
│   │   ├── edit.ejs
│   └── index.ejs       # EJS template for landing page
│
├── public/             # Static CSS files
│
├── server.js           # Main application entry point
├── .env                # Environment variables
└── package.json
```

---

## 📝 License

This project is for educational purposes only. No license is attached.

---

## 🙌 Acknowledgments

This app was created as part of a MEN Stack Lab Exercise to demonstrate the ability to build full-stack applications using Express, MongoDB, and EJS.
