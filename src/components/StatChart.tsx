import { Bar } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);
import React from 'react';

// const data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'My First Dataset',
//       data: [65, 59, 80, 81, 56, 55, 40],
//       backgroundColor: 'rgba(255, 99, 132, 0.2)',
//       borderColor: 'rgba(255, 99, 132, 1)',
//       borderWidth: 1,
//     },
//   ],
// };

export default function StatChart(props) {
  const { stats } = props;

  if (!stats || stats.length === 0) {
    return <p>No stats to display.</p>;
  }
  const labels = stats.map((label) => label.stat.name);
  const data = stats.map((stat) => stat.base_stat);

  const data2 = {
    labels: labels,
    datasets: [
      {
        label: 'Base Stats',
        data: data,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        max: 150,
        min: 1,
      },
    },
  };

  return (
    <div>
      <Bar data={data2} options={options} />
    </div>
  );
}
