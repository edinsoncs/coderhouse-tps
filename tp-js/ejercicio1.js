(function(){

	var texto = "hola que tal";
	var textoLongitud = texto.length;
	var textoInvertido = " ";

	while(textoLongitud >= 0) {

		textoInvertido = texto.charAt(textoLongitud);

		textoLongitud--;

		document.write(textoInvertido);
	}


}();