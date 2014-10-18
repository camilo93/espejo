Espejo = window.Espejo || {}
Espejo.Funcionalidad = function () {

    var abc = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"," ","_");
    var zyx = new Array("z", "y", "x", "w", "v", "u", "t", "s", "r", "q", "p", "o", "ñ", "n", "m", "l", "k", "j", "i", "h", "g", "f", "e", "d", "c", "b", "a"," ","_");
    var textoEncriptado = "";

    borrarTexto = function () {
        textoEncriptado = "";
    }

    recorrer = function (miString) {
        var letra;
        

        for (i = 0; i < miString.length; i++) {
            letra = miString.charAt(i);
            aux=0;
            while (letra != abc[aux]) {
                aux= aux+1;
            }
            textoEncriptado = textoEncriptado + zyx[aux];          
        }
        
        return textoEncriptado;
        
    }

    return {
        recorrer: recorrer,
        borrarTexto: borrarTexto
    }

}


