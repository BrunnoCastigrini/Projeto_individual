function show_hide() {
    btn_criar.style.display='none';
    div_criar.style.display='block';
    
}

function postar(){
    var titulo = in_titulo.value;
    var url = in_url.value;
    var texto = nova_postagem.value;

    var valido = texto == "" || titulo == "";
    
    if (valido) {
        alert(`Hey, você esqueceu de colocar um título ou uma descrição para a sua postagem!`)

    } else {
        if (url == "") {
            
        } else {

            
        }

        document.location.reload(true);
        
    }
    
}

function contagem() {
    var campo_texto = nova_postagem.value;
    var tamanho = campo_texto.length;

    b_tamanho.innerHTML = tamanho;
}
