Algoritmo reloj_completo
	
	Definir seg,mins,hora como entero;
	
	mientras verdadero Hacer
		para hora = 0 hasta 23 Hacer
			para mins = 0 hasta 59 Hacer
				para seg = 0 hasta 59 Hacer
					Limpiar Pantalla;
					Escribir hora," : ",mins," : ",seg;
					esperar 1 Segundos;
					seg = seg + 1;
				FinPara
			FinPara
		FinPara
		
		

	FinMientras
	
FinAlgoritmo
