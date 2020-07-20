@echo off

set PROJECT_ROOT=%~dp0

rem The following two variables need to be set if the installation folders are not part of the PATH environment variable.
set NODE_HOME=D:\software\Node.js\node-v12.16.2-win-x64
set GIT_HOME=D:\software\Git\PortableGit\cmd
set VISUALSTUDIOCODE_HOME=D:\software\VisualStudioCode\1.47.2
set GRUNT_HOME=%PROJECT_ROOT%\node_modules\grunt\node_modules\.bin

call :setPathFor Node.js, 				%NODE_HOME%, 					"node --version"
call :setPathFor Git, 					%GIT_HOME%,  					"git  --version"
call :setPathFor VisualStudioCode,	%VISUALSTUDIOCODE_HOME%,	"code --version"

if not exist %GRUNT_HOME% (
   echo Home folder "%GRUNT_HOME%" of grunt does not exist! Did you forget to run 'npm install'?
   pause
) else (
	set "PATH=%PATH%;%GRUNT_HOME%"
)

exit /B 0

:setPathFor
%~3 > nul 2>&1
if errorlevel 1 (
	if not exist %~2 (
		echo.
		echo ERROR: Neither PATH nor environment variable points to installation folder of %~1!
		echo.
		pause
		exit 1
	) else (
	   set "PATH=%PATH%;%~2"
	)
)
exit /B 0
