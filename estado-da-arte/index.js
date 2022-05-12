//Função que altera qual conteúdo está sendo exibido na coluna da direita
function changeContent(e, id) {
    //Mostra o elemento com o id passado como parâmetro
    var elements = document.getElementsByClassName("conteudo-texto");
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (element.id === id) {
            element.style.display = "block";

        } else {
            element.style.display = "none";
        }
    };
    //Adiciona uma borda ao card clicado
    var cards = document.getElementsByClassName("card");
    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        //Se o card clicado for o card atual
        if (e.target.parentNode.parentNode === card) {
            card.classList.add("border-primary");
        } else {//Do contrário
            card.classList.remove("border-primary");
        }
    }
}