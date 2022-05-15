function changeContent(classes, botao) {
    let conteudo = document.querySelectorAll(".content");
    let texto = document.querySelector(classes);
    let botaoInativo = document.querySelectorAll('.nav_itens');
    let botaoAtivo = document.querySelector(botao);

    conteudo.forEach(item => item.style.display = "none");
    texto.style.display = "block";

    botaoInativo.forEach(function(element) {
        element.style.borderTop = "5px solid #00000000";
        element.style.color = "#F2F2F2";
    })
    botaoAtivo.style.borderTop = "4px solid #F2C12E";
    botaoAtivo.style.color = "#F2C12E",
    
    

    window.scroll({
        top: 625,
        behavior: 'smooth'
      });
}
