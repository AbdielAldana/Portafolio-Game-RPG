var modal = ''

// ------------------------------------------------------------------
// Estado inicial de los modals / Cookies por igual
$(document).ready(function () {
    // var instrucciones = document.cookie.replace(/(?:(?:^|.*;\s*)instrucciones\s*\=\s*([^;]*).*$)|^.*$/, '$1')
    // if (instrucciones == 'true') {
    //     $('#instrucciones').removeClass('openModal')
    //     $('#instrucciones').addClass('closeModal')

    //     $('#capa10').removeClass('openModals')
    //     $('#capa10').addClass('closeModals')
    // } else {
    //     modal = 'instrucciones'
    // }
    modal = 'instrucciones'
})

// ------------------------------------------------------------------
// Detecta las teclas para hacionar los objetos
$(document).keydown(function (e) {
    if (e.which === 32) {
        DetectarColision()
        // if(!modalOpen && !d['87'] && !d['65'] && !d['83'] && !d['68']){
        //     DetectarColision2()
        // }
    }
})

// ------------------------------------------------------------------
// Cierra el Modal
$('.buttonClose').click(function () {
    closeModalText()
})

function closeModalText() {
    var currModal = modal
    if($(".npc").hasClass("openModal")){
        offText()
    }

    // $(".modal[rotate]").addClass('animationCloseModalRotate')
    $('#' + currModal).addClass('animationCloseModal')
    $(".modal").addClass('animationCloseModal')

    setTimeout(() => {
        modalOpen = false
        $('#capa10').addClass('closeModals')
        $('#capa10').removeClass('openModals')
        $('#' + currModal).removeClass('openModal')
        $('#' + currModal).addClass('closeModal')
        $('#' + currModal).removeClass('animationCloseModal')
        $(".modal").removeClass('openModal')
        $(".modal").addClass('closeModal')
        // $(".modal[rotate]").removeClass('animationCloseModalRotate')
        $(".modal").removeClass('animationCloseModal')
        document.cookie = 'instrucciones=true;'
        modal = ''
    }, 500);
}

// ------------------------------------------------------------------
// Acciones al accionar un Objeto
function DetectarColision() {
    var personaje = $('#box')
    var a_pos = {
        t: personaje.position().top + 32,
        l: personaje.position().left + 32,
        r: personaje.position().left + personaje.width() - 32,
        b: personaje.position().top + personaje.height() - 32
    }

    var elementosEntorno = [...$('.elementoFloat')]
    elementosEntorno.forEach(element => {
        var elementoEnUso = $(".elementoFloat[tipo='" + element.getAttribute('tipo') + "']")

        var b_pos = {
            t: elementoEnUso.position().top,
            l: elementoEnUso.position().left,
            r: elementoEnUso.position().left + elementoEnUso.width(),
            b: elementoEnUso.position().top + elementoEnUso.height()
        }
        if (a_pos.l <= b_pos.r && a_pos.r >= b_pos.l && a_pos.b >= b_pos.t && a_pos.t <= b_pos.b) { // Detecta si se superponen las áreas
            console.log("toca")
            modal = element.getAttribute('tipo')
            var action = element.getAttribute('action')
            var sound = element.getAttribute('sound')
            var textLine = element.getAttribute("textLine")

            if (sound === "true") {
                if (getCookie('music') === "true") {
                    $('#book-open-sound').trigger('play')
                }
            }

            if (modal === 'portal') {
                let loc = element.getAttribute('location')
                window.location.href = loc + '.html'
            }

            if(action === "true" && !modalOpen) {
                modalOpen = true
                // if(!!$('#' + element.getAttribute('tipo')+"[rotate]"))  {
                //     $('#' + element.getAttribute('tipo')).addClass('openModalRotate')
                // } else {
                //     $('#' + element.getAttribute('tipo')).addClass('openModal')
                // }
                $('#' + element.getAttribute('tipo')).removeClass('closeModal')
                $('#' + element.getAttribute('tipo')).addClass('openModal')
                $('#capa10').removeClass('closeModals')
                $('#capa10').addClass('openModals')

                if(textLine !== null){
                    onText(textLine)
                }
            }

        } else {
            // Puede ir algo
        }
    })
}
// function DetectarColision2() {
//     var personaje = $('.cursorxD')
//     var a_pos = {
//         t: personaje.position().top,
//         l: personaje.position().left,
//         r: personaje.position().left + personaje.width(),
//         b: personaje.position().top + personaje.height()
//     }

//     var elementosEntorno = [...$('.elementoFloat')]
//     elementosEntorno.forEach(element => {
//         var elementoEnUso = $(".elementoFloat[tipo='" + element.getAttribute('tipo') + "']")

//         var b_pos = {
//             t: elementoEnUso.position().top,
//             l: elementoEnUso.position().left,
//             r: elementoEnUso.position().left + elementoEnUso.width(),
//             b: elementoEnUso.position().top + elementoEnUso.height()
//         }
//         if (a_pos.l <= b_pos.r && a_pos.r >= b_pos.l && a_pos.b >= b_pos.t && a_pos.t <= b_pos.b) { // Detecta si se superponen las áreas
//             console.log("toca")
//             modal = element.getAttribute('tipo')
//             var action = element.getAttribute('action')
//             var sound = element.getAttribute('sound')
//             var textLine = element.getAttribute("textLine")

