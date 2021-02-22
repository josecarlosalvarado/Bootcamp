
funcion resultado = es_primo( num )
	definir i Como Entero;
	definir resultado como logico;
	
	resultado = Verdadero;
	
	para i = 2 hasta num - 1 con paso 1 Hacer
		si num mod i == 0 Entonces
			resultado = falso;
		FinSi
	FinPara
	
FinFuncion



Algoritmo ejercicio_54
     //Diseñar un algoritmo que lea el número N e imprima y cuente todos los números primos menores
	//que N.
	
	definir n,contador,indice Como Entero;
	
	escribir "introduce el numero n: ";
	leer n;
	
	
	contador = 0;
	
	para indice = 2 hasta n con paso 1 Hacer
		si es_primo(indice) entonces;
			escribir " ",indice Sin Saltar;
			contador = contador + 1;
		FinSi
	FinPara
	escribir " son primos " Sin Saltar;
	escribir " ";
	escribir "antes de ",n," hay ",contador, " primos";
	escribir " ";
	
FinAlgoritmo
