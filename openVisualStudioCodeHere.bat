@echo off

set PROJECT_ROOT=%~dp0

call extendPathVariable.bat

if %ERRORLEVEL% GTR 0 (
   echo errorlevel = %ERRORLEVEL%
   pause
   exit 1
)

start Code.exe %PROJECT_ROOT%