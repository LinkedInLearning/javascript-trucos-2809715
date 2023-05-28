let data = [{
  "id": 1,
  "nombre": "Jeanette",
  "apellido": "Prendes",
  "correo_electronico": "jpenddreth0@census.gov",
  "genero": "Femenino",
  "ip_address": "26.58.193.2",
  "ciudad": "Dublín",
  "edad": 20
}, {
  "id": 2,
  "nombre": "Giovanni",
  "apellido": "Frediani",
  "correo_electronico": "gfrediani1@senate.gov",
  "genero": "Masculino",
  "ip_address": "229.179.4.212",
  "ciudad": "Dublín",
  "edad": 35
}, {
  "id": 3,
  "nombre": "Noel",
  "apellido": "Bea",
  "correo_electronico": "nbea2@imageshack.us",
  "genero": "Femenino",
  "ip_address": "180.66.162.255",
  "ciudad": "Madrid",
  "edad": 21
}, {
  "id": 4,
  "nombre": "William",
  "apellido": "Prendes",
  "correo_electronico": "wvalek3@vk.com",
  "genero": "Masculino",
  "ip_address": "67.76.188.26",
  "ciudad": "Madrid",
  "edad": 32
}];

console.log(_.groupBy(data, 'genero'));

console.log(_.filter(data, { 'genero': "Femenino", "ciudad": "Dublín" }));

let resultado = _.reduce(data, function (res, usuario) {
  if(usuario.edad >= 25 && usuario.edad <= 35) {
      (res[usuario.edad] || (res[usuario.edad] = [])).push({nombre: usuario.nombre, apellido: usuario.apellido});
  }
  return res;
}, {});
console.log(resultado);

console.log(_.orderBy(data, 'edad'));

let keysData = _.keyBy(data, "id");
console.log(keysData[3]);

