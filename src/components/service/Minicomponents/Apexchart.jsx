import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class ApexChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        { name: "Received", data: [500, 800, 1200, 950, 1100, 900, 750] },
        { name: "Sent", data: [300, 600, 1000, 800, 950, 700, 500] },
      ],
      options: {
        chart: { height: 350, type: "area", toolbar: { show: false } },
        dataLabels: { enabled: false },
        stroke: { curve: "smooth" },
        xaxis: {
          type: "category", 
          categories: [
            "Sep 19",
            "Sep 20",
            "Sep 21",
            "Sep 22",
            "Sep 23",
            "Sep 24",
            "Sep 25",
          ],
          labels: { show: false },
        },
        yaxis: { labels: { show: false } }, 
        tooltip: { x: { show: false }, y: { show: false } }, 
        colors: ["#2196F3", "#03A9F4"],
      },
    };
  }

  render() {
    const { options, series } = this.state;

    return (
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={235}
        />
      </div>
    );
  }
}

export default ApexChart;
