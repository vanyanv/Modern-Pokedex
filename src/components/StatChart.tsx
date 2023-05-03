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
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
        borderWidth: 2,
      },
    ],
  };
  const options = {
    indexAxis: 'y',

    scales: {
      x: {
        max: 150,
        min: 1,
      },
    },
  };

  return (
    <div className='rounded-lg pt-4 bg-gray-50'>
      <div className='pb-10'>
        <Bar data={data2} options={options} />
      </div>
    </div>
  );
}
