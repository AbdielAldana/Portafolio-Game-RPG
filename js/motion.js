// Mecanica De Movimiento Con Teclado "wasd"

//Sirve para que la pocision de inicio no quede en 0,0
let validateFirstStep = false

let coord;

setInterval(() => {
    if(!modalOpen && statusTimeMove){
        $(document).keydown(function (e) {
            validateFirstStep = true
            d[e.which] = true

        })
        $(document).keyup(function (e) {
            d[e.which] = false
            $('#imgCharacter').removeClass('')
            $('#imgCharacter').addClass('imgCharacter')
        })

        if(!d['87'] && !d['65'] && !d['83'] && !d['68']){
            statusTimeMove = false
        }
        if (validateFirstStep) {
            box.css({
                left: function (i, v) {
                    return newh(v, 65, 68) + "px"
                },
                top: function (i, v) {
                    return newv(v, 87, 83) + "px"
                }
            })
        }

        // wh = (64 * (totalTilesWidth - (orillasWidth * 2))) - box.width()
        // wv = (64 * (totalTilesHeight - 2)) - box.height()
        wh = (64 * (totalTilesWidth)) - box.width()
        wv = (64 * (totalTilesHeight)) - box.height()


        var w = d['87'],
            a = d['65'],
            s = d['83'],
            x = d['68']
        changeFrame(w, a, s, x)
    }


    if(!modalOpen && statusTimeMove){
        var personaje = $('#box')
        var a_pos_Control = {
            t: personaje.position().top,
            l: personaje.position().left,
            r: personaje.position().left + personaje.width(),
            b: personaje.position().top + personaje.height()
        }
        var a_pos_Build = {
            t: personaje.position().top + 16,
            l: personaje.position().left + 16,
            r: personaje.position().left + personaje.width() - 16,
            b: personaje.position().top + personaje.height() - 16
        }
        var a_pos_Character = {
            t: personaje.position().top + 42,
            l: personaje.position().left + 42,
            r: personaje.position().left + personaje.width() - 42,
            b: personaje.position().top + personaje.height() - 42
        }
        var a_pos_Tree = {
            t: personaje.position().top,
            l: personaje.position().left + 42,
            r: personaje.position().left + personaje.width() - 42,
            b: personaje.position().top + personaje.height()
        }
        var elementosEntorno = [...$('.elementoFloat')]

        var colisionItem = true

        elementosEntorno.forEach(element => {
            if(colisionItem){
                var elementoEnUso = $(".elementoFloat[tipo='" + element.getAttribute('tipo') + "']")
                var b_pos = {
                    t: elementoEnUso.position().top+16,
                    l: elementoEnUso.position().left+16,
                    r: elementoEnUso.position().left + elementoEnUso.width()-16,
                    b: elementoEnUso.position().top + elementoEnUso.height()-16
                }
                if (a_pos_Character.l <= b_pos.r && a_pos_Character.r >= b_pos.l && a_pos_Character.b >= b_pos.t && a_pos_Character.t <= b_pos.b) {
                    if (elementoEnUso.attr("colision") === "npc") {
                        colisionItem = false
                        box.css({
                            left: function (i, v) {
                                return newh1(v, 65, 68)
                            },
                            top: function (i, v) {
                                return newv1(v, 87, 83)
                            }
                        })
                    }
                }
                if (a_pos_Build.b < b_pos.b) {
                    a_pos_Tree.b = a_pos_Control.b - 80
                    a_pos_Tree.t = a_pos_Control.t
                } else {
                    a_pos_Tree.b = a_pos_Control.b
                    a_pos_Tree.t = a_pos_Control.t + 64
                }
                if (a_pos_Tree.l <= b_pos.r && a_pos_Tree.r >= b_pos.l && a_pos_Tree.b >= b_pos.t && a_pos_Tree.t <= b_pos.b) {
                    if (elementoEnUso.attr("colision") === "tree") {
                        colisionItem = false
                        box.css({
                            left: function (i, v) {
                                return newh1(v, 65, 68)
                            },
                            top: function (i, v) {
                                return newv1(v, 87, 83)
                            }
                        })
                    }
                }
                if (a_pos_Build.l <= b_pos.r && a_pos_Build.r >= b_pos.l && a_pos_Build.b >= b_pos.t && a_pos_Build.t <= b_pos.b) {
                    if (elementoEnUso.attr("colision") === "build") {
                        colisionItem = false
                        box.css({
                            left: function (i, v) {
                                return newh1(v, 65, 68) + "px"
                            },
                            top: function (i, v) {
                                return newv1(v, 87, 83) + "px"
                            }
                        })
                    }
                }
            }
        })
    }

    // DetectColitionForMessageandProfundidad()
}, timeMove)

function newh(v, a, b) {
    var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0)
    return n < 0 ? 0 : n > wh ? wh : n
}

function newv(v, a, b) {
    var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0)
    return n < 0 ? 0 : n > wv ? wv : n
}

function newh1(v, a, b) {
    var n = parseInt(v, 10) - (d[b] ? x : 0) + (d[a] ? x : 0)
    return n < 0 ? 0 : n > wh ? wh : n
}

