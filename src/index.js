import { getData } from "./data";
import { render } from "./render";
import './style.css';

const searchBtn = document.querySelector('button');
const searchInput = document.querySelector('input');
const celcBtn = document.querySelector('#celcius');
const fahBtn = document.querySelector('#fahrenheit');

//Default render
let weatherData = await getData('brisbane');
let type = 0;

render(weatherData, type);

searchBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    weatherData = await getData(searchInput.value);
    render(weatherData, type);
})

celcBtn.addEventListener('click', (e) => {
    e.preventDefault();
    type = 0;
    celcBtn.classList.add('selected-button');
    fahBtn.classList.remove('selected-button');
    render(weatherData, type);
});

fahBtn.addEventListener('click', (e) => {
    e.preventDefault();
    type = 1;
    celcBtn.classList.remove('selected-button');
    fahBtn.classList.add('selected-button');
    render(weatherData, type);
});