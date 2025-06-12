const user = document.getElementById('email');
const pass = document.getElementById('senha');
const send = document.getElementById('botao');

send.addEventListener('click', function(event) {
    event.preventDefault();
    const password = pass.value
    const e_mail = user.value
    if(e_mail === 'admin@fortes.com.br' && password === '123456'){
        window.location.href = "ent_inicio.html"
    }else if(e_mail === 'cooperativas@fortes.com.br' && password === '123456'){
        window.location.href = "emp_inicio.html"
    }
    else if(e_mail != 'admin@fortes.com.br' && e_mail != 'cooperativas@fortes.com.br'){
        alert('The email is wrong')
    }else if(password != '123456'){
        alert('The password is wrong')
    }
})
