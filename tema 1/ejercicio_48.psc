Algoritmo ejercicio_48
//	Almacenar una lista de nombres en un array y luego ordenarlos alfabéticamente. Para la entrada de
//	datos se utiliza una estructura Mientras, sin saber a priori la cantidad de datos que se ingresarán.
//	Pista: Los datos alfanuméricos (strings) también se pueden comparar con los operadores < y >.
	
	
	definir i, j,contador,tamano como entero;
	definir nombre,nombres,aux como caracter;
	tamano = 1000;
	Dimension nombres[tamano];
	
//	relleno mi array de nombres
	contador = 0;
	
	Repetir 
		escribir "introduce un nombre: , dejalo vacio para acabar";
		leer nombre;
		
		si nombre <> "" Entonces
			nombres[contador] = nombre;
			contador = contador + 1; //contador++
		FinSi
		
	mientras Que nombre <> ""; 
	
	
//	escribo los nombres en el orden que lo he introducido
	para i = 0 hasta contador - 1 Hacer
		escribir nombres[i], " " sin saltar;
	FinPara
	escribir " ";
	
	//	ordeno el array con el metodo de la burbuja
	
	para i = 0 hasta contador - 2 Hacer
//		Repite el ordenamiento para todos los numeros 
		para j = 0 hasta contador - 2 Hacer
			//ordena un unico nombre
			si nombres[j] > nombres[j + 1] Entonces
				aux = nombres[j];
				nombres[j] = nombres[j+1];
				nombres[j+1] = aux;
			FinSi
			
		FinPara
	FinPara
	
	
//	se escribe los nombres en el orden alfabetico
	para i = 0 hasta contador - 1 Hacer
		escribir nombres[i], " " sin saltar;
	FinPara
	escribir " ";
FinAlgoritmo