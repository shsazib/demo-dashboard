import ApexCharts from "apexcharts";
export function circleChart(percent, id){
    var options = {
      series: [percent],
      chart: {
        height: 100,
        width: 100,
        type: "radialBar",
      },
      labels: ["Cricket"],
      plotOptions: {
        radialBar: {
            dataLabels: {
                show: false
            }
        }
    }
    };
    
    var chart = new ApexCharts(document.querySelector(id), options);
    chart.render();
}
