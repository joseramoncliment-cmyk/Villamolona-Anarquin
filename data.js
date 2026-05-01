const preguntasDBData = [
  {
    "id": 1,
    "tema": "Fucsia",
    "titulo": "Art. 27 - Educación para Dummies",
    "pregunta": "Venga, máquina, que esta es de primero de opositor con ojeras. La enseñanza básica... ¿cómo va el rollo según la Constitución para que no te líes?",
    "opciones": [
      "Es obligatoria y gratuita, pero si tus padres quieren llevarte a un cole de pago para que aprendas latín y a hacer amigos con apellido compuesto, pues también pueden.",
      "Es gratis hasta que cumples 16, luego el Estado te pasa la factura con intereses por haber aguantado tus dramas adolescentes.",
      "Es obligatoria, sí, pero lo de 'gratuita' es un mito urbano. Siempre hay que pagar algo, aunque sea la fotocopia del examen que vas a suspender."
    ],
    "correcta": 0,
    "explicacion": "Exacto, es obligatoria y gratuita, pero con libertad para elegir centro. Si has fallado, no te preocupes, en la enseñanza básica te lo volverían a explicar con dibujitos. Art. 27.4 CE."
  },
  {
    "id": 2,
    "tema": "Fucsia",
    "titulo": "Art. 17 - El grito del calabozo",
    "pregunta": "Imagina que te detienen por... no sé, por tener una opinión demasiado original. Estás en el calabozo y quieres que un juez revise si te tienen ahí de gratis. ¿Qué gritito mágico invocas?",
    "opciones": [
      "¡Quieto todo el mundo, que llamo a mi abogado y os monta un pollo que ni en el KFC!",
      "¡Habeas Corpus, señores! Que venga un juez a ver este percal, que esto no es un hotel con todo incluido.",
      "¡Exijo un juicio por combate! Mi campeón contra el vuestro, y si gano me voy a casa a ver Netflix."
    ],
    "correcta": 1,
    "explicacion": "¡Claro que sí, campeón! 'Habeas Corpus'. Si has dicho otra cosa, te mereces las 72 horas en el calabozo para que reflexiones sobre tu vida y te leas el Art. 17.4 CE."
  },
  {
    "id": 3,
    "tema": "Fucsia",
    "titulo": "Art. 22 - Club de colegas chungos",
    "pregunta": "Te juntas con tus colegas para montar un club. Sois majísimos, pero resulta que vuestro hobby es planificar la dominación mundial con armas de paintball. ¿Qué os diría la Constitución?",
    "opciones": [
      "Adelante, valientes, pero registrad los estatutos y no hagáis mucho ruido, que los vecinos se quejan.",
      "Solo si sois más de 20 personas, si no, se considera una 'quedada' y es legal siempre que llevéis picoteo.",
      "Mola vuestro rollo, pero las asociaciones paramilitares y las que son un delito en sí mismas... como que no. A buscarse otro hobby, cracks."
    ],
    "correcta": 2,
    "explicacion": "Pues eso, que por muy guay que sea vuestro plan, las asociaciones paramilitares están más prohibidas que pedir piña en la pizza. A leerse el Art. 22.2 y 22.5 CE, visionarios."
  },
  {
    "id": 4,
    "tema": "Fucsia",
    "titulo": "Art. 21 - La mani por tu banco",
    "pregunta": "Quieres montar una manifestación en la plaza del pueblo para protestar porque han quitado tu banco favorito para cotillear. ¿Necesitas pedirle permiso al alcalde como si fueras a salir de fiesta?",
    "opciones": [
      "Permiso no, pero tienes que avisar por si tienen que desviar el autobús y para que no pongan el mercadillo ese día. Es de buena educación cívica.",
      "Claro, tienes que entregar una instancia por triplicado, con sello, firma y una promesa de que no gritarás mucho.",
      "No hace falta nada. Te presentas allí con tu pancarta y si a alguien le molesta, que se aguante, que para eso hay libertad de expresión."
    ],
    "correcta": 0,
    "explicacion": "¡Correcto! No se pide permiso, se comunica. Que no es una boda, es una mani. Si has puesto otra cosa, igual el que necesita autorización para salir a la calle eres tú. Art. 21.2 CE."
  },
  {
    "id": 5,
    "tema": "Fucsia",
    "titulo": "Art. 53 - La última bala",
    "pregunta": "Un tribunal te ha pisoteado un derecho fundamental que te costó sangre, sudor y lágrimas memorizar (del 14 al 29). Ya no te quedan más tribunales a los que llorar. ¿Cuál es tu última bala de plata?",
    "opciones": [
      "Ir a 'El Programa de Ana Rosa' a contar tu drama, que la presión mediática a veces funciona.",
      "Presentar un recurso de amparo ante el Tribunal Constitucional, a ver si a ellos les das un poco más de pena.",
      "Escribirle una carta al Rey, que para algo es el Jefe del Estado, a ver si te indulta el mal rato."
    ],
    "correcta": 1,
    "explicacion": "¡Esa es! El recurso de amparo ante el TC. Tu último cartucho antes de ponerte a llorar en un rincón. Si no lo sabías, es para que te quiten la plaza directamente. Art. 53.2 CE."
  },
  {
    "id": 6,
    "tema": "Fucsia",
    "titulo": "Art. 17 - El hotel rejas",
    "pregunta": "La policía te mete en el 'hotel rejas' mientras investigan si fuiste tú quien se comió la última galleta. ¿Cuánto tiempo te pueden tener ahí de 'okupa' como máximo antes de que te vea un juez o te suelten?",
    "opciones": [
      "Un finde. De viernes a lunes, que los jueces no trabajan los domingos y hay que respetar su descanso.",
      "El tiempo que les dé la gana hasta que cantes por bulerías o se aclare el 'galletagate'.",
      "Unas 72 horitas de reflexión. Tres días para que pienses en lo que has hecho y eches de menos tu cama."
    ],
    "correcta": 2,
    "explicacion": "¡72 horas, ni un minuto más! Si has fallado esta, las 72 horas te las mereces tú, pero con el temario delante y sin móvil. Es el Art. 17.2 CE, alma de cántaro."
  },
  {
    "id": 7,
    "tema": "Fucsia",
    "titulo": "Art. 27 - Montar un chiringuito educativo",
    "pregunta": "El artículo 27 es un festival de libertades educativas. ¿Qué reconoce básicamente sobre crear colegios y enseñar?",
    "opciones": [
      "Que cualquiera puede montar su chiringuito educativo, siempre que respete los principios de la Constitución. Vamos, libertad de enseñanza y de creación de centros.",
      "Que solo el Estado puede montar colegios, para asegurarse de que todos los niños aprendan lo mismo y salgan en serie, como los tornillos.",
      "Que los padres tienen la obligación de escolarizar a sus hijos en el centro que les pille más cerca de un bar con buena tapa de tortilla."
    ],
    "correcta": 0,
    "explicacion": "¡Bingo! Se reconoce la libertad de enseñanza y la de crear centros. Si pensabas que solo el Estado podía, es que te has quedado en el siglo pasado. Échale un ojo al Art. 27.1 y 27.6 CE, anda."
  },
  {
    "id": 8,
    "tema": "Fucsia",
    "titulo": "Art. 21 - La mani de Netflix",
    "pregunta": "Estás en la calle, te enteras de una injusticia sideral (han cancelado tu serie favorita) y la gente empieza a juntarse espontáneamente para protestar. ¿Es legal esa 'mani' improvisada?",
    "opciones": [
      "No, es ilegal. Hay que disolverse y presentar la comunicación previa para la semana que viene, que las cosas se hacen con orden.",
      "Solo si es en un descampado y no molesta a nadie. En la ciudad está prohibido improvisar, que se colapsa el tráfico.",
      "Claro, mientras sea pacífica y sin armas, la ley protege hasta las reuniones en lugares de tránsito público. A protestar se ha dicho."
    ],
    "correcta": 2,
    "explicacion": "Pues sí, alma libre. El derecho de reunión también ampara las concentraciones espontáneas siempre que sean pacíficas. Así que a quejarse, pero sin romper nada. Art. 21 CE, interpretado por el TC."
  },
  {
    "id": 9,
    "tema": "Fucsia",
    "titulo": "Art. 22 - Asociaciones con sarpullido",
    "pregunta": "Tu primo y sus amigos han creado la 'Asociación Secreta de Catadores de Croquetas' y tienen un saludo militar. ¿Qué dos tipos de asociaciones hacen que a la Constitución le dé un sarpullido?",
    "opciones": [
      "Las que no tienen un grupo de WhatsApp y las que se reúnen en martes, que es un día muy feo.",
      "Las gastronómicas con más de 100 socios y las que usan Comic Sans en su logo, que es de mal gusto.",
      "Las secretas y las de carácter paramilitar. Básicamente, las que van de misteriosas y las que juegan a los soldaditos."
    ],
    "correcta": 2,
    "explicacion": "¡Correctísimo! Las secretas y las paramilitares están prohibidísimas. Así que dile a tu primo que se deje de secretitos y saludos, o acabará catando las croquetas del talego. Art. 22.5 CE."
  },
  {
    "id": 10,
    "tema": "Fucsia",
    "titulo": "Art. 53 - ¿A quién obliga la CE?",
    "pregunta": "Los derechos y libertades del Capítulo II de la CE (los guays, los fundamentales), ¿a quién obligan a portarse bien?",
    "opciones": [
      "Solo a los políticos en campaña, para que prometan cosas que luego no van a cumplir.",
      "A todos los poderes públicos. Vamos, que desde el policía de la esquina hasta el presidente del Gobierno tienen que respetarlos sí o sí.",
      "A los ciudadanos de a pie, para que no nos liemos a palos en el súper por el último rollo de papel higiénico."
    ],
    "correcta": 1,
    "explicacion": "¡A todos los poderes públicos, por supuesto! Vinculan a todo quisqui que mande algo. Si creías otra cosa, igual el derecho fundamental que te falta es el de tener las ideas claras. Art. 53.1 CE."
  },
  {
    "id": 11,
    "tema": "Azul Eléctrico",
    "titulo": "Decreto-ley y sus manías",
    "pregunta": "Venga, máquina, que se te ve fresco. El Gobierno se levanta un lunes con ganas de marcha y saca un Decreto-ley. ¿Qué es lo que NO puede tocar ni con un palo, por muy \"extraordinaria y urgente\" que sea la pachanga?",
    "opciones": [
      "El chiringuito de los derechos fundamentales del Título I, que para eso se necesita más que una firma mañanera.",
      "La subida del IRPF, que eso es sagrado y solo se puede hacer con una reforma constitucional en año bisiesto.",
      "La organización de los Ministerios, que eso es un tetris que solo puede tocar el Rey después de las uvas."
    ],
    "correcta": 0,
    "explicacion": "¡Claro que sí, campeón! Los derechos fundamentales son sagrados, no un capricho de última hora. Si has fallado esta, apaga y vámonos. Art. 86.1 CE."
  },
  {
    "id": 12,
    "tema": "Azul Eléctrico",
    "titulo": "Iniciativa popular de colegas",
    "pregunta": "Imagina que tú y tu panda de iluminados queréis proponer una ley para que el lunes sea festivo nacional. ¿Cuántos colegas con DNI tenéis que juntar para que en el Congreso os hagan un mínimo de caso?",
    "opciones": [
      "50.000 firmicas, que es la gente que cabe en un concierto de los buenos y ya parece un montón.",
      "Medio millón de almas, un \"pequeño\" detalle de 500.000 firmas para que tu sueño no acabe en la papelera de reciclaje.",
      "Un millón de valientes, porque por menos de eso ni te abren la puerta, que están muy ocupados."
    ],
    "correcta": 1,
    "explicacion": "¡Medio millón, artista! ¿Pensabas que legislar era gratis? A recoger firmas se ha dicho. Menos mal que no te pagan por acertar. Art. 87.3 CE."
  },
  {
    "id": 13,
    "tema": "Azul Eléctrico",
    "titulo": "El Senado y el reparto de sillas",
    "pregunta": "Hablemos del Senado, esa cámara de \"reflexión\" (o siesta, según el día). A tu provincia, por ser muy especial y única, ¿cuántos senadores le tocan de base, sin contar los que vienen de rebote de las CCAA?",
    "opciones": [
      "Dos, uno para el verano y otro para el invierno, que no está la cosa para más gastos.",
      "Depende del número de habitantes, como en el Euromillón. A más gente, más senadores.",
      "Cuatro. Un póker de senadores fijos, da igual si tu provincia es Soria o Madrid. Café para todos."
    ],
    "correcta": 2,
    "explicacion": "Cuatro como cuatro soles, figura. Da igual que seáis cuatro gatos o una multitud. Si te has liado, es que la reflexión del Senado se te está contagiando. Art. 69.2 CE."
  },
  {
    "id": 14,
    "tema": "Azul Eléctrico",
    "titulo": "La cocina de los Presupuestos",
    "pregunta": "Llega el momento de repartir el dinero público, la fiesta mayor de la política. ¿Quién es el que corta el bacalao, o sea, quién cocina el proyecto de Presupuestos Generales del Estado?",
    "opciones": [
      "El Gobierno, que es el que se mancha las manos preparando el guiso para que luego otros le pongan pegas.",
      "Las Cortes Generales en sesión conjunta, en una especie de brainstorming gigante para ver a quién le toca más.",
      "El Tribunal de Cuentas, que como son los que vigilan el dinero, pues ya de paso lo reparten ellos."
    ],
    "correcta": 0,
    "explicacion": "¡El Gobierno, crack! Él los elabora y las Cortes los aprueban (o se los tiran a la cara). Conceptos básicos para no hacer el ridículo en la cena de Navidad. Art. 134.1 CE."
  },
  {
    "id": 15,
    "tema": "Azul Eléctrico",
    "titulo": "Congreso: ¿cuántos caben?",
    "pregunta": "El Congreso de los Diputados, ese hemiciclo lleno de gente con ganas de hablar. Según la Constitución, que es muy de dar horquillas, ¿entre qué números se tiene que mover el total de sus señorías?",
    "opciones": [
      "Un número fijo de 350, ni uno más ni uno menos, que las sillas son caras y no hay para todos.",
      "Entre 300 y 400. Un margen para que quepan todos, desde los más altos a los más bajos.",
      "Un mínimo de 250 y un máximo de 500, para que haya margen de negociación en los pactos."
    ],
    "correcta": 1,
    "explicacion": "Entre 300 y 400, lumbreras. La ley electoral ya lo fijó en 350, pero la Constitución es más flexible. Si has fallado, igual lo tuyo no es contar escaños. Art. 68.1 CE."
  },
  {
    "id": 16,
    "tema": "Azul Eléctrico",
    "titulo": "Gorrones en la fiesta legislativa",
    "pregunta": "La iniciativa legislativa es como una fiesta a la que no todo el mundo está invitado. De esta lista de VIPs, ¿quién se queda fuera mirando desde la verja y NO puede iniciar el proceso legislativo?",
    "opciones": [
      "Las Asambleas de las Comunidades Autónomas, que a veces les dejan jugar con los mayores.",
      "El Defensor del Pueblo, que está para dar la chapa con las quejas, no para proponer leyes como si fuera el guionista de la nación.",
      "El Senado, que aunque parezca mentira, también puede tener alguna idea de vez en cuando."
    ],
    "correcta": 1,
    "explicacion": "¡El Defensor del Pueblo! Ese se dedica a fiscalizar, no a legislar. ¡Que cada uno se dedique a lo suyo! A ver si nos vamos centrando, que la plaza no se regala. Art. 87 CE."
  },
  {
    "id": 17,
    "tema": "Azul Eléctrico",
    "titulo": "El trocito para votar",
    "pregunta": "Para elegir a los diputados del Congreso, el país se divide en trocitos. ¿Cuál es ese trocito mágico que sirve de base para repartir los escaños y que todos se pelean por él?",
    "opciones": [
      "La Comunidad Autónoma, que es más grande y así hay menos lío para contar los votos.",
      "El partido judicial, para que hasta el pueblo más pequeño tenga su oportunidad de mandar a alguien a Madrid.",
      "La provincia. Simple, clásico y para toda la familia. Un sistema que no entiende de moderneces."
    ],
    "correcta": 2,
    "explicacion": "La provincia, no te compliques la vida. La circunscripción es la provincia. Si esto te suena a chino, tienes un problema más grande que la deuda pública. Art. 68.2 CE."
  },
  {
    "id": 18,
    "tema": "Azul Eléctrico",
    "titulo": "La excusa para el Decreto-ley",
    "pregunta": "El Gobierno no puede sacar Decretos-leyes como si fueran churros. Necesita una excusa de las buenas, una que cuele. ¿Cuál es el mantra que tienen que repetir para justificarlo?",
    "opciones": [
      "\"Extraordinaria y urgente necesidad\". Las palabras mágicas para legislar por la vía rápida sin pasar por la casilla de salida.",
      "\"Interés general y notorio arraigo\". Que suena muy solemne pero es lo que se dice para inaugurar una rotonda.",
      "\"Alarma social y clamor popular\". El comodín perfecto para cuando no sabes qué decir pero quieres sonar importante."
    ],
    "correcta": 0,
    "explicacion": "\"Extraordinaria y urgente necesidad\", futuro funcionario. Apréndetelo como el estribillo de tu canción favorita, porque sin eso, el Decreto-ley es papel mojado. Art. 86.1 CE."
  },
  {
    "id": 19,
    "tema": "Azul Eléctrico",
    "titulo": "Tuneando los Presupuestos",
    "pregunta": "El Gobierno presenta su proyecto de Presupuestos, todo bonito y con sus lacitos. ¿Qué pueden hacer las Cortes Generales con ese \"regalito\"?",
    "opciones": [
      "Solo pueden aprobarlo o rechazarlo en bloque, es un \"lo tomas o lo dejas\" en toda regla.",
      "Pueden examinarlo, meterle mano con enmiendas y, si se ponen de acuerdo, aprobarlo. Vamos, que lo pueden tunear.",
      "Tienen que aprobarlo sí o sí, porque la palabra del Gobierno es ley y los Presupuestos son sagrados."
    ],
    "correcta": 1,
    "explicacion": "¡Pues claro que pueden meterle mano! Lo examinan, lo enmiendan y lo aprueban. Faltaría más. El poder es suyo, no un cheque en blanco para el Gobierno. ¡No me falles en estas cosas! Art. 134.1 CE."
  },
  {
    "id": 20,
    "tema": "Azul Eléctrico",
    "titulo": "La razón de ser del Senado",
    "pregunta": "Vamos con la pregunta del millón, que define la mismísima existencia del Senado. Según la Constitución, que a veces es poeta, el Senado es la Cámara de...",
    "opciones": [
      "...los Notables, un club de señores muy listos que saben mucho de todo y dan su opinión.",
      "...Segunda Lectura, porque su curro es básicamente leerse lo que ya han aprobado otros por si se les ha colado una falta.",
      "...Representación Territorial. Suena rimbombante, pero básicamente significa que es donde las CCAA y provincias tienen su voz (o su eco)."
    ],
    "correcta": 2,
    "explicacion": "Representación Territorial, genio. Es su razón de ser, aunque luego el debate sobre su utilidad dé para una serie de Netflix. Si has dudado, háztelo mirar. Art. 69.1 CE."
  },
  {
    "id": 21,
    "tema": "Verde Ácido",
    "titulo": "Organización Territorial del Chiringuito",
    "pregunta": "Venga, futuro funcionario, el Estado se monta su tenderete territorialmente con unos cuantos colegas. Según el art. 137, ¿quiénes son esos socios con 'autonomía' para ir a su bola?",
    "opciones": [
      "Los municipios, las provincias y las CCAA, que se lo guisan y se lo comen ellos solos dentro de un orden.",
      "Las comarcas, las mancomunidades y las pedanías, porque aquí hasta el más tonto monta un negociado.",
      "Los ayuntamientos, las diputaciones y los delegados del Gobierno, que son los que de verdad cortan el bacalao."
    ],
    "correcta": 0,
    "explicacion": "¡Pero bueno! ¿En qué mundo vives? Claro que son los municipios, provincias y CCAA. El 137 te lo canta bien claro, a ver si espabilamos."
  },
  {
    "id": 22,
    "tema": "Verde Ácido",
    "titulo": "El Bote Común para los Colegas",
    "pregunta": "Hay un fondo de pasta gansa, el Fondo de Compensación Interterritorial, para que no haya CCAA de primera y de tercera. Según el art. 158, ¿para qué narices sirve exactamente ese 'bote' común?",
    "opciones": [
      "Para pagar las fiestas patronales de los pueblos con menos de 100 habitantes y mantener viva la tradición.",
      "Para corregir desequilibrios económicos y hacer que todos los 'hermanos' jueguen en la misma liga, más o menos.",
      "Para financiar los viajes del Imserso y que nuestros mayores vean mundo a costa del contribuyente."
    ],
    "correcta": 1,
    "explicacion": "Era para corregir desequilibrios, alma de cántaro. El 158 lo deja cristalino. Lo de las fiestas ya si eso lo pones en la carta a los Reyes Magos."
  },
  {
    "id": 23,
    "tema": "Verde Ácido",
    "titulo": "Te Paso el Marrón",
    "pregunta": "Imagina que el Estado está hasta el gorro de una competencia y se la quiere endosar a una CCAA. Conforme al art. 150, ¿cómo se llama ese 'pase de paquete' legal?",
    "opciones": [
      "Un 'Decreto de Abandono Competencial', que suena a divorcio pero con el BOE de por medio.",
      "Una 'Resolución de Delegación de Marrones', que es más sincero pero menos jurídico, la verdad.",
      "Una Ley Orgánica de transferencia, que es como decir 'toma, quédatelo tú, que a mí me da pereza'."
    ],
    "correcta": 2,
    "explicacion": "Ley Orgánica de transferencia, campeón. Lo dice el 150.2. Deja de inventarte nombres de película para las leyes, que no cuela."
  },
  {
    "id": 24,
    "tema": "Verde Ácido",
    "titulo": "Mamá Estado y sus Hijos",
    "pregunta": "El artículo 138 dice que el Estado tiene que ser como una madre y garantizar que no haya 'hijos' favoritos que se lleven toda la paga. ¿Qué principio sagrado es ese?",
    "opciones": [
      "El de solidaridad, para que ninguna CCAA llore por las esquinas diciendo que la otra tiene un juguete más grande.",
      "El principio de 'sálvese quien pueda', que es el que se aplica en la vida real, seamos honestos.",
      "El principio de 'competencia desleal', para que las más ricas puedan presumir de PIB en la cara de las demás."
    ],
    "correcta": 0,
    "explicacion": "Solidaridad, criatura. Solidaridad. El 138.1 es el abrazo del oso del Estado. A ver si leemos un poquito más y fantaseamos un poquito menos."
  },
  {
    "id": 25,
    "tema": "Verde Ácido",
    "titulo": "El Mercadillo de las Competencias",
    "pregunta": "Las CCAA, en su afán de gestionar hasta el aire que respiramos, pueden pillar competencias del art. 148. ¿Cuál de estas es una de sus 'golosinas' posibles?",
    "opciones": [
      "La emisión de moneda propia, para tener 'pesetas' autonómicas con la cara del presidente regional.",
      "La asistencia social, porque siempre queda bien en la foto decir que te preocupas por los desfavorecidos.",
      "La gestión de la defensa nacional, para montar un ejército de boy scouts con tirachinas en cada comunidad."
    ],
    "correcta": 1,
    "explicacion": "Asistencia social, evidentemente. El 148 te da un listado para que no te pierdas. Lo de los ejércitos autonómicos déjalo para los videojuegos, anda."
  },
  {
    "id": 26,
    "tema": "Verde Ácido",
    "titulo": "Las Reglas del Juego",
    "pregunta": "A veces, las Cortes Generales le ponen las 'reglas del juego' a las CCAA para que legislen sobre algo del Estado sin liarla parda. ¿Cómo se llama esa genialidad del art. 150?",
    "opciones": [
      "Una Ley de 'Instrucciones para Dummies', para que los parlamentarios autonómicos no se líen con la letra pequeña.",
      "Un 'Manual de Supervivencia Legislativa', con dibujitos y todo para que se entienda bien clarito.",
      "Una Ley marco, que es como ponerle los ruedines a la bici legislativa de las autonomías."
    ],
    "correcta": 2,
    "explicacion": "Ley marco, por favor. El 150.1 no puede ser más claro. Deja los títulos de autoayuda para la librería, que aquí estamos con el BOE."
  },
  {
    "id": 27,
    "tema": "Verde Ácido",
    "titulo": "Autonomía, no Independencia",
    "pregunta": "El art. 137 insiste en que los entes locales tienen 'autonomía para la gestión de sus respectivos intereses'. ¿Qué significa esa palabreja en román paladino?",
    "opciones": [
      "Que pueden organizar su cotarro como quieran, siempre que no se flipen y monten una república en el pueblo.",
      "Que pueden ignorar las leyes del Estado si un día el alcalde se levanta con el pie izquierdo.",
      "Que pueden declarar festivo el día del cumpleaños de la patrona y ponerle su nombre a la plaza mayor sin permiso."
    ],
    "correcta": 0,
    "explicacion": "Significa que gestionan lo suyo, pero dentro de un orden. El 137 te da cuerda, no la horca. ¡No te me vengas arriba!"
  },
  {
    "id": 28,
    "tema": "Verde Ácido",
    "titulo": "Aquí no hay Privilegios",
    "pregunta": "El art. 138.2 se pone muy serio y prohíbe que las diferencias entre Estatutos generen cierta cosa. ¿El qué, lumbreras?",
    "opciones": [
      "Que una comunidad tenga un himno más pegadizo que la otra, para evitar piques en Eurovisión.",
      "Privilegios económicos o sociales, que esto no es el Monopoly y aquí no hay tarjeta de 'Salga de la cárcel gratis'.",
      "Que el presidente de una CCAA cobre más que el del Gobierno, aunque ganas no le falten a más de uno."
    ],
    "correcta": 1,
    "explicacion": "¡Privilegios! No pueden implicar privilegios. El 138.2 es el 'todos somos iguales ante Hacienda'. A ver si te entra en la cabeza."
  },
  {
    "id": 29,
    "tema": "Verde Ácido",
    "titulo": "La Competencia del Cuñado",
    "pregunta": "Entre las miles de cosas que pueden trincar las CCAA según el art. 148, hay una que le encanta a tu cuñado el del pueblo para los domingos. ¿Cuál de estas?",
    "opciones": [
      "La exploración espacial, para lanzar un satélite con la bandera de la comunidad y ver si hay vida en Móstoles.",
      "El control del espacio aéreo, para decidir por dónde pasan los aviones y cobrarles un peaje como si fuera la autopista.",
      "La caza y la pesca fluvial, para poder regular hasta el tamaño de las truchas que se pescan en el río."
    ],
    "correcta": 2,
    "explicacion": "Caza y pesca, no hay más. El 148.1.11ª es el artículo favorito de los domingueros. Lo del satélite de Móstoles me lo guardo para una novela, eso sí."
  },
  {
    "id": 30,
    "tema": "Verde Ácido",
    "titulo": "El 'Estate Quieto' del Estado",
    "pregunta": "Si las CCAA se ponen a legislar cada una a su bola y montan un pifostio que no hay quien lo entienda, ¿qué puede hacer el Estado para poner orden y que todos canten la misma canción (art. 150)?",
    "opciones": [
      "Dictar leyes de armonización, que es el 'estate quieto' del Estado cuando el interés general está en juego.",
      "Mandar a la Guardia Civil a poner orden en los parlamentos autonómicos, a lo Tejero pero en plan sutil.",
      "Publicar un tuit con el hashtag #AsíNo, a ver si la presión de las redes sociales hace efecto en los políticos."
    ],
    "correcta": 0,
    "explicacion": "Leyes de armonización, genio. El 150.3 es el recurso del padre desesperado. Si es que cuando se ponen... ¡hay que leer más, leñe!"
  },
  {
    "id": 31,
    "tema": "Naranja",
    "titulo": "Art. 68 - La chapuza inicial",
    "pregunta": "Te has dejado el DNI sin poner en la solicitud, campeón. ¿Qué hace la Administración, que está hasta el moño de gente como tú?",
    "opciones": [
      "Te da 10 días para que espabiles y lo arregles, pero como no lo hagas, te manda a freír espárragos y archiva tu chapuza.",
      "Te declara persona non grata y archiva el expediente al momento. Por torpe. No tienen tiempo para tonterías.",
      "Te llama por teléfono para cantarte las cuarenta y te da un mes para que recapacites, y de paso, aportes el DNI."
    ],
    "correcta": 0,
    "explicacion": "Exacto, 10 diítas de misericordia. Si ni con esas... en fin, ¿qué vamos a hacer contigo? A la próxima adjunta un post-it, anda."
  },
  {
    "id": 32,
    "tema": "Naranja",
    "titulo": "Art. 98 - La excavadora",
    "pregunta": "El Ayuntamiento ha decidido que tu terraza ilegal molesta y tiene que desaparecer. ¿Desde cuándo te pueden mandar la excavadora?",
    "opciones": [
      "Cuando a ti te venga bien, previa negociación amistosa con el concejal de urbanismo. Faltaría más.",
      "Desde que te lo notifican, chaval. Sus actos son ejecutivos de serie, no necesitan tu bendición para empezar la fiesta.",
      "Solo después de que un juez lo vea claro y les dé permiso, que para algo está la separación de poderes."
    ],
    "correcta": 1,
    "explicacion": "¡Bingo! La Administración no pide permiso, lo ejecuta. Así que ve recogiendo los geranios. Espero que no te pillara en pijama."
  },
  {
    "id": 33,
    "tema": "Naranja",
    "titulo": "Art. 24 - El fantasma del sí",
    "pregunta": "Llevas esperando meses a que te contesten una solicitud. La Administración está más callada que en misa. Por regla general, ¿qué significa su silencio?",
    "opciones": [
      "Que te están ignorando con todas sus fuerzas. El que calla, niega. Siempre. Así se quitan de líos.",
      "Que te denuncian por acoso administrativo y te ponen en una lista negra. Por impaciente.",
      "Que el que calla, otorga. Te lo han concedido, ¡enhorabuena! Ahora a ver cómo demuestras ese 'sí' fantasmal."
    ],
    "correcta": 2,
    "explicacion": "Efectivamente, como norma general te han dicho que sí, aunque sea con la boca pequeña (o cerrada). Disfruta de tu victoria silenciosa."
  },
  {
    "id": 34,
    "tema": "Naranja",
    "titulo": "Art. 22 - Pausa para el café",
    "pregunta": "La Administración se ha liado con tu expediente y necesita más tiempo. ¿En qué caso pueden poner el cronómetro en pausa para no quedar mal?",
    "opciones": [
      "Cuando necesiten un informe de la NASA o de otro país de la UE, que eso tarda lo suyo. Mientras, a esperar.",
      "Cuando al funcionario le entre la 'perritis' aguda y decida que tu expediente puede esperar al próximo eclipse solar.",
      "Siempre que quieran, solo tienen que publicar un tuit con el hashtag #PausaAdministrativa. Faltaría más."
    ],
    "correcta": 0,
    "explicacion": "¡Correcto! Si tienen que pedir papeles a Bruselas o a Marte, el tiempo se para. Tu gozo en un pozo, pero es legal."
  },
  {
    "id": 35,
    "tema": "Naranja",
    "titulo": "Art. 41 - El kit de supervivencia",
    "pregunta": "Te llega a casa una notificación del Catastro. Para que sea legal y no un simple 'saluda' del funcionario, ¿qué es impepinable que contenga?",
    "opciones": [
      "Un cupón de descuento para la próxima multa y los buenos días del Subdirector General. La cortesía ante todo.",
      "El texto íntegro, si el acto es definitivo o no, y los recursos que puedes montar si no te gusta un pelo. El kit de supervivencia legal, vamos.",
      "Solo la decisión final. Para qué más detalles, si lo que importa es el palo. Lo demás ya lo buscarás tú en el BOE."
    ],
    "correcta": 1,
    "explicacion": "Ahí le has dado. Tienen que darte el pack completo: el 'qué', el 'y ahora qué' y el 'cómo te quejas'. Si no, es papel mojado."
  },
  {
    "id": 36,
    "tema": "Naranja",
    "titulo": "Art. 24 - El portazo silencioso",
    "pregunta": "A veces, el silencio de la Administración no es un 'sí' tímido, sino un portazo en toda la cara. ¿En qué caso su mutismo significa un 'NO' como una catedral?",
    "opciones": [
      "Cuando tu solicitud está escrita con Comic Sans. Hay límites para todo, y el buen gusto es uno de ellos.",
      "Si el funcionario que lo lleva es de un equipo de fútbol rival al tuyo. Las rencillas personales son causa de silencio negativo.",
      "Si has pedido algo que afecta al dominio público, como montar un chiringuito en mitad de la Castellana. Ahí el que calla, te manda a paseo."
    ],
    "correcta": 2,
    "explicacion": "¡Premio! Lo que es de todos no se regala por la cara ni por silencio. Inténtalo con la Gran Vía, a ver qué pasa."
  },
  {
    "id": 37,
    "tema": "Naranja",
    "titulo": "Art. 98 - El freno de mano",
    "pregunta": "Te han notificado una multa que te parece un atraco y la vas a recurrir. ¿Eso frena automáticamente que te la cobren o el 'ansia viva' de Hacienda no tiene límites?",
    "opciones": [
      "Ni de coña es automático. Tienes que pedir la suspensión y cruzar los dedos para que te la den, que si no, la maquinaria sigue.",
      "Claro, con solo recurrir se congela todo. Es el 'efecto Vicks VapoRub' de los recursos, calma y descongestiona la ejecución.",
      "Peor aún, si recurres te aplican un recargo por 'insolente'. La Administración no admite quejas, solo pagos."
    ],
    "correcta": 0,
    "explicacion": "Exacto, por recurrir no se para el mundo. Tienes que pedir la suspensión como si no hubiera un mañana. Si no, a pagar."
  },
  {
    "id": 38,
    "tema": "Naranja",
    "titulo": "Art. 41 - Un canal y basta",
    "pregunta": "Has elegido que te notifiquen por la sede electrónica para hacerte el moderno. ¿Puede la Administración, en un ataque de nostalgia, mandarte también la carta en papel?",
    "opciones": [
      "Sí, están obligados a usar todos los canales posibles. Te mandan mail, carta, un burofax y un pregonero al pueblo.",
      "No, figura. La notificación se hace por un solo cauce, el que prefieras, que no están para gastar en sellos y en clics a la vez.",
      "Solo si es una mala noticia. Para las buenas usan el mail y para las malas el cartero, que así ven tu cara de susto en directo."
    ],
    "correcta": 1,
    "explicacion": "¡Correctísimo! Se elige un canal y punto, que no es un buffet libre de notificaciones. Ahorro de costes y de marear la perdiz."
  },
  {
    "id": 39,
    "tema": "Naranja",
    "titulo": "Art. 22 - Tu culpa, tu tiempo",
    "pregunta": "La Administración te pide un papel que solo tienes tú, y te haces el sueco durante tres meses. ¿Qué pasa con el plazo que tienen ellos para resolver tu asunto?",
    "opciones": [
      "Sigue corriendo en su contra, y si se les pasa el plazo por tu culpa, tienes silencio positivo. Es el 'truco del almendruco' del opositor pro.",
      "Se anula el procedimiento y te multan por obstrucción a la justicia administrativa. Y con razón, por listo.",
      "Se para el reloj, obviamente. No te van a contar como retraso suyo el tiempo que tú estás en la parra. El crono se congela hasta que aparezcas."
    ],
    "correcta": 2,
    "explicacion": "¡En el clavo! Si el que frena eres tú, el tiempo se para. Faltaría más que encima tuvieran la culpa ellos de tu procrastinación. Espabila."
  },
  {
    "id": 40,
    "tema": "Naranja",
    "titulo": "Art. 68 - La prórroga",
    "pregunta": "Resulta que para arreglar la chapuza de tu solicitud no te bastan los 10 días de gracia. ¿Puedes llorarles para que te den más tiempo o te aguantas?",
    "opciones": [
      "Puedes pedir hasta la mitad más de propina, pero no es automático. El funcionario decidirá si tu drama es digno de una prórroga o si eres un 'cuentista'.",
      "No, los plazos son sagrados. 10 días son 10 días. La Administración no es tu madre para darte más tiempo para hacer los deberes.",
      "Claro, puedes pedir una prórroga indefinida hasta que te sientas 'emocionalmente preparado' para presentar los papeles bien."
    ],
    "correcta": 0,
    "explicacion": "Justo. Te pueden dar un respiro de 5 días extra si se apiadan de ti, pero no te flipes. No es un cheque en blanco para procrastinar."
  },
  {
    "id": 41,
    "tema": "Rojo",
    "titulo": "El superior al rescate",
    "pregunta": "Te han denegado la beca 'Jóvenes Promesas del Procrastinar' y el acto no agota la vía administrativa. ¿Qué haces, aparte de llorar en tu cuarto y culpar al sistema?",
    "opciones": [
      "Le plantas un recurso de alzada al jefe del que te la denegó, que para algo cobra más.",
      "Vas con un recurso de reposición ante el mismo que te ha fastidiado, a ver si por pena recapacita.",
      "Te vas directo al Contencioso-Administrativo, que tienes prisa y los jueces seguro que te entienden mejor."
    ],
    "correcta": 0,
    "explicacion": "Exacto, genio. Si no agota vía, toca molestar al de arriba con una alzada (Art. 121). El de reposición es para cuando ya has llegado al final del camino."
  },
  {
    "id": 42,
    "tema": "Rojo",
    "titulo": "La última bala (opcional)",
    "pregunta": "El Ministro de Asuntos Irrelevantes te multa por llevar calcetines con sandalias, y su resolución pone fin a la vía administrativa. ¿Qué recurso 'potestativo' puedes interponer antes de ir a los tribunales a defender tu honor estilístico?",
    "opciones": [
      "Un recurso de alzada al Presidente del Gobierno, porque esto es claramente un asunto de Estado.",
      "Un recurso de reposición ante el mismo Ministro, por si ese día se le cruzaron los cables y ahora se arrepiente.",
      "Un recurso extraordinario de revisión, porque obviamente ha habido un error garrafal en la apreciación de la moda."
    ],
    "correcta": 1,
    "explicacion": "Bingo. El de reposición (Art. 123) es el '¿estás seguro de lo que has hecho?' que le plantas al mismo órgano que finiquitó la vía. Potestativo, claro, no es obligatorio aguantarle la chapa otra vez."
  },
  {
    "id": 43,
    "tema": "Rojo",
    "titulo": "No te pases de listo",
    "pregunta": "Eres el funcionario que redactó un acto y la liaste parda con un defecto de forma. Meses después, el acto te afecta a ti y quieres recurrirlo. ¿Puedes alegar ese mismo defecto que tú causaste para que lo anulen?",
    "opciones": [
      "Por supuesto, es la jugada maestra. 'Quien la hace, la deshace', como dice el refrán administrativo.",
      "Obvio, tienes información privilegiada. Sería de tontos no usar tu propio error en tu favor.",
      "Nanai. La ley te mira y te dice: 'los vicios no pueden ser alegados por quienes los hubieren causado'. Ajo y agua."
    ],
    "correcta": 2,
    "explicacion": "Pillado. El Art. 114.2 te prohíbe ir de listo. Si tú la lías, no puedes usar tu propia torpeza para tumbar el acto. Te aguantas por torpe."
  },
  {
    "id": 44,
    "tema": "Rojo",
    "titulo": "Prohibido empeorar al personal",
    "pregunta": "Recurres una sanción de 100€ y el órgano que resuelve, que parece que desayunó vinagre, decide que tu recurso es tan malo que te la sube a 200€ por listillo. ¿Esto es legal?",
    "opciones": [
      "Sí, es el 'principio de calentamiento global del expediente', si les cabreas con tu recurso, ardes.",
      "Ni de broma, se llama prohibición de la 'reformatio in peius'. No pueden joderte más la vida por quejarte, ¡faltaría más!",
      "Depende. Si tu recurso estaba escrito en Comic Sans, la ley permite agravar la sanción por atentar contra el buen gusto."
    ],
    "correcta": 1,
    "explicacion": "Pues claro que no, Einstein. El Art. 119 es tu amigo y prohíbe la 'reformatio in peius'. Te quedas como estabas o mejoras, pero a peor no vas por abrir la boca."
  },
  {
    "id": 45,
    "tema": "Rojo",
    "titulo": "Vecinos cotillas y suspensiones",
    "pregunta": "La Administración revisa de oficio un acto que te favorecía. Mientras decide, tu vecino (el que te roba el wifi) podría salir muy perjudicado si se suspende la ejecución. ¿Qué pasa aquí?",
    "opciones": [
      "Se suspende sí o sí, que el vecino se aguante. La vida es dura y el wifi gratis también.",
      "Se necesita una ponderación 'adecuada y suficiente' entre tu beneficio y el perjuicio del tercero. Vamos, que se lo piensan mucho.",
      "Se organiza una pelea de barro entre tú y tu vecino en la plaza del pueblo. El ganador decide."
    ],
    "correcta": 1,
    "explicacion": "Exacto. El Art. 108 exige ponderar los intereses. No se puede suspender a la ligera si jorobas a un tercero, por muy mal que te caiga. Un poco de drama para el procedimiento."
  },
  {
    "id": 46,
    "tema": "Rojo",
    "titulo": "No me cuentes tu vida",
    "pregunta": "En tu recurso pides que te anulen una multa (petición A) y que además te pongan una calle (petición B). La resolución solo se pronuncia sobre la multa. ¿Qué principio se ha saltado a la torera?",
    "opciones": [
      "El principio de 'a lo hecho, pecho', que obliga a aguantarse con lo que decidan y dar las gracias.",
      "El principio de economía procesal, porque ahora tendrás que poner otro recurso para lo de la calle.",
      "El principio de congruencia, que les obliga a decidir sobre todo lo que has pedido, no solo lo que les apetece."
    ],
    "correcta": 2,
    "explicacion": "¡Premio! El Art. 119 exige congruencia. Tienen que mojarse sobre todas las cuestiones que planteas, las que les gusten y las que no. No pueden hacerse los suecos."
  },
  {
    "id": 47,
    "tema": "Rojo",
    "titulo": "La alzada no es para todo",
    "pregunta": "Tu jefe directo, que es un encanto, emite una resolución que te perjudica. Sabes que por encima de él está el Director General. ¿Contra qué tipo de actos de tu jefe procede la alzada?",
    "opciones": [
      "Contra sus resoluciones y actos de trámite, si estos últimos deciden el fondo o te dejan en pelotas.",
      "Solo contra sus resoluciones finales. Los actos de trámite son como el calentamiento, no cuentan.",
      "Contra cualquier cosa que haga, incluyendo cuando te mira mal en la máquina de café o te quita la última galleta."
    ],
    "correcta": 0,
    "explicacion": "¡Eso es! El Art. 121.1 dice que la alzada va contra resoluciones y 'actos de trámite cualificados'. No vale para cualquier tontería, pero casi."
  },
  {
    "id": 48,
    "tema": "Rojo",
    "titulo": "Jefes finales de la Administración",
    "pregunta": "A ver, máquina, ilumínanos. ¿Contra qué actos se interpone el glorioso y potestativo recurso de reposición?",
    "opciones": [
      "Contra los actos que ponen fin a la vía administrativa, como un jefe final de videojuego antes de pasar de pantalla.",
      "Contra cualquier acto que no te guste, incluyendo el color de la pintura de la oficina o el hilo musical.",
      "Solo contra las resoluciones de los recursos de alzada, en un bucle infinito de recursos para volver loca a la gente."
    ],
    "correcta": 0,
    "explicacion": "Ahí le has dado. El de reposición es la última oportunidad 'amistosa' contra los actos que finiquitan la vía administrativa (Art. 123). Después de eso, solo quedan los tribunales."
  },
  {
    "id": 49,
    "tema": "Rojo",
    "titulo": "Las prisas no son buenas consejeras",
    "pregunta": "Has presentado un recurso de reposición porque eres un optimista. Mientras esperas a que resuelvan, ¿puedes ir ya al juzgado a poner el contencioso-administrativo?",
    "opciones": [
      "Claro, a doble o nada. Así metes presión y seguro que te resuelven antes el de reposición por pesao.",
      "Sí, pero solo si avisas por burofax de que vas a hacerlo, para no parecer maleducado y que no se enteren por la prensa.",
      "Quieto parao, ansias. Hasta que no resuelvan tu reposición o pase el plazo para ello, no puedes molestar a los jueces."
    ],
    "correcta": 2,
    "explicacion": "¡Elemental! El Art. 123.2 es cristalino: no se puede interponer el contencioso hasta que te resuelvan la reposición o se la coman con patatas por silencio administrativo. Una cosa o la otra."
  },
  {
    "id": 50,
    "tema": "Rojo",
    "titulo": "El buzón de la Administración",
    "pregunta": "Tienes que presentar un recurso y estás más perdido que un pulpo en un garaje. Según el artículo 114, ¿dónde NO puedes presentarlo ni aunque le llores al funcionario?",
    "opciones": [
      "En cualquier oficina de Correos, como si fuera la carta a los Reyes Magos, que total, la fe es la misma.",
      "En el registro electrónico de la Administración competente, que para algo pagamos la modernización del país.",
      "En el bar de enfrente de la oficina, contándoselo al camarero mientras te tomas un carajillo para coger valor."
    ],
    "correcta": 2,
    "explicacion": "Obvio, ¿no? Aunque el camarero seguramente te dé mejores consejos, legalmente no cuenta. El Art. 114 y el 16 te dan muchas opciones, pero el bar Manolo no es una de ellas."
  }
];
