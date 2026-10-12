# Conectar los formularios con Google Sheets

Cada envío del formulario de Contacto se guarda como una fila nueva en una
planilla de Google. Hay una pestaña por perfil (Intergeneracional, Persona mayor,
Organización-Empresa) y se crean solas.

## 1. Crear la planilla y el script
1. En Google Drive: **Nuevo → Hojas de cálculo de Google**. Ponele un nombre (ej. "Seguimos Contando - Respuestas").
2. Dentro de la planilla: **Extensiones → Apps Script**.
3. Borrá lo que haya y pegá el contenido de `Code.gs` (está en esta carpeta). **Guardar**.
4. **Configuración del proyecto** (rueda dentada) → **Propiedades del script → Agregar propiedad**:
   - Propiedad: `SECRETO`
   - Valor: una clave larga inventada por vos (ej. 30 letras y números al azar). Guardala, la vas a necesitar abajo.

## 2. Publicar el script
1. **Implementar → Nueva implementación → Tipo: Aplicación web**.
2. **Ejecutar como:** Yo. **Quién tiene acceso:** Cualquier usuario.
3. **Implementar** y aceptá los permisos de Google.
4. Copiá la **URL de la aplicación web** (termina en `/exec`).

## 3. Conectarlo al sitio
Creá un archivo `.env.local` en la raíz del proyecto (no se sube a GitHub):

```
GOOGLE_SCRIPT_URL=la URL que copiaste (termina en /exec)
GOOGLE_SCRIPT_SECRET=la misma clave que pusiste en SECRETO
```

Reiniciá `npm run dev`. En Vercel cargá las mismas dos variables en
**Project → Settings → Environment Variables** y hacé un redeploy.

## Notas
- Si cambiás el código del script, hay que hacer **Implementar → Administrar implementaciones → editar → Nueva versión**; si no, sigue corriendo la versión anterior.
- Si cambian las preguntas de un formulario, las columnas de esa pestaña ya no coinciden: creá una pestaña nueva o borrá la anterior.
- Sin estas variables, en desarrollo el formulario "funciona" pero solo muestra los datos en la terminal; en producción devuelve un error.
- **Conteo de ingresos:** cada click en los 3 botones del inicio suma 1 en la pestaña **Conteo** (una fila por perfil, se crea sola). Si ya habías publicado el script antes, copiá de nuevo `Code.gs` y hacé **Nueva versión** de la implementación para que cuente.
