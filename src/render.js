export function render(weatherData) {

    console.log(weatherData);

    const main = document.querySelector('.main');

    //Create elements
    const header = document.createElement('div');
    header.classList.add('main-header');
    const weather = document.createElement('div');
    weather.classList.add('main-weather');
    const weatherMain = document.createElement('div');
    weatherMain.classList.add('weather-main');
    const weatherComp = document.createElement('div');
    weatherComp.classList.add('weather-comp');

    const Location = document.createElement('h2');
    const Date = document.createElement('h3');
    const Temperature = document.createElement('h2');
    const FeelsTemp = document.createElement('p');
    const weatherPic = document.createElement('img');

    const Humidity = document.createElement('div');
    const Wind = document.createElement('div');



    //update textcontent of elements
    Location.textContent = `${weatherData.location.name}, ${weatherData.location.region}`;
    Date.textContent = `${weatherData.location.localtime}`;
    Temperature.textContent = `${weatherData.current.temp_c}°C`;
    FeelsTemp.textContent = `Feels like: ${weatherData.current.feelslike_c}°C`;
    weatherPic.src = weatherData.current.condition.icon;

    header.appendChild(Location);
    header.appendChild(Date);
    weatherMain.appendChild(weatherPic);
    weatherMain.appendChild(Temperature);
    weatherMain.appendChild(FeelsTemp);
    weather.appendChild(weatherMain);
    weather.appendChild(weatherComp);

    //append elements to main div
    main.appendChild(header);
    main.appendChild(weather);


}