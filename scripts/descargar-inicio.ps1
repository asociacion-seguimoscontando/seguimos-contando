# Descarga las imágenes del Inicio desde Figma (los links duran 7 días).
# Uso (desde la carpeta del proyecto):  powershell -ExecutionPolicy Bypass -File scripts\descargar-inicio.ps1
$base = "https://www.figma.com/api/mcp/asset/23d5b066-45b5-4dc4-bfa9-074f261fac45"
$destino = Join-Path $PSScriptRoot "..\public\img\inicio"
New-Item -ItemType Directory -Force -Path $destino | Out-Null

$archivos = @{
  "hero-logo.png"      = "b0c3c.png"
  "hero-linea.svg"     = "5bd14.svg"
  "hero-flecha.svg"    = "b5b0c.svg"
  "fondo-papel.png"    = "bcd02.png"
  "forms-placa.png"    = "7a400.png"
  "flecha-forms.svg"   = "3a246.svg"
  "nota.png"           = "1cb97.png"
  "quienes-papel.png"  = "6e9ff.png"
  "papel-roto.png"     = "39f4a.png"
  "prot-1517.png"      = "279c4.png"
  "prot-1513.png"      = "b4f72.png"
  "prot-1514.png"      = "ec7e5.png"
  "prot-1515.png"      = "801a0.png"
  "prot-1516.png"      = "9159c.png"
  "prot-1518.png"      = "40de3.png"
  "prot-1519.png"      = "96006.png"
  "prot-1520.png"      = "ed7a1.png"
  "prot-1521.png"      = "9a163.png"
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
