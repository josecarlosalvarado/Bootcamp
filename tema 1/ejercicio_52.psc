Algoritmo ejercicio_52
//Rellenar un array con 10 n�meros aleatorios entre 1 y 15. Posteriormente, buscar un n�mero
//introducido por teclado y nos debe decir si est� incluido en el array y el �ndice de su primera
//coincidencia. 
	
	definir array,tamano,i,n,contador Como Entero;
	tamano = 10;
	contador = 0;
	Dimension array[tamano];
	
	para i = 0 hasta tamano - 1 con paso 1 Hacer
		array[i] = Aleatorio(1,15);
		escribir array[i];
	FinPara
	
	escribir "introduce un numero: ";
	leer n;
	
	para i = 0 hasta tamano - 1 con paso 1 Hacer
		si n = array[i] entonces;
			escribir "el numero ha aparecido en el indice: ",i;
			contador = contador + 1;
		FinSi
		si contador == 1 Entonces
			i = contador;
		FinSi
	FinPara
	
	
	escribir "el numero a aparecido en el indice: ",contador; 
FinAlgoritmo
