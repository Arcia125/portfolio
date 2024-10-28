param(
  [switch]$lockfile = $false,
  [switch]$start = $false,
  [switch]$build = $false
)
# echo lockfile: $lockfile start: $start
Remove-Item .\node_modules\ -Recurse
if ($lockfile) {
  Remove-Item .\package-lock.json
}
npm install
gatsby clean
if ($start) {
  npm run start
}
if ($build) {
  npm run build
}
