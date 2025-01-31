// const array = [12, 3, 4, 5, 76];

// console.log(array)
// array.push(2)//Adiciona o valor no final do array
// console.log(array)
// array.unshift(3)//Adiciona o valor inicio do array
// console.log(array)
// array.pop()//Remover o último elemento do array
// console.log(array)
// array.shift()//Remover o primeiro elemento do array
// console.log(array)


const numeros = [6, 78, 9, 23, 1, 0, 10, 20, 2];
//1° - elemento, 2°? - indice/index, 3°? - array
numeros.forEach( (elemento, indice, array) => {
    console.log(`${indice} - ${elemento} - ${array}`)
})

const somaCom5 = (x) => x + 5
numeros.map( (elemento) =>{
    console.log(elemento * 2)
})
console.log(numeros.map(somaCom5))
