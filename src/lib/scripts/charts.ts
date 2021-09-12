import { Chart, registerables } from "chart.js";
import type {ChartData} from "chart.js";
import { data } from './data';
Chart.register(...registerables);

Chart.defaults.interaction = {
    intersect: false,
    mode: "nearest",
    axis: "x",
}

Chart.defaults.animation = {
    delay: 200,
    duration: 400,
}

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: "top",
        },
    },
    interaction: {
        intersect: false,
        mode: "nearest",
        axis: "x",
    },
    scales: {
        y: {
            stacked: "single",
        },
    },
}
const random = Math.floor(Math.random() * 30)
const randomNums = [1, 2, 3].map(x => x + Math.floor(Math.random() * random))
export const updateData = (chart: Chart, data) => {
    const chartData: ChartData = {
        datasets: [
          {
            label: "Months",
            backgroundColor: ['#B0DAF1', '#3E1929', "#6E75A8"],
            borderColor: "transparent",
            data: [randomNums[0], randomNums[1]],
          },
     
        ],
    }

  chart.data.datasets[0] = chartData.datasets[0];
}

export const loadBarChart = (canvas: HTMLCanvasElement) => {
    return new Chart(canvas, {
        type: "bar",
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: "top",
                },
            },
        },
    });
}

export const loadPieChart = (canvas: HTMLCanvasElement) => {
    return new Chart(canvas, {
        type: "pie",
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                }
            },
            interaction: {
                mode: 'point'
            }
        },
    });
}

export const loadFreePieChart = (canvas: HTMLCanvasElement) => {

}