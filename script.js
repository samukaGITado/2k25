document.getElementById("adicionarTarefa").addEventListener("click", function(){
    
    const inputTarefa = document.querySelector("#novaTarefa");
    const tarefatexto = inputTarefa.value;

    if(tarefatexto === ""){
        alert("O campo não pode estar vazio")
    }
    const listaTarefas = document.querySelector("#listaTarefas")

    //Cria um elemento li
    const li = document.createElement("li")
    li.textContent = tarefatexto;

    //Adiciona li ao HTML
    listaTarefas.appendChild(li)

    inputTarefa.value = "";

});

document.getElementById("LimparTarefas").addEventListener("click", function(){
    const listaTarefas = document.querySelector("#listaTarefas")
    listaTarefas.textContent = "";
})