"""Convierte los PNG pesados de public/img a WebP (misma proporcion, mucho mas livianos)
y actualiza las referencias en src/. Los PNG originales se mueven a _drive-originales/png/."""
import os, re, shutil, sys, time
INICIO = time.time()
PRESUPUESTO = float(os.environ.get("PRESUPUESTO", "9999"))
from PIL import Image

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG = os.path.join(RAIZ, "public", "img")
ORIG = os.path.join(RAIZ, "_drive-originales", "png")
UMBRAL = 150 * 1024
MAX_ANCHO = 2400

convertidos = []
for base, _, files in os.walk(IMG):
    for f in files:
        if not f.lower().endswith(".png"):
            continue
        ruta = os.path.join(base, f)
        if os.path.getsize(ruta) < UMBRAL:
            continue
        if time.time() - INICIO > PRESUPUESTO:
            continue
        im = Image.open(ruta)
        tiene_alpha = im.mode in ("RGBA", "LA") or (im.mode == "P" and "transparency" in im.info)
        im = im.convert("RGBA" if tiene_alpha else "RGB")
        if im.width > MAX_ANCHO:
            h = round(im.height * MAX_ANCHO / im.width)
            im = im.resize((MAX_ANCHO, h), Image.LANCZOS)
        destino = ruta[:-4] + ".webp"
        im.save(destino, "WEBP", quality=84, method=4)
        rel = os.path.relpath(ruta, IMG).replace("\\", "/")
        os.makedirs(os.path.dirname(os.path.join(ORIG, rel)), exist_ok=True)
        shutil.move(ruta, os.path.join(ORIG, rel))
        convertidos.append(rel)
        print("ok", rel, os.path.getsize(destino) // 1024, "KB", flush=True)

# todo lo ya convertido (esta corrida u otras anteriores)
convertidos = []
for base, _, files in os.walk(ORIG):
    for f in files:
        convertidos.append(os.path.relpath(os.path.join(base, f), ORIG).replace("\\", "/"))

# actualizar referencias
src = os.path.join(RAIZ, "src")
for base, _, files in os.walk(src):
    for f in files:
        if not f.endswith((".ts", ".tsx", ".css")):
            continue
        p = os.path.join(base, f)
        s = open(p, encoding="utf-8").read()
        n = s
        for rel in convertidos:
            n = n.replace("/img/" + rel, "/img/" + rel[:-4] + ".webp")
        if n != s:
            open(p, "w", encoding="utf-8").write(n)
            print("ref", os.path.relpath(p, RAIZ))
print("listo", len(convertidos))
