Mobile Appz – Crowdsourced Road Repair & Infrastructure Feedback
Mobile Appz is a full-stack platform where citizens can report infrastructure issues like potholes, broken streetlights, or graffiti. Reports are geo-tagged, displayed on an interactive map, and analyzed using ML-powered heatmaps to help municipalities prioritize and resolve issues faster.

🚀 Features
📍 Report issues with photo uploads & live location tagging

🗺 Interactive map view with filters and heatmaps

🛠 Admin & user dashboards for report management

🔑 Secure login & registration with authentication

📧 Email notifications for verification and updates

👍 Public upvotes & comments to prioritize issues

🔥 Heatmaps to detect recurring problem areas

🛠 Tech Stack
Frontend: React.js, Mapbox API, Axios

Backend: Node.js, Express.js, MongoDB, Multer, Nodemailer

ML: Python (Flask), scikit-learn, GeoJSON

📸 Screenshots
Keep it light — 2–3 per repo

Frontend repo:

Report Form Page – with image upload & location picker

Dashboard – user reports list & status

Map View – markers and heatmap

Backend repo:

Postman API test – login & report creation

MongoDB connection success in terminal

Email log – verification email sent

ML repo:

Heatmap API JSON output in terminal

Cluster visualization from ML service

🔗 How It Works
scss
Copy
Edit
[React Frontend] → [Node.js Backend API] → [MongoDB]
                       ↘
                        [Flask ML Service] → Heatmap Data (GeoJSON)
👨‍💻 My Role
Frontend:

Built the report submission form with validation

Integrated Mapbox for live location tagging & reverse geocoding

Developed parts of the user dashboard for report management

Implemented login UI and integrated authentication flow

Backend:

Configured MongoDB connection

Created API endpoints for storing reports, fetching dashboard data, and handling authentication

Implemented Multer for image uploads

Added Nodemailer for sending verification & update emails

Set up authentication middleware and JWT token handling

ML Service:

Assisted with database integration to store and retrieve ML-processed heatmap data

🏃 Getting Started
Frontend:

bash
Copy
Edit
npm install
npm run dev
Backend:

bash
Copy
Edit
npm install
npm run dev
ML:

bash
Copy
Edit
pip install -r requirements.txt
python app.py
Make sure to configure your .env files for each service:

Frontend: VITE_API_URL, VITE_MAPBOX_TOKEN

Backend: PORT, MONGO_URI, JWT_SECRET, UPLOAD_DIR, CLIENT_URL

ML: ML_PORT (or set in app.py)

