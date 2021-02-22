Algoritmo ejercicio_55
	definir i_filas,i_columnas,matrix,tamano,n_columnas,n_filas Como Entero;
	
	n_filas = 4;
	n_columnas = 5;
	
	Dimension matrix[n_filas,n_columnas];
	
	escribir " A      B      C      D      E";
	para i_filas = 0 hasta n_filas - 1 con paso 1 Hacer
		para i_columnas = 0 hasta n_columnas - 1 con paso 1 Hacer
			matrix[i_filas,i_columnas] = Aleatorio(100,200);
			escribir matrix[i_filas,i_columnas],"    "Sin Saltar;
		FinPara
		escribir " ";
	FinPara
	
	
FinAlgoritmo
