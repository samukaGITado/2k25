const palavras = ["sol", "livro", "lua", "cadeira", "mesa", "mar"]

let encontrado = palavras.filter((element)=>{
    return element.length > 3
})
console.log(encontrado)