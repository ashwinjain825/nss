@echo off
title NSS IIITDM Kurnool Web Portal
echo ========================================================
echo   National Service Scheme (NSS) - IIITDM Kurnool Portal
echo ========================================================
echo.
echo 1. Opening website in your default browser...
start http://localhost:8000
echo.
echo 2. Running local web server on http://localhost:8000
echo    [Keep this window open while using the website]
echo    [Press Ctrl+C in this window when you want to stop]
echo.
python -m http.server 8000
