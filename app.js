let preguntasDB = [];

// Estado Trivial
let anarquinesConseguidos = { 0: false, 1: false, 2: false, 3: false, 4: false }; // Fuc, Azu, Ver, Nar, Roj
let victoriaConseguida = false;
let comodinPendiente = false;

// Estado Test
let preguntasTest = [];
let currentIndexTest = 0;
let aciertosTest = 0;
let testTimerInterval;
let timeRemaining = 180; // 3 minutos

// Mapeo Caras a Temas
const carasMapping = {
  1: "Fucsia",
  2: "Azul Eléctrico",
  3: "Verde Ácido",
  4: "Naranja",
  5: "Rojo",
  6: "Comodín" // Estrella
};

document.addEventListener("DOMContentLoaded", () => {
  fetch("preguntas.json")
    .then(r => r.json())
    .then(data => {
      preguntasDB = data;
    })
    .catch(err => console.error("Error cargando preguntas:", err));

  // Listeners Botones Modo
  document.getElementById("btn-modo-trivial").addEventListener("click", iniciarModoTrivial);
  document.getElementById("btn-modo-test").addEventListener("click", iniciarModoTest);
  
  // Listener Dado
  document.getElementById("btn-lanzar").addEventListener("click", lanzarDado);
});

// --- HELPER FUNCIONES ---
function hide(id) { document.getElementById(id).classList.add('hidden'); }
function show(id) { document.getElementById(id).classList.remove('hidden'); }
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
  hide('pantalla-inicio');
  show('pantalla-trivial');
}

