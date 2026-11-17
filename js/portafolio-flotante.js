/* MatiWlog · Portafolio flotante en 3D (10-nov-2026)
   Botón fijo abajo a la derecha que abre una nube 3D con las tarjetas reales del portafolio de Kreathur.
   Se gira arrastrando, las tarjetas de un rubro se juntan al filtrar y cada una abre su demo en kreathur.agency.
   17-nov-2026: el portafolio completo vive solo en kreathur.agency. Esta nube es un adelanto: los datos (D)
   se regeneran desde kreathur.agency/portafolio con generar.py; no editarlos a mano.
   Código propio de MatiWlog: solo usa imágenes y enlaces públicos de kreathur.agency.
   También se abre con matiwlog.com/#portafolio */
(function(){
  var K='https://kreathur.agency';
  /*DATOS-INICIO*/var D=[["Lilafken Apart","Casos reales","Reservas directas, calendario y bot LILA","https://kreathur.agency/vitrina/real/img/real-lilafken.webp","https://lilafken.com/","🏡 Alojamiento","https://marketplace.kreathur.agency/#servicio=stay",1,"solución relacionada"],["La Papa Brava","Casos reales","Web real del local","https://kreathur.agency/vitrina/real/img/real-lapapabrava.webp","https://lapapabrava.cl/","🍔 Comida","https://marketplace.kreathur.agency/#servicio=food",1,"solución relacionada"],["Pichilemu Wear","Casos reales","Moda circular con filtros","https://kreathur.agency/vitrina/real/img/real-pichilemuwear.webp","https://pichilemuwear.com/shop","🛍️ Tienda","https://marketplace.kreathur.agency/#servicio=tienda",1,"solución relacionada"],["PuntoSki","Casos reales","Equipo y ropa de nieve","https://kreathur.agency/vitrina/real/img/real-puntoski.webp","https://puntoski.com/","🛍️ Tienda","https://marketplace.kreathur.agency/#servicio=tienda",1,"solución relacionada"],["Importadora Maully","Casos reales","Catálogo mayorista","https://kreathur.agency/vitrina/real/img/real-maully.webp","https://importadoramaully.cl/","🛍️ Tienda","https://marketplace.kreathur.agency/#servicio=tienda",1,"solución relacionada"],["Pichilemu Online","Casos reales","Guía del destino","https://kreathur.agency/vitrina/real/img/real-pichilemuonline.webp","https://pichilemuonline.cl/","🧩 A medida","https://marketplace.kreathur.agency/#servicio=apps",1,"solución relacionada"],["ARREMO","Casos reales","Web de cafetería","https://kreathur.agency/vitrina/real/img/real-arremo.webp","https://arremo.kreathur.agency/","🧩 Planes Esencial y Start","https://marketplace.kreathur.agency/#planes",1,"solución relacionada"],["Kütrales","Casos reales","Asadores","https://kreathur.agency/vitrina/real/img/real-kutrales.webp","https://kutralesasadores.kreathur.agency/","🧩 Planes Esencial y Start","https://marketplace.kreathur.agency/#planes",1,"solución relacionada"],["Backside","Casos reales","Web del negocio","https://kreathur.agency/vitrina/real/img/real-backside.webp","https://backside.pichilemuonline.cl/","🧩 Planes Esencial y Start","https://marketplace.kreathur.agency/#planes",1,"solución relacionada"],["Oficina Virtual Kreathur","Kreathur","Toda tu empresa en una oficina 3D: cada área con su encargado","https://kreathur.agency/portafolio/t/oficina-virtual.jpg","https://kreathur.agency/portafolio/#oficina","🕹️ Oficina Virtual","https://marketplace.kreathur.agency/#servicio=oficina",1,"desde $249.000 por proyecto"],["Restaurante Lux: elige tu mesa","Gastronomía","Albor: recorre el restaurante en 360° con su sonido, mira la vista desde cada mesa y reserva esa mesa","https://kreathur.agency/portafolio/t/restaurantes-lux.jpg","https://lux.kreathur.agency/","🍔 Comida","https://marketplace.kreathur.agency/#servicio=food",1,"solución relacionada"],["Web para comida rápida","Gastronomía","Rompiente: arma tu completo arrastrando, elige la hora de retiro y mira tu número en la pantalla del local","https://kreathur.agency/portafolio/t/rompiente.jpg","https://kreathur.agency/portafolio/sitios/comida/rompiente/","🍔 Comida","https://marketplace.kreathur.agency/#servicio=food",1,"desde $19.900 al mes"],["Web para panadería","Gastronomía","Miga Norte: mira cuándo sale el pan, apártalo por hornada y arma tu torta con el dedo","https://kreathur.agency/portafolio/t/miga-norte.jpg","https://kreathur.agency/portafolio/sitios/comida/miga-norte/","🍔 Comida","https://marketplace.kreathur.agency/#servicio=food",1,"desde $19.900 al mes"],["Web para food truck","Gastronomía","Rueda Brava: arma tu hamburguesa arrastrando, mírala en tu mesa y suma sellos","https://kreathur.agency/portafolio/t/rueda-brava.jpg","https://kreathur.agency/portafolio/sitios/comida/rueda-brava/","🍔 Comida","https://marketplace.kreathur.agency/#servicio=food",1,"desde $19.900 al mes"],["Web para cafetería","Gastronomía","Brote: arma tu café arrastrando (tamaño, tipo, leche y sabor), tu sándwich y suma sellos","https://kreathur.agency/portafolio/t/gas-web-cafe.jpg","https://kreathur.agency/portafolio/sitios/disenos/brote-cafe-brunch/","🍔 Comida","https://marketplace.kreathur.agency/#servicio=food",1,"desde $19.900 al mes"],["Web para sushi","Gastronomía","Kaigan: arma tu roll eligiendo envoltura y relleno, y mira la tabla en tu mesa","https://kreathur.agency/portafolio/t/kaigan.jpg","https://kreathur.agency/portafolio/sitios/comida/kaigan/","🍔 Comida","https://marketplace.kreathur.agency/#servicio=food",1,"desde $19.900 al mes"],["Web para pizzería","Gastronomía","Forno Lobo: arma tu pizza arrastrando y mírala a tamaño real en tu mesa","https://kreathur.agency/portafolio/t/gas-web-pizza.jpg","https://kreathur.agency/portafolio/sitios/disenos/forno-lobo-pizzeria/","🍔 Comida","https://marketplace.kreathur.agency/#servicio=food",1,"desde $19.900 al mes"],["Web para cocinería","Gastronomía","La Picada: arma tu almuerzo, pide desde la mesa y vuelve por el sello","https://kreathur.agency/portafolio/t/la-picada.jpg","https://kreathur.agency/portafolio/sitios/comida/la-picada/","🍔 Comida","https://marketplace.kreathur.agency/#servicio=food",1,"desde $19.900 al mes"],["Web para ferretería","Construcción","Faena: camina el showroom en 3D, mira la pintura o el piso en tu casa con una foto y vende por WhatsApp","https://kreathur.agency/portafolio/t/rubro-ferreteria.jpg","https://kreathur.agency/portafolio/sitios/rubros/ferreteria/","🛍️ Tienda","https://marketplace.kreathur.agency/#servicio=tienda",1,"solución relacionada"],["Recorrido del hotel","Hotelería","Suites y áreas comunes por imágenes","https://kreathur.agency/portafolio/t/hot-recorrido.jpg","https://kreathur.agency/portafolio/sitios/bruma/?recorrido=101","🏡 Alojamiento","https://marketplace.kreathur.agency/#servicio=stay",1,"solución relacionada"],["Web de hotel Bruma","Hotelería","Web con reserva directa","https://kreathur.agency/portafolio/t/hot-bruma.jpg","https://kreathur.agency/portafolio/sitios/bruma/","🏡 Alojamiento","https://marketplace.kreathur.agency/#servicio=stay",1,"desde $19.900 al mes"],["Panel del hotel","Hotelería","Reservas, limpieza y actividad","https://kreathur.agency/portafolio/t/hot-panel.jpg","https://kreathur.agency/portafolio/","🏡 Alojamiento","https://marketplace.kreathur.agency/#servicio=stay",0,"solución relacionada"],["Calendario LEMU","Hotelería","Unidades, llegadas y salidas","https://kreathur.agency/portafolio/t/hot-lemu.jpg","https://kreathur.agency/portafolio/","🏡 Alojamiento","https://marketplace.kreathur.agency/#servicio=stay",0,"desde $19.900 al mes"],["Recorrido de casa","Inmobiliaria","Camina la casa antes de construirla","https://kreathur.agency/portafolio/t/inm-casa.jpg","https://kreathur.agency/portafolio/inmo/tour.html","🏢 Inmobiliaria","https://marketplace.kreathur.agency/#servicio=inmobiliaria",1,"proyectos desde $349.000"],["Plano de lotes","Inmobiliaria","Disponibilidad por lote","https://kreathur.agency/portafolio/t/inm-lotes.jpg","https://kreathur.agency/portafolio/inmo/loteo.html","🏢 Inmobiliaria","https://marketplace.kreathur.agency/#servicio=inmobiliaria",1,"proyectos desde $349.000"],["Sitio con cotizador","Inmobiliaria","Proyecto y cotización","https://kreathur.agency/portafolio/t/inm-sitio.jpg","https://kreathur.agency/portafolio/inmo/sitio.html","🏢 Inmobiliaria","https://marketplace.kreathur.agency/#servicio=inmobiliaria",1,"proyectos desde $349.000"],["Panel de ventas","Inmobiliaria","Stock e interesados","https://kreathur.agency/portafolio/t/inm-panel.jpg","https://kreathur.agency/portafolio/","🏢 Inmobiliaria","https://marketplace.kreathur.agency/#servicio=inmobiliaria",0,"solución relacionada"],["Web para inmobiliaria","Inmobiliaria","Altamar: elige tu depto en el edificio, mira cuánto sol le entra, la vista desde tu piso y tu dividendo","https://kreathur.agency/portafolio/t/rubro-inmobiliaria.jpg","https://kreathur.agency/portafolio/sitios/rubros/inmobiliaria/","🏢 Inmobiliaria","https://marketplace.kreathur.agency/#servicio=inmobiliaria",1,"proyectos desde $349.000"],["Edificio 3D","Inmobiliaria","Recorre el edificio, entra al piso y revísalo por dentro","https://kreathur.agency/portafolio/t/inm-cine.jpg","https://inmobiliaria.kreathur.agency/edificios/","🏢 Inmobiliaria","https://marketplace.kreathur.agency/#servicio=inmobiliaria",1,"proyectos desde $349.000"],["Web inmobiliaria completa","Inmobiliaria","Edificios, terrenos y recorridos en una sola web","https://kreathur.agency/portafolio/t/inm-cine.jpg","https://inmobiliaria.kreathur.agency/","🏢 Inmobiliaria","https://marketplace.kreathur.agency/#servicio=inmobiliaria",1,"proyectos desde $349.000"],["Tienda de promos","Ecommerce","Promos y carrito","https://kreathur.agency/portafolio/t/eco-tiburon.jpg","https://almacentiburon.kreathur.agency/","🛍️ Tienda","https://marketplace.kreathur.agency/#servicio=tienda",1,"desde $9.900 al mes"],["Tienda de ropa Costa Norte","Ecommerce","Tres fotos rápidas (frente, reverso y etiqueta): se retocan solas y la ficha se arma. Ahorra horas de trabajo","https://kreathur.agency/portafolio/t/ropa-panel.jpg","https://kreathur.agency/portafolio/sitios/rubros/ropa/","🛍️ Tienda","https://marketplace.kreathur.agency/#servicio=tienda",1,"desde $9.900 al mes"],["Bot de IA en WhatsApp","WhatsApp y llamadas","Responde en segundos, de día y de noche. Se suma a tu plan: +$19.900 al mes, con implementación desde $49.900","https://kreathur.agency/portafolio/t/wa-bot.jpg","https://kreathur.agency/portafolio/sitios/rubros/whatsapp/#bot","💬 WhatsApp con IA","https://marketplace.kreathur.agency/#servicio=whatsapp",1,"+$19.900 al mes"],["Recepcionista virtual","WhatsApp y llamadas","Agenda horas por WhatsApp y manda recordatorios solo","https://kreathur.agency/portafolio/t/wa-recep.jpg","https://kreathur.agency/portafolio/sitios/rubros/whatsapp/#recep","💬 WhatsApp con IA","https://marketplace.kreathur.agency/#servicio=whatsapp",1,"solución relacionada"],["Mensajes automáticos de WhatsApp","WhatsApp y llamadas","Confirmaciones, avisos de despacho y reseñas que salen solos","https://kreathur.agency/portafolio/t/wa-avisos.jpg","https://kreathur.agency/portafolio/sitios/rubros/whatsapp/#auto","💬 WhatsApp con IA","https://marketplace.kreathur.agency/#servicio=whatsapp",1,"solución relacionada"],["Llamadas con IA para pedidos y delivery","WhatsApp y llamadas","Contesta el teléfono, toma el pedido y lo manda a cocina","https://kreathur.agency/portafolio/t/wa-llamadas.jpg","https://kreathur.agency/portafolio/sitios/rubros/whatsapp/#llam","🧩 A medida","https://marketplace.kreathur.agency/#servicio=apps",1,"se cotiza según el alcance"],["Botillería La Esquina","Ecommerce","Control de edad, arma tu pack y retiro sin fila","https://kreathur.agency/portafolio/t/rubro-botilleria.jpg","https://kreathur.agency/portafolio/sitios/rubros/botilleria/","🛍️ Tienda","https://marketplace.kreathur.agency/#servicio=tienda",1,"desde $9.900 al mes"],["Minimarket Don Lucho","Ecommerce","Tu compra de siempre con un toque y despacho","https://kreathur.agency/portafolio/t/rubro-minimarket.jpg","https://kreathur.agency/portafolio/sitios/rubros/minimarket/","🛍️ Tienda","https://marketplace.kreathur.agency/#servicio=tienda",1,"desde $9.900 al mes"],["Verdulería Raíz","Ecommerce","Precios de hoy en una pizarra viva, canasta armada arrastrando, canasta semanal y despacho por sector","https://kreathur.agency/portafolio/t/rubro-verduleria.jpg","https://kreathur.agency/portafolio/sitios/rubros/verduleria/","🛍️ Tienda","https://marketplace.kreathur.agency/#servicio=tienda",1,"desde $9.900 al mes"],["Centro médico","Salud","Agenda por profesional, previsión y recordatorio","https://kreathur.agency/portafolio/t/rubro-clinica.jpg","https://kreathur.agency/portafolio/sitios/rubros/clinica/","📅 Agenda","https://marketplace.kreathur.agency/#servicio=agenda",1,"desde $9.900 al mes"],["Clínica dental","Salud","Agenda por tratamiento y urgencias","https://kreathur.agency/portafolio/t/rubro-dental.jpg","https://kreathur.agency/portafolio/sitios/rubros/dental/","📅 Agenda","https://marketplace.kreathur.agency/#servicio=agenda",1,"desde $9.900 al mes"],["Veterinaria","Salud","Horas para mascotas y aviso de vacunas","https://kreathur.agency/portafolio/t/rubro-vet.jpg","https://kreathur.agency/portafolio/sitios/rubros/vet/","📅 Agenda","https://marketplace.kreathur.agency/#servicio=agenda",1,"desde $9.900 al mes"],["Belleza y barbería","Servicios","Reserva con tu profesional favorita","https://kreathur.agency/portafolio/t/rubro-belleza.jpg","https://kreathur.agency/portafolio/sitios/rubros/belleza/","📅 Agenda","https://marketplace.kreathur.agency/#servicio=agenda",1,"desde $9.900 al mes"],["Lavandería Nube","Servicios","Sigue tu carga en vivo, cotiza por kilo o por prenda y agenda el retiro en tu sector","https://kreathur.agency/portafolio/t/rubro-lavanderia.jpg","https://kreathur.agency/portafolio/sitios/rubros/lavanderia/","🧩 A medida","https://marketplace.kreathur.agency/#servicio=apps",1,"se cotiza según el alcance"],["Tours","Turismo","Web de la experiencia","https://kreathur.agency/portafolio/t/tur-tours.jpg","https://kreathur.agency/portafolio/sitios/disenos/rumbo-sal-tours/","🧩 Planes Esencial y Start","https://marketplace.kreathur.agency/#planes",1,"desde $9.900 al mes"],["Escuela de surf","Turismo","Calendario de clases con cupos y reserva por WhatsApp, spots de Pichilemu y video real","https://kreathur.agency/portafolio/t/tur-surf.jpg","https://kreathur.agency/portafolio/sitios/disenos/ola-norte-surf/","🧩 Planes Esencial y Start","https://marketplace.kreathur.agency/#planes",1,"desde $9.900 al mes"],["Buses Marejada","Transporte","¿Dónde va mi bus? en el mapa, asiento elegido, pasaje con QR y encomiendas con seguimiento","https://kreathur.agency/portafolio/t/rubro-buses.jpg","https://kreathur.agency/portafolio/sitios/rubros/buses/","🧩 A medida","https://marketplace.kreathur.agency/#servicio=apps",1,"se cotiza según el alcance"],["Web de cabañas","Hotelería","Alojamiento con reserva","https://kreathur.agency/portafolio/t/hot-web.jpg","https://kreathur.agency/portafolio/sitios/disenos/tierra-bruma-cabanas/","🏡 Alojamiento","https://marketplace.kreathur.agency/#servicio=stay",1,"desde $19.900 al mes"],["Web de propiedades","Inmobiliaria","Corredora y proyectos","https://kreathur.agency/portafolio/t/inm-web.jpg","https://kreathur.agency/portafolio/sitios/disenos/acantilado-propiedades/","🏢 Inmobiliaria","https://marketplace.kreathur.agency/#servicio=inmobiliaria",1,"desde $19.900 al mes"],["Tienda de ropa (diseño)","Ecommerce","Colección con identidad","https://kreathur.agency/portafolio/t/eco-ropa.jpg","https://kreathur.agency/portafolio/sitios/disenos/salitre-tienda-ropa/","🛍️ Tienda","https://marketplace.kreathur.agency/#servicio=tienda",1,"desde $9.900 al mes"]];var ORDEN=["Todos", "Casos reales", "Kreathur", "Gastronomía", "Construcción", "Hotelería", "Inmobiliaria", "Ecommerce", "WhatsApp y llamadas", "Salud", "Servicios", "Turismo", "Transporte"];/*DATOS-FIN*/
  var WA='https://wa.me/56968442594?text='+encodeURIComponent('Hola Mati, vi el portafolio en matiwlog.com y quiero conversar sobre mi proyecto.');
  var REALES=D.filter(function(d){return d[1]==='Casos reales'}).length;
  var QUIETO=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var css=''+
  '.pf-btn{position:fixed;right:max(16px,env(safe-area-inset-right));bottom:max(16px,env(safe-area-inset-bottom));z-index:970;display:flex;align-items:center;gap:.6rem;padding:.75rem 1.1rem .75rem .8rem;border-radius:999px;border:1.5px solid rgba(243,233,214,.35);background:rgba(13,22,30,.88);color:#f3e9d6;font:600 .9rem "Instrument Sans",system-ui,sans-serif;cursor:pointer;box-shadow:0 10px 30px rgba(0,0,0,.35),0 0 0 0 rgba(159,227,220,.5);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);transition:transform .25s,border-color .25s;animation:pfPulso 3s ease-out infinite}'+
  '@keyframes pfPulso{0%{box-shadow:0 10px 30px rgba(0,0,0,.35),0 0 0 0 rgba(159,227,220,.45)}70%,100%{box-shadow:0 10px 30px rgba(0,0,0,.35),0 0 0 14px rgba(159,227,220,0)}}'+
  '.pf-btn:hover{transform:translateY(-2px);border-color:#9fe3dc}'+
  '.pf :focus-visible,.pf-btn:focus-visible{outline:2px solid #9fe3dc;outline-offset:3px}'+
  '.pf-ico{position:relative;width:30px;height:26px}'+
  '.pf-ico i{position:absolute;inset:0;border-radius:6px;background-size:cover;background-position:center;border:1.5px solid rgba(255,255,255,.7);animation:pfIco 3.2s ease-in-out infinite}'+
  '.pf-ico i:nth-child(1){transform:translate(-5px,3px) rotate(-12deg);animation-delay:-.6s}'+
  '.pf-ico i:nth-child(2){transform:translate(5px,2px) rotate(10deg);animation-delay:-1.4s}'+
  '.pf-ico i:nth-child(3){transform:translate(0,-2px)}'+
  '@keyframes pfIco{50%{margin-top:-3px}}'+
  '.pf{position:fixed;inset:0;z-index:2000;display:none;flex-direction:column;background:radial-gradient(120% 80% at 50% 30%,#18303f 0,#0d161e 62%);color:#f3e9d6;font-family:"Instrument Sans",system-ui,sans-serif;overflow:hidden}'+
  '.pf.on{display:flex}'+
  '.pf-bg{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}'+
  '.pf-top,.pf-chips,.pf-foot{position:relative;z-index:3}'+
  '.pf-top{display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;padding:16px 16px 6px;max-width:1200px;width:100%;margin:0 auto}'+
  '.pf-top small{font:500 .7rem "JetBrains Mono",monospace;letter-spacing:.18em;text-transform:uppercase;color:#9fe3dc}'+
  '.pf-top h2{margin:.35rem 0 0;font:500 clamp(1.35rem,3.6vw,2.2rem)/1.1 Fraunces,Georgia,serif}'+
  '.pf-top h2 em{color:#9fe3dc}'+
  '.pf-tb{display:flex;gap:.5rem;flex:none}'+
  '.pf-x,.pf-vista{height:44px;border-radius:999px;border:1.5px solid rgba(243,233,214,.35);background:rgba(13,22,30,.5);color:inherit;cursor:pointer}'+
  '.pf-x{width:44px;font-size:1.25rem}'+
  '.pf-vista{display:inline-flex;align-items:center;text-decoration:none;padding:0 .9rem;font:500 .8rem "Instrument Sans",system-ui,sans-serif}'+
  '.pf-chips{display:flex;gap:.5rem;overflow-x:auto;padding:6px 16px 8px;max-width:1200px;width:100%;margin:0 auto;scrollbar-width:none}'+
  '.pf-chips::-webkit-scrollbar{display:none}'+
  '.pf-chip{flex:none;padding:.5rem .9rem;border-radius:999px;border:1.5px solid rgba(243,233,214,.25);background:rgba(13,22,30,.45);color:inherit;font:500 .85rem "Instrument Sans",system-ui,sans-serif;cursor:pointer;white-space:nowrap;transition:background .25s,color .25s}'+
  '.pf-chip[aria-pressed=true]{background:#9fe3dc;border-color:#9fe3dc;color:#0d161e}'+
  /* nube 3D */
  '.pf-stage{position:relative;z-index:2;flex:1;min-height:0;touch-action:none;cursor:grab;user-select:none;-webkit-user-select:none}'+
  '.pf-stage.drag{cursor:grabbing}'+'.pf-stage.fic .pf-n{filter:blur(2px) brightness(.55)!important}'+
  '.pf-n{position:absolute;left:0;top:0;width:var(--w);margin:0;padding:0;border:0;background:none;color:inherit;text-align:left;cursor:pointer;will-change:transform,opacity;-webkit-tap-highlight-color:transparent}'+
  '.pf-n img{display:block;width:100%;aspect-ratio:16/10;object-fit:cover;border-radius:12px;border:1.5px solid rgba(255,255,255,.22);background:#142230;box-shadow:0 12px 28px rgba(0,0,0,.45);pointer-events:none}'+
  '.pf-n b{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;margin-top:.35rem;font:600 .62rem/1.2 "Instrument Sans",system-ui,sans-serif;text-shadow:0 2px 8px rgba(0,0,0,.9);opacity:0;transition:opacity .3s}.pf-n.f b{opacity:1}'+
  '.pf-n.f img{border-color:#9fe3dc;box-shadow:0 0 0 2px rgba(159,227,220,.35),0 0 34px rgba(159,227,220,.45),0 16px 34px rgba(0,0,0,.5)}'+
  '.pf-hint{position:absolute;left:50%;bottom:10px;transform:translateX(-50%);z-index:250;font:500 .72rem "JetBrains Mono",monospace;letter-spacing:.12em;text-transform:uppercase;color:rgba(243,233,214,.7);background:rgba(13,22,30,.55);padding:.4rem .75rem;border-radius:999px;pointer-events:none;transition:opacity .6s;white-space:nowrap}'+
  /* ficha */
  '.pf-ficha{position:absolute;z-index:400;left:50%;bottom:14px;width:min(420px,calc(100% - 28px));transform:translate(-50%,30px) scale(.96);opacity:0;pointer-events:none;transition:transform .35s cubic-bezier(.2,.9,.3,1.2),opacity .25s;border-radius:20px;overflow:hidden;background:rgba(16,28,38,.96);border:1.5px solid rgba(159,227,220,.45);box-shadow:0 30px 70px rgba(0,0,0,.55)}'+
  '.pf-ficha.on{transform:translate(-50%,0) scale(1);opacity:1;pointer-events:auto}'+
  '.pf-ficha img{display:block;width:100%;aspect-ratio:16/9;object-fit:cover}'+
  '.pf-ficha div{display:grid;gap:.4rem;padding:.9rem 1rem 1rem}'+
  '.pf-ficha span{font:500 .66rem "JetBrains Mono",monospace;letter-spacing:.14em;text-transform:uppercase;color:#9fe3dc}'+
  '.pf-ficha b{font:600 1.05rem/1.25 "Instrument Sans",system-ui,sans-serif}'+
  '.pf-ficha p{margin:0;font-size:.88rem;line-height:1.45;color:rgba(243,233,214,.8)}'+
  '.pf-prod{display:flex;flex-wrap:wrap;align-items:baseline;gap:.1rem .5rem;margin-top:.3rem;padding:.6rem .8rem;border-radius:12px;border:1px solid rgba(255,209,102,.35);background:rgba(255,209,102,.08);color:inherit;text-decoration:none;font-size:.84rem}'+
  '.pf-ficha .pf-prod b{font-size:.92rem}.pf-prod i{font-style:normal;color:rgba(243,233,214,.75)}.pf-prod u{margin-left:auto;text-decoration:none;color:#ffd166;font-weight:600;white-space:nowrap}.pf-prod:hover{border-color:#ffd166}.pf-prod[hidden]{display:none}'+
  '.pf-ficha nav{display:flex;gap:.5rem;margin-top:.4rem}'+
  '.pf-ficha nav a.pf-demo,.pf-ficha nav button{flex:1;display:inline-flex;justify-content:center;align-items:center;padding:.75rem .8rem;border-radius:999px;font:600 .88rem "Instrument Sans",system-ui,sans-serif;text-decoration:none;cursor:pointer}'+
  '.pf-ficha nav a.pf-demo{background:#f4a259;color:#0d161e;border:0}'+
  '.pf-ficha nav button{background:transparent;color:#f3e9d6;border:1.5px solid rgba(243,233,214,.4)}'+
  /* lista (alternativa accesible) */
  '.pf-lista{position:relative;z-index:2;flex:1;min-height:0;overflow-y:auto;-webkit-overflow-scrolling:touch;display:none}'+
  '.pf.lista .pf-lista{display:block}.pf.lista .pf-stage{display:none}'+
  '.pf-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:18px;padding:12px 16px 24px;max-width:1200px;margin:0 auto}'+
  '.pf-card{display:flex;flex-direction:column;border-radius:16px;overflow:hidden;background:rgba(255,255,255,.06);border:1.5px solid rgba(255,255,255,.12);color:inherit;text-decoration:none}'+
  '.pf-card:hover{border-color:#9fe3dc}'+
  '.pf-card img{display:block;width:100%;aspect-ratio:16/10;object-fit:cover;background:#142230}'+
  '.pf-card div{display:grid;gap:.3rem;padding:.8rem .9rem .95rem}'+
  '.pf-card span{font:500 .64rem "JetBrains Mono",monospace;letter-spacing:.14em;text-transform:uppercase;color:#9fe3dc}'+
  '.pf-card b{font:600 .95rem/1.25 "Instrument Sans",system-ui,sans-serif}'+
  '.pf-card p{margin:0;font-size:.84rem;line-height:1.45;color:rgba(243,233,214,.78)}'+
  '.pf-foot{display:flex;flex-wrap:wrap;gap:.7rem;justify-content:center;padding:12px 16px max(14px,env(safe-area-inset-bottom));border-top:1px solid rgba(255,255,255,.08);background:rgba(13,22,30,.6)}'+
  '.pf-foot a{display:inline-flex;align-items:center;justify-content:center;gap:.4rem;padding:.8rem 1.3rem;border-radius:999px;font-weight:600;font-size:.9rem;text-decoration:none}'+
  '.pf-foot .a1{background:#f4a259;color:#0d161e}'+
  '.pf-foot .a2{border:1.5px solid rgba(243,233,214,.45);color:#f3e9d6}'+
  'html.pf-lock,html.pf-lock body{overflow:hidden}'+
  '@media (max-width:560px){.pf-vista{padding:0 .7rem;font-size:.75rem}.pf-grid{grid-template-columns:1fr 1fr;gap:12px}.pf-card p{display:none}.pf-foot{flex-wrap:nowrap;gap:.5rem;padding:10px 12px max(12px,env(safe-area-inset-bottom))}.pf-foot a{flex:1;text-align:center;padding:.75rem .6rem;font-size:.82rem;line-height:1.2}}'+
  '@media (prefers-reduced-motion:reduce){.pf-btn,.pf-ico i{animation:none}}';

  var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}

  /* botón flotante */
  var b=document.createElement('button');
  b.className='pf-btn';b.type='button';b.setAttribute('aria-haspopup','dialog');
  b.innerHTML='<span class="pf-ico" aria-hidden="true"><i style="background-image:url('+D[0][3]+')"></i><i style="background-image:url('+D[10][3]+')"></i><i style="background-image:url('+D[1][3]+')"></i></span><span>Portafolio</span>';
  document.body.appendChild(b);

  /* ventana */
  var o=document.createElement('div');
  o.className='pf';o.setAttribute('role','dialog');o.setAttribute('aria-modal','true');o.setAttribute('aria-labelledby','pf-t');
  o.innerHTML='<canvas class="pf-bg" aria-hidden="true"></canvas>'+
    '<div class="pf-top"><div><small>Portafolio · '+REALES+' casos reales y '+(D.length-REALES)+' demos</small><h2 id="pf-t">Lo que construimos <em>con Kreathur</em></h2></div><div class="pf-tb"><a class="pf-vista" href="'+K+'/portafolio/" target="_blank" rel="noopener">Ver lista ↗</a><button class="pf-x" type="button" aria-label="Cerrar portafolio">✕</button></div></div>'+
    '<div class="pf-chips" role="toolbar" aria-label="Filtrar por rubro"></div>'+
    '<div class="pf-stage" aria-label="Nube de trabajos: arrastra para girar y toca una tarjeta"><div class="pf-hint">Arrastra para girar · toca una tarjeta</div>'+
      '<div class="pf-ficha" role="region" aria-live="polite"><img alt=""><div><span></span><b></b><p></p><a class="pf-prod" target="_blank" rel="noopener"><b></b><i></i><u>Ver qué incluye →</u></a><nav><a class="pf-demo" target="_blank" rel="noopener">Abrir sitio →</a><button type="button">Seguir mirando</button></nav></div></div></div>'+
    
    '<div class="pf-foot"><a class="a1" href="'+K+'/portafolio/" target="_blank" rel="noopener">Ver con videos en kreathur.agency →</a><a class="a2" href="'+WA+'" target="_blank" rel="noopener">Hablar con Mati</a></div>';
  document.body.appendChild(o);

  var stage=o.querySelector('.pf-stage'),hint=o.querySelector('.pf-hint'),ficha=o.querySelector('.pf-ficha'),chips=o.querySelector('.pf-chips'),cv=o.querySelector('.pf-bg'),ctx=cv.getContext('2d');
  var cat='Todos',abierto=false,abrio=false,raf=0;

  /* tarjetas de la nube */
  var N=[];
  function crearNube(){N=D.map(function(d,i){
    var e=document.createElement('button');e.type='button';e.className='pf-n';e.setAttribute('aria-label',d[0]+' · '+d[1]);
    e.innerHTML='<img alt="" draggable="false" decoding="async" src="'+esc(d[3])+'"><b>'+esc(d[0])+'</b>';
    stage.appendChild(e);
    return {d:d,el:e,x:0,y:0,z:0,tx:0,ty:0,tz:0,a:0,ta:1,i:i};
  })}

  /* esfera de Fibonacci: reparte n puntos parejos */
  function repartir(){
    var act=N.filter(function(n){return cat==='Todos'||n.d[1]===cat}),k=act.length,g=Math.PI*(3-Math.sqrt(5));
    N.forEach(function(n){n.ta=0;n.tx=n.x*.2;n.ty=n.y*.2;n.tz=n.z*.2});
    act.forEach(function(n,i){var y=k===1?0:1-(i/(k-1))*2,r=Math.sqrt(1-y*y),t=g*i;n.tx=Math.cos(t)*r;n.ty=y;n.tz=Math.sin(t)*r;n.ta=1});
    radio=k<8?.62:k<16?.8:1;tam=k<8?1.6:k<16?1.25:1;
  }

  var W=0,H=0,R=0,base=0,radio=1,radioV=0,tam=1,tamV=1,yaw=0,pitch=-.18,vy=.0022,vp=0,arr=null,meta=null,frente=null;
  function medir(){
    var r=stage.getBoundingClientRect();W=r.width;H=r.height;
    R=Math.min(W*.34,H*.38);base=Math.max(72,Math.min(150,Math.min(W,H)*.2));
    stage.style.setProperty('--w',base+'px');
    var dpr=Math.min(window.devicePixelRatio||1,2);cv.width=o.clientWidth*dpr;cv.height=o.clientHeight*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);
  }

  /* partículas de fondo (brillo de mar) */
  var P=[];for(var i=0;i<70;i++)P.push({x:Math.random(),y:Math.random(),z:Math.random(),s:Math.random()*1.6+.4,c:Math.random()<.75?'159,227,220':'244,162,89'});
  function fondo(t){
    var w=o.clientWidth,h=o.clientHeight;ctx.clearRect(0,0,w,h);
    P.forEach(function(p){var px=((p.x+yaw*.02*(p.z+.3))%1+1)%1*w,py=((p.y+t*.000006*(p.z+.2))%1)*h,al=.15+.45*p.z*(.6+.4*Math.sin(t*.002+p.x*9));ctx.beginPath();ctx.arc(px,py,p.s*(.5+p.z),0,6.283);ctx.fillStyle='rgba('+p.c+','+al.toFixed(3)+')';ctx.fill()});
  }

  function cuadro(t){
    raf=requestAnimationFrame(cuadro);
    if(!arr){yaw+=vy;pitch+=vp;vy+=((QUIETO?0:.0022)-vy)*.02;vp*=.94}
    if(meta){yaw+=(meta.y-yaw)*.12;pitch+=(meta.p-pitch)*.12;if(Math.abs(meta.y-yaw)<.002&&Math.abs(meta.p-pitch)<.002)meta=null}
    pitch=Math.max(-1.25,Math.min(1.25,pitch));
    radioV+=(radio-radioV)*.06;tamV+=(tam-tamV)*.06;
    var cy=Math.cos(yaw),sy=Math.sin(yaw),cp=Math.cos(pitch),sp=Math.sin(pitch),F=2.6,mejor=null,mz=-9;
    N.forEach(function(n){
      n.x+=(n.tx-n.x)*.08;n.y+=(n.ty-n.y)*.08;n.z+=(n.tz-n.z)*.08;n.a+=(n.ta-n.a)*.1;
      var x1=n.x*cy+n.z*sy,z1=-n.x*sy+n.z*cy,y2=n.y*cp-z1*sp,z2=n.y*sp+z1*cp;
      var pr=F/(F-z2*radioV),sx=W/2+x1*R*radioV*pr-base/2,sy2=H/2+y2*R*radioV*pr-base*.35,sc=pr*.72*tamV;
      var vis=n.a*(.25+.75*(z2+1)/2);
      n.el.style.transform='translate3d('+sx.toFixed(1)+'px,'+sy2.toFixed(1)+'px,0) scale('+sc.toFixed(3)+')';
      n.el.style.opacity=vis.toFixed(3);n.el.style.zIndex=Math.round((z2+1)*100);
      n.el.style.filter=z2<-.35?'blur('+((-.35-z2)*3).toFixed(1)+'px)':'none';
      n.el.style.pointerEvents=n.a>.5&&z2>-.6?'auto':'none';
      n.el.tabIndex=n.a>.5?0:-1;
      if(n.ta&&z2>mz){mz=z2;mejor=n}
    });
    if(mejor!==frente){if(frente)frente.el.classList.remove('f');frente=mejor;if(frente)frente.el.classList.add('f')}
    fondo(t);
  }

  /* girar arrastrando, con inercia */
  var px0=0,py0=0,mov=0,ult=0;
  stage.addEventListener('pointerdown',function(e){if(e.target.closest('.pf-ficha'))return;arr={x:e.clientX,y:e.clientY};px0=e.clientX;py0=e.clientY;mov=0;ult=performance.now();meta=null;stage.classList.add('drag');try{stage.setPointerCapture(e.pointerId)}catch(_){}});
  stage.addEventListener('pointermove',function(e){if(!arr)return;var dx=e.clientX-arr.x,dy=e.clientY-arr.y;arr.x=e.clientX;arr.y=e.clientY;mov+=Math.abs(dx)+Math.abs(dy);yaw+=dx*.006;pitch+=dy*.006;vy=dx*.006;vp=dy*.006;ult=performance.now();if(mov>12)hint.style.opacity=0});
  function soltar(e){
    if(!arr)return;arr=null;stage.classList.remove('drag');if(performance.now()-ult>90){vy=0;vp=0}
    if(mov<8){var el=document.elementFromPoint(e.clientX,e.clientY),c=el&&el.closest('.pf-n');if(c)tocar(N.filter(function(n){return n.el===c})[0])}
  }
  stage.addEventListener('pointerup',soltar);stage.addEventListener('pointercancel',function(){arr=null;stage.classList.remove('drag')});
  /* teclado: Enter en una tarjeta */
  stage.addEventListener('keydown',function(e){var c=e.target.closest&&e.target.closest('.pf-n');if(c&&(e.key==='Enter'||e.key===' ')){e.preventDefault();tocar(N.filter(function(n){return n.el===c})[0])}});

  /* tocar: la tarjeta viaja al frente y se abre su ficha */
  function tocar(n){
    if(!n)return;var a=Math.atan2(-n.tx,n.tz),r=Math.sqrt(n.tx*n.tx+n.tz*n.tz),p=Math.atan2(n.ty,r);
    var dy=a-yaw;dy=Math.atan2(Math.sin(dy),Math.cos(dy));meta={y:yaw+dy,p:p};vy=0;vp=0;hint.style.opacity=0;
    var d=n.d;ficha.querySelector('img').src=d[3];ficha.querySelector('span').textContent=d[1];ficha.querySelector('b').textContent=d[0];ficha.querySelector('p').textContent=d[2];var dm=ficha.querySelector('.pf-demo');dm.href=d[4];dm.textContent=d[7]?'Abrir sitio →':'Verlo en kreathur.agency →';var pp=ficha.querySelector('.pf-prod');pp.hidden=!d[5];if(d[5]){pp.href=d[6];pp.querySelector('b').textContent=d[5];pp.querySelector('i').textContent=d[8]}
    ficha.classList.add('on');stage.classList.add('fic');dm.focus({preventScroll:true});
    if(window.umami)window.umami.track('portafolio-ficha',{trabajo:d[0].slice(0,60)});
  }
  o.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href]');if(a&&window.umami&&/kreathur\.agency/.test(a.href))window.umami.track('portafolio-a-kreathur',{destino:a.href.slice(0,90)})});
  function sinFicha(){ficha.classList.remove('on');stage.classList.remove('fic')}
  ficha.querySelector('button').onclick=sinFicha;

  /* filtros */
  ORDEN.forEach(function(c){
    var n=c==='Todos'?D.length:D.filter(function(d){return d[1]===c}).length;if(!n)return;
    var x=document.createElement('button');x.type='button';x.className='pf-chip';x.textContent=c+' · '+n;x.setAttribute('aria-pressed',c===cat);
    x.onclick=function(){cat=c;chips.querySelectorAll('.pf-chip').forEach(function(y){y.setAttribute('aria-pressed',y===x)});sinFicha();repartir();vy=.03};
    chips.appendChild(x);
  });


  /* abrir / cerrar */
  var antes=null;
  function abrir(){
    if(abierto)return;abierto=true;antes=document.activeElement;
    o.classList.add('on');document.documentElement.classList.add('pf-lock');
    medir();
    if(!N.length)crearNube();
    if(!abrio){abrio=true;repartir();N.forEach(function(n){n.x=n.y=n.z=0;n.a=0});radioV=.1;vy=QUIETO?0:.06}
    if(!raf)raf=requestAnimationFrame(cuadro);
    hint.style.opacity=1;
    o.querySelector('.pf-x').focus({preventScroll:true});
    if(location.hash!=='#portafolio')history.replaceState(null,'','#portafolio');
    if(window.umami)window.umami.track('portafolio-flotante');
  }
  function cerrar(){
    abierto=false;o.classList.remove('on');document.documentElement.classList.remove('pf-lock');sinFicha();
    cancelAnimationFrame(raf);raf=0;
    if(location.hash==='#portafolio')history.replaceState(null,'',location.pathname+location.search);
    if(antes&&antes.focus)antes.focus({preventScroll:true});
  }
  b.onclick=abrir;o.querySelector('.pf-x').onclick=cerrar;
  window.addEventListener('resize',function(){if(abierto)medir()});
  document.addEventListener('visibilitychange',function(){if(!abierto)return;if(document.hidden){cancelAnimationFrame(raf);raf=0}else if(!raf)raf=requestAnimationFrame(cuadro)});
  document.addEventListener('keydown',function(e){
    if(!abierto)return;
    if(e.key==='Escape'){if(ficha.classList.contains('on'))sinFicha();else cerrar()}
    if(e.key==='Tab'){var f=[].filter.call(o.querySelectorAll('button,a[href]'),function(x){return x.tabIndex>=0&&x.offsetParent!==null}),a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}
  });
  document.querySelectorAll('a[href="#portafolio"]').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();abrir()})});
  if(location.hash==='#portafolio')abrir();
})();
