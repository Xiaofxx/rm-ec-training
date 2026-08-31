@echo off
chcp 65001 >nul
cd /d "%~dp0"

rem 一键启动本地预览：双击运行即可，浏览器会自动打开

where python >nul 2>nul
if errorlevel 1 (
    echo [错误] 未检测到 Python，请先安装：https://www.python.org/downloads/
    echo        安装时记得勾选 "Add Python to PATH"
    pause
    exit /b 1
)

if not exist ".venv\Scripts\python.exe" (
    echo [首次运行] 正在创建虚拟环境并安装依赖，约需一两分钟，请稍候...
    python -m venv .venv
    .venv\Scripts\python.exe -m pip install -r requirements.txt
)

echo.
echo 正在启动本地预览，浏览器将自动打开：
echo     http://127.0.0.1:8000/rm-ec-training/
echo 停止预览：关闭本窗口，或在窗口内按 Ctrl+C
echo （若提示端口被占用，说明已有一个预览在运行，直接用浏览器访问上面网址即可）
echo.
start "" cmd /c "timeout /t 3 >nul & start "" http://127.0.0.1:8000/rm-ec-training/"
.venv\Scripts\python.exe -m mkdocs serve -a 127.0.0.1:8000
pause
