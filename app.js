// ==========================================
// CONFIGURACIÓN
// ==========================================
// ⚠️ La API Key de Gemini vive en Cloudflare Secrets (GEMINI_API_KEY).
// Las llamadas van a /api/gemini (proxy seguro en functions/api/gemini.js)
// Para desarrollo local, si el proxy no responde, se carga preguntas.json como fallback.


// ==========================================
// BANCO DE ARTÍCULOS POR CATEGORÍA
// ==========================================
const BANCO_ARTICULOS = {
  "Fucsia": [
    "Art. 14 CE - Igualdad ante la ley (sin discriminación por nacimiento, raza, sexo, religión u opinión)",
    "Art. 15 CE - Derecho a la vida e integridad física (sin torturas ni penas degradantes)",
    "Art. 16 CE - Libertad ideológica, religiosa y de culto (nadie declara su religión obligatoriamente)",
    "Art. 17 CE - Derecho a la libertad y seguridad, habeas corpus, detención máxima 72h",
    "Art. 18 CE - Derecho al honor, intimidad personal y familiar, inviolabilidad del domicilio",
    "Art. 19 CE - Libertad de circulación y residencia en territorio español",
    "Art. 20 CE - Libertad de expresión, producción artística, cátedra e información",
    "Art. 21 CE - Derecho de reunión pacífica y sin armas, sin autorización previa",
    "Art. 22 CE - Derecho de asociación (prohibidas las ilegales y las paramilitares)",
    "Art. 23 CE - Derecho de participación política directa y a acceder a funciones públicas",
    "Art. 24 CE - Tutela judicial efectiva, derecho a no declarar contra uno mismo",
    "Art. 25 CE - Principio de legalidad penal, non bis in idem",
    "Art. 27 CE - Derecho a la educación, libertad de enseñanza, educación obligatoria y gratuita",
    "Art. 28 CE - Derecho a sindicarse libremente y derecho a la huelga",
    "Art. 29 CE - Derecho de petición individual y colectiva por escrito",
    "Art. 30 CE - Derecho y deber de defender España, objeción de conciencia",
    "Art. 33 CE - Derecho a la propiedad privada y herencia, función social, expropiación forzosa",
    "Art. 35 CE - Derecho al trabajo, libre elección de profesión, remuneración suficiente",
    "Art. 37 CE - Derecho a la negociación colectiva y adoptar medidas de conflicto colectivo",
    "Art. 39 CE - Protección a la familia, hijos iguales ante la ley, convenios internacionales infancia",
    "Art. 43 CE - Derecho a la salud, medidas preventivas, educación sanitaria",
    "Art. 45 CE - Derecho a un medio ambiente adecuado, deber de conservarlo, sanciones penales",
    "Art. 47 CE - Derecho a una vivienda digna y adecuada, regulación del suelo",
    "Art. 53 CE - Garantías de las libertades y derechos fundamentales, recurso de amparo",
    "Art. 54 CE - El Defensor del Pueblo como comisionado de las Cortes"
  ],
  "Azul Eléctrico": [
    "Art. 56 CE - El Rey, símbolo de unidad, Jefe del Estado, árbitro y moderador",
    "Art. 57 CE - Sucesión a la Corona: varones y mujeres, preferencia de línea anterior, varón sobre mujer en mismo grado",
    "Art. 59 CE - Regencia: cuando el Rey sea menor o inhabilitado",
    "Art. 61 CE - El Rey jura la Constitución y fidelidad al pueblo ante las Cortes",
    "Art. 62 CE - Funciones del Rey: sancionar leyes, convocar elecciones, proponer candidato a Presidente",
    "Art. 64 CE - Los actos del Rey son refrendados por el Presidente del Gobierno o ministros competentes",
    "Art. 66 CE - Las Cortes Generales representan al pueblo y ejercen la potestad legislativa y presupuestaria",
    "Art. 68 CE - El Congreso de los Diputados: entre 300 y 400 diputados, circunscripción provincial",
    "Art. 69 CE - El Senado: cámara de representación territorial, 4 senadores por provincia",
    "Art. 71 CE - Inviolabilidad e inmunidad parlamentaria, fuero especial",
    "Art. 79 CE - Quórum y mayorías para acuerdos en las Cámaras",
    "Art. 81 CE - Leyes Orgánicas: mayoría absoluta del Congreso en votación final",
    "Art. 86 CE - Decretos-leyes en casos de extraordinaria y urgente necesidad, no pueden afectar derechos fundamentales",
    "Art. 87 CE - Iniciativa legislativa: Gobierno, Congreso, Senado, CCAA y 500.000 firmas ciudadanos",
    "Art. 93 CE - Cesión del ejercicio de competencias a organizaciones internacionales mediante ley orgánica",
    "Art. 97 CE - El Gobierno dirige la política interior y exterior, la administración civil y militar",
    "Art. 99 CE - Investidura: el Rey propone candidato, el Congreso vota, mayoría absoluta o simple en 2ª vuelta",
    "Art. 113 CE - Moción de censura constructiva: debe incluir candidato alternativo, mayoría absoluta",
    "Art. 114 CE - Cuestión de confianza planteada por el Presidente al Congreso",
    "Art. 116 CE - Estados de alarma (Gobierno), excepción (Congreso) y sitio (Congreso con mayoría absoluta)",
    "Art. 122 CE - El Consejo General del Poder Judicial, órgano de gobierno de los jueces",
    "Art. 124 CE - El Ministerio Fiscal: promueve la acción de la justicia en defensa de la legalidad",
    "Art. 131 CE - El Estado mediante ley puede planificar la actividad económica general",
    "Art. 134 CE - El Gobierno elabora los Presupuestos Generales del Estado, las Cortes los examinan y aprueban",
    "Art. 135 CE - Estabilidad presupuestaria, límite de déficit estructural"
  ],
  "Verde Ácido": [
    "Art. 137 CE - El Estado se organiza en municipios, provincias y CCAA; todos con autonomía",
    "Art. 138 CE - El Estado garantiza la solidaridad interterritorial y el equilibrio económico",
    "Art. 139 CE - Todos los españoles tienen los mismos derechos en cualquier parte del territorio",
    "Art. 140 CE - La Constitución garantiza la autonomía de los municipios, gobierno del Ayuntamiento",
    "Art. 141 CE - La provincia como entidad local, agrupación de municipios, gobierno de Diputaciones",
    "Art. 143 CE - Iniciativa autonómica: provincias limítrofes con características históricas",
    "Art. 147 CE - Los Estatutos de Autonomía: norma institucional básica de cada CCAA",
    "Art. 148 CE - Materias que pueden asumir las CCAA en sus estatutos",
    "Art. 149 CE - Competencias exclusivas del Estado: nacionalidad, comercio exterior, defensa...",
    "Art. 150 CE - Leyes marco, leyes de transferencia y leyes de armonización",
    "Art. 151 CE - Vía rápida de autonomía: referéndum en cada provincia con mayoría absoluta",
    "Art. 153 CE - Control de las CCAA por el Tribunal Constitucional, Tribunal de Cuentas y Gobierno",
    "Art. 155 CE - Coerción estatal: si la CCAA incumple obligaciones, el Gobierno con Senado pode intervenir",
    "Art. 156 CE - Las CCAA gozan de autonomía financiera para el desarrollo de sus competencias",
    "Art. 157 CE - Recursos de las CCAA: impuestos cedidos, recargos, transferencias del Estado",
    "Art. 158 CE - Fondo de Compensación Interterritorial para corregir desequilibrios económicos"
  ],
  "Naranja": [
    "Art. 9 Ley 39/2015 - Capacidad de obrar ante las Administraciones: mayores de edad, emancipados...",
    "Art. 13 Ley 39/2015 - Derechos de las personas en sus relaciones con las Administraciones Públicas",
    "Art. 14 Ley 39/2015 - Derecho y obligación de relacionarse electrónicamente con las AAPP",
    "Art. 16 Ley 39/2015 - Registros: el registro electrónico y presencial, cómputo de plazos",
    "Art. 21 Ley 39/2015 - Obligación de resolver: la Administración siempre debe resolver expresamente, plazo máximo 3 meses salvo ley especial",
    "Art. 22 Ley 39/2015 - Suspensión del plazo máximo para resolver: causas tasadas",
    "Art. 24 Ley 39/2015 - Silencio administrativo positivo como regla general, negativo como excepción",
    "Art. 28 Ley 39/2015 - Documentos: no obligación de aportar los ya en poder de la AAPP",
    "Art. 40 Ley 39/2015 - Notificación: obligación, plazo 10 días desde resolución",
    "Art. 41 Ley 39/2015 - Condiciones generales para la práctica de notificaciones",
    "Art. 42 Ley 39/2015 - Notificación por comparecencia: presencial o en sede electrónica",
    "Art. 43 Ley 39/2015 - Práctica de notificaciones a través de medios electrónicos",
    "Art. 44 Ley 39/2015 - Notificación infructuosa: publicación en BOE mediante anuncio",
    "Art. 53 Ley 39/2015 - Derechos del interesado en el procedimiento administrativo",
    "Art. 55 Ley 39/2015 - Inicio del procedimiento de oficio: acuerdo del órgano competente",
    "Art. 66 Ley 39/2015 - Solicitudes de iniciación: contenido mínimo obligatorio",
    "Art. 68 Ley 39/2015 - Subsanación y mejora de la solicitud: plazo de 10 días",
    "Art. 71 Ley 39/2015 - Actos de instrucción: de oficio y con participación de interesados",
    "Art. 76 Ley 39/2015 - Medidas provisionales antes y durante el procedimiento",
    "Art. 82 Ley 39/2015 - Trámite de audiencia: 10 a 15 días, ver el expediente y alegar",
    "Art. 88 Ley 39/2015 - Contenido de la resolución: decide todas las cuestiones, congruente",
    "Art. 95 Ley 39/2015 - Ejecución forzosa: apremio sobre el patrimonio, multa coercitiva, ejecución subsidiaria",
    "Art. 98 Ley 39/2015 - Los actos de las AAPP son inmediatamente ejecutivos (ejecutividad)"
  ],
  "Rojo": [
    "Art. 106 Ley 39/2015 - Revisión de oficio de actos nulos de pleno derecho: en cualquier momento",
    "Art. 107 Ley 39/2015 - Declaración de lesividad de actos anulables: la AAPP declara lesivo el propio acto",
    "Art. 108 Ley 39/2015 - Suspensión en revisión de oficio cuando causa perjuicio a tercero",
    "Art. 112 Ley 39/2015 - Objeto y clases de recursos administrativos: alzada, reposición, revisión",
    "Art. 113 Ley 39/2015 - Fin de la vía administrativa: actos no susceptibles de alzada",
    "Art. 114 Ley 39/2015 - Interposición de recursos: plazos, lugar, efectos suspensivos",
    "Art. 117 Ley 39/2015 - Suspensión de la ejecución al interponer un recurso: regla general no suspende",
    "Art. 119 Ley 39/2015 - Resolución del recurso: congruencia, no reformatio in peius",
    "Art. 121 Ley 39/2015 - Recurso de alzada: objeto, actos que no agotan la vía administrativa",
    "Art. 122 Ley 39/2015 - Recurso de alzada: plazo 1 mes (acto expreso) o 3 meses (silencio)",
    "Art. 123 Ley 39/2015 - Recurso potestativo de reposición: objeto, ante el mismo órgano",
    "Art. 124 Ley 39/2015 - Recurso de reposición: plazo 1 mes (expreso), silencio negativo en 1 mes",
    "Art. 125 Ley 39/2015 - Recurso extraordinario de revisión: causas tasadas",
    "Art. 126 Ley 39/2015 - Recurso extraordinario de revisión: plazos (3 meses o 5 años según causa)"
  ]
};

