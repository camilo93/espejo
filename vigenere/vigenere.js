Vigenere = window.Vigenere || {}
Vigenere.Funcionalidad = function () {

cifrado = function (codigo) {

var alfabeto="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
longalfa=alfabeto.length;
texto1=formula.entrada.value;
texto1=texto1.toUpperCase();
texto2="";
clave=formula.clave.value;
longitud=texto1.length;
longclave=clave.length;
claveta=new Array(longclave);

for (m=0;m<longclave;m++) {
		for (n=0;n<longalfa;n++) {
		if (clave.substring(m,m+1)==alfabeto.substring(n,n+1)) {claveta[m]=n;break;}
		}
		}
for (i=0; i<longitud; i++) {
		num1=32+Math.floor(Math.random()*95);
		num2=32+Math.floor(Math.random()*95);
		for (j=0; j<longalfa; j++) {
			if (texto1.substring(i,i+1)==alfabeto.substring(j,j+1)) {num1=j;num2=claveta[i%longclave];break;}
		}
		numero=(num1+num2*codigo+longalfa)%longalfa;
		texto2=texto2+alfabeto.substring(numero,numero+1);
}
formula.salida.value=texto2;
}

subir=function(formula) {
if (formula.salida.value!="") {
formula.entrada.value=formula.salida.value;
formula.salida.value="";
}
}
return{
cifrado:cifrado,
subir:subir
}

}



