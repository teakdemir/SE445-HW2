# SE445-HW2: AI-Integrated Lead Capture Pipeline 🚀

This project is a functional, end-to-end data pipeline that captures user leads from a web interface and processes them into a structured database with AI-enhanced summaries.

## 📌 Project Overview
The goal of this project is to demonstrate a live data flow starting from a frontend user interface to a cloud-based storage system. It utilizes Google's ecosystem and generative AI to automate data entry and analysis.

## 🛠 Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Hosting:** GitHub Pages
- **Backend:** Google Apps Script (Serverless)
- **Database:** Google Sheets
- **AI Engine:** Google Gemini AI API (for message summarization)
- **Version Control:** Git & GitHub Desktop

## ⚙️ How It Works
1. **Data Entry:** Users fill out the contact form on the live website.
2. **Transmission:** The frontend sends a JSON payload to a Google Apps Script Web App via a `POST` request.
3. **AI Processing:** The backend script calls the **Gemini AI API** to analyze the user's message and generate a concise summary.
4. **Storage:** The original data, the AI summary, and a server-side timestamp are appended to a Google Sheet in real-time.

## 🚀 Live Demo
You can access the live form here:  
[https://teakdemir.github.io/SE445-HW2/](https://teakdemir.github.io/SE445-HW2/)

## 📂 Project Structure
- `index.html`: The structure of the lead capture form.
- `style.css`: Custom styling for a modern and responsive UI.
- `script.js`: Frontend logic to handle form submission and API communication.
- `HW2_connector.txt`: (Optional) Documentation of the backend Google Apps Script logic.

## 👤 Author
- **Tolga Eren Akdemir** - *Information Systems Analysis and Design Student*

---
*Developed for SE445 Course Assignment.*
