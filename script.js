var input = document.querySelector('.input-text');
var city = document.querySelector('#city');
var temp = document.querySelector('.temp');
var city = document.querySelector('.city');
var button = document.querySelector('.submit');

button.addEventListener('click', function (name) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=f670cd60c54c18b3edfa49d0f30c1a88')
        .then(response => response.json())
        .then(data => {
            // var tempValue = data['main']['temp'];
            // var nameValue = data['name'];
            // var descValue = data['weather'][0]['description'];

            // main.innerHTML = nameValue;
            // desc.innerHTML = "Desc - "+descValue;
            // temp.innerHTML = "Temp - "+tempValue;
            // input.value ="";
            console.log(data);

        })

        .catch(err => alert("Wrong city name!"));
})