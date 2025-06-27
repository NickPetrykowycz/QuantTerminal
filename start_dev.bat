@echo off
echo ============================================================================
echo QUANTTERMINAL - QUICK START
echo ============================================================================
echo.
echo Starting both backend and frontend servers...
echo.

echo Starting backend server...
start "QuantTerminal Backend" cmd /k "cd backend && fresh_env\Scripts\activate.bat && python app.py"

timeout /t 3

echo Starting frontend dev server...
start "QuantTerminal Frontend" cmd /k "cd frontend && npm run dev"

echo.
echo ============================================================================
echo SERVERS STARTING...
echo ============================================================================
echo.
echo Backend: http://localhost:8000/docs
echo Frontend: http://localhost:5173
echo.
echo Press any key to close this window...
pause >nul