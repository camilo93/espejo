Espejo = window.Espejo || {}
Espejo.ManipularInterfaz = function () {


    var textoPlano = ko.observable("");
    var miEspejo = window.Espejo.Funcionalidad();

   encriptar = function () {
        miEspejo.recorrer(textoPlano);
    }

   return {
       encriptar: encriptar
   }

}
