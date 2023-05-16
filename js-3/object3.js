let receta = {};
receta.nombre = "sandwich"

receta.ingredientes = [];
receta.ingredientes = [{nombre:"pan", cantidad:2},
{nombre:"queso", cantidad:1}];

console.log(receta.ingredientes[0].nombre)

receta.totalIngredientes = function suma(){
    let cantidad1 = receta.ingredientes[0].cantidad 
    let cantidad2 = receta.ingredientes[1].cantidad
    return cantidad1 + cantidad2
  }
  console.log("el total de ingredientes de la receta es " + receta.totalIngredientes())