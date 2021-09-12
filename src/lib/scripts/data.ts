import type { ChartData } from "chart.js";

const labels: any = [
    'New Customers',
    'Old Customers',
    'Unaccounted'
  ];

const data: ChartData = {
    labels: labels,
    datasets: [
      {
        label: "Months",
        backgroundColor: ['#B0DAF1', '#3E1929', "#6E75A8"],
        borderColor: "transparent",
        data: [200, 400, 300],
      },
 
    ],
  };

  export {labels, data}