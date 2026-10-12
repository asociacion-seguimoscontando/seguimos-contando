# Descarga las imágenes de Nuestro equipo desde Figma (los links duran 7 días).
# Uso (desde la carpeta del proyecto):  powershell -ExecutionPolicy Bypass -File scripts\descargar-equipo.ps1
$base = "https://www.figma.com/api/mcp/asset/40727554-3d06-438b-9a84-8a0c1bd18bc3"
$destino = Join-Path $PSScriptRoot "..\public\img\equipo"
New-Item -ItemType Directory -Force -Path $destino | Out-Null

$archivos = @{
  "fondo.png"       = "ce5b8.png"
  "silueta.png"     = "08d64.png"
  "logo-titulo.png" = "b0c3c.png"
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
