# 🔋 Smart Home Energy Monitoring System  

## 📜 Project Overview  
This project is a **Smart Home Energy Monitoring System** that allows users to track and analyze their household energy consumption in real-time. The system provides interactive graphs, budget alerts, and secure authentication using OAuth 2.0.  

## 🚀 Features  
- **Real-time energy monitoring** via IoT devices (or simulated data).  
- **Energy consumption visualization** using interactive graphs (Line, Bar charts).  
- **Budget alerts** when energy usage exceeds predefined limits.  
- **User authentication** with OAuth 2.0.  
- **Scalability & security** using Kubernetes, Docker, and Spring Boot.  

## 🛠️ Tech Stack  
- **Frontend:** ReactJS, Chart.js, Material UI  
- **Backend:** Java Spring Boot, PostgreSQL  
- **IoT Platform:** AWS IoT Core (or simulated data)  
- **Deployment:** Docker, Kubernetes (k8s)  

---

## 📐 **Design Choices**  

### **1️⃣ Frontend (ReactJS)**  
- **Why React?** ⚛️ React provides a modular component-based structure, making the UI dynamic and interactive.  
- **Why Chart.js?** 📊 Lightweight, easy to integrate, and provides smooth real-time data visualization.  
- **Why Material UI?** 🎨 Ensures a responsive and visually appealing UI.  

### **2️⃣ Backend (Spring Boot)**  
- **Why Spring Boot?** ☕ Simplifies REST API development, provides built-in security, and integrates well with databases.  
- **Why PostgreSQL?** 🗄️ Ensures **data consistency**, supports **time-series data**, and is well-suited for handling energy consumption records.  

### **3️⃣ Authentication (OAuth 2.0)**  
- **Why OAuth 2.0?** 🔐 Ensures **secure user authentication** by allowing third-party identity providers like Google/Facebook.  

### **4️⃣ Deployment (Docker & Kubernetes)**  
- **Why Docker?** 🐳 Containerization ensures consistent environments across development, testing, and production.  
- **Why Kubernetes?** ☁️ Allows automatic scaling, load balancing, and easy management of microservices.  

---

## ⚠️ **Challenges Faced**  
1️⃣ **Real-Time Data Handling**  
   - Simulating energy consumption data was a challenge. We used a **Node.js script** to generate IoT-like data for testing.  
2️⃣ **Integrating OAuth 2.0**  
   - Setting up OAuth authentication with **Spring Security** required configuring authorization flows properly.  
3️⃣ **Kubernetes Configurations**  
   - Defining proper `Deployment`, `Service`, and `Ingress` YAML files for k8s took time.  

---

## 🚀 **How to Run the Project**  

# 1️⃣ Clone the Repository
git clone https://github.com/Karanmangtani23/smart-energy-monitoring.git <br>
cd smart-energy-monitoring

# 2️⃣ Setup Backend (Spring Boot)
cd backend
mvn clean install<br>
mvn spring-boot:run<br>

# 3️⃣ Setup Frontend (ReactJS)
cd ../frontend
npm install<br>
npm start<br>

# 4️⃣ Run with Docker
cd ..
docker-compose up --build<br>

# 5️⃣ Deploy on Kubernetes
kubectl apply -f k8s/
