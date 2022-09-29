const fecha_ahora = new Date();
console.log(fecha_ahora);

const fecha_cumpleaños = new Date(1999, 11, 15);
console.log(fecha_cumpleaños);

console.log(fecha_ahora > fecha_cumpleaños);

const dia_cumpleaños =fecha_cumpleaños.getDate();
console.log(dia_cumpleaños);

const mes_cumpleaños= fecha_cumpleaños.getMonth();

console.log(mes_cumpleaños + 1);

const anyo_cumpleaños = fecha_cumpleaños.getFullYear();

console.log(anyo_cumpleaños);