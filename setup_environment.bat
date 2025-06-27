@echo off
echo Setting up Python environment for QuantTerminal...

REM Navigate to backend directory
cd backend

REM Remove existing venv if it exists
if exist venv (
    echo Removing existing virtual environment...
    rmdir /s /q venv
)

REM Create new virtual environment
echo Creating new virtual environment...
python -m venv venv

REM Activate virtual environment
echo Activating virtual environment...
call venv\Scripts\activate.bat

REM Install dependencies
echo Installing dependencies...
pip install -r requirements.txt

REM Test installation
echo Testing installation...
python -c "import fastapi; print('FastAPI installed successfully')"

echo.
echo Setup complete! 
echo To activate the environment manually, run:
echo   backend\venv\Scripts\activate.bat
echo.
echo To start the server, run:
echo   python app.py
echo.
pause