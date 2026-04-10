param(
    [string]$SourceDir = "C:\Users\User\Documents\GitHub\synanthropia\images\actions\history",
    [string]$OutputDir = "$env:USERPROFILE\Pictures\synanthropia-actions-blurred\history",
    [ValidateSet("blur", "mosaic", "solid")]
    [string]$Mode = "blur",
    [double]$Threshold = 0.2,
    [double]$MaskScale = 1.3,
    [int]$Limit = 0,
    [switch]$KeepMetadata,
    [switch]$Overwrite
)

$pythonRoot = "C:\Users\User\AppData\Local\Programs\Python\Python312"
$defaceExe = Join-Path $pythonRoot "Scripts\deface.exe"

if (-not (Test-Path $defaceExe)) {
    throw "deface.exe was not found at $defaceExe"
}

if (-not (Test-Path $SourceDir)) {
    throw "Source folder was not found: $SourceDir"
}

New-Item -ItemType Directory -Force -Path $OutputDir | Out-Null

$sourceRoot = [System.IO.Path]::GetFullPath($SourceDir)
if (-not $sourceRoot.EndsWith([System.IO.Path]::DirectorySeparatorChar)) {
    $sourceRoot += [System.IO.Path]::DirectorySeparatorChar
}

$extensions = @("*.jpg", "*.jpeg", "*.png", "*.webp")
$files = Get-ChildItem -Path $SourceDir -Recurse -File -Include $extensions | Sort-Object FullName

if ($Limit -gt 0) {
    $files = $files | Select-Object -First $Limit
}

if (-not $files) {
    Write-Host "No supported image files found under $SourceDir"
    exit 0
}

$processed = 0

foreach ($file in $files) {
    $fullPath = [System.IO.Path]::GetFullPath($file.FullName)
    $relativePath = $fullPath.Substring($sourceRoot.Length)
    $targetPath = Join-Path $OutputDir $relativePath
    $targetDir = Split-Path -Parent $targetPath

    New-Item -ItemType Directory -Force -Path $targetDir | Out-Null

    if ((-not $Overwrite) -and (Test-Path $targetPath)) {
        Write-Host "Skipping existing file: $targetPath"
        continue
    }

    $arguments = @(
        $file.FullName,
        "--output", $targetPath,
        "--replacewith", $Mode,
        "--thresh", $Threshold.ToString([System.Globalization.CultureInfo]::InvariantCulture),
        "--mask-scale", $MaskScale.ToString([System.Globalization.CultureInfo]::InvariantCulture)
    )

    if ($KeepMetadata) {
        $arguments += "--keep-metadata"
    }

    Write-Host "Processing: $relativePath"
    & $defaceExe @arguments

    if ($LASTEXITCODE -ne 0) {
        throw "deface failed for $($file.FullName)"
    }

    $processed += 1
}

Write-Host "Finished. Processed $processed file(s) into $OutputDir"