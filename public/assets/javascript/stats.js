$(document).ready(function () {
    var chart1 = document.getElementById('chart1').getContext('2d');

    var mostPlanesChart = new Chart(chart1, {
        type: 'pie',
        data: {
            labels: ['US', 'China', 'Canada', 'Germany', 'UK', 'France', 'Japan', 'Brazil', 'Spain', 'India'],
            datasets: [{
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
                ],
                backgroundColor: [
                    '#A7574A',
                    '#4C2733',
                    '#4C3950',
                    '#3B4F67',
                    '#1E656E',
                    '#1F7865',
                    '#4D874F',
                    '#84903C',
                    '#C0923D',
                    '#EC895B'
                ]

            }],
        },
        options: {
            title: {
                display: true,
                text: 'Top 10 Countries with Most Planes in the Air',
                fontSize: 24,
              
            }
        }
    });

    var chart2 = document.getElementById('chart2').getContext('2d');
    var mostPassengersChart = new Chart(chart2, {
        type: 'pie',
        data: {
            labels: ['US', 'China', 'UK', 'Germany', 'Japan', 'Ireland', 'Brazil', 'India', 'Turkey', 'Indonesia'],
            datasets: [{
                data: [
                    798230000,
                    436183969,
                    131449680,
                    115540886,
                    113762000,
                    113144501,
                    102039359,
                    98927860,
                    96604665,
                    88685767,
                ],
                backgroundColor: [
                    '#A7574A',
                    '#4C2733',
                    '#4C3950',
                    '#3B4F67',
                    '#1E656E',
                    '#1F7865',
                    '#4D874F',
                    '#84903C',
                    '#C0923D',
                    '#EC895B'
                ]

            }],
        },
        options: {
            title: {
                display: true,
                text: 'Top 10 Countries with Most Passengers in the Air',
                fontSize: 24
            }
        }
    });

    var chart3 = document.getElementById('chart3').getContext('2d');

    var mostPlanesChart = new Chart(chart3, {
        type: 'pie',
        data: {
            labels: ['US', 'Brazil', 'Mexico', 'Canada', 'Russia', 'Argentina', 'Bolivia', 'Colombia', 'Paraguay', 'Indonesia'],
            datasets: [{
                data: [
                    13513,
                    4093,
                    1714,
                    1467,
                    1218,
                    1138,
                    855,
                    836,
                    799,
                    673,
                ],
                backgroundColor: [
                    '#A7574A',
                    '#4C2733',
                    '#4C3950',
                    '#3B4F67',
                    '#1E656E',
                    '#1F7865',
                    '#4D874F',
                    '#84903C',
                    '#C0923D',
                    '#EC895B'
                ]

            }],
        },
        options: {
            title: {
                display: true,
                text: 'Top 10 Countries with the Most Airports',
                fontSize: 24

            }
        }
    });

    var chart4 = document.getElementById('chart4').getContext('2d');

    var mostPlanesChart = new Chart(chart4, {
        type: 'pie',
        data: {
            labels: ['Dubai International Airport', 'London Heathrow Airport', 'Hong Kong International Airport',
             'Paris-Charles de Gaulle Airport', 'Amsterdam Airport Schiphol',
              'Singapore Changi Airport ', 'Frankfurt Airport', 'Incheon International Airport', 
              'Suvarnabhumi Airport ', 'Atatürk International Airport'],
            datasets: [{
                data: [
                    77.5,
                    71,
                    68.1,
                    60.4,
                    58.2,
                    54.8,
                    54,
                    48.7,
                    46,
                    41.1,
                ],
                backgroundColor: [
                    '#A7574A',
                    '#4C2733',
                    '#4C3950',
                    '#3B4F67',
                    '#1E656E',
                    '#1F7865',
                    '#4D874F',
                    '#84903C',
                    '#C0923D',
                    '#EC895B'
                ]

            }],
        },
        options: {
            title: {
                display: true,
                text: 'Top 10 Busiest Airports (International Traffic in Millions)',
                fontSize: 24

            }
        }
    });

 
});