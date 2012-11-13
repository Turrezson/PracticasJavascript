$(function () {
    $("#ejemploTabs").tabs().tabs({
        fx: {
            opacity: "toggle",
            duration:"slow"
        },
        collapsible: true
    });
    $("#acordeon").accordion().accordion({event:"mouseover"});

    $("#miDialogo").dialog({ autoOpen: false });
    $("#rojo, #verde, #azul").slider({
        min: 0,
        max: 255,
        step: 1,
        change: cambiaMarcador
    });

    $("#fecha").datepicker({
        appendText: "mm/dd/aa",
        minDate: new Date(),
        changeMonth: true,
        showButtonPanel: true
    });
    $("#autocompletador").autocomplete({
        source: ["c++","java","php","coldfusion","javascript","asp","ruby"]
    });

    var listaPalabras = ["c++", "java", "php", "coldfusion", "javascript", "asp", "ruby"]

    $("#autocompleta2").autocomplete({
        source: function (peticion, respuesta) {
            var coincide = new RegExp("^" + $.ui.autocomplete.escapeRegex(peticion.term), "i");
            respuesta($.grep(listaPalabras, function (item) {
                return coincide.test(item);
            }));
        }
    });

    $("#radio").buttonset();

    $("#progreso").progressbar({
        value: 66
    });
});

function cambiaMarcador() {
    jQuery(function () {

        $("#deslizador").text(
            $("#miDeslizador").slider("value")
            );
        var rojo = $("#rojo").slider("value");
        var azul = $("#azul").slider("value");
        var verde = $("#verde").slider("value");
        var cadenaRGB = ["rgb(", rojo, ",", verde, ",", azul, ")"].join("");
        $("#cajaColor").css({
            backgroundColor: cadenaRGB
        });
        $("#deslizador").text(cadenaRGB);
        $("#progreso").progressbar({
            value: rojo
        });
    });
}

function muestraDialogo() {
    jQuery(function () {
        $("#miDialogo").dialog({
            autoOpen: true,
            maxHeight: 200,
            maxWidth: 500,
            resizable: false,
            draggable: false,
            closeOnEscape: false,
            modal: true,
            buttons: {
                Ok: function () { $(this).dialog("close");}
            }
        });
    });
}

function deshabilita(numeroTab) {
    jQuery(function () {
        $("#ejemploTabs").tabs({disabled:[numeroTab, numeroTab+1]});
    });
}

function ponTab() {
    jQuery(function () {
        $("#ejemploTabs").tabs("add", "", "un nuevo tab");
    });
}

function quitaTab() {
    jQuery(function () {
        $("#ejemploTabs").tabs("remove", "", "un nuevo tab");
    });
}
