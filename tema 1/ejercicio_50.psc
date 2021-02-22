Algoritmo ejercicio_50
//Hacer un algoritmo que cuente las veces que aparece una determinada letra en una frase que
//introduciremos por teclado.
	
	definir frase, letra como caracter;
	definir i,contador Como Entero;
	
	
	contador = 0;
	
	escribir "introduce una frase";
	leer frase;
	escribir "introduce una letra";
	leer letra;
	
	para i = 0 hasta longitud(frase) - 1 con paso 1 Hacer
		si subcadena(frase,i,i) == letra Entonces
			contador = contador + 1;
		FinSi
	FinPara
	
	escribir "La letra ",letra," aparece ",contador, " veces";
	
FinAlgoritmo
