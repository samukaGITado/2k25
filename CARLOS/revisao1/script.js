//let produto = 'camisa'
//const preco = 50 //

//function calcularPrecoComDesconto () {

//   const desconto = 0.1
//    const precoFinal = preco - preco * desconto
//   console.log(`Preço com desconto: R$${precoFinal}`)
//}
//calcularPrecoComDesconto()
//console.log(produto)
//console.log(desconto)

//for (let i = 0; i < 10; i++) {

   //console.log(i)//
    
//}
//console.log(i)

const prato = 'pizza'
const quantidade = 3

function calcularTotal(){
    const preco = 45.0
    const total = preco * quantidade

    if(quantidade > 2){
        const desconto = 0.1
        return total * (1 - desconto)
    }
    return total
}
console.log(`Preço total com desconto: R${calcularTotal()}`)
//global
console.log(prato)