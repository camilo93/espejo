$(document).ready(function(){

    var miEspejo = window.Espejo.Funcionalidad();

    $("#encriptar").click(function () {
        
        textoPlano= $("#textoPlano").val().toLowerCase();        
        tEcrip = miEspejo.recorrer(textoPlano);
        alert(tEcrip);
        $("#textoEncriptado").text(tEcrip);
        miEspejo.borrarTexto();
    })  

})