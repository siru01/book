# book
Python/Django Developer Mini Assignment (with Frontend Integration)

Book Management App – Django REST + Next.js
A simple Book Management app with:
- JWT Authentication using djangorestframework-simplejwt
- Book CRUD APIs
- Frontend integration using Next.js
- Token-protected routes
- SQLite for backend DB
Project Structure
book-project/
├── backend/        # Django backend
└── frontend/       # Next.js frontend
Backend Setup (Django)
 Prerequisites
- Python 3.x
- pip (Python package manager)
Setup Instructions
1. Navigate to backend folder
   cd backend

2. Create and activate virtual environment (optional)
   python -m venv env
   source env/bin/activate  # Linux/macOS
   env\Scripts\activate     # Windows

3. Install dependencies
   pip install -r requirements.txt

4. Apply migrations
   python manage.py makemigrations
   python manage.py migrate

5. Run the server
   python manage.py runserver
Required Dependencies (in requirements.txt)
django
djangorestframework
djangorestframework-simplejwt
django-cors-headers
Frontend Setup (Next.js)
Prerequisites
- Node.js
- npm or yarn
Setup Instructions
1. Navigate to frontend folder
   cd frontend

2. Install dependencies
   npm install

3. Create .env.local with:
   NEXT_PUBLIC_API_BASE=http://127.0.0.1:8000

4. Run frontend
   npm run dev

5. Visit: http://localhost:3000/login
How to Test , Used Postman
Authentication
1. Register user
POST http://127.0.0.1:8000/api/register/
{
  "username": "testuser",
  "email": "test@example.com",
  "password": "yourpassword"
}

2. Login from frontend
Go to: http://localhost:3000/login
Use registered credentials. Redirects to /books.
Book Features
- View/add books (JWT protected)
- Token stored in localStorage
- Uses axios with Authorization: Bearer <token>
Brief Logic Explained
Backend
- Views handle register & book APIs
- Serializers validate data
- JWT auth with simplejwt
- Book APIs protected
Frontend
- /login gets token, saves to localStorage
- /books fetches & posts using token
- API URL from .env.local
Submission Guidelines
- Share GitHub repo with:
  - Backend & frontend code
  - README with setup, usage, logic comments
  - Test instructions
Optional Deployment (Bonus)
- Frontend: Vercel
- Backend: Render, Railway, etc.
- Set CORS and env variables for production
