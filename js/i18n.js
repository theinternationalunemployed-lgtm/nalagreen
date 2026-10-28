/* ==============================================================
   Nalagreen — Traducciones (castellano / catalán)

   Cómo funciona:
   - El texto en CASTELLANO está escrito directamente en index.html.
   - Aquí solo se guardan las traducciones al CATALÁN, con la misma
     clave que el atributo data-i18n="..." del HTML.
   - Para cambiar un texto en catalán, busca su clave y edítalo.
   - Para añadir un texto nuevo: pon data-i18n="mi.clave" en el HTML
     y añade aquí  "mi.clave": "Text en català",
   - data-i18n-html permite incluir etiquetas como <br>.

   "ui" son textos que genera JavaScript (no están en el HTML), por eso
   se definen en los dos idiomas.
   ============================================================== */

window.NALA_I18N = {
  ca: {
    "skip": "Salta al contingut",

    "nav.menu": "Menú",
    "nav.services": "Serveis",
    "nav.gallery": "Galeria",
    "nav.dates": "Dates especials",
    "nav.about": "Nosaltres",
    "nav.contact": "Contacte",
    "nav.book": "Encarregar",

    "ph.hero": "Foto principal pendent",
    "ph.photo": "Foto pendent",
    "ph.shop": "Foto de la botiga pendent",

    "hero.eyebrow": "Floristeria a Palafolls · Maresme",
    "hero.title": "Flors amb ànima,<br>fetes a la teva mida",
    "hero.text": "Rams frescos i preservats, casaments i detalls per a cada ocasió. T'assessorem de manera propera i ho preparem amb rapidesa.",
    "hero.book": "Reservar / Encarregar",
    "hero.whatsapp": "Escriu-nos per WhatsApp",

    "services.eyebrow": "El que fem",
    "services.title": "Serveis",
    "services.intro": "Cada encàrrec és únic. Explica'ns què necessites i t'ajudem a triar flors, estil i colors.",
    "srv.weddings.title": "Casaments i esdeveniments",
    "srv.weddings.text": "Decoració floral completa amb assessorament personalitzat d'estil i colors: ram de núvia, cerimònia, taules i detalls.",
    "srv.weddings.cta": "Demanar pressupost per a casament",
    "srv.fresh.title": "Rams de flors fresques",
    "srv.fresh.text": "Rams de temporada preparats al moment, per regalar o per a tu.",
    "srv.preserved.title": "Flors preservades",
    "srv.preserved.text": "Rams i composicions que mantenen la seva bellesa durant molt de temps, sense necessitat d'aigua.",
    "srv.delivery.title": "Enviaments de flors",
    "srv.delivery.text": "Sorprèn algú especial. Pots encarregar des de fora de la zona i t'informem per WhatsApp de cada pas.",
    "srv.business.title": "Empreses",
    "srv.business.text": "Flors per a oficines, comerços, inauguracions i regals d'empresa. Parlem del que necessites.",
    "srv.cta": "Encarregar",

    "gallery.eyebrow": "Els nostres treballs",
    "gallery.title": "Galeria",
    "gallery.more": "Veure'n més a Instagram",

    "dates.eyebrow": "Reserva amb temps",
    "dates.title": "Dates especials",
    "dates.intro": "En les dates assenyalades les comandes es multipliquen. Encarrega amb antelació i assegura't el teu ram.",
    "dates.next": "Propera data:",
    "dates.nextText": "Ja pots fer el teu encàrrec.",
    "dates.cta": "Encarregar ara",
    "dates.valentine.when": "14 febr.",
    "dates.valentine.title": "Sant Valentí",
    "dates.valentine.text": "Roses i rams per dir “t'estimo”.",
    "dates.santjordi.when": "23 abr.",
    "dates.santjordi.title": "Sant Jordi",
    "dates.santjordi.text": "La rosa de Sant Jordi, preparada amb tot l'afecte.",
    "dates.mother.when": "1r diumenge de maig",
    "dates.mother.title": "Dia de la Mare",
    "dates.mother.text": "Un ram per a la persona que sempre hi és.",
    "dates.allsaints.when": "1 nov.",
    "dates.allsaints.title": "Tots Sants",
    "dates.allsaints.text": "Centres i rams per recordar els qui estimem.",
    "dates.xmas.when": "Desembre",
    "dates.xmas.title": "Nadal",
    "dates.xmas.text": "Flor de Pasqua, centres de taula i decoració nadalenca.",

    "about.eyebrow": "Sobre nosaltres",
    "about.title": "Nalagreen",
    "about.pending": "[Text pendent: aquí anirà la presentació escrita per la propietària de Nalagreen — com va començar, com treballa i què la fa diferent.]",
    "about.v1": "Tracte proper i personal",
    "about.v2": "Rapidesa en cada encàrrec",
    "about.v3": "Assessorament d'estil i colors",

    "book.eyebrow": "Reserves i encàrrecs",
    "book.title": "Fes el teu encàrrec",
    "book.intro": "Omple el formulari i et confirmarem la comanda tan aviat com puguem. Si ho prefereixes, escriu-nos per WhatsApp.",

    "contact.eyebrow": "Vine a veure'ns",
    "contact.title": "Contacte",
    "contact.address": "Adreça",
    "contact.directions": "Com arribar-hi",
    "contact.phone": "Telèfon i WhatsApp",
    "contact.social": "Xarxes socials",
    "contact.hours": "Horari",
    "contact.monSat": "Dilluns a dissabte",
    "contact.sun": "Diumenge",
    "contact.call": "Trucar",
    "contact.mapText": "El mapa el proporciona Google Maps. En carregar-lo, Google pot utilitzar galetes.",
    "contact.mapBtn": "Mostrar el mapa",

    "footer.tagline": "Floristeria a Palafolls · Maresme",
    "footer.legal": "Avís legal",
    "footer.privacy": "Política de privacitat",
    "footer.cookies": "Política de galetes",
    "footer.rights": "Tots els drets reservats."
  },

  /* Textos generados por JavaScript, en los dos idiomas */
  ui: {
    es: {
      nextBadge: "Próxima",
      waMessage: "Hola, quiero encargar unas flores",
      title: "Nalagreen · Floristería en Palafolls | Flores, ramos y bodas"
    },
    ca: {
      nextBadge: "Propera",
      waMessage: "Hola, voldria encarregar unes flors",
      title: "Nalagreen · Floristeria a Palafolls | Flors, rams i casaments"
    }
  }
};
