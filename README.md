# QuantTerminal

Professional Options Pricing Terminal with FastAPI backend and React frontend.

## 🚀 Quick Setup

### Prerequisites
- Python 3.8+
- Node.js 16+
- Git

### One-Command Setup

**Windows (Command Prompt):**
```bash
setup_dev_environment.bat
```

### Quick Start (After Setup)
```bash
# Start both servers at once
start_dev.bat
```

**Or manually:**
```bash
# Terminal 1 - Backend
cd backend
fresh_env\Scripts\activate
python app.py

# Terminal 2 - Frontend
cd frontend
npm run dev
```

### URLs
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8000/docs
- **Health Check**: http://localhost:8000/health

## 🛠️ Manual Setup

If the automated setup doesn't work:

### Backend
```bash
cd backend
python -m venv fresh_env
fresh_env\Scripts\activate
pip install -r requirements.txt
python app.py
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## 🏗️ Project Structure

```
QuantTerminal/
├── backend/           # FastAPI backend
│   ├── fresh_env/     # Python virtual environment
│   ├── app.py         # Main FastAPI application
│   ├── requirements.txt
│   ├── models/        # Pydantic models
│   ├── routers/       # API route handlers
│   └── utils/         # Utility functions
├── frontend/          # React frontend
│   ├── src/           # React source code
│   ├── public/        # Static assets
│   └── package.json   # Node.js dependencies
└── setup scripts     # Development environment setup
```

## 📦 Features

- **Black-Scholes Pricing**: European options with dividend support
- **Binomial Model**: American/European options with convergence analysis
- **Monte Carlo**: Simulation-based pricing (coming soon)
- **Interactive Charts**: Real-time convergence visualization
- **Terminal UI**: Retro green terminal aesthetic
- **Fast Development**: Hot reload for both frontend and backend