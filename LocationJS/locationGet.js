const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const location = navigator.geolocation.getCurrentPosition((loc) => {
        console.log(loc.coords.longitude)
    }, (error) => {
        console.log(error);
    })
})