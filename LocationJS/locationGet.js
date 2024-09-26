const Glocation = document.getElementById('location');
const btn = document.getElementById('btn');

const getLatLag = async (lat, lag) => {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=6ee045b9cbdb42629c8141825241709%20&q=${lat},${lag}&aqi=yes`);
        const data = await response.json();
        Glocation.innerText = `Your Location: ${data.location.name}`
    } catch (error) {
        Glocation.innerText = 'Location getting Faild....'
    }
}

const getPosition = async (position) => {
    getLatLag(position.coords.latitude, position.coords.longitude);
}
btn.addEventListener('click', async () => {
    const result = await navigator.geolocation.getCurrentPosition(getPosition);
})


