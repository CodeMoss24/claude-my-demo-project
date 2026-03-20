@echo off
set code=%1
echo %code% | findstr "password=.*[0-9]" >nul
if %errorlevel% == 0 (
  echo ❌ 禁止明文密码，修改失败
  exit 1
) else (
  echo ✅ 安全检查通过
  exit 0
)