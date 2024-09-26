const inName = document.getElementById('city-input');
const btn = document.getElementById('btn');
const loading=document.getElementById('loadingShow');

async function getData(params) {
    loading.innerText='Loading.......'
    try {
        const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=6ee045b9cbdb42629c8141825241709%20&q=NAGPUR&aqi=yes`);
        loading.innerText=''

        return data.json();
    } catch (error) {
        loading.innerText=''

        return error.message;
    }

}

btn.addEventListener('click', async () => {
     const result = await getData();
    console.log(result)
    document.getElementById('cityName').innerText =   `${result.location.name} ${result.location.region} ${result.location.country}`;
    document.getElementById('cityTemp').innerText=result.current.temp_c;
})