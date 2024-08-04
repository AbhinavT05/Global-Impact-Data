document.addEventListener('DOMContentLoaded', function () {
    const climateData = {
        labels: ['2000', '2005', '2010', '2015', '2020'],
        datasets: [{
            label: 'Global Temperature Anomaly (°C)',
            data: [0.42, 0.53, 0.63, 0.75, 0.85],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            fill: true
        }]
    };

    const climateOptions = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };
    const ctxClimate = document.getElementById('climate-chart').getContext('2d');
    new Chart(ctxClimate, {
        type: 'line',
        data: climateData,
        options: climateOptions
    });
    async function fetchCovidData() {
        const response = await fetch('https://disease.sh/v3/covid-19/all');
        const data = await response.json();
        return data;
    }
    async function displayCovidData() {
        const globalData = await fetchCovidData();

        const covidChartData = {
            labels: ['New Cases', 'Total Cases', 'New Deaths', 'Total Deaths', 'Recovered', 'Active'],
            datasets: [{
                label: 'COVID-19 Global Statistics',
                data: [
                    globalData.todayCases, 
                    globalData.cases, 
                    globalData.todayDeaths, 
                    globalData.deaths, 
                    globalData.recovered, 
                    globalData.active
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        };
        const ctxCovid = document.getElementById('covid-chart').getContext('2d');
        new Chart(ctxCovid, {
            type: 'bar',
            data: covidChartData,
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
    const weatherData = {
        labels: ['2000', '2002', '2004', '2006', '2008', '2010', '2016', '2020'],
        datasets: [{
            label: 'Highest-temp in banglore',
            data: [12, 30, 18, 32, 25, 15, 39.2, 37.6],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    };
    const ctxweather = document.getElementById('banglore-highest-weather-chart').getContext('2d');
    new Chart(ctxweather, {
        type: 'line',
        data: weatherData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    displayCovidData();
});