const TEMAS = ["Fucsia", "Azul Eléctrico", "Verde Ácido", "Naranja", "Rojo"];

// ==========================================
// ESTADO DEL JUEGO
// ==========================================
let preguntasDB = [];

// Estado Trivial
let anarquinesConseguidos = { 0: false, 1: false, 2: false, 3: false, 4: false };
let victoriaConseguida = false;

// Estado Test
let preguntasTest = [];
let historialTest = [];
let currentIndexTest = 0;
let aciertosTest = 0;
let testTimerInterval;
let timeRemaining = 180;

// Mapeo Caras a Temas
const carasMapping = {
  1: "Fucsia",
  2: "Azul Eléctrico",
  3: "Verde Ácido",
  4: "Naranja",
  5: "Rojo",
  6: "Comodín"
};

// ==========================================
// SEMILLA ALEATORIA TEMPORAL
// ==========================================
function seededShuffle(array, seed) {
  let s = seed >>> 0;
  const rng = () => {
    s = Math.imul(s ^ (s >>> 15), s | 1);
    s ^= s + Math.imul(s ^ (s >>> 7), s | 61);
    return ((s ^ (s >>> 14)) >>> 0) / 0xffffffff;
  };
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function seleccionarArticulos(seed) {
  const seleccion = {};
  TEMAS.forEach((tema, idx) => {
    const bank = BANCO_ARTICULOS[tema];
    const shuffled = seededShuffle(bank, seed + idx * 99991 + 7);
    seleccion[tema] = shuffled.slice(0, 5); // 5 artículos × 2 preguntas/artículo = 10 por tema
  });
  return seleccion;
}

// ==========================================
// LLAMADA A LA API DE GEMINI
// ==========================================
async function generateQuestionsForCategory(tema, articulos) {
  const prompt = `Eres un experto en Derecho Constitucional y Administrativo español con un sentido del humor absolutamente sarcástico y directo al estilo "Villamolona" (moonismo: humor negro español, pullitas, colegueo).

Genera EXACTAMENTE 10 preguntas tipo test sobre la categoría "${tema}" usando estos artículos como base:
${articulos.map((a, i) => `${i + 1}. ${a}`).join('\n')}

REGLAS CRÍTICAS QUE NO PUEDES SALTARTE:
1. La pregunta en tono sarcástico y directo, como si hablaras a un opositor agotado que lleva meses estudiando
2. Las 3 opciones de respuesta TODAS en el mismo tono sarcástico, irónico y coloquial. NUNCA hagas que la correcta sea "la única seria o técnica". Las tres deben sonar igualmente plausibles con jerga legal o cifras concretas.
3. Distribuye el índice "correcta" variadamente: mezcla 0, 1 y 2 sin predecibilidad
4. La explicación es breve, irónica y confirma la correcta con sorna
5. "correcta" es el índice 0, 1 o 2 de la opción correcta en el array "opciones"
6. No incluyas etiquetas tipo "Correcta:" dentro de las opciones. Que todas suenen seguras.

Devuelve ÚNICAMENTE un array JSON válido sin ningún texto adicional ni markdown:
[{"id":1,"tema":"${tema}","titulo":"string corto descriptivo","pregunta":"string sarcástico","opciones":["string con jerga legal","string con jerga legal","string con jerga legal"],"correcta":0,"explicacion":"string irónico breve"}]`;

  const response = await fetch(
    "/api/gemini",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.95,
          topP: 0.95,
          responseMimeType: "application/json"
        }
      })
    }
  );

  if (!response.ok) {
    const errBody = await response.text();
    throw new Error(`Proxy HTTP ${response.status}: ${errBody}`);
  }
  const data = await response.json();
  if (data._modelUsed) console.log(`🚀 Modelo activo: ${data._modelUsed}`);
  if (!data.candidates || !data.candidates[0]) {
    throw new Error(`Respuesta inválida de Gemini: ${JSON.stringify(data)}`);
  }
  const text = data.candidates[0].content.parts[0].text;
  return JSON.parse(text);
}

