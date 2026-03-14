//função para armazenar os "valores" de cada item por meio de um looping for e array

function guardarValores() {
    let formulario = document.getElementById("mainForm")
    formulario.addEventListener("submit", function(event){
        event.preventDefault()
            let indices = ["nome", "descricao", "marca", "categoria", "preco", "estoque", "cor", "tamanho", "idProduto"]
            
            for(let i = 0; i < indices.length; i++){
                let id = indices[i]
                let valor = document.getElementById(id).value
                console.log(valor)
            }
        })
}

guardarValores()

