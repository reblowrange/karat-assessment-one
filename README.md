# Karat Assessment – Angular 21

This repository contains an **Angular 21** application developed as part of a **Karat technical assessment**.  
It uses **json-server** as a temporary/mock backend to serve REST APIs required by the application.

## ⛩️ Project Structure
```
karat-assessment-one/
│
├── src/                 # Angular source files
├── public/              # Static assets
├── db.json              # Mock backend data
├── json-server.json     # json-server configuration
├── package.json         # Project scripts & dependencies
├── angular.json         # Angular configuration
└── README.md            # Project documentation
```

## 🧰 Tech Stack

- **Angular** 21.x
- **Angular Material** 21.x
- **RxJS** 7.8
- **json-server** (Mock REST APIs)
- **Node.js / npm**

---

## 📌 Prerequisites

Ensure the following are installed on your system:

- Node.js (v16+ recommended)
- npm
- Angular CLI (v21)

---

## 📦 Project Setup

### 1️⃣ Install Dependencies

Clone the repository and install dependencies:

```bash
git clone https://github.com/reblowrange/karat-assessment-one.git
cd karat-assessment-one
npm install
```


### 2️⃣ Run JSON Server (Mock Backend)

The application uses **json-server** to mock backend APIs required for the Karat assessment. It runs on `http://localhost:3000`.
```bash
npm run json-server 
```
#### Served endpoints
```
http://localhost:3000/users         // User CRUD APIs
http://localhost:3000/search        // Fruit list for search functionality
```
---
### 3️⃣ Run Angular Application
After the json server is running, start the Angular 21 application. An application serve on `http://localhost:4200`
```
npm start
```
## 📜 Available Scripts

| Command | Description |
|-------|------------|
| `npm start` | Runs the Angular application using `ng serve` |
| `npm run json-server` | Starts json-server using `db.json` on port **3000** |
| `npm run build` | Builds the Angular application for production |
| `npm run watch` | Builds the application in watch mode for development |
| `npm test` | Runs unit tests |
| `npm run ng` | Executes Angular CLI commands |
