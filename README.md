# 💎 AI Powered Expense Tracker | Obsidian Edition

Welcome to your premium, **"Deployment Ready"** Financial Dashboard. This application has been meticulously crafted to bridge the gap between simple expense tracking and deep financial intelligence.

![Premium Dashboard Overview](https://img.shields.io/badge/Status-Deployment_Ready-success?style=for-the-badge&logo=rocket)
![Tech Stack](https://img.shields.io/badge/Stack-Spring_Boot_+_React-6db33f?style=for-the-badge&logo=spring)
![Theme](https://img.shields.io/badge/Aesthetic-Obsidian_Dark-black?style=for-the-badge&logo=obsidian)

## 🌟 Key Features

### 🪄 AI Magic Bar
Enter transactions using natural language. No more complex forms! Just type:
> *"Spent 55000 on Laptop"* or *"Lunch with friends ₹1200"*
The AI instantly parses the **Title**, **Amount**, and **Category** and injects it into your history.

### 🧠 Financial AI Assistant
A real-time intelligence hub that calculates:
*   **Health Score:** Dynamic % based on your spending patterns.
*   **Budget Alignment:** Instant feedback on your monthly goal of ₹50,000.
*   **Smart Rank:** See how your financial discipline compares.
*   **AI Insights:** Context-aware advice (e.g., *"Food is your top category. Try home-cooking!"*).

### 🌑 Obsidian Dark Mode
A professional-grade, high-impact interface featuring:
*   **Glassmorphism:** Frosted-glass cards with subtle mesh-glow effects.
*   **Symmetric Design:** A balanced, laptop-optimized layout.
*   **Modern Typography:** Clean, high-contrast text for maximum readability.

### 🗄️ Robust Persistence
*   **File-Based Database:** Uses H2 persistence (`jdbc:h2:file:./database/expensedb`) so your data survives reboots.
*   **Clean Architecture:** Refactored for modern Spring Boot standards (Constructor Injection, Global Exception Handling).

---

## 🚀 Quick Start

### 1. Backend (Spring Boot)
Ensure you have **Java 17+** installed.
```bash
cd backend
./mvnw clean compile spring-boot:run
```
*Port: 8080*

### 2. Frontend (React + Vite)
Ensure you have **Node.js** installed.
```bash
cd frontend
npm install
npm run dev
```
*Port: 5176*

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Backend** | Java Spring Boot 3.4.1 |
| **Database** | H2 (File-based Persistence) |
| **ORM** | Hibernate / JPA |
| **Frontend** | React 18 (Vite) |
| **Styling** | Tailwind CSS (Premium Dark Theme) |
| **Charts** | Recharts |
| **Icons** | Lucide React |

---

## 🧪 Verification & Stability
*   **Compiler Verified:** 100% successful `mvn clean compile` status.
*   **Lint Clean:** Zero unused imports or "yellow dot" warnings in the active codebase.
*   **NLP Tested:** Precision parsing for large transactions (e.g., ₹55,000 verified).

**Ready to help you save today. ✨💰🚣‍♂️**
