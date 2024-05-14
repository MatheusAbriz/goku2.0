function dados(){
    
    //Construindo um objeto no formato JSON
    //var -> global(dentro e fora de funcao, nao aconselhável por falta de segurança)
    //let -> global e local, o estado dela pode ser mudado
    //const -> somente local e aconselhado por segurança

    const ds = []
    //Transformando o array em string
    const bancoDados = JSON.stringify(ds)
    
    //Estamos guardando as inforamções de login dentro do localStorage
    //O primeiro parâmetro precisa ser um apelido, enquanto o segundo é o valor/variável
    if(localStorage.getItem("dados") == null){
        localStorage.setItem("dados", bancoDados)
        return ds
    }else{
        return ds
    }

}

//create
function inserir(){
    const ds = JSON.parse(localStorage.getItem("dados"))
    const data = ds
    let l = document.getElementById('inputEmail4').value
    let s = document.getElementById('inputPassword4').value
    let n = document.getElementById('nome').value

    var clienteVetor = JSON.parse(localStorage.getItem('dados'))
    let user = {id: Date.now(), login: n, senha: s, email: l}

    clienteVetor.push(user)
    localStorage.setItem('dados', JSON.stringify(clienteVetor))
    alert('Registro adicionado com sucesso! Te redirecionando para a home')
    let = url = "index.html"
    window.open(url)
}

//read
function logar() {
    const dados = JSON.parse(localStorage.getItem("dados"))
 
    let email = document.querySelector("#inputEmail4").value
    let senha = document.querySelector("#inputPassword4").value
 
    for (let i = 0; dados.length > i; i++) {
        if (dados[i] == null) {
            alert("Verificando")
        } else {
            if (email == dados[i].email && senha == dados[i].senha) {
                console.log("conectado")
                let n = JSON.stringify(dados[i])
                sessionStorage.setItem("usuario", n)
                alert('Logado com sucesso! Te redirecionando para a home')
                let = url = "index.html"
                window.open(url)
                break
            }
        }
    }
}
