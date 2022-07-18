const saleChartElem = document.querySelector(".sale-chart");

// console.log(saleChart);

const saleChart = new Chart(saleChartElem, {
    // type: 'doughnut',
    // type: 'polarArea',
    // type: 'bar',
    type: "line",
    data: {
        labels: ["day 1", "day 2", "day 3", "day 4", "day 5", "day 6","day 7" , "day 8"],
        datasets: [
            {
                label: "",
                data: [20, 35, 22, 20, 38, 23,42,5],
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
                ticks:{
                    borderColor:"#fff",
                   color: '#8c8b9e',                
                },
                grid:{
                    borderColor:"#6968795e",
                    display: false,
                }
            },
        },
        plugins: {
            legend: {
                display: false,
            },

        },
    },
});