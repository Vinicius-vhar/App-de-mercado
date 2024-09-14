var items = [];

document.querySelector('input[type:submit]')
.addEventListener('Click',() =>{
    var nomeProduto = document.querySelector('input[name=nome_produto]').value;
    var precoProduto = document.querySelector('input[name=valor_produto]').value;

    items.push({
        nome: nomeProduto,
        valor: precoProduto
    });
    let listaProdutos = document
    items.map(function(val){

    })
    alert(items[0].nome);
});