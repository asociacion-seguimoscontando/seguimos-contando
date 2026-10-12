# Descarga las imágenes de Nuestros proyectos desde Figma (los links duran 7 días).
# Uso (desde la carpeta del proyecto):  powershell -ExecutionPolicy Bypass -File scripts\descargar-proyectos.ps1
$base = "https://www.figma.com/api/mcp/asset/bc12503a-0027-4646-829e-09b8ced48dc7"
$destino = Join-Path $PSScriptRoot "..\public\img\proyectos"
New-Item -ItemType Directory -Force -Path $destino | Out-Null

$archivos = @{
  "fondo.png"            = "b5dfb.png"
  "legislatura.png"      = "2be93.png"
  "historia.png"         = "c65cf.png"
  "logo-seguimos.png"    = "d6548.png"
  "instagram.png"        = "f2bc3.png"
  "tiktok.png"           = "08eca.png"
  "facebook.png"         = "9f924.png"
  "youtube.png"          = "6e6cb.png"
  "youtube-logo.png"     = "07e0b.png"
  "spotify.png"          = "f5d0e.png"
  "spotify-logo.png"     = "5fcfb.png"
  "apple.png"            = "294cd.png"
  "apple-logo.png"       = "f00cb.png"
  "tita-tarjeta.png"     = "d89f1.png"
  "logo-noventa.png"     = "b496d.png"
  "logo-tita.png"        = "6cae8.png"
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

# Logo del menú en naranja (solo esta página)
$logo = Join-Path $PSScriptRoot "..\public\img\logo-nav-naranja.png"
try {
  Invoke-WebRequest -Uri "$base/f0283.png" -OutFile $logo -UseBasicParsing
  Write-Host "OK  logo-nav-naranja.png"
} catch {
  Write-Host "ERROR  logo-nav-naranja.png -> $($_.Exception.Message)" -ForegroundColor Red
}
Write-Host "Listo."
