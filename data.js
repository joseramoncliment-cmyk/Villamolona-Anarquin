const preguntasDBData = [
  {
    "id": 1,
    "tema": "Fucsia",
    "titulo": "Derechos y Deberes (Tít. I CE)",
    "pregunta": "A ver, lumbreras de los Derechos Fundamentales. Si te meten en el calabozo sin razón ninguna y no te dejan ni llamar al telepizza, ¿qué as bajo la manga te sacas (Art. 17 CE)?",
    "opciones": [
      "Llorar muy fuerte al comisario para que se apiade.",
      "El procedimiento de 'Habeas Corpus' para que te pongan frente a un juez a la voz de ya.",
      "Pedir el libro de reclamaciones y rellenarlo con boli de tinta borrable."
    ],
    "correcta": 1,
    "explicacion": "Correcto. El 'Habeas Corpus' es para que no te tengan secuestrado a lo tonto y te presenten ante el juez de inmediato. A diferencia de tu ex, el juez sí te hace caso."
  },
  {
    "id": 2,
    "tema": "Fucsia",
    "titulo": "Derechos y Deberes (Tít. I CE)",
    "pregunta": "¿Qué pasa si mañana el Gobierno dice que se acabó eso de reunirse en la calle (Art. 21 CE)?",
    "opciones": [
      "Que no pueden, el derecho de reunión pacífica y sin armas no necesita autorización previa.",
      "Que tienes que mandar un burofax al Rey pidiendo permiso por favor.",
      "Que sólo puedes reunirte si es para tomar unas cañas, nada de protestar."
    ],
    "correcta": 0,
    "explicacion": "Bingo. Te puedes reunir pacíficamente sin pedir permiso a nadie. Ojo, si vas a cortar la Gran Vía sí hay que avisar, no me seas cafre."
  },
  {
    "id": 3,
    "tema": "Fucsia",
    "titulo": "Derechos y Deberes (Tít. I CE)",
    "pregunta": "¿Puede el Estado obligarte a decir si eres del Atleti, de Vox, o si crees en el Monstruo del Espagueti Volador (Art. 16 CE)?",
    "opciones": [
      "Sí, para hacer estadísticas del INE.",
      "Nadie podrá ser obligado a declarar sobre su ideología, religión o creencias.",
      "Sí, pero sólo si te invitan a un café primero."
    ],
    "correcta": 1,
    "explicacion": "Exacto. Nadie te puede obligar a confesar tus oscuros secretos ideológicos o religiosos. ¡Tu mente es tu fortaleza!"
  },
  {
    "id": 4,
    "tema": "Azul Eléctrico",
    "titulo": "La Corona y Cortes (Tít. II y III CE)",
    "pregunta": "Vale, te sabes la línea de sucesión a la Corona mejor que el árbol genealógico de los Targaryen. ¿A quién le toca el trono si el Príncipe de Asturias la diña y no tiene descendencia (Art. 57 CE)?",
    "opciones": [
      "Al pariente más cercano que haya aguantado en la familia sin que le deshereden.",
      "A los hermanos y hermanas, con preferencia de las líneas anteriores sobre las posteriores.",
      "A Felipe de Marichalar, para que reine el caos absoluto."
    ],
    "correcta": 1,
    "explicacion": "Chupao. Primero descendientes, luego hermanos... la línea regular para que no haya guerras civiles de nuevo, que ya tuvimos bastantes."
  },
  {
    "id": 5,
    "tema": "Azul Eléctrico",
    "titulo": "La Corona y Cortes (Tít. II y III CE)",
    "pregunta": "¿Quién se dedica a darle forma a los Presupuestos Generales del Estado aparte de cobrar unas dietas majas (Art. 134 CE)?",
    "opciones": [
      "Las cuentas las lleva el Ministro de Hacienda en una libreta del chino.",
      "El Gobierno los elabora y las Cortes Generales los examinan, enmiendan y aprueban.",
      "El Congreso aprueba y el Senado asiente con la cabeza para no montar el pollo."
    ],
    "correcta": 1,
    "explicacion": "El Gobierno saca la calculadora, pero son las Cortes (Congreso + Senado) quienes dicen si el sablazo fiscal tiene sentido o no."
  },
  {
    "id": 6,
    "tema": "Azul Eléctrico",
    "titulo": "La Corona y Cortes (Tít. II y III CE)",
    "pregunta": "¿Cuántos diputados caben en el Congreso como máximo según la Constitución (Art. 68 CE)?",
    "opciones": [
      "Mínimo 300 y máximo 400. Todo un corral.",
      "Los que entren hasta que deje de haber butacas libres.",
      "Exactamente 350 diputados, ni uno más, ni uno menos."
    ],
    "correcta": 0,
    "explicacion": "Ojo ahí: La Ley Orgánica del Régimen Electoral General fija 350, ¡pero la Constitución deja un margen de entre 300 y 400! Has estado avispado."
  },
  {
    "id": 7,
    "tema": "Verde Ácido",
    "titulo": "Organización Territorial (Tít. VIII CE)",
    "pregunta": "Si un Presidente Autónomico se pone rebelde y pasa olímpicamente de las leyes, ¿qué mecanismo salvaje se le puede aplicar (Art. 155 CE)?",
    "opciones": [
      "Un castigo ejemplar en la plaza del pueblo.",
      "El famoso 155: el Gobierno, con mayoría absoluta del Senado, le obliga a cumplir por las malas.",
      "Se le retira el sueldo y las dietas en restaurantes de lujo."
    ],
    "correcta": 1,
    "explicacion": "Efectivamente. Se activa el Artículo 155 y se acabó el recreo. Se necesita mayoría absoluta del Senado para darle al botón nuclear."
  },
  {
    "id": 8,
    "tema": "Verde Ácido",
    "titulo": "Organización Territorial (Tít. VIII CE)",
    "pregunta": "En caso de que el Estado y una Comunidad Autónoma se peleen porque ambas dicen tener competencia sobre algo (Art. 149 CE), ¿qué pasa?",
    "opciones": [
      "Se resuelve en un combate singular con espadas.",
      "El derecho estatal prevalece en caso de conflicto sobre el de las CCAA en todo lo que no esté atribuido en exclusiva a éstas.",
      "La Comunidad Autónoma siempre gana si tiene más banderas en el balcón."
    ],
    "correcta": 1,
    "explicacion": "Regla de prevalencia del Estado. Básicamente: si dudo quién manda aquí (y no es exclusivo tullo), mando yo que soy el Estado Español."
  },
  {
    "id": 9,
    "tema": "Verde Ácido",
    "titulo": "Organización Territorial (Tít. VIII CE)",
    "pregunta": "¿Cómo se llama en la CE a esa ley especialísima que es la norma institucional suprema de una CCAA?",
    "opciones": [
      "La Bula Papal Autonómica.",
      "Estatuto de Autonomía.",
      "La Carta Magna Regional."
    ],
    "correcta": 1,
    "explicacion": "Yes! El Estatuto de Autonomía, la joya de la corona normativa de cualquier comunidad."
  },
  {
    "id": 10,
    "tema": "Naranja",
    "titulo": "El Papeleo (Tít. IV Ley 39)",
    "pregunta": "¿Cuánto tiempo tiene la Administración como norma general para resolver tus movidas y notificártelo si no se dice nada específico (Art. 21 LPAC)?",
    "opciones": [
      "Tres meses, y da las gracias de que presten atención a tu miseria.",
      "Seis meses, porque van despacio, al ritmo de Windows 95.",
      "Un mes, que para eso cobran de nuestros impuestos."
    ],
    "correcta": 0,
    "explicacion": "Exacto! La regla residual marca el tope en 3 meses. Pasado ese tiempo ya entra en juego el mágico mundo del silencio administrativo."
  },
  {
    "id": 11,
    "tema": "Naranja",
    "titulo": "El Papeleo (Tít. IV Ley 39)",
    "pregunta": "Te notifican en papel (a la antigua). Vas a tu buzón pero no estás en casa. ¿Qué tiene que hacer el cartero o notificador (Art. 42 LPAC)?",
    "opciones": [
      "Meter el papelón debajo del felpudo y salir pitando.",
      "Hacer un segundo intento dentro de los 3 días siguientes, con diferencia de al menos 3 horas entre intentos.",
      "Llamarte al móvil pidiéndote disculpas y dejártelo en el bar de abajo."
    ],
    "correcta": 1,
    "explicacion": "Vuelven a la carga en los siguientes 3 días. Y ojo: si la primera fue por la mañana, la segunda por la tarde, y viceversa."
  },
  {
    "id": 12,
    "tema": "Naranja",
    "titulo": "El Papeleo (Tít. IV Ley 39)",
    "pregunta": "Si vas a presentar un escrito y resulta que es domingo por la tarde, ¿dónde demonios lo echas (Art. 16 LPAC)?",
    "opciones": [
      "En el buzón de la calle, que ya lo recogerán.",
      "En el registro electrónico de la Administración u Organismo al que te dirijas.",
      "No puedes, espérate al lunes a las 9 como la plebe."
    ],
    "correcta": 1,
    "explicacion": "El registro electrónico nunca duerme, amiguito. 24 horas al día, 365 días al año disponible para recibir tus lloros burocráticos."
  },
  {
    "id": 13,
    "tema": "Rojo",
    "titulo": "Silencio y Recursos (Tít. V Ley 39)",
    "pregunta": "A ver, lumbreras. Te han mandado una resolución que te ha dejado la cara torcida. ¿Cuánto tiempo tienes para llorarle al superior (Recurso de Alzada) alzada expreso?",
    "opciones": [
      "Un mes (y reza para que lo lean).",
      "Tres meses (ni de coña, eso es para el de reposición si es presunto).",
      "Diez días (no me seas ansias, eso son alegaciones)."
    ],
    "correcta": 0,
    "explicacion": "¡Boom! Tienes UN MES para interponer el recurso de alzada si el acto fue expreso. El tiempo vuela, no te duermas en los laureles administrativos."
  },
  {
    "id": 14,
    "tema": "Rojo",
    "titulo": "Silencio y Recursos (Tít. V Ley 39)",
    "pregunta": "¿Qué ocurre si metes un recurso potestativo de reposición contra un acto y la Administración no te contesta en el plazo (Art. 124 LPAC)?",
    "opciones": [
      "Te jodes y bailas, el silencio es positivo siempre.",
      "Silencio negativo: se entiende desestimado para que puedas irte al tribunal contencioso-administrativo a pringar pasta.",
      "Ganas por goleada y te tienen que dar lo que pedías."
    ],
    "correcta": 1,
    "explicacion": "Masoquismo jurídico nivel Experto: el silencio en recursos (casi siempre) es negativo, es decir, 'Calladito te digo que no'. Te abren la vía judicial."
  },
  {
    "id": 15,
    "tema": "Rojo",
    "titulo": "Silencio y Recursos (Tít. V Ley 39)",
    "pregunta": "Un acto pone 'fin a la vía administrativa'. ¿Qué recurso administrativo te queda por interponer OBLIGATORIAMENTE para seguir quejándote?",
    "opciones": [
      "El potestativo de reposición (que como su nombre indica, es 'potestativo', es decir, opcional).",
      "El de alzada, que vale para todo.",
      "Ninguno obligatoriamente. Puedes irte del tirón a la vía contencioso-administrativa."
    ],
    "correcta": 2,
    "explicacion": "Exacto. Si agota la vía administrativa, se acabó el peloteo con ellos. Puedes hacer la de reposición si quieres perder el tiempo, o irte directo a los tribunales."
  }
];
