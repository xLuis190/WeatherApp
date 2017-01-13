$(document).ready(function(){
  navigator.geolocation.getCurrentPosition(function(position) {
    loadWeather(position.coords.latitude+position.coords.longitude);
});
        function loadWeather(position){
          $.simpleWeather({
        location: location,
        woeid: '',
        unit: 'f',
        success: function(weather) {
          html = '<h2>'+weather.temp+'&deg'+weather.units.temp+'</h2>';
          html += '<ul><div class="row"><li class="col-md-4">'+weather.city+', '+weather.region+'</li>';
          html += '<li class="currently col-md-4">'+weather.currently+'</li>';
          html += '<li class="col-md-4">'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></div></ul>';
          $("#weather").html(html);
        },
        error: function(error) {
          $("#weather").html('<p>'+error+'</p>');
        }
      });
}
});
