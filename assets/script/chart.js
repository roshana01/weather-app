// ? type: "line",

const saleChartElem = document.querySelector(".sale-chart");
const saleChart = new Chart(saleChartElem, {
    // type: 'doughnut',
    // type: 'polarArea',
    // type: 'bar',
    type: "line",
    data: {
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
    },
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
    series: [65],
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
                    show: true,
                    color: "#a7a5a5ee",
                    fontSize: "15px",
                },
                value: {
                    formatter: function (val) {
                        return parseInt(val);
                    },
                    color: "#111",
                    fontSize: "36px",
                    show: true,
                },
            },
        },
    },
    fill: {
        colors: ["#9c1fe4c4" ],
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

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();
var options = {
    series: [45],
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
                    show: true,
                    color: "#a7a5a5ee",
                    fontSize: "15px",
                },
                value: {
                    formatter: function (val) {
                        return parseInt(val);
                    },
                    color: "#111",
                    fontSize: "32px",
                    show: true,
                },
            },
        },
    },
    fill: {
        colors: ["#9c1fe4c4" ],
    },
    stroke: {
        lineCap: "round",
    },
    labels: ["Percent"],
};

var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();
var options = {
    series: [85],
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
                    show: true,
                    color: "#b6b6b6ee",
                    fontSize: "15px",
                    
                },
                value: {
                    formatter: function (val) {
                        return parseInt(val);
                    },
                    color: "#111",
                    fontSize: "32px",
                    show: true,
                },
            },
        },
    },
    fill: {
        colors: ["#9c1fe4c4" ],
    },
    stroke: {
        lineCap: "round",
    },
    labels: ["Percent"],
};

var chart = new ApexCharts(document.querySelector("#chart3"), options);
chart.render();
