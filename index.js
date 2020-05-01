const input_text = document.getElementById('input-text');
const submit = document.getElementById('submit');
const name = document.querySelector('h1');
const temp = document.querySelector('h2');
const desc = document.querySelector('h5');

function weatherData() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input_text.value + '&appid=f670cd60c54c18b3edfa49d0f30c1a88&units=metric')
        .then(response => response.json())
        .then(data => {
            const cityname = data.name;
            const cityTemp = data.main.temp;
            const description = data.weather[0].main;

            temp.innerHTML = cityTemp;
            name.innerHTML = cityname;
            desc.innerHTML = description
        })

        .catch(err => alert("Wrong city name!"));
}

submit.addEventListener('click', weatherData);