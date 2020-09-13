var inputElement = document.querySelector('#email');
var buttonElement = document.querySelector('#email-submit');

buttonElement.onclick = function validate() {
    if(email.value){
        inputElement.classList.replace('is-invalid', 'is-valid');
    }
    else{
        inputElement.classList.replace('is-valid', 'is-invalid');
    }
    alert('Gustavo Teixeira is open for business.');   
    return false; 
}

// feather icon script
feather.replace();
