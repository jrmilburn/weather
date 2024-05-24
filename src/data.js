export async function getData(location) {



    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=91ad209f0ed849e9af263131241605&q=${location}`);

    const json = response.json();

    return json;

}