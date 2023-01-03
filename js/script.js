import validateCPF from "./validate-cpf.js";
import validateBirth from "./validate-age.js";

const postcode = document.querySelector('#cep');
const district = document.querySelector('#district');
const city = document.querySelector('#city');
const address = document.querySelector('#address');
const complement = document.querySelector('#complement');
const state = document.querySelector('#state');
const formButton = document.querySelector('#send');

const messageErrorViaCEP = document.querySelector('#error');

postcode.addEventListener('focusout', () => searchAddress(postcode.value));

async function searchAddress(postcode) { 
    messageErrorViaCEP.innerHTML = '';
    formButton.disabled = false;
    if (postcode.length > 0) {       
        try {
            const response = await fetch(`https://viacep.com.br/ws/${postcode}/json/`);
            const data = await response.json();
            if (data.erro) {
                throw new Error('CEP não encontrado!');
            }
            district.value = data.bairro;
            city.value = data.localidade;
            address.value = data.logradouro;
            complement.value = data.complemento;
            state.value = data.uf;
            return data;
        } catch (error) {
            messageErrorViaCEP.innerHTML = `<p class="form__error">CEP inválido. Tente novamente!</p>`;
            district.value = '';
            city.value = '';
            address.value = '';
            complement.value = '';
            state.value = '';
            formButton.disabled = true;
        }
    }
}

const formFields = document.querySelectorAll('[required]');
const form = document.querySelector('[data-form]');

const validateStateErrorTypes = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const messages = {
    name: {
        valueMissing: 'O campo do nome não pode estar vazio.',
        patternMismatch: 'Por favor, preencha um nome válido.',
        tooShort: 'Por favor, preencha um nome válido.'
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    birth: {
        valueMissing: 'O campo da data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    contact: {
        valueMissing: 'O campo de contato não pode estar vazio.',
        patternMismatch: 'Por favor, preencha um número de telefone válido.',
        tooShort: 'Por favor, preencha um número de telefone válido.'
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    cep: {
        valueMissing: "O campo de CEP não pode estar vazio.",
    },
    address: {
        valueMissing: "O campo do endereço não pode estar vazio.",
    },
    number: {
        valueMissing: "O campo do número da rua não pode estar vazio.",
        typeMismatch: "Por favor, preencha um número válido."
    },
    complement: {
        valueMissing: "O campo de complemento não pode estar vazio.",
    },
    district: {
        valueMissing: "O campo do bairro não pode estar vazio.",
    },
    city: {
        valueMissing: "O campo da cidade não pode estar vazio.",
    },
    state: {
        valueMissing: "O campo da UF não pode estar vazio.",
    },
    terms: {
        valueMissing: "Você deve aceitar os termos de uso para se cadastrar."
    }
}

formFields.forEach((field) => {
    field.addEventListener("blur", () => verifyField(field));
    field.addEventListener("invalid", event => event.preventDefault());
});

formButton.addEventListener("click", (event) => {
    event.preventDefault();
    formFields.forEach((field) => {
        verifyField(field);
    });
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const responseList = {
        "name": event.target.name.value,
        "cpf": event.target.cpf.value,
        "birth": event.target.birth.value,
        "contact": event.target.contact.value,
        "email": event.target.email.value,
        "cep": event.target.cep.value,
        "address": event.target.address.value,
        "number": event.target.number.value,
        "complement": event.target.complement.value,
        "district": event.target.district.value,
        "city": event.target.city.value,
        "state": event.target.state.value,
    }

    localStorage.setItem('register', JSON.stringify(responseList));
    window.location.href = "./submited-register.html";
});

function verifyField(field) {
    let message = "";
    field.setCustomValidity("");
    if (field.name === 'cpf' && field.value.length >= 11) {
        validateCPF(field);
        field.value = formatCpf(field.value);
    }
    if (field.name === 'birth' && field.value !== '') {
        validateBirth(field);
    }
    if (field.name === 'contact') {
        field.value = formatPhone(field.value);
    }
    validateStateErrorTypes.forEach(error => {
        if (field.validity[error]) {
            message = messages[field.name][error];
        }
    })

    const messageValidityError = field.parentNode.querySelector(".form__error--span");
    const inputValidator = field.checkValidity();

    if (!inputValidator) {
        messageValidityError.innerHTML = `<p class="form__error">${message}</p>`;
    } else {
        messageValidityError.innerHTML = "";
    }
}

function formatCpf(cpf) {
    cpf = cpf.replace(/\D/g, "");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})/, "$1-$2");
    return cpf;
}

function formatPhone(phone) {
    phone = phone.replace(/\D/g, "");
    if (phone.length === 10) {
        phone = phone.replace(/(\d{2})(\d)/, "($1) $2");
        phone = phone.replace(/(\d{4})(\d)/, "$1-$2");
    } else {
        phone = phone.replace(/(\d{2})(\d)/, "($1) $2");
        phone = phone.replace(/(\d{5})(\d)/, "$1-$2");
    }
    return phone;
}

