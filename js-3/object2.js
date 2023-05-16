let persona = {
    nombre : "luis felipe Romero",
    edad : 45,
    ciudad : "bogota",
    profesion : "programador backend"

};
console.log(persona)

persona.presentaciones = function presentacion(persona){
    return ("saludo cordial, mi nombre es " + persona.nombre + " tengo " + persona.edad + " años "  + 
    " y vivo en la ciudad de " + persona.ciudad)  
  }

let mensaje = (persona.presentaciones(persona))
console.log(mensaje)

persona.hobbies = ["ciclismo", "sistemas computacionales", "cine"]
console.log(persona.hobbies)

for (let c = 0; c < persona.hobbies.length; c++){
    console.log(persona.hobbies[c]);
  }
