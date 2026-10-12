/**
 * Recibe los formularios del sitio y los guarda como filas en esta planilla.
 * Una pestaña por formulario (se crea sola la primera vez).
 *
 * Configuración (ver LEEME.md):
 *  - Propiedad del script  SECRETO  = la misma clave que GOOGLE_SCRIPT_SECRET en el sitio.
 *  - Implementar > Aplicación web > Ejecutar como: Yo / Acceso: Cualquier usuario.
 */
function doPost(e) {
  try {
    var datos = JSON.parse(e.postData.contents);
    var secreto = PropertiesService.getScriptProperties().getProperty('SECRETO');

    if (!secreto || datos.secret !== secreto) {
      return salida_({ ok: false, error: 'no_autorizado' });
    }
    if (datos.accion === 'contar') {
      return contar_(datos.perfil);
    }
    if (!datos.hoja || !datos.columnas || !datos.valores) {
      return salida_({ ok: false, error: 'datos_incompletos' });
    }

    var libro = SpreadsheetApp.getActiveSpreadsheet();
    var hoja = libro.getSheetByName(datos.hoja) || libro.insertSheet(datos.hoja);

    var encabezados = ['Fecha'].concat(datos.columnas);
    if (hoja.getLastRow() === 0) {
      hoja.appendRow(encabezados);
      hoja.setFrozenRows(1);
      hoja.getRange(1, 1, 1, encabezados.length).setFontWeight('bold');
    }

    var fecha = Utilities.formatDate(
      new Date(), 'America/Argentina/Buenos_Aires', 'yyyy-MM-dd HH:mm:ss'
    );
    var fila = [fecha].concat(datos.valores.map(limpiar_));
    hoja.appendRow(fila);

    return salida_({ ok: true });
  } catch (err) {
    return salida_({ ok: false, error: String(err) });
  }
}

// Suma 1 al contador del perfil en la pestaña "Conteo" (una fila por perfil).
function contar_(perfil) {
  var perfiles = ['Intergeneracional', 'Persona mayor', 'Organización-Empresa'];
  if (perfiles.indexOf(perfil) === -1) {
    return salida_({ ok: false, error: 'perfil_invalido' });
  }

  var lock = LockService.getScriptLock();
  lock.waitLock(10000); // evita perder sumas si dos personas hacen click a la vez
  try {
    var libro = SpreadsheetApp.getActiveSpreadsheet();
    var hoja = libro.getSheetByName('Conteo');
    if (!hoja) {
      hoja = libro.insertSheet('Conteo');
      hoja.appendRow(['Perfil', 'Total de clicks', 'Último click']);
      perfiles.forEach(function (p) { hoja.appendRow([p, 0, '']); });
      hoja.setFrozenRows(1);
      hoja.getRange(1, 1, 1, 3).setFontWeight('bold');
    }

    var fila = perfiles.indexOf(perfil) + 2;
    var total = Number(hoja.getRange(fila, 2).getValue()) || 0;
    var fecha = Utilities.formatDate(
      new Date(), 'America/Argentina/Buenos_Aires', 'yyyy-MM-dd HH:mm:ss'
    );
    hoja.getRange(fila, 2, 1, 2).setValues([[total + 1, fecha]]);
    return salida_({ ok: true, total: total + 1 });
  } finally {
    lock.releaseLock();
  }
}

// Evita que un texto que empiece con = + - @ se interprete como fórmula.
function limpiar_(valor) {
  var s = String(valor);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function salida_(objeto) {
  return ContentService
    .createTextOutput(JSON.stringify(objeto))
    .setMimeType(ContentService.MimeType.JSON);
}
