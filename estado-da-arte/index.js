//Função que altera qual conteúdo está sendo exibido na coluna da direita
function changeContent(id) {
    var elements = document.getElementsByClassName("conteudo-texto");
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (element.id === id) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    };
}