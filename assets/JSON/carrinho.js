// função local 
function local() {
  let dados = [
      {
          nomePassageiro: "Alan", emailPassageiro: "alanzin@hotmail.com", senhaPassageiro: "12343", cpfPassageiro: "3234434",
          enderecoPassageiro: "Rua Alves", complementoPassageiro: "433", estadoPassageiro: "Sp", cidadePassageiro: "SBC", 
          telefonePassageiro: "3234454", tipoCliente: "0"
      },
      {
          nomeMotorista: "Alan", emailMotorista: "alanzin@hotmail.com", senhaMotorista: "12343", cpfMotorista: "3234434",
          enderecoMotorista: "Rua Alves", complementoMotorista: "433", estadoMotorista: "Sp", cidadeMotorista: "SBC", 
          telefoneMotorista: "3234454", tipoCliente: "1"
      }
  ];
  let n = JSON.stringify(dados);
  localStorage.setItem("tds", n);
  return dados
}

//Cadastro dos itens
function carrinho(){
  let carrinho=[ 
    {id:1, nome:"Boneco Goku", preco:29.90, img: "assets/img/img1.jpeg"},
    {id:2, nome:"Boneco Bardock", preco:39.90, img: "assets/img/img2.jpg"},
    {id:3, nome:"Boneco Broly", preco:49.90, img: "assets/img/img3.jpeg"},
    {id:4, nome:"Boneco Cell", preco:59.90, img: "assets/img/img4.jpeg"},
    {id:5, nome:"Boneco Dragon Ball", preco:39.90, img: "assets/img/img5.jpg"},
    {id:6, nome:"Boneco Goku Black", preco:69.90, img: "assets/img/img6.jpg"},]

  let carrinhoStr = JSON.stringify(carrinho)
  localStorage.setItem("dadosCarrinho", carrinhoStr)
  return carrinho
}

//Adicionando o produto no carrinho do cliente
function adicionarProduto(id){
  let carrinho = JSON.parse(localStorage.getItem('dadosCarrinho'));
  let carrinhoUsuario = JSON.parse(localStorage.getItem('dadosCarrinhoUsuario'))
  let qtdProduto = document.getElementsByClassName('qtd-produto')

  //Fazendo um loop pra verificar todas as casas do carrinho e adicionar corretamente
  for(let i = 0; carrinho.length > i; i++){
    if (id == carrinho[i].id){
      //Se o localStorage do carrinho do usuario estiver vazio, ele vai ser criado e então adicionar os itens
      if(carrinhoUsuario == null){
        carrinhoUsuario = []
        let itemCarrinho = {
          id: carrinho[i].id, nome: carrinho[i].nome, preco: carrinho[i].preco, img: carrinho[i].img, qtdProduto: qtdProduto[i].value
        }
        carrinhoUsuario.push(itemCarrinho)
        localStorage.setItem('dadosCarrinhoUsuario', JSON.stringify(carrinhoUsuario))

        //Redirecionando o usuário para a página do carrinho para exibir os itens
        let confirmacaoEscolha = confirm('Produto adicionado ao carrinho com sucesso! Deseja ir para o carrinho?')
        if(confirmacaoEscolha){
          let = url = 'carrinho.html'
          window.open(url)  
        }
        //Caso ele já exista, ele pegará os dados já existentes e rodará
      }else{
        let itemCarrinho = {
          id: carrinho[i].id, nome: carrinho[i].nome, preco: carrinho[i].preco, img: carrinho[i].img, qtdProduto: qtdProduto[i].value
        }
        carrinhoUsuario.push(itemCarrinho)
        localStorage.setItem('dadosCarrinhoUsuario', JSON.stringify(carrinhoUsuario))

        let confirmacaoEscolha = confirm('Produto adicionado ao carrinho com sucesso! Deseja ir para o carrinho?')
        if(confirmacaoEscolha){
          let = url = 'carrinho.html'
          window.open(url)  
        }
      }
      }
    }

}

