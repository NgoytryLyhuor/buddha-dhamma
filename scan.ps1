$files = Get-ChildItem -Path "src" -Recurse -Include *.vue, *.js, *.html
$pattern = "[\u0E00-\u0E7F\u4E00-\u9FFF]"
$found = $false
foreach ($f in $files) {
    $content = [System.IO.File]::ReadAllText($f.FullName)
    $matches = [regex]::Matches($content, $pattern)
    if ($matches.Count -gt 0) {
        $found = $true
        Write-Host "FOUND Thai/Chinese in $($f.Name): $($matches.Count) occurrence(s)"
    }
}
if (-not $found) {
    Write-Host "SCAN CLEAN: no Thai/Chinese characters found in $($files.Count) files"
}