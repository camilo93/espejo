$(document).ready(function(){

    var miVigenere = window.Vigenere.Funcionalidad();

    $("#cifrar").click(function () {
        
        
        miVigenere.cifrado(1);
    }); 
	
	
    $("#decifrar").click(function () {
        
        miVigenere.cifrado(-1);
    });
	
	 $("#subir").click(function () {
        
        miVigenere.subir(this.form);
    });

})

