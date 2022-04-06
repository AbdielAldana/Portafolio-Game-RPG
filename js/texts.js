
let typed = undefined;
var textoNPC1var = undefined
var nextTextId = ""

function onText(textLine) {
	var id = '#textoNPC' + textLine.split("a")[1];
	setTimeout(() => {
		textoNPC1var = new Typed(id, {
			strings: [''],
			typeSpeed: 0,
			backSpeed: 0,
			fadeOut: true,
			cursorChar: '',
			contentType: 'html',
			onBegin: function(pos, self) { textActivate = true },
			onComplete: function(pos, self) { textActivate = false },
			onTypingPaused: function(pos, self) { textActivate = false },
			onDestroy: function(self) { textActivate = false },
			onTypingResumed: function(pos, self) {textActivate = true },

			// stop()
		});

		// =========================================
		// Texto 1
		nextTextId = textLine
		// Alberto
		if (textLine === "a1") {
			let text = 'Bienvenido Aventurero! Te estaba esperando... ^1000 Tu deber en este mundo es invocar al ser que ha creado este universo.'
			let text1 = '</br></br><a class="buttonCloseText"  onClick="nextText()" ><span style="color:#C1D00A;"> > </span> Seguir Escuchando </a>'
			let text2 = '</br><a class="buttonCloseText" onClick="closeModalText()" ><span style="color:#C1D00A;"> > </span> No quieres y prefieres el PDF</a>'
			resetTyped(id, [text + text1 + text2])
		}
		// Alexandra
		if (textLine === "a2") {
			let t1 = 'Se rumora que el ser creador solo tardo 15 dias en tener los simientos de lo que vemos en estos momentos'
			let t2 = '</br></br><a class="buttonCloseText" onClick="nextText()" ><span style="color:#C1D00A;"> > </span> Poner cara de duda</a>'
			let t3= '</br><a class="buttonCloseText" onClick="closeModalText()" ><span style="color:#C1D00A;"> > </span> Fingir demencia y retirarse</a>'
			resetTyped(id, [t1+t2+t3])
		}
		// David
		if (textLine === "a3") {
			let t1 = 'Dicen por todas partes que solo le tomo 6 horas el crearnos... ^500 Yo tengo mis dudas al respecto, pienso que tardo mas. ^1000 Nadie puede crear un planeta en tan poco tiempo'
			let t2 = '</br></br><a class="buttonCloseText" onClick="closeModalText()" ><span style="color:#C1D00A;"> > </span> Retirarte cautelosamente</a>'
			resetTyped(id, [t1+t2])
		}
		// Eduardo
		if (textLine === "a4") {
			let t1 = 'Veo que andas de curioso y explorando. ^1000 Ten cuidado, no sabemos que poder tienen estos objetos. Puede ser peligroso'
			let t2 = '</br></br><a class="buttonCloseText" onClick="nextText()" ><span style="color:#C1D00A;"> > </span> Preguntar porque es peligroso</a>'
			let t3= '</br><a class="buttonCloseText" onClick="closeModalText()" ><span style="color:#C1D00A;"> > </span> Ignorar (Te vale)</a>'
			resetTyped(id, [t1+t2+t3])
		}
	}, 500);
}

function offText() {
	textoNPC1var.destroy();
}

// =========================================
// Texto 2
function nextText() {
	offText()
	setTimeout(() => {
		var id = '#textoNPC' + nextTextId.split("a")[1];
		// Alberto
		if(nextTextId === "a1"){
			let text = 'Explora sin miedo, en alguna parte de todos estos objetos se encuentra la clave. ^500 Junta las pistas e INVOCALO!!!'
			let text1 = '</br></br><a class="buttonCloseText"  onClick="closeModalText()" ><span style="color:#C1D00A;"> > </span> Aceptar Entusiasmado </a>'
			let text2 = '</br><a class="buttonCloseText" onClick="closeModalText()" ><span style="color:#C1D00A;"> > </span> No Gracias, Donde esta mi PDF?</a>'
			resetTyped(id, [text + text1 + text2])
		}
		// Alexandra
		if(nextTextId === "a2"){
			let text = 'No me crees?! ^1000 Se dice que dejo su puesto entre los Dioses y por vagancia creo este universo. ^1000 Lo se, es algo loco.'
			let text1 = '</br></br><a class="buttonCloseText"  onClick="nextText2()" ><span style="color:#C1D00A;"> > </span> Seguir con cara de baboso </a>'
			let text2 = '</br><a class="buttonCloseText" onClick="closeModalText()" ><span style="color:#C1D00A;"> > </span> Ignorar a La Loca</a>'
			resetTyped(id, [text + text1 + text2])
		}
		if(nextTextId === "a4"){
			let text = 'Se dice que tienen informacion fuera de este mundo. Quizas esta la respuesta al secreto de la vida o solo la receta de un pastel de fresas. ^1000 Pero es mejor vivir en la ignorancia.'
			let text2 = '</br></br><a class="buttonCloseText" onClick="closeModalText()" ><span style="color:#C1D00A;"> > </span> (Caminas lentamente hacia atras y corres)</a>'
			resetTyped(id, [text + text2])
		}
	}, 500);
}

// =========================================
// Texto 3
function nextText2() {
	offText()
	setTimeout(() => {
		var id = '#textoNPC' + nextTextId.split("a")[1];
		// Alexandra
		if(nextTextId === "a2"){
			let text = 'No se, tambien para mi todo esto parece extraño, mejor deja de perder el tiempo y busca como invocarlo'
			let text1 = '</br></br><a class="buttonCloseText"  onClick="closeModalText()" ><span style="color:#C1D00A;"> > </span> Seguir Buscando </a>'
			resetTyped(id, [text + text1])
		}
	}, 500);
}

// let textoNPC1var = undefined;

function resetTyped(id, newTexts) {

	const dataType = newTexts; //

	if (dataType === undefined) {
		return false;
	}
	// const strings = dataType.split(',');

	if (textoNPC1var && textoNPC1var.constructor === Typed) {
		textoNPC1var.destroy();
	}

	textoNPC1var = new Typed(id, {
		strings: dataType,
		typeSpeed: 0,
		backSpeed: 0,
		fadeOut: true,
		cursorChar: '',
		contentType: 'html',
		onBegin: function(pos, self) { textActivate = true },
		onComplete: function(pos, self) { textActivate = false },
		onTypingPaused: function(pos, self) { textActivate = false },
		onDestroy: function(self) { textActivate = false },
		onTypingResumed: function(pos, self) {textActivate = true },

		//   onComplete: (self) => {alert("ugh")},
	});

}