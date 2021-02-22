Algoritmo ejericcio_56
	
	definir notas,i_cursos,i_alumnos,n_cursos,n_alumnos Como Entero;
	
	n_cursos = 3;
	n_alumnos = 5;
	
	dimension notas[n_cursos,n_alumnos];
	
	//leemos las notas del curso correspondiente
	para i_cursos = 0 hasta n_cursos - 1 Hacer
		para i_alumnos = 0 hasta n_alumnos - 1 Hacer
			escribir "introduce la nota del alumno ", i_alumnos," del curso ",i_cursos;
			leer notas[i_cursos,i_alumnos];
		FinPara
	FinPara
	
	//	escribimos todas las notas de cada alumno del cuso 
	para i_cursos = 0 hasta n_cursos - 1 Hacer
		escribir "curso ",n_cursos,": "sin saltar;
		para i_alumnos = 0 hasta n_alumnos - 1 Hacer
			escribir notas[i_cursos,i_alumnos]," "Sin Saltar;
		FinPara
		escribir "";
	FinPara
	
	
FinAlgoritmo
