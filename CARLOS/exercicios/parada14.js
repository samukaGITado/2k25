const numeros = [1, 2, 3, 4, 5]

const func2 = numeros.map((element1)=>{
     return element1 * 2
})
console.log(func2)

const func3 = numeros.map((element2)=>{
    return element2 * 3
})
console.log(func3)

const soma = numeros.reduce((soma, func2, func3)=>{
    return func2 + func3
})
console.log(soma)