// ==========================================
// GENERAR TABLERO COMPLETO
// ==========================================
async function generarTableroCompleto() {
  mostrarCargando("Gemini está consultando el BOE... Aguanta.");

  const seed = Date.now() % 9999991;
  const articulosSeleccionados = seleccionarArticulos(seed);
  let totalGenerado = 0;

  try {
    const todasLasPreguntas = [];

    for (let i = 0; i < TEMAS.length; i++) {
      const tema = TEMAS[i];
      actualizarCargando(`📚 Cargando categoría ${i + 1}/5: ${tema}...`);
      try {
        const preguntas = await generateQuestionsForCategory(tema, articulosSeleccionados[tema]);
        preguntas.forEach((p, idx) => { p.id = totalGenerado + idx + 1; });
        totalGenerado += preguntas.length;
        todasLasPreguntas.push(...preguntas);
      } catch (e) {
        console.error(`Error en categoría ${tema}:`, e);
        actualizarCargando(`⚠️ Fallo en "${tema}", reintentando...`);
        await new Promise(r => setTimeout(r, 1500));
        // Reintento
        const preguntas = await generateQuestionsForCategory(tema, articulosSeleccionados[tema]);
        preguntas.forEach((p, idx) => { p.id = totalGenerado + idx + 1; });
        totalGenerado += preguntas.length;
        todasLasPreguntas.push(...preguntas);
      }
    }

    preguntasDB = todasLasPreguntas;
    console.log(`✅ Tablero generado con ${preguntasDB.length} preguntas. Semilla: ${seed}`);
    ocultarCargando();
    show("pantalla-inicio");
  } catch (err) {
    console.error("Error generando tablero:", err);
    actualizarCargando("💀 Gemini se ha ido de fiesta. Cargando preguntas de emergencia...");

    try {
      const resp = await fetch("preguntas.json");
      preguntasDB = await resp.json();
    } catch (e) {
      preguntasDB = [];
    }

    setTimeout(() => {
      ocultarCargando();
      show("pantalla-inicio");
    }, 2500);
  }
}

