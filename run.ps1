$FILE_NAME = "init.lua"
$CHAPTER_ONE = "chapter-1-getting-started\$($FILE_NAME)"

function Invoke-Run
{
  Write-Host "Enter chapter number #: "
  $ChapterNumber = Read-Host

  if($ChapterNumber -eq 1)
  {
    Write-Host "Chapter 1 - Getting Started"
    lua ".\src\$($CHAPTER_ONE)"
  }
}

Invoke-Run

