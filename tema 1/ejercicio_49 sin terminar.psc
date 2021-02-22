Algoritmo ejercicio_49
	
//Se tienen los costes de producción de tres departamentos (dulces, bebidas y conservas)
//correspondientes a los 12 meses del año anterior. Construir algoritmo que proporcione:
//a) ¿En qué mes se registró el mayor coste de producción de dulces?
//b) Promedio anual de los costes de producción de bebidas
//c) ¿En qué mes se registró el mayor coste de producción en bebidas, y en qué mes el menor
//coste?
//d) ¿Cuál fue el que tuvo menor coste de producción en diciembre?
	
	
	definir array_dulces, array_bebidas,array_conservas,mes,tamano,mes_max,suma como entero;
	definir dulces_max, bebidas_max, conservas_max,min,mes_min Como Entero;
	tamano = 12;
	suma = 0;
	
	Dimension array_dulces[tamano],array_bebidas[tamano],array_conservas[tamano];
	
	escribir "DEPS  DULCES BEBIDAS CONSERVAS";
	
	para mes = 0 hasta tamano - 1 con paso 1 Hacer
		array_dulces[mes] = Aleatorio(30,500);
		array_bebidas[mes] = Aleatorio(30,500);
		array_conservas[mes] = Aleatorio(30,500);
		
		escribir "MES: " mes + 1,"  ",array_dulces[mes], " ",array_bebidas[mes]," ",array_conservas[mes];
	FinPara
	
	para mes = 0 hasta tamano - 1 con paso 1 Hacer
		si mes == 0 o array_dulces[mes] > dulces_max Entonces
			dulces_max = array_dulces[mes];
			mes_max = mes + 1;
		FinSi
	FinPara
	
	escribir "el mes que mas coste tiene en dulces es: ", mes_max, ". ";
	
	para mes = 0 hasta tamano - 1 con paso 1 Hacer
		suma = suma + array_bebidas[mes];
	FinPara
	
	para mes = 0 hasta tamano - 1 con paso 1 Hacer
		si mes == 0 o array_bebidas[mes] > bebidas_max Entonces
			bebidas_max = array_bebidas[mes];
			mes_max = mes + 1;
		FinSi
		si mes == 0 o array_bebidas[mes] < min Entonces
			min = array_bebidas[mes];
			mes_min = mes + 1;
		FinSi
	FinPara
	
	
	
	escribir "el promedio de bebidas es: ", suma / tamano;
	escribir "el mes que mas coste tiene en bebidas es: ", mes_max, ". ";
	escribir "el mes que menor coste tiene en bebidas es: ", mes_min, ". ";
	
	
	
FinAlgoritmo
