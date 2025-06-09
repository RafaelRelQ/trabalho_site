const user = document.getElementById('email');
const pass = document.getElementById('senha');
const send = document.getElementById('botao');

send.addEventListener('click', function(event) {
    event.preventDefault();
    const password = pass.value
    const e_mail = user.value
    if(e_mail === 'admin@fortes.com.br' || 'cooperativas@fortes.com.br' && password === '123456'){
    alert('Login Succed')
    }else{
        alert('Login Failed')
    }
})