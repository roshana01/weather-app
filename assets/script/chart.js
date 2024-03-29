// ? type: "line",
var data = {
    labels: [
        "day 1",
        "day 2",
        "day 3",
        "day 4",
        "day 5",
        "day 6",
        "day 7",
        "day 8",
    ],

    datasets: [
        {
            label: "",
            data: [20, 35, 22, 20, 38, 23, 42, 5],
            pointBorderColor: "rgb(255,255,255)",
            // pointBackgroundColor: 'rgb(255,255,255)',
            pointBorderWidth: 2,
            borderColor: "#854bdd",
            borderWidth: 2,
            yAxisID: "usersY",
            fill: false,
            tension: 0.3,
            drawBorder: false,
        },
    ],
};

let saleChartElem = document.querySelector(".sale-chart");
let saleChart = new Chart(saleChartElem, {
    // type: 'doughnut',
    // type: 'polarArea',
    // type: 'bar',
    type: "line",
    data: data,

    options: {
        maintainAspectRatio: false,
        scales: {
            usersY: {
                position: "left",
                min: -10,
                max: 60,
                display: false,
            },
            xAxis: {
                ticks: {
                    borderColor: "#fff",
                    color: "#8c8b9e",
                },
                grid: {
                    borderColor: "#6968795e",
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    },
});

// ? type: "radialBar"

var options = {
    series: [20],

    chart: {
        height: 160,
        type: "radialBar",
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
                margin: 0,
                size: "75%",
                background: "#fff",
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: "front",
                dropShadow: {
                    enabled: true,
                    top: 3,
                    left: 0,
                    blur: 4,
                    opacity: 0.24,
                },
            },
            track: {
                background: "#fff",
                strokeWidth: "69%",
                margin: 0, // margin is in pixels
                dropShadow: {
                    enabled: true,
                    top: -3,
                    left: 0,
                    blur: 4,
                    opacity: 0.35,
                },
            },

            dataLabels: {
                show: true,
                name: {
                    offsetY: -10,
                    show: false,
                    color: "#a7a5a5ee",
                    fontSize: "15px",
                },
                value: {
                    formatter: function (val) {
                        return parseInt(val);
                    },
                    color: "#8879B0",
                    fontSize: "33px",
                    show: true,
                },
            },
        },
    },
    fill: {
        colors: ["#9c1fe4c4"],
    },
    stroke: {
        lineCap: "round",
    },
    labels: ["Percent"],

    stroke: {
        lineCap: "round",
    },
    labels: ["Percent"],
};

var chart1 = new ApexCharts(document.querySelector("#chart1"), options);
chart1.render();

var options = {
    series: [26],
    chart: {
        height: 200,
        type: "radialBar",
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
                margin: 0,
                size: "75%",
                background: "#fff",
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: "front",
                dropShadow: {
                    enabled: true,
                    top: 3,
                    left: 0,
                    blur: 4,
                    opacity: 0.24,
                },
            },
            track: {
                background: "#fff",
                strokeWidth: "69%",
                margin: 0, // margin is in pixels
                dropShadow: {
                    enabled: true,
                    top: -3,
                    left: 0,
                    blur: 4,
                    opacity: 0.35,
                },
            },

            dataLabels: {
                show: true,
                name: {
                    offsetY: -10,
                    show: false,
                    color: "#a7a5a5ee",
                    fontSize: "15px",
                },
                value: {
                    formatter: function (val) {
                        return parseInt(val);
                    },
                    color: "#8879B0",
                    fontSize: "38px",
                    show: true,
                },
            },
        },
    },
    fill: {
        colors: ["#9c1fe4c4"],
    },
    stroke: {
        lineCap: "round",
    },
    labels: ["Percent"],

    responsive: [
        {
            breakpoint: 1026,
            options: {
                chart: {
                    height: 160,
                },
            },
        },
    ],
};

var chart2 = new ApexCharts(document.querySelector("#chart2"), options);
chart2.render();
var options = {
    series: [46],
    chart: {
        height: 160,
        type: "radialBar",
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
                margin: 0,
                size: "75%",
                background: "#fff",
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: "front",
                dropShadow: {
                    enabled: true,
                    top: 3,
                    left: 0,
                    blur: 4,
                    opacity: 0.24,
                },
            },
            track: {
                background: "#fff",
                strokeWidth: "69%",
                margin: 0, // margin is in pixels
                dropShadow: {
                    enabled: true,
                    top: -3,
                    left: 0,
                    blur: 4,
                    opacity: 0.35,
                },
            },

            dataLabels: {
                show: true,
                name: {
                    offsetY: -10,
                    show: false,
                    color: "#b6b6b6ee",
                    fontSize: "15px",
                },
                value: {
                    formatter: function (val) {
                        return parseInt(val);
                    },
                    color: "#8879B0",
                    fontSize: "33px",
                    show: true,
                },
            },
        },
    },
    fill: {
        colors: ["#9c1fe4c4"],
    },
    stroke: {
        lineCap: "round",
    },
    labels: ["Percent"],
};

var chart3 = new ApexCharts(document.querySelector("#chart3"), options);
chart3.render();

//! update functions
function updateChart(parametr) {
    chart1.updateOptions({
        series: [parametr[0]],
    });
    chart2.updateOptions({
        series: [parametr[1]],
    });
    chart3.updateOptions({
        series: [parametr[2]],
    });
}

function updateChartLine(val1, val2) {
    saleChart.data.datasets[0].data = val1;
    saleChart.data.labels = val2;
    saleChart.update();
}
