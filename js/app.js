const form = document.querySelector('form')
const distance = document.querySelector('#distance')

const resultOnFoot = document.querySelector('.result-foot');
const resultOnBicycle = document.querySelector('.result-bicycle');
const resultOnCar = document.querySelector('.result-car');
const resultOnPlane = document.querySelector('.result-plane');
const onFoot = 3.6;
const onBicycle = 20.1;
const onCar = 70;
const onPlane = 800;

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if(!distance.value) {
        resultOnFoot.textContent = 'Enter any number';
        resultOnBicycle.textContent = 'Enter any number';
        resultOnCar.textContent = 'Enter any number';
        resultOnPlane.textContent = 'Enter any number';

        distance.value = ''
    } else if (!isNaN(distance.value)) {
        resultOnFoot.textContent = `${Math.round(distance.value / onFoot)} hours`;
        resultOnBicycle.textContent = `${Math.round(distance.value / onBicycle)} hours`;
        resultOnCar.textContent = `${Math.round(distance.value / onCar)} hours`;
        resultOnPlane.textContent = `${Math.round(distance.value / onPlane)} hours`;

        distance.value = ''
    }
})



const formTepm = document.querySelector('.bottom__form')
const celTepm = document.querySelector('#cel')

const convertTepmText = document.querySelector('.convert-text')


formTepm.addEventListener('submit', (e) => {
    e.preventDefault()

    if (!celTepm.value) {
        convertTepmText.textContent = 'Please enter any number'
        celTepm.value = '';
    } else if (!isNaN(celTepm.value)) {
        convertTepmText.textContent = `${Math.round((celTepm.value * 9 / 5) + 32)} F`;
        celTepm.value = '';
    } else if (isNaN(celTepm.value)) {
        convertTepmText.textContent = 'Please enter any number';
        celTepm.value = '';
    }
})