$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$nodeDir = Join-Path $projectRoot ".tools\node-v24.16.0-win-x64"
$env:Path = "$nodeDir;$env:Path"

Set-Location $projectRoot
& (Join-Path $nodeDir "npm.cmd") run dev
