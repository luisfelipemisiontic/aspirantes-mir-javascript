function join(array){
    let cadena = "";
    for(let i = 0; i < array.length; i++){
    cadena += array[i] + " ";
    }
return cadena    
}


console.log(join(["cs","phyton","java","c++",]))
console.log(join([10,20,30,40,50]))
console.log(join(["angular","react","express","flask","loopback"]))