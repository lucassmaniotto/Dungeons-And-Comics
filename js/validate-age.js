export default function validateBirth(field) {
    const birth = new Date(field.value);
    if (!validateAge(birth)) {
        field.setCustomValidity("O usuário deve ser maior de 18 anos.");
    }
}

function validateAge(date) {
    const today = new Date();
    const age = new Date(date.getUTCFullYear() + 18, date.getUTCMonth(), date.getUTCDate());

    return today >= age;
}