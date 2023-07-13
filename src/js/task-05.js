const imputName = document.getElementById('name-input');
const outputName = document.getElementById('name-output');

const placeholder = (event) => {
    outputName.textContent = inputName.value
}