function maxIndex(array){
    let indice =  array[0];
    let valorMayor = 0
    indice = array.indexOf([])
    for(let i = 0; i < array.length; i++){
       if(valorMayor < array[i]){
          valorMayor = array[i]
          indice = i
       } 
       
       
    }

    return  indice
}  

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1