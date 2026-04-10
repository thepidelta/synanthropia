@echo off
set SCRIPT_DIR=%~dp0
set PYTHON_EXE=C:\Users\User\AppData\Local\Programs\Python\Python312\python.exe

if exist "%PYTHON_EXE%" (
	"%PYTHON_EXE%" "%SCRIPT_DIR%blur_faces.py" %*
) else (
	python "%SCRIPT_DIR%blur_faces.py" %*
)