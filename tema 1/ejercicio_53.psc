
funcion print_array(array,tamano)
	
	definir i como entero;
	
	para i = 0 hasta tamano - 1 con paso 1 Hacer
		escribir array[i]," " sin saltar;
	FinPara
	escribir " ";
	
FinFuncion


funcion resultado = promedio(array,tamano)
	
	definir i Como Entero;
	definir resultado,suma Como Real;
	
	suma = 0;
	para i = 0 hasta tamano - 1 con paso 1 Hacer
		suma = suma + array[i];
	FinPara
	
	resultado = suma / tamano;
	
FinFuncion


Algoritmo ejericico_53
	//Usar una función para calcular el promedio recibiendo un array y su longitud. En el algoritmo
	//principal, leer la cantidad de datos que introducirá el usuario y posteriormente los propios datos.
	//Escribir el resultado de su promedio.
	
	definir array,tamano,i,suma Como Entero;
	definir resultado Como Real;
	
	escribir "introduce el tamano de la array: ";
	leer tamano;
	
	suma = 0;
	
	Dimension array[tamano];
	
	para i = 0 hasta tamano - 1 con paso 1 Hacer
		escribir "introduce los numeros necesarios: ";
		leer array[i];
	FinPara
	
	print_array(array,tamano);
	escribir "el promedio es: ", promedio(array,tamano);
	
FinAlgoritmo
