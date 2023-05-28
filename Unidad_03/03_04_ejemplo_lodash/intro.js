let arr1 = [1, 2, 2, 3, 3, 4, 5, 5];
let arr2 = [1, 1, 2, 3, 4, 4, 5, 5, 6];

console.log(_.intersection(arr1, arr2));

function aleatorio() {
    return Math.round(Math.random() * 100);
}

console.log(_.times(5, aleatorio));

console.log(_.sortedUniq(arr2));

const obj1 = { nombre: 'Naty', edad: 35 };

const obj2 = {
    nombre: 'Naty',
    edad: 35,
};

console.log(_.isEqual(obj1, obj2));

console.log(_.isEmpty({}));

let clon = _.cloneDeep(obj1);

console.log("original:", obj1);

console.log("clon:", clon);

console.log(obj1 === clon);