//             if (sound === "true") {
//                 if (getCookie('music') === "true") {
//                     $('#book-open-sound').trigger('play')
//                 }
//             }

//             if (modal === 'portal') {
//                 let loc = element.getAttribute('location')
//                 window.location.href = loc + '.html'
//             }

//             if(action === "true" ) {
//                 modalOpen = true
//                 $('#' + element.getAttribute('tipo')).removeClass('closeModal')
//                 $('#' + element.getAttribute('tipo')).addClass('openModal')
//                 $('#capa10').removeClass('closeModals')
//                 $('#capa10').addClass('openModals')

//                 if(textLine !== null){
//                     onText(textLine)
//                 }
//             }

//         } else {
//             // Puede ir algo
//         }
//     })
// }

// ------------------------------------------------------------------
// Deteccion constante para mostrar etiquetas bajo objetos
setInterval(() => {
    if(!modalOpen && statusTimeMove){
        if(!d['87'] && !d['65'] && !d['83'] && !d['68']){
            statusTimeMove = false
        }
        var personaje = $('#box')
        var a_pos = {
            t: personaje.position().top + 32,
            l: personaje.position().left + 32,
            r: personaje.position().left + personaje.width() - 32,
            b: personaje.position().top + personaje.height() -32
        }


        var elementosEntorno = [...$('.elementoFloat')]
        elementosEntorno.forEach(element => {
            var elementoEnUso = $(".elementoFloat[tipo='" + element.getAttribute('tipo') + "']")
            var b_pos = {
                t: elementoEnUso.position().top,
                l: elementoEnUso.position().left,
                r: elementoEnUso.position().left + elementoEnUso.width(),
                b: elementoEnUso.position().top + elementoEnUso.height()
            }
            var elementText = $('.texto[texto=' + element.getAttribute('tipo') + ']')
            // Textos sobre el objeto
            if (a_pos.l <= b_pos.r && a_pos.r >= b_pos.l && a_pos.b >= b_pos.t && a_pos.t <= b_pos.b) { // Detecta si se superponen las áreas
                var action = element.getAttribute('action')
                if(action === "true"){
                    elementoEnUso.css("filter", "drop-shadow(0px 0px 3px yellow)")
                    elementText.css('z-index', 12)
                    elementText.css('top', a_pos.t - 64)
                    elementText.css('left', (a_pos.l) - elementText.width() / 2 + ((a_pos.r - a_pos.l) / 2) + 'px')
                    elementText.removeClass('hideTextBox')
                    elementText.addClass('showTextBox')
                }
            } else {
                elementoEnUso.css("filter", "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))")
                elementText.addClass('hideTextBox')
                elementText.removeClass('showTextBox')
            }

            // Profundidad
            if (elementoEnUso.attr("profundidad") === "true") {
                if (a_pos.b+32 < b_pos.b) {
                    elementoEnUso.css("z-index", "11")
                } else {
                    elementoEnUso.css("z-index", "9")
                }
            }

        })
    }
}, timeMove);

// setInterval(() => {
//     if(!modalOpen && !d['87'] && !d['65'] && !d['83'] && !d['68']){
//         if(!d['87'] && !d['65'] && !d['83'] && !d['68']){
//             statusTimeMove = false
//         }
//         var personaje = $('.cursorxD')
//         var a_pos = {
//             t: personaje.position().top,
//             l: personaje.position().left,
//             r: personaje.position().left + personaje.width(),
//             b: personaje.position().top + personaje.height()
//         }


//         var elementosEntorno = [...$('.elementoFloat')]
//         elementosEntorno.forEach(element => {
//             var elementoEnUso = $(".elementoFloat[tipo='" + element.getAttribute('tipo') + "']")
//             var b_pos = {
//                 t: elementoEnUso.position().top,
//                 l: elementoEnUso.position().left,
//                 r: elementoEnUso.position().left + elementoEnUso.width(),
//                 b: elementoEnUso.position().top + elementoEnUso.height()
//             }
//             var elementText = $('.texto[texto=' + element.getAttribute('tipo') + ']')
//             // Textos sobre el objeto
//             if (a_pos.l <= b_pos.r && a_pos.r >= b_pos.l && a_pos.b >= b_pos.t && a_pos.t <= b_pos.b) { // Detecta si se superponen las áreas
//                 var action = element.getAttribute('action')
//                 if(action === "true"){
//                     elementoEnUso.css("filter", "drop-shadow(0px 0px 3px yellow)")
//                     elementText.css('z-index', 12)
//                     elementText.css('top', a_pos.t - 64)
//                     elementText.css('left', (a_pos.l) - elementText.width() / 2 + ((a_pos.r - a_pos.l) / 2) + 'px')
//                     elementText.removeClass('hideTextBox')
//                     elementText.addClass('showTextBox')
//                 }
//             } else {
//                 elementoEnUso.css("filter", "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))")
//                 elementText.addClass('hideTextBox')
//                 elementText.removeClass('showTextBox')
//             }

//             // Profundidad
//             if (elementoEnUso.attr("profundidad") === "true") {
//                 if (a_pos.b+32 < b_pos.b) {
//                     elementoEnUso.css("z-index", "11")
//                 } else {
//                     elementoEnUso.css("z-index", "9")
//                 }
//             }

//         })
//     }
// }, timeMove);
