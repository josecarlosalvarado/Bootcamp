Algoritmo ejercicio_57
	//Dada un matriz cuadrada A (array de 2 dimensiones con el mismo número de columnas que de
	//filas, por ejemplo: 3) construir un algoritmo que permita determinar si dicha matriz es simétrica. Se
	//	considera que una matriz es simétrica si A[i,j] = A[j,i] para todos los elementos i,j de la matriz. 
	
	definir matriz,fila,columna,tamano Como Entero;
	definir es_simetrica como logico;
	tamano = 3;
	Dimension matriz[tamano,tamano];
	
	matriz[0,0] = 1;
	matriz[0,1] = 2;
	matriz[0,2] = 3;
	
	matriz[1,0] = 2;
	matriz[1,1] = 1;
	matriz[1,2] = 2;
	
	matriz[2,0] = 3;
	matriz[2,1] = 2;
	matriz[2,2] = 1;
	
	//	imprimimos matriz
	
	para fila = 0 hasta tamano - 1 hacer
		para columna = 0 hasta tamano - 1 hacer
			escribir matriz[fila,columna]," "sin saltar;
		FinPara
		escribir "";
	FinPara
	
	es_simetrica = Verdadero;
	
	para fila = 0 hasta tamano - 1 hacer
		para columna = 0 hasta tamano - 1 hacer
			si matriz[fila,columna] <> matriz[columna,fila] Entonces
				es_simetrica = falso;
			FinSi
		FinPara
	FinPara
	
	si es_simetrica Entonces
		escribir "es simetrica";
	sino 
		escribir "no es simetrica";
	FinSi
FinAlgoritmo
