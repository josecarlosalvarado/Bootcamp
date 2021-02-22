Funcion resultado = suma (num1,num2)
	definir resultado Como Entero;
	resultado = num1 + num2;
FinFuncion

funcion resultado_dos = suma_dos(sumando1,sumando2)
	definir resultado_dos Como Entero;
	resultado_dos = sumando1 - sumando2;
FinFuncion

Algoritmo ejemplo_funcion_tres
	
	definir num_uno,num_dos Como Entero;
	leer num_uno,num_dos;	
	escribir suma(num_uno,num_dos);
	
	definir sumando_uno,sumando_dos Como Entero;
	leer sumando_uno,sumando_dos;
	escribir suma_dos(sumando_uno,sumando_dos);
	
	
	Escribir "el resultado de las dos funciones es: ";
	escribir suma(num_uno,num_dos) * suma_dos(sumando_uno,sumando_dos);
FinAlgoritmo


