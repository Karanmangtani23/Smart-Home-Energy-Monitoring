# ⚡ Smart Home Energy Management System  

## 📜 Project Overview  
The **Smart Home Energy Management System** is a scalable and modular platform designed to monitor, analyze, and optimize energy consumption efficiently. Built with a **microservices architecture**, the system provides **real-time energy data**, **detailed analytics**, and **automated notifications** to help users manage energy usage effectively.  

## 🚀 Features  
- **Real-time energy monitoring** with REST APIs.  
- **Energy consumption analytics** for insights and optimization.  
- **Automated notifications** for usage alerts and efficiency tips.  
- **User authentication** with JWT-based security.  
- **Microservices architecture** for modularity and scalability.  
- **Docker & Kubernetes** for seamless deployment.  


## 🛠 Tech Stack  

### **Backend**  
- **Node.js & Express.js** – Microservices-based REST APIs.  
- **PostgreSQL** – Relational database for structured data.  
- **JWT Authentication** – Secure user authentication.  

### **Frontend**  
- **React.js** – Modern frontend with reusable components.  
- **Redux** – State management for better UI control.  

### **Deployment & Orchestration**  
- **Docker** – Containerization of microservices.  
- **Kubernetes** – Automated deployment and scaling.  
- **Nginx** – Reverse proxy for efficient request handling.  

## 🔧 Setup & Installation  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/Karanmangtani23/Smart-Home-Energy-Monitoring.git
cd energy-management-system
```
### **2️⃣ Environment Variables**  
- Create .env files in the required directories.
- Backend .env
```sh
PORT=5000
DATABASE_URL=postgres://user:password@database:5432/energy_db
JWT_SECRET=your_secret_key
```
- Frontend.env
```
REACT_APP_API_URL=http://localhost:8080
```
### **3️⃣ Run with Docker Compose (Local Development)**  
```
docker-compose up --build
```
### **4️⃣ Deploy on Kubernetes (Production Setup)**  
```
kubectl apply -f k8s/
kubectl get pods
```

## 🌐 API Endpoints  

| Endpoint               | Method | Description                     |
|------------------------|--------|---------------------------------|
| `/auth/register`       | POST   | Register new user              |
| `/auth/login`          | POST   | User login (JWT)               |
| `/energy/data`         | GET    | Fetch energy usage data        |
| `/analytics/report`    | GET    | Generate energy reports        |
| `/notifications/alerts`| GET    | Fetch user notifications       |

---

## 💡 Challenges Faced  

- Ensuring seamless **microservices communication** using **API Gateway**.  
- **Database migrations and seeders** for structured data storage.  
- **Kubernetes service orchestration** for scalability and fault tolerance.  
