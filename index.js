
mapboxgl.accessToken = "pk.eyJ1IjoiZ29uY2hpYnUiLCJhIjoiY2w3dDN6cjBrMHZtaDN4cGw5MzJrcnY4dSJ9.CJ1s6IR818ICKACzRfZgtQ"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true })

function successLocation (position){
    console.log(position)
    setUpMap([position.coords.longitude,position.coords.latitude])
}

function errorLocation() {
setUpMap([77.60228577591512,14.684495514496271])
}

function setUpMap(center){

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center:center,
        zoom: 9
    });

    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
      });
     
      
      map.addControl(directions, 'top-left');
}

