$(document).ready(function () {
    changesDimensions()
})

$(window).resize(function () {
    changesDimensions()
})

function isOdd(num) {
    return num % 2
}

// ------------------------------------------------------------------
// Detecta el Cambio de Dimenciones
function changesDimensions() {
    $('.boxLoader').removeClass('exitLoader')
    windowHeight = $('#target').height()
    windowWidth = $('#target').width()

    // if(windowWidth < 1400 || windowHeight < 700){
    //     $('#target').css("display", "none")
    // }else{
    //     $('#target').css("display", "block")
    // }

    // if (windowWidth < 1100 && windowWidth > 770) {
    //     orillasWidth = 2
    //     x = 10
    // } else if (windowWidth < 770) {
    //     orillasWidth = 1
    //     x = 7
    // } else {
    // }

    var width = 1600;
    var height = 900;
    var windowWidth1 = $(window).width();
    var windowHeight1 = $(window).height();
    var r = 1;
    r = Math.min(windowWidth1 / width, windowHeight1 / height)
    document.getElementById("resize").style.zoom= 100 *(r)+ "%";

    // console.log(((windowWidth1 * windowHeight1)/100)/10000)
    // if(windowWidth1 > windowHeight1){
    //     var xdxd = 0
    //     $('#resize').css("padding-left",  xdxd +"%"     )
    //     $('#resize').css("padding-top", "0px")
    // } else {
    //     $('#resize').css("padding-left", "0px")
    //     $('#resize').css("padding-top", (windowHeight1 * (windowHeight1 / height)) / (50*r)+"%")
    // }


    var scalWidth = $(window).width()
    var scalHeight = $(window).height()


    if(scalWidth > scalHeight) {
        $("#resize").removeClass("scalableW")
        $("#resize").addClass("scalableH")
    }
    else if(scalWidth < scalHeight) {
        $("#resize").removeClass("scalableH")
        $("#resize").addClass("scalableW")
    }

    $(".entorno").css("width", "1600px")
    $(".entorno").css("height", "768px")

    totalTilesHeight = Math.ceil($('#target').height() / 64)
    totalTilesWidth = Math.ceil($('#target').width() / 64)

    // $('.setCapa2').css('top', 64 + 'px')
    // $('.setCapa2').css('margin-left', 64 * orillasWidth + 'px')
    // $('.setCapa2').css('width', (64 * (totalTilesWidth - (orillasWidth * 2))) + 'px')
    // $('.setCapa2').css('height', (64 * (totalTilesHeight - 2)) + 'px')
    

    // setCapa0(totalTilesHeight, totalTilesWidth)
    // setCapa1(totalTilesHeight, totalTilesWidth)
    positionCharacter(totalTilesHeight, totalTilesWidth)

    setTimeout(() => {
        $('.boxLoader').addClass('exitLoader')
    }, 500)

    // box.css("top", "540")
    // box.css("left", "140")

}

// ------------------------------------------------------------------
// Setea el Fondo del suelo
function setCapa0(h, w) {
    var x = ''
    var flex = '<div class="flex">'
    var divEnd = '</div>'
    var tile = '<div class="clip"><img class="pasto" src="img/RPG Nature Tilesetx64.png" alt="" srcset=""></div>'
    for (let tileY = 0; tileY < h; tileY++) {
        x = x + flex
        for (let tileX = 0; tileX < w; tileX++) {
            x = x + '<div class="clip" coorx="' + (tileX + 1) + '" coory="' + (tileY + 1) + '"><img class="pasto" src="img/RPG Nature Tilesetx64.png" alt="" srcset=""></div>'
        }
        x = x + divEnd
    }
    $('#capa0').html(x)
}

// ------------------------------------------------------------------
// Setea el margen con imagenes.
function setCapa1(h, w) {
    var x = ''
    var flex = '<div class="flex">'
    var divEnd = '</div>'

    var arbolUp = '<div class="clip"><img class="arbolUp" src="img/RPG Nature Tilesetx64.png" alt="" srcset=""></div>'
    var arbolDown = '<div class="clip"><img class="arbolDown" src="img/RPG Nature Tilesetx64.png" alt="" srcset=""></div>'
    var tierraDer = '<div class="clip"><img class="tierraDer" src="img/RPG Nature Tilesetx64.png" alt="" srcset=""></div>'
    var tierraIzq = '<div class="clip"><img class="tierraIzq" src="img/RPG Nature Tilesetx64.png" alt="" srcset=""></div>'
    var tierra = '<div class="clip"><img class="tierra" src="img/RPG Nature Tilesetx64.png" alt="" srcset=""></div>'
    var mixArbol = '<div class="clip"><img class="mixArbol" src="img/RPG Nature Tilesetx64.png" alt="" srcset=""></div>'
    var nada = '<div class="clip"><img class="nada" src="img/RPG Nature Tilesetx64.png" alt="" srcset=""></div>'
    for (let tileY = 0; tileY < h; tileY++) {
        x = x + flex
        for (let tileX = 0; tileX < w; tileX++) {
            if (tileX < orillasWidth) {
                x = x + mixArbol
            } else if (tileX >= w - orillasWidth) {
                x = x + mixArbol
            } else if (tileY === 0) {
                x = x + arbolDown
                // } else if (tileY === h - 2) {
                //   x = x + arbolUp
            } else if (tileY === h - 1) {
                x = x + arbolUp
            } else {
                x = x + nada
            }
        }
        x = x + divEnd
    }
    $('#capa1').html(x)
}

// ------------------------------------------------------------------
// Punto inicial del personaje en pantalla.
function positionCharacter(h, w) {
    var tilesAreaHeightCenter = Math.ceil((h) / 2)
    var tilesAreaWidthCenter = Math.ceil((w) / 2)
    // let elemenent = $(".clip[coorx='" + tilesAreaWidthCenter + "'][coory='" + tilesAreaHeightCenter + "']")
    // var b_pos = {
    //     t: elemenent.parent().position().top,
    //     l: elemenent.position().left,
    //     r: elemenent.position().left + elemenent.width(),
    //     b: elemenent.parent().position().top + elemenent.height()
    // }

    // box.css({
    //   left: (b_pos.l) - box.width() / 2 + ((b_pos.r - b_pos.l) / 2) - (64 * orillasWidth) + 'px',
    //   top: (b_pos.b) - box.width()  - (32) + 'px'
    //   // top: (b_pos.t) - box.width() / 2 + ((b_pos.b - b_pos.t) / 2) - (64) + 'px'
    // })

    // 040994
    box.css({
        left: $('.elementoFloat[inicio=true]') !== undefined ?
            $('.elementoFloat[inicio=true]').position().left-16 :
            $('.elemento[inicio=true]').position().left-16,
        top: $('.elementoFloat[inicio=true]') !== undefined ?
            $('.elementoFloat[inicio=true]').position().top -32:
            $('.elemento[inicio=true]').parent().position().top -32
    })
}