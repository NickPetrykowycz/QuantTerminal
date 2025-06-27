@echo off
echo ============================================================================
echo QUANTTERMINAL - DEVELOPMENT ENVIRONMENT SETUP
echo ============================================================================
echo.
echo This script will set up your complete development environment:
echo - Python virtual environment with all dependencies
echo - Node.js dependencies for the frontend
echo - VSCode configuration
echo.
echo Prerequisites:
echo - Python 3.8+ installed and in PATH
echo - Node.js 16+ installed and in PATH
echo - Git installed
echo.
echo Press ENTER to continue or Ctrl+C to cancel...
set /p dummy=

echo.
echo ============================================================================
echo STEP 1: PYTHON BACKEND SETUP
echo ============================================================================

echo.
echo Navigating to backend directory...
cd backend

echo.
echo Removing any existing virtual environment...
if exist fresh_env (
    echo   Removing fresh_env...
    rmdir /s /q fresh_env
)
if exist venv (
    echo   Removing venv...
    rmdir /s /q venv
)

echo.
echo Creating fresh Python virtual environment...
python -m venv fresh_env
if errorlevel 1 (
    echo ❌ Failed to create virtual environment
    echo Make sure Python is installed and in your PATH
    pause
    exit /b 1
)

echo.
echo Activating virtual environment...
call fresh_env\Scripts\activate.bat

echo.
echo Upgrading pip...
python -m pip install --upgrade pip

echo.
echo Installing Python dependencies...
pip install -r requirements.txt
if errorlevel 1 (
    echo ❌ Failed to install Python dependencies
    pause
    exit /b 1
)

echo.
echo Testing Python installation...
python -c "import fastapi; print('✓ FastAPI installed successfully')" || (
    echo ❌ FastAPI test failed
    pause
    exit /b 1
)

echo ✅ Backend setup complete!

echo.
echo ============================================================================
echo STEP 2: FRONTEND SETUP
echo ============================================================================

echo.
echo Navigating to frontend directory...
cd ..\frontend

echo.
echo Installing Node.js dependencies...
npm install
if errorlevel 1 (
    echo ❌ Failed to install Node.js dependencies
    echo Make sure Node.js and npm are installed and in your PATH
    pause
    exit /b 1
)

echo.
echo Testing frontend build...
npm run build
if errorlevel 1 (
    echo ❌ Frontend build test failed
    pause
    exit /b 1
)

echo ✅ Frontend setup complete!

echo.
echo ============================================================================
echo STEP 3: VSCODE CONFIGURATION
echo ============================================================================

echo.
echo Navigating back to project root...
cd ..

echo.
echo VSCode settings are already configured in .vscode/settings.json
echo Python interpreter path: ./backend/fresh_env/Scripts/python.exe
echo.
echo To use in VSCode:
echo 1. Open this project in VSCode
echo 2. Press Ctrl+Shift+P
echo 3. Type "Python: Select Interpreter"
echo 4. Choose "./backend/fresh_env/Scripts/python.exe"

echo.
echo ============================================================================
echo SETUP COMPLETE! 🚀
echo ============================================================================
echo.
echo Next steps:
echo.
echo 1. Start the backend server:
echo    cd backend
echo    fresh_env\Scripts\activate
echo    python app.py
echo.
echo 2. Start the frontend dev server (in a new terminal):
echo    cd frontend
echo    npm run dev
echo.
echo 3. Open your browser:
echo    - Frontend: http://localhost:5173
echo    - Backend API docs: http://localhost:8000/docs
echo.
echo Happy coding! 💚
echo.
pause