function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == 123456){
        location.href = "main_page.html"
    }else
    alert('Usuário ou senha incorreto');
}