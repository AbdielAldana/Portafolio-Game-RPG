// ------------------------------------------------------------------
// Setea el comportamiento de los SVG
$(document).ready(function () {
    document.querySelectorAll('.golemBook').forEach(function (img) {
        var imgID = img.id;
        var imgElement = img.getAttribute("element");
        var imgPlus = img.getAttribute("plus");
        var imgClass = img.className;
        var imgURL = img.src;

        fetch(imgURL).then(function (response) {
            return response.text();
        }).then(function (text) {

            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(text, "text/xml");

            // Get the SVG tag, ignore the rest
            var svg = xmlDoc.getElementsByTagName('svg')[0];

            // Add replaced image's ID to the new SVG
            // if(typeof imgID !== 'undefined') {

            // }
            // Add replaced image's classes to the new SVG
            // if(typeof imgClass !== 'undefined') {
            //     svg.setAttribute('class', imgClass+' replaced-svg');
            // }


            // Remove any invalid XML tags as per http://validator.w3.org
            svg.removeAttribute('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if (!svg.getAttribute('viewBox') && svg.getAttribute('height') && svg.getAttribute('width')) {
                svg.setAttribute('viewBox', '0 0 ' + svg.getAttribute('height') + ' ' + svg.getAttribute('width'))
            }



            if (imgElement === "normal") {
                svg.setAttribute("id", "normal")
            }
            if (imgElement === "agua") {
                svg.setAttribute("id", "agua")
            }
            if (imgElement === "electrico") {
                svg.setAttribute("id", "electrico")
            }
            if (imgPlus === "p_fuego") {
                svg.setAttribute('class', 'p_fuego');
            } else if (imgPlus === "p_agua") {
                svg.setAttribute('class', 'p_agua');
            } else if (imgPlus === "p_planta") {
                svg.setAttribute('class', 'p_planta');
            }

            // svg.setAttribute('id', imgID+ ' ' +imgPlus);

            // Replace image with new SVG
            img.parentNode.replaceChild(svg, img);

        });

    });
})