// ==========================================
// UI LOADING
// ==========================================
function mostrarCargando(mensaje) {
  document.getElementById("loading-mensaje").textContent = mensaje;
  show("pantalla-cargando");
  hide("pantalla-inicio");
}
function actualizarCargando(mensaje) {
  document.getElementById("loading-mensaje").textContent = mensaje;
}
function ocultarCargando() {
  hide("pantalla-cargando");
}

// ==========================================
// INIT
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn-modo-trivial").addEventListener("click", iniciarModoTrivial);
  document.getElementById("btn-modo-test").addEventListener("click", iniciarModoTest);
  document.getElementById("btn-lanzar").addEventListener("click", lanzarDado);

  generarTableroCompleto();
});

// ==========================================
// HELPERS
// ==========================================
function hide(id) { document.getElementById(id).classList.add("hidden"); }
function show(id) { document.getElementById(id).classList.remove("hidden"); }

function getRandomPreguntaPorTema(tema) {
  const filtradas = preguntasDB.filter(p => p.tema === tema);
  return filtradas[Math.floor(Math.random() * filtradas.length)];
}
function getRandomPregunta() {
  return preguntasDB[Math.floor(Math.random() * preguntasDB.length)];
}

// ==========================================
// MODO: CONSTITUCION TRIVIAL
// ==========================================
function iniciarModoTrivial() {
  hide("pantalla-inicio");
  show("pantalla-trivial");
}