function newv1(v, a, b) {
    var n = parseInt(v, 10) - (d[b] ? x : 0) + (d[a] ? x : 0)
    return n < 0 ? 0 : n+x > wv ? wv-x : n
}

// ------------------------------------------------------------------
// Animacion del movimiento del personaje
function changeFrame(w, a, s, x) {
    // 210406
    var time = 100
    if (s) {
        $('#imgCharacter').removeClass('imgCharacter4')
        $('#imgCharacter').removeClass('imgCharacter5')
        $('#imgCharacter').removeClass('imgCharacter6')
        $('#imgCharacter').removeClass('imgCharacter7')
        $('#imgCharacter').removeClass('imgCharacter8')
        $('#imgCharacter').removeClass('imgCharacter9')
        $('#imgCharacter').removeClass('imgCharacter10')
        $('#imgCharacter').removeClass('imgCharacter11')
        $('#imgCharacter').removeClass('imgCharacter12')
        if (step === 0) {
            $('#imgCharacter').removeClass('imgCharacter3')
            $('#imgCharacter').addClass('imgCharacter')
            setTimeout(() => {
                step = 1
            }, time)
        } else if (step === 1) {
            $('#imgCharacter').removeClass('imgCharacter')
            $('#imgCharacter').addClass('imgCharacter2')
            setTimeout(() => {
                step = 2
            }, time)
        } else if (step === 2) {
            $('#imgCharacter').removeClass('imgCharacter2')
            $('#imgCharacter').addClass('imgCharacter3')
            setTimeout(() => {
                step = 0
            }, time)
        }
    } else if (w) {
        $('#imgCharacter').removeClass('imgCharacter4')
        $('#imgCharacter').removeClass('imgCharacter5')
        $('#imgCharacter').removeClass('imgCharacter6')
        $('#imgCharacter').removeClass('imgCharacter7')
        $('#imgCharacter').removeClass('imgCharacter8')
        $('#imgCharacter').removeClass('imgCharacter9')
        $('#imgCharacter').removeClass('imgCharacter1')
        $('#imgCharacter').removeClass('imgCharacter2')
        $('#imgCharacter').removeClass('imgCharacter3')
        if (step === 0) {
            $('#imgCharacter').removeClass('imgCharacter12')
            $('#imgCharacter').addClass('imgCharacter10')
            setTimeout(() => {
                step = 1
            }, time)
        } else if (step === 1) {
            $('#imgCharacter').removeClass('imgCharacter10')
            $('#imgCharacter').addClass('imgCharacter11')
            setTimeout(() => {
                step = 2
            }, time)
        } else if (step === 2) {
            $('#imgCharacter').removeClass('imgCharacter11')
            $('#imgCharacter').addClass('imgCharacter12')
            setTimeout(() => {
                step = 0
            }, time)
        }
    } else if (a) {
        $('#imgCharacter').removeClass('imgCharacter1')
        $('#imgCharacter').removeClass('imgCharacter2')
        $('#imgCharacter').removeClass('imgCharacter3')
        $('#imgCharacter').removeClass('imgCharacter7')
        $('#imgCharacter').removeClass('imgCharacter8')
        $('#imgCharacter').removeClass('imgCharacter9')
        $('#imgCharacter').removeClass('imgCharacter10')
        $('#imgCharacter').removeClass('imgCharacter11')
        $('#imgCharacter').removeClass('imgCharacter12')
        if (step === 0) {
            $('#imgCharacter').removeClass('imgCharacter6')
            $('#imgCharacter').addClass('imgCharacter4')
            setTimeout(() => {
                step = 1
            }, time)
        } else if (step === 1) {
            $('#imgCharacter').removeClass('imgCharacter4')
            $('#imgCharacter').addClass('imgCharacter5')
            setTimeout(() => {
                step = 2
            }, time)
        } else if (step === 2) {
            $('#imgCharacter').removeClass('imgCharacter5')
            $('#imgCharacter').addClass('imgCharacter6')
            setTimeout(() => {
                step = 0
            }, time)
        }
    } else if (x) {
        $('#imgCharacter').removeClass('imgCharacter4')
        $('#imgCharacter').removeClass('imgCharacter5')
        $('#imgCharacter').removeClass('imgCharacter6')
        $('#imgCharacter').removeClass('imgCharacter1')
        $('#imgCharacter').removeClass('imgCharacter2')
        $('#imgCharacter').removeClass('imgCharacter3')
        $('#imgCharacter').removeClass('imgCharacter10')
        $('#imgCharacter').removeClass('imgCharacter11')
        $('#imgCharacter').removeClass('imgCharacter12')
        if (step === 0) {
            $('#imgCharacter').removeClass('imgCharacter9')
            $('#imgCharacter').addClass('imgCharacter7')
            setTimeout(() => {
                step = 1
            }, time)
        } else if (step === 1) {
            $('#imgCharacter').removeClass('imgCharacter7')
            $('#imgCharacter').addClass('imgCharacter8')
            setTimeout(() => {
                step = 2
            }, time)
        } else if (step === 2) {
            $('#imgCharacter').removeClass('imgCharacter8')
            $('#imgCharacter').addClass('imgCharacter9')
            setTimeout(() => {
                step = 0
            }, time)
        }
    }
}