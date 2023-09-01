const nameInput = document.querySelector('.name__input');
const lastNameInput = document.querySelector('.last-name__input');
const emailInput = document.querySelector('.email__input');
const passwordInput = document.querySelector('.password__input');
const submitBtn = document.querySelector('button');

const nameRegex = /^[a-zA-Z]{2,20}$/;
const lastNameRegex = /^[a-zA-Z]{2,20}$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordRegex = /^[a-zA-Z0-9]{8,20}$/;

const verifyInput = (input, regex) => {
    return regex.test(input.children[0].value);
    
}

const addClass = (input, regex) => {
    if(verifyInput(input, regex)) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    }else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
};


const showErrorMessage = (input,regex) => {
    if(verifyInput(input, regex)) {
        input.children[2].innerHTML = `${input.children[0].attributes.placeholder.value} is valid`;
    }else{
        input.children[2].innerHTML = `${input.children[0].attributes.placeholder.value} is invalid`;
    }
};
nameInput.addEventListener('keyup', (e) => {
    e.preventDefault();
    addClass(nameInput, nameRegex);
    showErrorMessage(nameInput, nameRegex);
});

lastNameInput.addEventListener('keyup', (e) => {
    e.preventDefault();
    addClass(lastNameInput, lastNameRegex);
    showErrorMessage(lastNameInput, lastNameRegex);
});

emailInput.addEventListener('keyup', (e) => {
    e.preventDefault();
    addClass(emailInput, emailRegex);
    showErrorMessage(emailInput, emailRegex);
});

passwordInput.addEventListener('keyup', (e) => {
    e.preventDefault();
    addClass(passwordInput, passwordRegex);
    showErrorMessage(passwordInput, passwordRegex);
});

submitBtn.addEventListener('click', (e) => {
    if(verifyInput(nameInput, nameRegex) && verifyInput(lastNameInput, lastNameRegex) && verifyInput(emailInput, emailRegex) && verifyInput(passwordInput, passwordRegex)) {
        alert('Form submitted successfully');
        e.defaultPrevented;
    }else {
        alert('Please fill the form correctly');
        e.preventDefault();
    }
});