function lanzarDado() {
  if (victoriaConseguida) return;
  document.getElementById("btn-lanzar").disabled = true;
  hide("zona-activa");

  const dice = document.getElementById("dado3d");
  const result = Math.floor(Math.random() * 6) + 1;
  const rotX = Math.floor(Math.random() * 4) * 360 + (result === 5 ? -90 : result === 6 ? 90 : 0);
  const rotY = Math.floor(Math.random() * 4) * 360 + (result === 2 ? -90 : result === 4 ? 90 : result === 3 ? -180 : 0);
  dice.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(-50px)`;

  setTimeout(() => procesarTirada(result), 1600);
}

function procesarTirada(resultadoCara) {
  const tema = carasMapping[resultadoCara];
  if (resultadoCara === 6) {
    mostrarComodinUI(comprobacionVictoriaFinal());
  } else {
    if (anarquinesConseguidos[resultadoCara - 1] && !comprobacionVictoriaFinal()) {
      document.getElementById("zona-activa").innerHTML = `<h3 style="color:var(--text-muted);text-align:center;">Ya tienes el Anarquín ${tema}. ¡Vuelve a tirar pringao!</h3>`;
      show("zona-activa");
      document.getElementById("btn-lanzar").disabled = false;
    } else if (comprobacionVictoriaFinal()) {
      document.getElementById("zona-activa").innerHTML = `<h3 style="color:var(--neon-fuchsia);text-align:center;">¡Solo un Comodín te da el Anarquín Dorado! Sigue tirando...</h3>`;
      show("zona-activa");
      document.getElementById("btn-lanzar").disabled = false;
    } else {
      const pregunta = getRandomPreguntaPorTema(tema);
      if (pregunta) mostrarPreguntaUI(pregunta, false, resultadoCara - 1);
      else {
        document.getElementById("zona-activa").innerHTML = `<h3 style="color:var(--text-muted);text-align:center;">Sin preguntas de ${tema}. Tira de nuevo.</h3>`;
        show("zona-activa");
        document.getElementById("btn-lanzar").disabled = false;
      }
    }
  }
}

function comprobacionVictoriaFinal() {
  return Object.values(anarquinesConseguidos).every(v => v === true);
}

function mostrarComodinUI(esParaDorado) {
  let html = `<h3 style="text-align:center;color:white;">¡COMODÍN! Elige tu veneno:</h3><div class="comodin-selector">`;
  if (esParaDorado) {
    html += `<button class="btn-cyber" onclick="jugarDorado()">¡Anarquín Dorado (Aleatorio)!</button>`;
  } else {
    Object.keys(carasMapping).slice(0, 5).forEach((key, index) => {
      const tema = carasMapping[key];
      if (!anarquinesConseguidos[index]) {
        html += `<button class="btn-cyber" onclick="mostrarPreguntaUI_Comodin('${tema}', ${index})">${tema}</button>`;
      }
    });
  }
  html += `</div>`;
  document.getElementById("zona-activa").innerHTML = html;
  show("zona-activa");
  document.getElementById("btn-lanzar").disabled = false;
}

function jugarDorado() { mostrarPreguntaUI(getRandomPregunta(), true, null); }
function mostrarPreguntaUI_Comodin(tema, colorIndex) { mostrarPreguntaUI(getRandomPreguntaPorTema(tema), false, colorIndex); }

function mostrarPreguntaUI(preguntaObj, esDorado, colorIndex) {
  const cont = document.getElementById("zona-activa");
  const colorTitle = esDorado ? "gold" : ["#ff00ff", "#00e5ff", "#00ff41", "#ff8c00", "#ff003c"][colorIndex] || "#ff00ff";

  let html = `<h3 style="color:${colorTitle};">${preguntaObj.titulo}</h3>
    <div class="question-text">${preguntaObj.pregunta}</div>
    <div class="options-container" id="trivial-opts">`;

  preguntaObj.opciones.forEach((opt, idx) => {
    html += `<button class="option-btn" onclick="checkTrivialRespuesta(${idx}, ${preguntaObj.correcta}, '${preguntaObj.explicacion.replace(/'/g, "\\'")}', ${esDorado}, ${colorIndex}, this)">${opt}</button>`;
  });

  html += `</div>
    <div id="trivial-feedback" class="feedback-text"></div>
    <div style="text-align:center; margin-top:15px; display:none;" id="btn-trivial-next-cont">
      <button class="btn-cyber" onclick="siguienteTirada()">Siguiente</button>
    </div>`;

  cont.innerHTML = html;
  show("zona-activa");
  document.getElementById("btn-lanzar").disabled = true;
}

