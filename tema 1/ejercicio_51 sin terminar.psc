Algoritmo ejercicio_51
//Comprobar si un n�mero N positivo es primo. Se dice que un n�mero entero positivo N es un
//n�mero primo si los �nicos enteros positivos que lo dividen son exactamente 1 y N (�l mismo).
	
	definir n,i Como Entero;
	definir es_primo Como Logico;
	
	escribir "introduce un numero entero positivo para comprobar si es primo: ";
	leer n;
	
	es_primo = Verdadero;
	
	para i = 2 hasta n - 1 con paso 1 Hacer
		si n mod i == 0 Entonces
			es_primo = falso;
		FinSi
	FinPara
	
	si es_primo o n == 2 Entonces
		escribir "el numero ",n," es primo";
	sino 
		Escribir  "el numero ",n," no es primo";
	FinSi
FinAlgoritmo
