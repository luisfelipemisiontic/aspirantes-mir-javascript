function max(array){
    let maximo =  array[0]
    for(let i = 0; i < array.length; i++){
        if(maximo < array[i]){
            maximo = array[i]
        }
    }
    return maximo
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined