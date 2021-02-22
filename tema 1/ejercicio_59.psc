Algoritmo ejercicio_59
	//Se dispone de un array de 5 páginas, 4 filas y 10 columnas, que se refieren al centro, al curso y al
	//número de alumnos de un colegio respectivamente. Imprimir la nota media por curso y la nota
	//media máxima y su centro de pertenencia.
	
	
	Definir suma,i,n_centros,n_cursos,n_alumnos,centro,curso,alumno,max_centro Como Entero;
	definir notas,media,max Como Real;
	n_centros = 5;
	n_cursos = 4;
	n_alumnos = 10;
	Dimension notas[n_centros,n_cursos,n_alumnos];
	
	
	
	para centro = 0 hasta n_centros - 1 con paso 1 Hacer
		escribir "Centro ",centro;
		
		para curso = 0 hasta n_cursos - 1 con paso 1 Hacer
			escribir "Curso ",curso," : ", Sin Saltar;
			
			suma = 0;
				
			para alumno = 0 hasta n_alumnos - 1 con paso 1 Hacer
				notas[centro,curso,alumno] = Aleatorio(1,10);
				escribir notas[centro,curso,alumno]," ", sin saltar;
				suma = suma + notas[centro,curso,alumno];
			FinPara	
			
			media = suma / n_alumnos;
			escribir "- Media del curso: ",media;
			
			si (curso == 0 y centro == 0) o media > max Entonces
				max = media;
				max_centro = centro;
			FinSi
			
			escribir "";
		FinPara
		escribir "";
	FinPara
	
	escribir "La media mas alta es: ",max," del centro; ",max_centro ;
FinAlgoritmo


