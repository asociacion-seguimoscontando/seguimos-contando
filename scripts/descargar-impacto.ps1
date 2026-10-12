# Descarga las imágenes de Impacto desde Figma (los links duran 7 días).
# Uso (desde la carpeta del proyecto):  powershell -ExecutionPolicy Bypass -File scripts\descargar-impacto.ps1
$base = "https://www.figma.com/api/mcp/asset/9d190c71-8bc3-4d3e-adc8-7d58809521c1"
$destino = Join-Path $PSScriptRoot "..\public\img\impacto"
New-Item -ItemType Directory -Force -Path $destino | Out-Null

$archivos = @{
  "fondo.png"          = "0e286.png"
  "youtube.png"        = "8f3bd.png"
  "instituciones.png"  = "e69fb.png"
  "personas-mayores.png" = "9fadb.png"
  "familias.png"       = "82446.png"
  "comentario-1.png"   = "6a7a6.png"
  "comentario-2.png"   = "9f640.png"
  "comentario-3.png"   = "8663d.png"
  "comentario-4.png"   = "cd31a.png"
  "comentario-5.png"   = "59211.png"
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
Write-Host "Listo. (El fondo azul del encabezado es el mismo de Institución: public\img\institucion\hero-fondo.png)"
