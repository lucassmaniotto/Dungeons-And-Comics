export default function validateCPF(field) {
    const cpf = field.value.replace(/\.|-/g, "");
    if (validateRepeatedNumbers(cpf) || validateFirstDigit(cpf) || validateSecondDigit(cpf)) {
        field.setCustomValidity("O CPF digitado não existe.");
    }
}

function validateRepeatedNumbers(cpf) {
    const repetedNumbers = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    return repetedNumbers.includes(cpf)
}

function validateFirstDigit(cpf) {
    let sum = 0;
    let multiplier = 10;

    for (let length = 0; length < 9; length++) {
        sum += cpf[length] * multiplier;
        multiplier--
    }

    sum = (sum * 10) % 11;

    if (sum == 10 || sum == 11) {
        sum = 0;
    }

    return sum != cpf[9];
}

function validateSecondDigit(cpf) {
    let sum = 0;
    let multiplier = 11;

    for (let length = 0; length < 10; length++) {
        sum += cpf[length] * multiplier;
        multiplier--
    }

    sum = (sum * 10) % 11;

    if (sum == 10 || sum == 11) {
        sum = 0;
    }

    return sum != cpf[10];
}