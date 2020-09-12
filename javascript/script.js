var buttonElement = document.querySelector('#email-submit');

buttonElement.onclick = function () {
    if(email.value) alert('Gustavo Teixeira is open for business.');
    else return false
}

// feather icon script
feather.replace();
