let email_usuario;
let login_usuario;
let id_usuario;

function redirecionar_login() {
    window.location.href = 'login.html';
}

function verificar_autenticacao() {
    email_usuario = sessionStorage.email_usuario_meuapp;
    login_usuario = sessionStorage.login_usuario_meuapp;
    id_usuario = sessionStorage.id_usuario_meuapp;
    
    if (email_usuario == undefined)  {
        redirecionar_login();
    } else {
        b_usuario.innerHTML = login_usuario;
        validar_sessao();
    }
    
}

function logoff() {
    finalizar_sessao();
    sessionStorage.clear();
    redirecionar_login();
}

function validar_sessao() {
    fetch(`/usuarios/sessao/${email_usuario}`, {cache:'no-store'})
    .then(resposta => {
        if (resposta.ok) {
            resposta.text().then(texto => {
                console.log('Sessão :) ', texto);    
            });
        } else {
            console.error('Sessão :.( ');
            logoff();
        } 
    });    
}

function finalizar_sessao() {
    fetch(`/usuarios/sair/${email_usuario}`, {cache:'no-store'}); 
}