var ctx = document.getElementById("lineCharts").getContext('2d');
var ctx2 = document.getElementById("circleCharts").getContext('2d');

Chart.defaults.global.defaultFontColor = '#FFF';
Chart.defaults.scale.gridLines.color = "#49B6CE";
Chart.defaults.global.defaultFontFamily = 'Nunito';

var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
gradientStroke.addColorStop(0, '#55B7F1');
gradientStroke.addColorStop(1, '#1177FC');

var gradientFill = ctx.createLinearGradient(500, 0, 100, 0);
gradientFill.addColorStop(1, "rgba(17, 119, 252, 0.3)");
gradientFill.addColorStop(0, "rgba(85, 183, 241, 0.3)");

var line = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet"],
        datasets: [{
            data: [0, 6, 5, 3, 7, 9,10],
            borderColor: gradientStroke,
            backgroundColor: gradientFill,
            borderWidth: 3
        }]
    },
    options: {
        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 15
                }
            }]
        },
        elements: {
            line: {
                spanGaps: false
            },
            point: {
                radius: 0
            }
        }
    }
});

var gradientRed = ctx2.createLinearGradient(75, 150, 75, 0);
gradientRed.addColorStop(1, "rgba(245, 81, 95, 1)");
gradientRed.addColorStop(0, "rgba(159, 4, 27, 1)");

var gradientYellow = ctx2.createLinearGradient(75, 150, 75, 0);
gradientYellow.addColorStop(1, "rgba(241, 181, 85, 1)");
gradientYellow.addColorStop(0, "rgba(252, 116, 17, 1)");

var gradientBlue = ctx2.createLinearGradient(75, 150, 75, 0);
gradientBlue.addColorStop(1, "rgba(85, 183, 243, 1)");
gradientBlue.addColorStop(0, "rgba(17, 119, 252, 1)");

var circle = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        datasets: [{
                data: [10, 20, 30],
                borderWidth: 0,
                backgroundColor: [
                gradientRed,
                gradientYellow,
                gradientBlue
            ],
            }],
            labels: [
                'déchets collectés',
                'déchets non collectés',
                'déchets recyclés'
            ]
        },
    options: {
        legend: {
            display: false,
        },
        elements: {
            line: {
                spanGaps: false,
            },
            point: {
                radius: 0, // disables bezier curves
            }
        }
    }
});
