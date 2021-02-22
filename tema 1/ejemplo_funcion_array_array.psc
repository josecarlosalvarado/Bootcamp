Funcion print_array(array,tamano)
	definir i Como Entero;
	
	para i = 0 hasta tamano - 1 Hacer
		escribir array[i], " ", Sin Saltar;
	FinPara
	escribir " ";
	
FinFuncion

Algoritmo ejemlo_funciones_cinco
	definir array,tamano,i Como Entero;
	
	tamano = 10;
	dimension array[tamano];
	
	para i = 0 hasta tamano - 1 Hacer
		array[i] = Aleatorio(1,50);
	FinPara
	
	print_array(array,tamano);

FinAlgoritmo