function lanzarDado() {
  if (victoriaConseguida) return;
  document.getElementById("btn-lanzar").disabled = true;
  hide('zona-activa');
  
  const dice = document.getElementById("dado3d");
  const result = Math.floor(Math.random() * 6) + 1;
  const rotX = Math.floor(Math.random() * 4) * 360 + (result === 5 ? -90 : result === 6 ? 90 : 0);
  const rotY = Math.floor(Math.random() * 4) * 360 + (result === 2 ? -90 : result === 4 ? 90 : result === 3 ? -180 : 0);
  
  dice.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(-50px)`;
  
  setTimeout(() => {
    procesarTirada(result);
  }, 1600);
}

function procesarTirada(resultadoCara) {
  const tema = carasMapping[resultadoCara];
  
  if (resultadoCara === 6) {
    if (comprobacionVictoriaFinal()) {
      mostrarComodinUI(true); // Comodín para el Dorado
    } else {
      mostrarComodinUI(false); 
    }
  } else {
    // Si ya tiene el de ese color y aún no ha acabado
    if (anarquinesConseguidos[resultadoCara - 1] && !comprobacionVictoriaFinal()) {
      document.getElementById('zona-activa').innerHTML = `
        <h3 style="color:var(--text-muted);text-align:center;">Ya tienes el Anarquín ${tema}. ¡Vuelve a tirar pringao!</h3>
      `;
      show('zona-activa');
      document.getElementById("btn-lanzar").disabled = false;
    } else if (comprobacionVictoriaFinal()) {
      // Necesita tirar para el dorado
       document.getElementById('zona-activa').innerHTML = `
        <h3 style="color:var(--neon-fuchsia);text-align:center;">Solo un Comodín te salvará para el Anarquín Dorado... Sigue tirando</h3>
      `;
      show('zona-activa');
      document.getElementById("btn-lanzar").disabled = false;
    } else {
      // Lanzar pregunta de ese color
      mostrarPreguntaUI(getRandomPreguntaPorTema(tema), null, resultadoCara - 1);
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
  const cont = document.getElementById('zona-activa');
  cont.innerHTML = html;
  show('zona-activa');
  document.getElementById("btn-lanzar").disabled = false;
}

function jugarDorado() {
  mostrarPreguntaUI(getRandomPregunta(), true, null);
}

function mostrarPreguntaUI_Comodin(tema, colorIndex) {
  mostrarPreguntaUI(getRandomPreguntaPorTema(tema), false, colorIndex);
}

function mostrarPreguntaUI(preguntaObj, esDorado, colorIndex) {
  const cont = document.getElementById('zona-activa');
  let colorTitle = esDorado ? "gold" : getComputedStyle(document.documentElement).getPropertyValue(`--neon-${['fuchsia', 'blue', 'green', 'orange', 'red'][colorIndex] || 'fuchsia'}`);
  
  let html = `
    <h3 style="color:${colorTitle};">${preguntaObj.titulo}</h3>
    <div class="question-text">${preguntaObj.pregunta}</div>
    <div class="options-container" id="trivial-opts">
  `;
  
  preguntaObj.opciones.forEach((opt, idx) => {
    html += `<button class="option-btn" onclick="checkTrivialRespuesta(${idx}, ${preguntaObj.correcta}, '${preguntaObj.explicacion}', ${esDorado}, ${colorIndex}, this)">${opt}</button>`;
  });
  
  html += `</div>
           <div id="trivial-feedback" class="feedback-text"></div>
           <div style="text-align:center; margin-top:15px; display:none;" id="btn-trivial-next-cont">
             <button class="btn-cyber" onclick="siguienteTirada()">Siguiente</button>
           </div>
  `;
  
  cont.innerHTML = html;
  show('zona-activa');
  document.getElementById("btn-lanzar").disabled = true; // Bloqueado hasta responder
}

function checkTrivialRespuesta(seleccion, correcta, explicacion, esDorado, colorIndex, btnElement) {
  const feedback = document.getElementById('trivial-feedback');
  const optsContainer = document.getElementById('trivial-opts');
  const btns = optsContainer.querySelectorAll('.option-btn');
  
  btns.forEach((b, idx) => {
    b.disabled = true;
    if (idx === correcta) b.classList.add('correct');
    else if (idx === seleccion) b.classList.add('wrong');
  });

  feedback.style.display = 'block';
  feedback.innerHTML = `<strong>${seleccion === correcta ? '¡Acierto!' : 'Zasca, Fallo.'}</strong> ${explicacion}`;

  document.getElementById('btn-trivial-next-cont').style.display = 'block';

  if (seleccion === correcta) {
    if (esDorado) {
      document.getElementById('slot-final').classList.add('active');
      victoriaConseguida = true;
      setTimeout(() => {
        finalizarJuegoTrivial();
      }, 2000);
    } else {
      anarquinesConseguidos[colorIndex] = true;
      document.getElementById(`slot-${colorIndex}`).classList.add('active');
    }
  }
}

function siguienteTirada() {
  hide('zona-activa');
  document.getElementById("btn-lanzar").disabled = false;
  if(comprobacionVictoriaFinal() && !victoriaConseguida) {
    // Si acaba de conseguir el 5º, avisarle
    document.getElementById('zona-activa').innerHTML = `
        <h3 style="color:gold;text-align:center;">¡Casi lo tienes! Tira para sacar Comodín e intentar el Dorado.</h3>
      `;
      show('zona-activa');
  }
}

function finalizarJuegoTrivial() {
  hide('pantalla-trivial');
  document.getElementById('resultado-titulo').innerText = "¡La Leyenda del BOE!";
  document.getElementById('resultado-texto').innerText = "Ya te has ganado las cañas, deja de estudiar. Tienes tu plaza garantizada (o al menos un buen rollo).";
  show('pantalla-resultados');
}

// ==========================================
// MODO: TEST-ICULO
// ==========================================
function iniciarModoTest() {
  hide('pantalla-inicio');
  
  // Mezclar preguntas y coger 10
  preguntasTest = [...preguntasDB].sort(() => 0.5 - Math.random()).slice(0, 10);
  currentIndexTest = 0;
  aciertosTest = 0;
  timeRemaining = 180;
  
  show('pantalla-test');
  iniciarTimer();
  renderPreguntaTest();
}

function iniciarTimer() {
  const timerEl = document.getElementById('timer');
  timerEl.classList.remove('danger');
  
  testTimerInterval = setInterval(() => {
    timeRemaining--;
    let mins = Math.floor(timeRemaining / 60);
    let secs = timeRemaining % 60;
    
    timerEl.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    
    if (timeRemaining <= 30) {
      timerEl.classList.add('danger');
    }
    
    if (timeRemaining <= 0) {
      clearInterval(testTimerInterval);
      finalizarModoTest(true); // Terminado por tiempo
    }
  }, 1000);
}

function renderPreguntaTest() {
  const preg = preguntasTest[currentIndexTest];
  document.getElementById('test-progress').innerText = `Pregunta ${currentIndexTest + 1} de 10`;
  
  let html = `
    <div class="question-text">${preg.pregunta}</div>
    <div class="options-container" id="test-opts">
  `;
  
  preg.opciones.forEach((opt, idx) => {
    html += `<button class="option-btn" onclick="seleccionarDatoTest(${idx}, ${preg.correcta}, this)">${opt}</button>`;
  });
  
  html += `</div>
           <div style="text-align:right; margin-top:20px;">
              <button class="btn-cyber" id="btn-next-test" disabled onclick="avanzarTest()">Siguiente</button>
           </div>`;
           
  document.getElementById('zona-test-activa').innerHTML = html;
}

let eleccionTestActual = null;
let correctaTestActual = null;

function seleccionarDatoTest(seleccion, correcta, btn) {
  eleccionTestActual = seleccion;
  correctaTestActual = correcta;
  
  let btns = document.getElementById('test-opts').querySelectorAll('.option-btn');
  btns.forEach(b => {
    b.style.borderColor = "rgba(255,255,255,0.1)";
    b.style.background = "rgba(255,255,255,0.05)";
  });
  
  btn.style.borderColor = "var(--neon-blue)";
  btn.style.background = "rgba(0, 229, 255, 0.2)";
  
  document.getElementById('btn-next-test').disabled = false;
}

function avanzarTest() {
  if (eleccionTestActual === correctaTestActual) aciertosTest++;
  
  currentIndexTest++;
  if (currentIndexTest >= 10) {
    clearInterval(testTimerInterval);
    finalizarModoTest(false);
  } else {
    renderPreguntaTest();
  }
}

function finalizarModoTest(porTiempo) {
  hide('pantalla-test');
  let texto = porTiempo ? "¡Se te acabó el tiempo, tortuga burocrática!" : "Test finalizado con sudor y lágrimas.";
  
  // Notas sarcásticas
  if (aciertosTest < 5) texto += " Un mono con ballesta sacaría más nota que tú.";
  else if (aciertosTest < 8) texto += " Bueno, apruebas por los pelos. Carne de ventanilla.";
  else texto += " ¡Vaya, vaya! Tenemos aquí al próximo Abogado del Estado.";

  document.getElementById('resultado-titulo').innerText = `Puntuación: ${aciertosTest}/10`;
  document.getElementById('resultado-texto').innerText = texto;
  
  const btnPdf = document.getElementById('btn-descargar-pdf');
  btnPdf.style.display = "inline-block";
  btnPdf.onclick = () => generarPDF(aciertosTest, texto);
  
  show('pantalla-resultados');
}

function generarPDF(puntos, texto) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  
  // Fondo oscuro
  doc.setFillColor(5, 5, 5);
  doc.rect(0, 0, 210, 297, "F");

  // Texto Magenta
  doc.setTextColor(255, 0, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(28);
  doc.text("VILLAMOLONA", 105, 40, null, null, "center");
  
  doc.setTextColor(0, 255, 65); // Verde Terminal
  doc.setFontSize(20);
  doc.text("Reporte Test-Iculo: Anarquín Molón", 105, 60, null, null, "center");
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.text(`Puntuación Obtenida: ${puntos} / 10`, 105, 100, null, null, "center");
  
  doc.setFont("helvetica", "italic");
  doc.setFontSize(12);
  const textLines = doc.splitTextToSize(`Comentario Oficial: ${texto}`, 150);
  doc.text(textLines, 105, 130, null, null, "center");

  doc.setTextColor(255, 0, 255);
  doc.setFontSize(10);
  doc.text("Generado automáticamente por el protocolo Molon-IA.", 105, 280, null, null, "center");

  doc.save("Reporte_Anarquin_Test.pdf");
}
