let pedro = {
    nombre : "Pedro Perez",
    edad : 30,
    activo : true,
    hobbies : ["programar", "squash", "piano"]
};
console.log(pedro.edad)
pedro.estatura = 1.8
delete pedro.activo

let llaves = Object.keys(pedro);
for (let i=0; i < llaves.length; i++) {
  let llave = llaves[i];
  console.log(llave + ":" + pedro[llave])
}

pedro.saludos = function saluda(){
    return ("Hola, me llamo "  + pedro.nombre)
}

console.log(pedro.saludos())

console.log(pedro)