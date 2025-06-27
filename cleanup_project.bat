@echo off
echo ============================================================================
echo QUANTTERMINAL PROJECT CLEANUP - AUTO MODE
echo ============================================================================
echo.

echo Cleaning Python cache files...
for /d /r . %%d in (__pycache__) do @if exist "%%d" (
    echo   Removing %%d
    rd /s /q "%%d"
)
for /r . %%f in (*.pyc) do @if exist "%%f" (
    echo   Removing %%f
    del /q "%%f"
)

echo.
echo Cleaning virtual environments...
if exist "backend\venv" (
    echo   Removing backend\venv...
    rd /s /q "backend\venv"
)
if exist "venv" (
    echo   Removing root venv...
    rd /s /q "venv"
)
if exist ".venv" (
    echo   Removing .venv...
    rd /s /q ".venv"
)

echo.
echo Cleaning Node.js files...
if exist "frontend\node_modules" (
    echo   Removing frontend\node_modules...
    rd /s /q "frontend\node_modules"
)
if exist "node_modules" (
    echo   Removing root node_modules...
    rd /s /q "node_modules"
)
if exist "frontend\dist" (
    echo   Removing frontend\dist...
    rd /s /q "frontend\dist"
)

echo.
echo Cleaning OS-specific files...
for /r . %%f in (Thumbs.db) do @if exist "%%f" (
    echo   Removing %%f
    del /q "%%f"
)
for /r . %%f in (.DS_Store) do @if exist "%%f" (
    echo   Removing %%f
    del /q "%%f"
)

echo.
echo Cleaning log and temporary files...
for /r . %%f in (*.log) do @if exist "%%f" (
    echo   Removing %%f
    del /q "%%f"
)
for /r . %%f in (*.tmp) do @if exist "%%f" (
    echo   Removing %%f
    del /q "%%f"
)
for /r . %%f in (*.temp) do @if exist "%%f" (
    echo   Removing %%f
    del /q "%%f"
)

echo.
echo ============================================================================
echo CLEANUP COMPLETE!
echo ============================================================================