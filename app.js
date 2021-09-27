var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.cityName')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')
var locationIcon = document.querySelector('.icon')

button.addEventListener('click', function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&units=metric&appid=5ec0e056f3582bc36735bf5902f3d099`)
    .then(response => response.json())
    .then(data => {
        var nameValue = data['weather']['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
        var icon = data['weather'][0]['icon'];
        
        
        name.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
        locationIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png"/>`
    })
    
    .catch(err => alert("City doesn't exist"))
})

