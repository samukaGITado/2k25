//Funções 
function triplo (x){

    return x * 3

}

//Arrow function
triplo = (x) =>{
    return x * 3
}

triplo = (x) => x * 3
console.log(triplo(5))

//Funções sem nome
ola = () => 'Olá' //sem parâmetro
ola = _ => 'Olá' //com parâmetro
//console.log(ola())

//função callback

const soma = function(x, y){
    return x + y
}

const resultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}
resultado(2,4)
resultado(5,4, soma)
resultado(3,4, function(y, z){
     return y * z
})