//funcao de exibir o carrinho do usuario
function exibirProduto(){
  let carrinho = JSON.parse(localStorage.getItem('dadosCarrinho'))
  let carrinhoUsuario = JSON.parse(localStorage.getItem('dadosCarrinhoUsuario'))
  let container = document.getElementById('container-img')
  let containerInfo = document.getElementById('containerInfo')
  let image = document.getElementsByClassName('img-container')
  let produtoTotal = document.getElementById('preco-total')

  if(carrinhoUsuario == null){
    alert('Carrinho vazio! Adicione algo')
    let = url = 'index.html'
    window.open(url)
  }else{
    for(let i = 0; carrinhoUsuario.length > i; i++){
      container.innerHTML += "<img alt='imagem produto' class='img-container'>"
      image[i].src = carrinhoUsuario[i].img
      container.innerHTML += "<input type='number' class='qtd-produto' placeholder='Digite aqui a quantidade' value='" + carrinhoUsuario[i].qtdProduto + "'>"
      container.innerHTML += "<button onclick='alterarCarrinho()' value ='" + carrinhoUsuario[i].qtdProduto + "' class='botao-alterar'>Alterar</button>"
      container.innerHTML += "<button onclick='excluirProduto(this.value)' value ='" + carrinhoUsuario[i].qtdProduto + "' class='excluir-produto'>Excluir</button>"

      //Se a soma de produtos for 0, irá criar um array par armazenar o resultado
      if(somaProdutos == null){
        var somaProdutos = []
        somaProdutos.push(carrinhoUsuario[i].preco * carrinhoUsuario[i].qtdProduto)
      }else{
        somaProdutos.push(carrinhoUsuario[i].preco * carrinhoUsuario[i].qtdProduto)
      }
    }

    var soma = 0
    //Aqui foi criado um looping para realizar a soma dos produtos do carrinho
    for(i = 0; i < somaProdutos.length; i++){
      soma += somaProdutos[i]
    }
    produtoTotal.innerHTML += 'Total:' + Math.round(soma)
  }
}


//funcao de excluir somente o produto
function excluirProduto(valorProduto){
  let carrinhoUsuario = JSON.parse(localStorage.getItem('dadosCarrinhoUsuario'))
  let excluirProduto = document.getElementsByClassName('excluir-produto')
  let qtdProduto = document.getElementsByClassName('qtd-produto')
  for(let i = 0; i < carrinhoUsuario.length; i++){
    if(qtdProduto[i].value == valorProduto){
      console.log('sucesso')
      carrinhoUsuario.splice(i, 1)
      console.log(carrinhoUsuario)
      localStorage.setItem('dadosCarrinhoUsuario', JSON.stringify(carrinhoUsuario))
      alert('Item atualizado com sucesso! Atualizando a página')
      location.reload()
    }else{
      console.log('erro')
    }
  }
}

//Carregando a funcao exibirProduto ao carregar a página
window.addEventListener('onload', exibirProduto())


//funcao de alterar o carrinho do usuario
function alterarCarrinho(){
  let carrinhoUsuario = JSON.parse(localStorage.getItem('dadosCarrinhoUsuario'))
  let qtdProduto = document.getElementsByClassName('qtd-produto')
  let botaoAlterar = document.getElementsByClassName('botao-alterar').value

  for(let i = 0; i < carrinhoUsuario.length; i++){
    if(qtdProduto[i].value == carrinhoUsuario[i].qtdProduto){
      console.log('erro')
    }else{
      console.log(qtdProduto[i].value + ' ' + carrinhoUsuario[i].qtdProduto)
      carrinhoUsuario[i].qtdProduto = qtdProduto[i].value
      alert('Alterado com sucesso!')
      localStorage.setItem('dadosCarrinhoUsuario', JSON.stringify(carrinhoUsuario))
      location.reload()
    }
  }

}

//funcao de deletar o carrinho do usuario(compra bem sucedida)
function excluirCarrinho(){
  localStorage.removeItem('dadosCarrinhoUsuario')
  alert('Compra bem sucedida! Verifique seu email para mais informações')
  let = url = 'index.html'
  window.open(url)
}