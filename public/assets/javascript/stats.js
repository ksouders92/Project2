var myChart = document.getElementById('myChart').getContext('2d');

var mostPlanesChart = new Chart (myChart,{
    type: 'pie',
    data: {
        labels: ['US', 'China', 'Canada', 'Germany', 'UK', 'France', 'Japan', 'Brazil', 'Spain', 'India'],
        datasets[{
            label: 'Top 10 Countries with Most Planes in the Air',
            data: [
                9054478,
                1853088,
                1200361,
                1154472,
                1056206,
                827851,
                655495,
                647753,
                616893,
                592292,


            ]
            
        }],
    },
    options: {}
});