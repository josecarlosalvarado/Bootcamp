
funcion saludar ( nombre, apellido,dia)
	
	escribir "Hola ",nombre," ",apellido;
	
	si minusculas(dia) == "viernes" Entonces
		escribir "ya es viernes";
	SiNo
		escribir "a seguir bien con la semana";
	FinSi

FinFuncion

Algoritmo sin_titulo
	
	definir mi_nombre,mi_apellido,mi_dia Como caracter;
	leer mi_nombre,mi_apellido,mi_dia;
	
	saludar(mi_nombre,mi_apellido,mi_dia);
	
FinAlgoritmo
	
	