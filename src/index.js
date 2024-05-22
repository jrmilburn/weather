import { getData } from "./data";
import { render } from "./render";
import './style.css';

const weatherData = await getData();
render(weatherData);

console.log(weatherData.location.name, weatherData.location.region);