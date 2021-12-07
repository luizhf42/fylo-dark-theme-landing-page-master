var form = document.querySelector('.get-access-form');
var input = document.querySelector('.get-access-input');
var button = document.querySelector('.get-access-btn');
var errorMsg = document.querySelector('.error');
var successMsg = document.querySelector('.success')
var canSubmit = false;

button.addEventListener('click', function(event) {
    var emailRegex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (input.value.match(emailRegex)) {
        canSubmit = true;
    } else {
        canSubmit = false;
    }
    
    if (!canSubmit) {
        event.preventDefault();
        errorMsg.style.display = 'block';
        successMsg.style.display = 'none';
        input.focus();
    } else {
        input.value = "";
        errorMsg.style.display = 'none';
        successMsg.style.display = 'block';
    }
})