function checkTrivialRespuesta(seleccion, correcta, explicacion, esDorado, colorIndex, btnElement) {
  const feedback = document.getElementById("trivial-feedback");
  const btns = document.getElementById("trivial-opts").querySelectorAll(".option-btn");
  btns.forEach((b, idx) => {
    b.disabled = true;
    if (idx === correcta) b.classList.add("correct");
    else if (idx === seleccion) b.classList.add("wrong");
  });

  feedback.style.display = "block";
  feedback.innerHTML = `<strong>${seleccion === correcta ? "¡Acierto!" : "Zasca, Fallo."}</strong> ${explicacion}`;
  document.getElementById("btn-trivial-next-cont").style.display = "block";

  if (seleccion === correcta) {
    if (esDorado) {
      document.getElementById("slot-final").classList.add("active");
      victoriaConseguida = true;
      setTimeout(finalizarJuegoTrivial, 2000);
    } else {
      anarquinesConseguidos[colorIndex] = true;
      document.getElementById(`slot-${colorIndex}`).classList.add("active");
    }
  }
}

function siguienteTirada() {
  hide("zona-activa");
  document.getElementById("btn-lanzar").disabled = false;
  if (comprobacionVictoriaFinal() && !victoriaConseguida) {
    document.getElementById("zona-activa").innerHTML = `<h3 style="color:gold;text-align:center;">¡Casi lo tienes! Tira para sacar Comodín e intentar el Dorado.</h3>`;
    show("zona-activa");
  }
}

function finalizarJuegoTrivial() {
  hide("pantalla-trivial");
  document.getElementById("resultado-titulo").innerText = "¡La Leyenda del BOE!";
  document.getElementById("resultado-texto").innerText = "Ya te has ganado las cañas, deja de estudiar. Tienes tu plaza garantizada (o al menos un buen rollo).";
  document.getElementById("resumen-test-container").innerHTML = "";
  document.getElementById("btn-descargar-pdf").style.display = "none";
  show("pantalla-resultados");
}

