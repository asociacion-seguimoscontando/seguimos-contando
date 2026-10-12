# Descarga las imágenes de Institución desde Figma (los links duran 7 días).
# Uso (desde la carpeta del proyecto):  powershell -ExecutionPolicy Bypass -File scripts\descargar-institucion.ps1
$base = "https://www.figma.com/api/mcp/asset/321e7255-6a94-460e-9316-e345f8143071"
$destino = Join-Path $PSScriptRoot "..\public\img\institucion"
New-Item -ItemType Directory -Force -Path $destino | Out-Null

$archivos = @{
  "hero-fondo.png" = "ce5b8.png"
  "franja.png"     = "0bde4.png"
  "foto-papel.png" = "9badb.png"
  "flecha.svg"     = "8d33c.svg"
}

foreach ($nombre in $archivos.Keys) {
  $url = "$base/$($archivos[$nombre])"
  $salida = Join-Path $destino $nombre
  try {
    Invoke-WebRequest -Uri $url -OutFile $salida -UseBasicParsing
    $kb = [math]::Round((Get-Item $salida).Length / 1KB)
    Write-Host "OK  $nombre ($kb KB)"
  } catch {
    Write-Host "ERROR  $nombre -> $($_.Exception.Message)" -ForegroundColor Red
  }
}
Write-Host "Listo."
