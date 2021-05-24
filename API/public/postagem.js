function show_hide() {
    btn_criar.style.display = 'none';
    div_criar.style.display = 'block';

}


function contagem() {
    var campo_texto = nova_postagem.value;
    var tamanho = campo_texto.length;

    b_tamanho.innerHTML = tamanho;
}


// function publicar() {
//      var titulo = in_titulo.value;
// var texto = nova_postagem.value;

// var invalido = texto == "" || titulo == "";

// if (invalido) {
//     alert(`Hey, você esqueceu de colocar um título ou uma descrição para a sua postagem!`)

// } else { }
