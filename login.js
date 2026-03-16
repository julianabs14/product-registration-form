//função para fazer login no sistema com parãmetros já definidos(email e senha)

function acessarSistema(){
    let form = document.getElementById("loginForm")

    form.addEventListener("submit", function(event){
        event.preventDefault()
        let email = document.getElementById("email").value
        let senha = document.getElementById("senha").value

        if (email === "juliana@email.com" && senha === "123456"){
            window.location.href = "cadastro.html"
        }else{
            alert("Login incorreto")
        }
    })
}

acessarSistema()
