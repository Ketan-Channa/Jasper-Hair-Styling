# ✂️ Jasper Hair Saloon and Styling Services

<img width="1920" height="860" alt="Screenshot (420)" src="https://github.com/user-attachments/assets/69c53cc5-a30c-4adb-b413-6abc660360c3" /> 
<img width="1920" height="849" alt="Screenshot (421)" src="https://github.com/user-attachments/assets/6bd2ad18-b3cc-4451-8a7f-6a004579cc9a" />
<img width="1920" height="844" alt="Screenshot (422)" src="https://github.com/user-attachments/assets/335d6b4f-cd36-4cfe-8adc-6ff7748de288" />



**A premium, web-based salon management and styling service platform featuring an obsidian-themed interface, intuitive sidebar-driven navigation, and real-time cloud synchronization.**

## 🚀 Live Links
- **Live Application (Vercel):** [👉 Access the Live App Here](https://jasper-hair-styling.vercel.app/)

## ✨ Key Features
- **Obsidian-Themed UI:** A clean, professional, and visually striking dark-themed aesthetic.
- **Sidebar Navigation:** A modular, highly organized layout for a seamless user experience across different salon services.
- **Real-Time Data Synchronization:** Instant updates across all active sessions, managed seamlessly via cloud-synced technologies.
- **Secure Authentication:** Robust user and staff login system powered by Firebase Authentication.
- **Service Management:** Modular architecture handling bookings, styling services, and customer management.

## 🛠️ Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Backend & Database:** Firebase (Auth, Firestore / Realtime Database)
- **Deployment:** Vercel (CI/CD connected via GitHub)

## 💻 Local Setup & Installation

**1. Clone the repository**
```bash
git clone [https://github.com/yourusername/jasper-hair-saloon.git](https://github.com/yourusername/jasper-hair-saloon.git)
cd jasper-hair-saloon

2. Configure Firebase Environment
To connect the app to your database, you need to add your Firebase configuration keys to your JavaScript initialization file:

JavaScript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "jasper-saloon-12345.firebaseapp.com",
  projectId: "jasper-saloon-12345",
  storageBucket: "jasper-saloon-12345.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
3. Run the application locally
Because this is a static HTML/JS project, you can simply open index.html in your browser. Alternatively, use an extension like VS Code Live Server for hot-reloading:

Bash
npx http-server
☁️ Deployment Instructions (Vercel)
This project is configured for seamless deployment on Vercel.

Push your latest code to your GitHub main branch.

Log into Vercel.

Click Add New... > Project and import this GitHub repository.

Leave the framework preset as Other (since it's plain HTML/JS).

Click Deploy. Vercel will automatically update the live site on every future git push.

📁 Directory Structure
Plaintext
├── assets/
│   ├── css/
│   │   └── style.css          # Obsidian theme and layout styling
│   ├── js/
│   │   ├── main.js            # UI logic and sidebar navigation
│   │   └── firebase.js        # Database and Auth initialization
│   └── images/                # Salon graphics and UI icons
├── index.html                 # Main entry point / Dashboard
├── screenshot.png             # GitHub preview image
└── README.md
