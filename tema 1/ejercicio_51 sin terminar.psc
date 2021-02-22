Algoritmo ejercicio_51
//Comprobar si un número N positivo es primo. Se dice que un número entero positivo N es un
//número primo si los únicos enteros positivos que lo dividen son exactamente 1 y N (él mismo).
	
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
