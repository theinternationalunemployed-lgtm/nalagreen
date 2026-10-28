/* ==============================================================
   Nalagreen — JavaScript principal
   Sin librerías externas. Cada bloque está separado y comentado.
   ============================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------
     Datos del negocio (un único sitio para cambiarlos)
     ------------------------------------------------------------ */
  var NEGOCIO = {
    whatsapp: '34615167778',   // sin "+" ni espacios
    mapaUrl: 'https://www.google.com/maps?q=Nalagreen,+Av.+Ribera+de+la+Burgada,+26,+08389+Palafolls&output=embed'
  };

  var I18N = window.NALA_I18N || { ca: {}, ui: { es: {}, ca: {} } };
  var idiomaActual = 'es';

  /* ------------------------------------------------------------
     1. Menú móvil (botón hamburguesa)
     ------------------------------------------------------------ */
  var toggle = document.querySelector('.nav-toggle');
  var navList = document.getElementById('nav-list');

  function cerrarMenu() {
    navList.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function () {
    var abierto = navList.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(abierto));
  });

  // Al pulsar un enlace del menú, se cierra
  navList.addEventListener('click', function (e) {
    if (e.target.closest('a')) cerrarMenu();
  });

  // Tecla Escape cierra el menú
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') cerrarMenu();
  });

  /* ------------------------------------------------------------
     2. Idiomas (castellano / catalán)
     El castellano se lee del propio HTML la primera vez y se guarda,
     así no hay que escribirlo dos veces.
     ------------------------------------------------------------ */
  var originales = new Map();

  document.querySelectorAll('[data-i18n], [data-i18n-html]').forEach(function (el) {
    originales.set(el, el.hasAttribute('data-i18n-html') ? el.innerHTML : el.textContent);
  });

  function textoUI(clave) {
    return (I18N.ui[idiomaActual] || {})[clave] || I18N.ui.es[clave] || '';
  }

  function aplicarIdioma(lang) {
    idiomaActual = lang === 'ca' ? 'ca' : 'es';
    document.documentElement.lang = idiomaActual;

    originales.forEach(function (textoEs, el) {
      var esHtml = el.hasAttribute('data-i18n-html');
      var clave = el.getAttribute(esHtml ? 'data-i18n-html' : 'data-i18n');
      var texto = idiomaActual === 'ca' && I18N.ca[clave] ? I18N.ca[clave] : textoEs;
      if (esHtml) el.innerHTML = texto; else el.textContent = texto;
    });

    document.title = textoUI('title');

    // Botones del selector
    document.querySelectorAll('.lang-switch button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === idiomaActual));
    });

    // Mensaje predefinido de WhatsApp en el idioma elegido
    var urlWa = 'https://wa.me/' + NEGOCIO.whatsapp + '?text=' + encodeURIComponent(textoUI('waMessage'));
    document.querySelectorAll('.js-wa-link').forEach(function (a) { a.href = urlWa; });

    marcarProximaFecha();

    try { localStorage.setItem('nala-lang', idiomaActual); } catch (e) { /* modo privado */ }
    document.dispatchEvent(new CustomEvent('nala:lang', { detail: idiomaActual }));
  }

  document.querySelectorAll('.lang-switch button').forEach(function (b) {
    b.addEventListener('click', function () { aplicarIdioma(b.dataset.lang); });
  });

  // Idioma inicial: el guardado, o el del navegador (catalán si lo tiene en catalán)
  var guardado = null;
  try { guardado = localStorage.getItem('nala-lang'); } catch (e) { /* nada */ }
  var navegador = (navigator.language || 'es').toLowerCase();
  aplicarIdioma(guardado || (navegador.indexOf('ca') === 0 ? 'ca' : 'es'));

  /* ------------------------------------------------------------
     3. Fechas especiales: destacar la próxima
     Usa data-month y data-day de cada tarjeta. Si la fecha de este
     año ya pasó, cuenta la del año siguiente.
     ------------------------------------------------------------ */
  function marcarProximaFecha() {
    var tarjetas = document.querySelectorAll('.date-card:not([hidden])');
    if (!tarjetas.length) return;

    var hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    var mejor = null, mejorDias = Infinity;

    tarjetas.forEach(function (t) {
      t.classList.remove('is-next');
      var mes = parseInt(t.dataset.month, 10) - 1;
      var dia = parseInt(t.dataset.day, 10);
      var fecha = new Date(hoy.getFullYear(), mes, dia);
      if (fecha < hoy) fecha.setFullYear(hoy.getFullYear() + 1);
      var dias = (fecha - hoy) / 86400000;
      if (dias < mejorDias) { mejorDias = dias; mejor = t; }
    });

    if (mejor) {
      mejor.classList.add('is-next');
      mejor.setAttribute('data-badge', textoUI('nextBadge'));
      var nombre = document.getElementById('next-date-name');
      if (nombre) nombre.textContent = mejor.querySelector('h3').textContent;
    }
  }

  /* ------------------------------------------------------------
     4. Mapa de Google: solo se carga si la persona lo pide
     ------------------------------------------------------------ */
  var botonMapa = document.getElementById('load-map');
  if (botonMapa) {
    botonMapa.addEventListener('click', function () {
      var iframe = document.createElement('iframe');
      iframe.src = NEGOCIO.mapaUrl;
      iframe.title = 'Mapa: Nalagreen, Av. Ribera de la Burgada 26, Palafolls';
      iframe.loading = 'lazy';
      iframe.referrerPolicy = 'no-referrer-when-downgrade';
      var mapa = document.getElementById('map');
      mapa.innerHTML = '';
      mapa.appendChild(iframe);
    });
  }

  /* ------------------------------------------------------------
     5. Horario: resaltar el día de hoy en la tabla
     ------------------------------------------------------------ */
  var diaSemana = new Date().getDay(); // 0 = domingo
  document.querySelectorAll('.hours tr').forEach(function (fila) {
    var rango = fila.dataset.days;
    var esHoy = rango === '0' ? diaSemana === 0 : (diaSemana >= 1 && diaSemana <= 6);
    fila.classList.toggle('is-today', esHoy);
  });

  /* ------------------------------------------------------------
     6. Año actual en el pie de página
     ------------------------------------------------------------ */
  document.getElementById('year').textContent = new Date().getFullYear();
})();