// ==========================================
// MODO: TEST-ICULO
// ==========================================
function iniciarModoTest() {
  hide("pantalla-inicio");
  preguntasTest = [...preguntasDB].sort(() => 0.5 - Math.random()).slice(0, 10);
  historialTest = [];
  currentIndexTest = 0;
  aciertosTest = 0;
  timeRemaining = 180;

  show("pantalla-test");
  iniciarTimer();
  renderPreguntaTest();
}

function iniciarTimer() {
  const timerEl = document.getElementById("timer");
  timerEl.classList.remove("danger");
  testTimerInterval = setInterval(() => {
    timeRemaining--;
    const mins = Math.floor(timeRemaining / 60);
    const secs = timeRemaining % 60;
    timerEl.innerText = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    if (timeRemaining <= 30) timerEl.classList.add("danger");
    if (timeRemaining <= 0) { clearInterval(testTimerInterval); finalizarModoTest(true); }
  }, 1000);
}

function renderPreguntaTest() {
  const preg = preguntasTest[currentIndexTest];
  if (!preg) { finalizarModoTest(false); return; }
  document.getElementById("test-progress").innerText = `Pregunta ${currentIndexTest + 1} de ${preguntasTest.length}`;

  let html = `<div class="question-text">${preg.pregunta}</div><div class="options-container" id="test-opts">`;
  preg.opciones.forEach((opt, idx) => {
    html += `<button class="option-btn" onclick="seleccionarDatoTest(${idx}, ${preg.correcta}, this)">${opt}</button>`;
  });
  html += `</div><div style="text-align:right; margin-top:20px;">
    <button class="btn-cyber" id="btn-next-test" disabled onclick="avanzarTest()">Siguiente</button></div>`;
  document.getElementById("zona-test-activa").innerHTML = html;

  eleccionTestActual = null;
  correctaTestActual = preg.correcta;
}

let eleccionTestActual = null;
let correctaTestActual = null;

function seleccionarDatoTest(seleccion, correcta, btn) {
  eleccionTestActual = seleccion;
  correctaTestActual = correcta;

  document.getElementById("test-opts").querySelectorAll(".option-btn").forEach(b => {
    b.style.borderColor = "rgba(255,255,255,0.1)";
    b.style.background = "rgba(255,255,255,0.05)";
  });
  btn.style.borderColor = "var(--neon-blue)";
  btn.style.background = "rgba(0, 229, 255, 0.2)";
  document.getElementById("btn-next-test").disabled = false;
}

function avanzarTest() {
  if (eleccionTestActual === correctaTestActual) aciertosTest++;
  historialTest.push({
    pregunta: preguntasTest[currentIndexTest].pregunta,
    opciones: preguntasTest[currentIndexTest].opciones,
    eleccion: eleccionTestActual,
    correcta: correctaTestActual
  });
  currentIndexTest++;
  if (currentIndexTest >= preguntasTest.length) {
    clearInterval(testTimerInterval);
    finalizarModoTest(false);
  } else {
    renderPreguntaTest();
  }
}

function finalizarModoTest(porTiempo) {
  hide("pantalla-test");
  let texto = porTiempo ? "¡Se te acabó el tiempo, tortuga burocrática!" : "Test finalizado con sudor y lágrimas.";
  if (aciertosTest < 5) texto += " Un mono con ballesta sacaría más nota que tú.";
  else if (aciertosTest < 8) texto += " Bueno, apruebas por los pelos. Carne de ventanilla.";
  else texto += " ¡Vaya, vaya! Tenemos aquí al próximo Abogado del Estado.";

  document.getElementById("resultado-titulo").innerText = `Puntuación: ${aciertosTest}/${preguntasTest.length}`;
  document.getElementById("resultado-texto").innerText = texto;

  let htmlResumen = "<h3>Resumen Táctico</h3>";
  historialTest.forEach((item, i) => {
    htmlResumen += `<div class="resumen-item"><div class="resumen-pregunta">${i + 1}. ${item.pregunta}</div>`;
    if (item.eleccion === item.correcta) {
      htmlResumen += `<div class="resumen-respuesta respuesta-correcta">✅ ${item.opciones[item.correcta]}</div>`;
    } else {
      const fallada = item.eleccion !== null && item.eleccion !== undefined ? item.opciones[item.eleccion] : "Sin responder";
      htmlResumen += `<div class="resumen-respuesta respuesta-fallada">❌ Tu cagada: ${fallada}</div>`;
      htmlResumen += `<div class="resumen-respuesta respuesta-correcta">👉 Correcta: ${item.opciones[item.correcta]}</div>`;
    }
    htmlResumen += `</div>`;
  });
  document.getElementById("resumen-test-container").innerHTML = htmlResumen;

  const btnPdf = document.getElementById("btn-descargar-pdf");
  btnPdf.style.display = "inline-block";
  btnPdf.onclick = () => generarPDF(aciertosTest, texto);
  show("pantalla-resultados");
}

