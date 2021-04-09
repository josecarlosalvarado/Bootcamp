// apartado 1 generacion del array

let employees = [];
for (let i = 0; i <= 100; i++) {
    employees.push({
        cargo: `empleado ${i}`,
        rendimiento: Number(Math.random(0,1).toFixed(2)),
        salario: Math.floor(Math.random() * (4001 - 1250) + 1250),
    });
};

// console.log("1.generacion del array", employees);


//apartado 1 con constructor 

// function Employee(cargo,rendimiento,salario) {
//     this.cargo = cargo;
//     this.rendimiento = rendimiento;
//     this.salario = salario;
// };

// employees = [];
// for (let i = 1; i <= 100; i++) {
//     employees.push(new Employee(
//         `Empleado ${i}`,
//          Number(Math.random(0,1).toFixed(2)),
//          Math.floor(Math.random() * (4001 - 1250) + 1250),
//     ));
// }
// console.log("1.generacion del array", employees);

employees.sort(function(empleado1,empleado2){
    return empleado1.rendimiento - empleado2.rendimiento;
})
// console.log(employees);


//apartado 3 ordenar por salario

employees.sort((empleado1,empleado2) => {return empleado1.salario - empleado2.salario});

// console.log("apartado 3--------------------",employees);

//apartado 4 
    function OrdenarDecreciente(empleado1,empleado2) {
         return empleado2.cargo.slice(9) - empleado1.cargo.slice(9);
    }


employees.sort(OrdenarDecreciente);

// console.log("apartado 4------------------",employees);

//apartado 5

employees
    .filter((employee) => employee.salario > 2500)
    // .forEach(employee => console.log(employee.cargo,employee.salario));


// apartado 6

employees = employees.map(employee => {
    if (employee.salario < 1500) {
        //modificar el salrio
        employee.salario = employee.salario * 1.25;
    } 
    return employee;
    
})

console.log("apartado 6-----------------------",employees);

// apartado 7 obtener el coste total de los sueldos de la empresa
 const totalCost = employees.reduce((salarySun, employee) =>  salarySun + employee.salario * 1.15, 0);

 console.log("Coste total de los salarios de la empresa",totalCost);

// apartado 8

//8.1

employees = employees.filter(employee => employee.rendimiento >= 0.3);
console.log("8.1",employees);

//8.2

const media = employees.reduce((salarySun, employee) =>  salarySun + employee.salario,0) / employees.length;

console.log("8.2",media.toFixed(2));

//8.3

//foreach

employees.forEach(employee => {
    if (employee.rendimiento > 0.7) {
        employee.salario = employee.salario + 10000;
    }
})

console.log("subir sueldo a los que tengas mas de 0.7 de rendimiento",employees);

//map
// employees = employees.map(employee => {
//     if (employee.rendimiento > 0.7) {
//         employee.salario = employee.salario + 10000;
//     }
//     return employees;
// })

// console.log("subir sueldo a los que tengas mas de 0.7 de rendimiento",employees);