let showPassword = document.getElementById('showPassword');
let inputPassword = document.getElementById('inputPassword');
showPassword.onclick = function(){
    if(inputPassword.type == 'password'){
        inputPassword.type = 'text';
        showPassword.classList.add('show');
    }else{
        inputPassword.type = 'password';
        showPassword.classList.remove('show');
    }
}