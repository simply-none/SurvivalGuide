@echo off
set a=0
setlocal EnableDelayedExpansion
for %%n in (*.png) do (
set /A a+=1
ren "%%n" "course_cover_!a!.png"
)