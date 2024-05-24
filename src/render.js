export function render(weatherData, type) {

    console.log(weatherData);

    const main = document.querySelector('.main');
    const body = document.querySelector('body');

    //Create elements
    const header = document.createElement('div');
    header.classList.add('main-header');
    const weather = document.createElement('div');
    weather.classList.add('main-weather');
    const weatherMain = document.createElement('div');
    weatherMain.classList.add('weather-main');
    const weatherComp = document.createElement('div');
    weatherComp.classList.add('weather-comp');
    const weatherDet = document.createElement('div');
    weatherDet.classList.add('main-details');

    const Location = document.createElement('h2');
    const Date = document.createElement('h3');
    const Temperature = document.createElement('h2');
    const FeelsTemp = document.createElement('p');
    const weatherPic = document.createElement('img');

    const Humidity = document.createElement('div');
    const HumidityLabel = document.createElement('p');
    const HumidityValue = document.createElement('h3');

    const Wind = document.createElement('div');
    const WindLabel = document.createElement('p');
    const WindValue = document.createElement('h3');
    const WindDirection = document.createElement('div');

    const UV = document.createElement('div');
    const UVLabel = document.createElement('p');
    const UVValue = document.createElement('h3');

    const Pressure = document.createElement('div');
    const PressureLabel = document.createElement('p');
    const PressureValue = document.createElement('h3');

    main.textContent = '';

    //update background color depending on cloud coverage
    if (weatherData.current.cloud < 50) {
        body.style.background = 'linear-gradient(white, rgba(135, 206, 235,0.5))';
    } else {
        body.style.background = 'linear-gradient(white, rgba(0, 0, 0,0.3))';
    }

    //update textcontent of elements
    if (type === 0) {
        Temperature.textContent = `${weatherData.current.temp_c}°C`;
        FeelsTemp.textContent = `Feels like: ${weatherData.current.feelslike_c}°C`;
        WindValue.textContent = `${weatherData.current.wind_kph}km/h, ${weatherData.current.wind_dir}`;
        PressureValue.textContent = `${weatherData.current.pressure_mb}mb`;
    } else if (type === 1) {
        Temperature.textContent = `${weatherData.current.temp_f}°F`;
        FeelsTemp.textContent = `Feels like: ${weatherData.current.feelslike_f}°F`;
        WindValue.textContent = `${weatherData.current.wind_mph}mph, ${weatherData.current.wind_dir}`;
        PressureValue.textContent = `${weatherData.current.pressure_in}in`;
    }

    Location.textContent = `${weatherData.location.name}, ${weatherData.location.region}`;
    Date.textContent = `${weatherData.location.localtime}`;
    
    weatherPic.src = weatherData.current.condition.icon;

    HumidityLabel.textContent = 'Humidity';
    HumidityValue.textContent = `${weatherData.current.humidity}%`;
    Humidity.appendChild(HumidityLabel);
    Humidity.appendChild(HumidityValue);

    WindLabel.textContent = 'Wind';
    WindDirection.innerHTML = `<span class="material-symbols-outlined">
    north
    </span>`
    WindDirection.style.cssText = `width: 33px; transform: rotate(${weatherData.current.wind_degree}deg)`;
    Wind.appendChild(WindLabel);
    Wind.appendChild(WindValue);
    Wind.appendChild(WindDirection);

    UVLabel.textContent = 'UV';
    if (weatherData.current.uv <= 3) {
        UVValue.style.cssText = 'width: 2rem; height: 2rem; border-radius: 50%; text-align: center; background-color: green;';
    } else if (weatherData.current.uv > 3 && weatherData.current.uv < 7) {
        UVValue.style.cssText = 'width: 2rem; height: 2rem; border-radius: 50%; text-align: center; background-color: yellow;';
    } else if (weatherData.current.uv >= 7) {
        UVValue.style.cssText = 'width: 2rem; height: 2rem; border-radius: 50%; text-align: center; background-color: red;';
    }
    UVValue.textContent = `${weatherData.current.uv}`;
    UV.appendChild(UVLabel);
    UV.appendChild(UVValue);

    PressureLabel.textContent = 'Pressure';
    Pressure.appendChild(PressureLabel);
    Pressure.appendChild(PressureValue);

    header.appendChild(Location);
    header.appendChild(Date);
    weatherMain.appendChild(weatherPic);
    weatherMain.appendChild(Temperature);
    weatherMain.appendChild(FeelsTemp);
    weather.appendChild(weatherMain);
    weather.appendChild(weatherComp);
    weatherDet.appendChild(Humidity);
    weatherDet.appendChild(Wind);
    weatherDet.appendChild(UV);
    weatherDet.appendChild(Pressure);

    //append elements to main div
    main.appendChild(header);
    main.appendChild(weather);
    main.appendChild(weatherDet);


}