@echo off
echo ============================================================================
echo CHECKING FILES THAT WILL BE CLEANED
echo ============================================================================
echo.

echo Python cache files (__pycache__ folders):
for /d /r . %%d in (__pycache__) do @if exist "%%d" echo   %%d

echo.
echo Python compiled files (*.pyc):
for /r . %%f in (*.pyc) do @if exist "%%f" echo   %%f

echo.
echo Virtual environments:
if exist "backend\venv" echo   backend\venv (EXISTS)
if exist "venv" echo   venv (EXISTS)
if exist ".venv" echo   .venv (EXISTS)

echo.
echo Node.js files:
if exist "frontend\node_modules" echo   frontend\node_modules (EXISTS)
if exist "node_modules" echo   node_modules (EXISTS)
if exist "frontend\dist" echo   frontend\dist (EXISTS)

echo.
echo OS-specific files:
for /r . %%f in (Thumbs.db) do @if exist "%%f" echo   %%f
for /r . %%f in (.DS_Store) do @if exist "%%f" echo   %%f

echo.
echo Log files:
for /r . %%f in (*.log) do @if exist "%%f" echo   %%f

echo.
echo Temporary files:
for /r . %%f in (*.tmp) do @if exist "%%f" echo   %%f
for /r . %%f in (*.temp) do @if exist "%%f" echo   %%f
for /r . %%f in (*.bak) do @if exist "%%f" echo   %%f

echo.
echo ============================================================================
echo END OF CHECK
echo ============================================================================
pause