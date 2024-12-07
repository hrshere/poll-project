import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const BarChart = () => {
  const chartRef = useRef(null); // Create a reference to the canvas element

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d'); // Access the canvas context

    // Create a new Chart instance
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Aasdfasdfsadfsdfs', 'Basdfsafsdf', 'Csadfsdfasdfsadfsdfsdfasfs', 'Dsdfasdfsdfsdfdsf'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5],
            borderWidth: 1,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ]
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Cleanup function to destroy the chart on component unmount
    return () => {
      myChart.destroy();
    };
  }, []); // Empty dependency array to run only once

  return <canvas ref={chartRef}></canvas>; // Canvas element for Chart.js
};

export default BarChart;
