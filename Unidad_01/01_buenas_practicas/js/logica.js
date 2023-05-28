// 1. Utiliza nombres significativos. Usa formato camel case

// No:

let patito = 123;

// Si:
let esActivo = true;

// 2. Evita variables globales

var variableGlobal = 123;

// Usa objetos

var miModulo = {
  miVariable: 123,
};

// Utiliza IIFE
(function () {
  console.log("Se ejecuta dentro de su propio contexto");
});

// 3. Evita strings o números mágicos

function cambiarEstado(nuevoEstado) {
  this.estado = nuevoEstado;
}

// No:
cambiarEstado(1);
cambiarEstado("activo");

// Si:
const ESTADO_ACTIVO = "activo";
cambiarEstado(ESTADO_ACTIVO);

// 4. Optimiza loops
var valores = ['valor1', 'valor2', 'valor3', 'valor4'];

// No
for (var i = 0; i < valores.length; i++){
  console.log(valores[i]);
}

// Si:
for (var i = 0, j = valores.length; i < j; i++){
  console.log(valores[i]);
}

// Mejor:
valores.forEach(val => console.log(val));

// 5. Nombres de clases se escriben en mayúscula
class MiClase{};

// 6. Utiliza notaciones cortas
let obj = { valor: 123 };

let obj2 = new Object();
obj.valor = 123;
