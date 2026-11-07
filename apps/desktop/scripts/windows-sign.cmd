@echo off
setlocal DisableDelayedExpansion
set "signTool=%INFINITY_DESKTOP_WINDOWS_SIGNTOOL%"
set "certificateFile=%INFINITY_DESKTOP_WINDOWS_CER_FILE%"
set "tokenPin=%INFINITY_DESKTOP_WINDOWS_TOKEN_PIN%"
set "keyContainer=%INFINITY_DESKTOP_WINDOWS_KEY_CONTAINER%"
set "targetFile=%INFINITY_DESKTOP_WINDOWS_SIGN_TARGET%"
set "appendSignature="
if "%INFINITY_DESKTOP_WINDOWS_SIGN_APPEND%"=="1" set "appendSignature=/as"
set "INFINITY_DESKTOP_WINDOWS_SIGNTOOL="
set "INFINITY_DESKTOP_WINDOWS_CER_FILE="
set "INFINITY_DESKTOP_WINDOWS_TOKEN_PIN="
set "INFINITY_DESKTOP_WINDOWS_KEY_CONTAINER="
set "INFINITY_DESKTOP_WINDOWS_SIGN_TARGET="
set "INFINITY_DESKTOP_WINDOWS_SIGN_APPEND="
set "signTool=" & set "certificateFile=" & set "tokenPin=" & set "keyContainer=" & set "targetFile=" & set "appendSignature=" & "%signTool%" sign /v /fd sha256 /f "%certificateFile%" /kc "[{{%tokenPin%}}]=%keyContainer%" /csp "eToken Base Cryptographic Provider" %appendSignature% "%targetFile%"
exit /b %errorlevel%
