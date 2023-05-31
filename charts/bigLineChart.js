import ApexCharts from "apexcharts";

var options = {
    series: [
      {
        name: "Session Duration",
        data: [
          40, 105, 38, 78, 48, 28, 35, 12, 77, 13, 20, 108, 48, 18, 95, 93, 18,
          16, 98, 44,
        ],
      },
      {
        name: "Page Views",
        data: [
          78, 37, 18, 11, 82, 38, 98, 41, 13, 62, 68, 60, 21, 88, 82, 18, 83, 58,
          57, 105,
        ],
      },
    ],
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    colors: [
      "#777",
      // "#F27036",
      // "#663F59",
      // "#6A6E94",
      // "#4E88B4",
      // "#00A7C6",
      // "#18D8D8",
      // "#A9D794",
      // "#46AF78",
      // "#A93F55",
      // "#8C5E58",
      // "#2176FF",
      // "#33A1FD",
      // "#7A918D",
      // "#BAFF29"
    ],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [3, 3, 3],
      // curve: "straight",
      // dashArray: [0, 8, 5],
    },
    title: {
      text: "Page Statistics",
      align: "left",
    },
    legend: {
      tooltipHoverFormatter: function (val, opts) {
        return (
          val +
          " - " +
          opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
          ""
        );
      },
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 2,
      },
    },
    xaxis: {
      // categories: [
      //   "01 Jan",
      //   "02 Jan",
      //   "03 Jan",
      //   "04 Jan",
      //   "05 Jan",
      //   "06 Jan",
      //   "07 Jan",
      //   "08 Jan",
      //   "09 Jan",
      //   "10 Jan",
      //   "11 Jan",
      //   "12 Jan",
      // ],
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              return val + " (mins)";
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val + " per session";
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val;
            },
          },
        },
      ],
    },
    grid: {
      borderColor: "#f1f1f1",
    },
  };
  
  var chart = new ApexCharts(document.querySelector("#chart-line"), options);
  chart.render();
  