let array1 = [1,3,6,8,9,4];

const listarDados = array1.forEach((elemento)=>{
    console.log(elemento * 2)
})
console.log(typeof listarDados)

const multiplicador5 = array1.map((elemento)=>{
    return elemento * 5
}) 
console.log(typeof multiplicador5)

const maisDois = multiplicador5.map((elemento)=>{
    return elemento + 2
})
console.log(maisDois)

// const maisdois = listarDados.forEach((elemento)=>{
//     return elemento + 2
// })
// console.log(maisdois)

//encontrar um número que seja maior que 6

let numeros = [1, 3, 6, 8, 9, 4]
let encontrado = numeros.find((elemento)=>{
    return elemento > 6
})
console.log('retorno find => ',encontrado)

let maiorSeis = numeros.filter((elemento)=>{
   return elemento > 6
})
console.log('retorno filter => ',maiorSeis)