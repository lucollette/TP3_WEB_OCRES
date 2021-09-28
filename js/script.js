
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast


  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });

    apiWeather
    .getThreeDayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      console.log(data);

      for (var i = 0; i<3; i++){
        const tomorrow_main = data.list[i].weather[0].main;
        const tomorrow_description = data.list[i].weather[0].description;
        const tomorrow_temp = data.list[i].main.temp;
        const tomorrow_icon = apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon);

        // Modifier le DOM
        document.getElementById(`${i}-forecast-main`).innerHTML = tomorrow_main;
        document.getElementById(`${i}-forecast-more-info`).innerHTML = tomorrow_description;
        document.getElementById(`${i}-icon-weather-container`).innerHTML = tomorrow_icon;
        document.getElementById(`${i}-forecast-temp`).innerHTML = `${tomorrow_temp}°C`;
      }
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

function actualiser() {
  var city = document.getElementById('city-input').value
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast


  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });

  apiWeather
    .getThreeDayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      console.log(data);

      for (var i = 0; i<3; i++){
        const tomorrow_main = data.list[i].weather[0].main;
        const tomorrow_description = data.list[i].weather[0].description;
        const tomorrow_temp = data.list[i].main.temp;
        const tomorrow_icon = apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon);

        // Modifier le DOM
        document.getElementById(`${i}-forecast-main`).innerHTML = tomorrow_main;
        document.getElementById(`${i}-forecast-more-info`).innerHTML = tomorrow_description;
        document.getElementById(`${i}-icon-weather-container`).innerHTML = tomorrow_icon;
        document.getElementById(`${i}-forecast-temp`).innerHTML = `${tomorrow_temp}°C`;
      }
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}