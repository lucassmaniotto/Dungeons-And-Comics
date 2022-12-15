const postcode = document.querySelector('#cep');
const district = document.querySelector('#district');
const city = document.querySelector('#city');
const address = document.querySelector('#address');
const complement = document.querySelector('#complement');
const state = document.querySelector('#state');
const formButton = document.querySelector('#send');

const messageError = document.querySelector('#error');

postcode.addEventListener('focusout', () => searchAddress(postcode.value));

async function searchAddress(postcode) { 
    messageError.innerHTML = '';
    formButton.disabled = false;
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
        messageError.innerHTML = `<p class="form__error">CEP inválido. Tente novamente!</p>`;
        district.value = '';
        city.value = '';
        address.value = '';
        complement.value = '';
        state.value = '';
        formButton.disabled = true;
    }
}