// ==========================================
// PDF
// ==========================================
async function generarPDF(puntos, texto) {
  const btnPdf = document.getElementById("btn-descargar-pdf");
  btnPdf.innerText = "Generando PDF...";
  btnPdf.disabled = true;

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.setFillColor(5, 5, 5);
  doc.rect(0, 0, 210, 297, "F");

  try {
    const response = await fetch("VillaMolona General.png");
    const blob = await response.blob();
    const bit = await createImageBitmap(blob);
    const canvas = document.createElement("canvas");
    canvas.width = bit.width; canvas.height = bit.height;
    canvas.getContext("2d").drawImage(bit, 0, 0);
    doc.addImage(canvas.toDataURL("image/png"), "PNG", 15, 12, 30, 30);
  } catch (e) { console.warn("Logo no encontrado"); }

  doc.setTextColor(255, 0, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(26);
  doc.text("VILLAMOLONA", 105, 35, null, null, "center");

  doc.setTextColor(0, 255, 65);
  doc.setFontSize(16);
  doc.text("Reporte Test-Iculo: Anarquín Molón", 105, 52, null, null, "center");

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.text(`Puntuación: ${puntos} / ${historialTest.length}`, 105, 70, null, null, "center");

  doc.setFont("helvetica", "italic");
  doc.setFontSize(11);
  const textLines = doc.splitTextToSize(`Comentario: ${texto}`, 160);
  doc.text(textLines, 105, 85, null, null, "center");

  let currentY = 110;
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(13);
  doc.setFont("helvetica", "bold");
  doc.text("Historial del Test:", 15, currentY);
  currentY += 12;
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");

  for (let i = 0; i < historialTest.length; i++) {
    const item = historialTest[i];
    if (currentY > 265) {
      doc.addPage();
      doc.setFillColor(5, 5, 5);
      doc.rect(0, 0, 210, 297, "F");
      currentY = 20;
    }
    const pregLines = doc.splitTextToSize(`${i + 1}. ${item.pregunta}`, 180);
    doc.setTextColor(200, 200, 200);
    doc.text(pregLines, 15, currentY);
    currentY += pregLines.length * 5;

    if (item.eleccion === item.correcta) {
      doc.setTextColor(0, 220, 60);
      const okLines = doc.splitTextToSize(`✓ Acierto: ${item.opciones[item.correcta]}`, 180);
      doc.text(okLines, 18, currentY);
      currentY += okLines.length * 5 + 4;
    } else {
      const failText = item.eleccion !== null && item.eleccion !== undefined ? item.opciones[item.eleccion] : "Sin responder";
      doc.setTextColor(220, 30, 60);
      const failLines = doc.splitTextToSize(`✗ Fallo: ${failText}`, 180);
      doc.text(failLines, 18, currentY);
      currentY += failLines.length * 5;
      doc.setTextColor(0, 220, 60);
      const rightLines = doc.splitTextToSize(`✓ Correcta: ${item.opciones[item.correcta]}`, 180);
      doc.text(rightLines, 18, currentY);
      currentY += rightLines.length * 5 + 4;
    }
  }

  doc.setTextColor(255, 0, 255);
  doc.setFontSize(9);
  doc.text("Generado automáticamente por el protocolo Molon-IA.", 105, 288, null, null, "center");
  doc.save("Reporte_Anarquin_Test.pdf");

  btnPdf.innerText = "Descargar PDF Irónico";
  btnPdf.disabled = false;
}
