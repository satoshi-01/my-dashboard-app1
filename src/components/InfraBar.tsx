"use client";

import type { NextPage } from "next";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { Bar, Pie, Doughnut } from "react-chartjs-2";

interface Props {
  data?: {
    labels: string[];
    datasets: [
      {
        data: number[];
        backgroundColor: string[];
        borderColor: string[];
        borderWidth: number;
      }
    ];
  };
}

export const BarChart: NextPage<Props> = ({ data }) => {
  ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
  );

  const doughnutData = {
    labels: ["電気", "ガス", "水道", "ネット", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [6830, 5297, 7409 / 2, 4300, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  /** グラフデータ */
  const graphData = {
    labels: ["電気", "ガス", "水道", "ネット", "合計", "先月"],
    datasets: [
      {
        // label: "インフラ",
        data: [6830, 5297, 7409 / 2, 4300, 6830 + 5297 + 7409 / 2 + 4300, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  /** グラフオプション */
  const graphOption: any = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "インフラ",
      },
    },
  };

  return (
    <div>
      {/* <Doughnut data={doughnutData} /> */}
      {/* <Pie data={doughnutData} /> */}
      {/* グラフコンポーネントの呼び出し */}
      <Bar data={graphData} options={graphOption} />
    </div>
  );
};
