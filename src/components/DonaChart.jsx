// DonaChart.jsx
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Registrar elementos necesarios
ChartJS.register(ArcElement, Tooltip, Legend);

const DonaChart = () => {
  const data = {
    labels: ["Rojo", "Azul", "Amarillo"],
    datasets: [
      {
        label: "Cantidad",
        data: [300, 50, 100],
        backgroundColor: ["#11aa62ff", "#104263ff", "#FFCE56"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DonaChart;
