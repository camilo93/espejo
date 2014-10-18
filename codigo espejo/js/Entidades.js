Espejo = window.Espejo || {}
Espejo.Entidades = function () {

    var textoPlano = ko.observable("");
    var textoEncriptado = ko.observable("");

    return {

        getTextoPlano: function () {
            return textoPlano();
        },

        getTextoEncriptado: function () {
            return textoEncriptado();
        },

    }

}