param(
  [switch]$lockfile = $false
)
Remove-Item .\node_modules\ -Recurse
Remove-Item .\package-lock.json
npm install
gatsby clean

