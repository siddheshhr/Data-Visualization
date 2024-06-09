import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Heading } from '@chakra-ui/react';

const IntensityChart = ({ data }) => {
  // Sample size adjustment to avoid overlapping
  const sampledData = data.filter((_, index) => (index % 2 === 0 && index%6 ===0)); // Adjust the sampling rate as needed

  const intensityData = sampledData.map(item => item.intensity);
  const years = sampledData.map(item => item.start_year);

  const getColor = (value) => {
    const colors = [
      '#2FF3E0', // Green
      '#F8D210', // Yellow
      '#FA26A0', // Orange
      '#F51720', // Red
    ];
    const threshold = Math.max(...intensityData) / 4;
    if (value < threshold) {
      return colors[0];
    } else if (value < threshold * 2) {
      return colors[1];
    } else if (value < threshold * 3) {
      return colors[2];
    } else {
      return colors[3];
    }
  };

  const chartData = {
    labels: years,
    datasets: [
      {
        label: 'Intensity',
        backgroundColor: intensityData.map((value) => getColor(value)),
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 0.2,
        data: intensityData,
      },
    ],
  };

  const chartOptions = {
    layout: {
      padding: 20, // Adjust padding
    },
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        cornerRadius: 5,
        displayColors: false,
      },
      legend: {
        display: false,
      },
      datalabels: {
        anchor: 'end',
        align: 'end', // Adjust alignment
        offset: -8, // Adjust offset
        font: {
          size: 9, // Reduce font size
          weight: 'bold',
        },
        formatter: (value) => value + '%',
        color: 'black', // Change label color
        shadowBlur: 3,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: 'Roboto',
            size:10, 
            weight: 'bold',
          },
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: 'Arial',
            size: 12, // Reduce font size
            weight: 'bold',
          },
          callback: (value) => value !== null ? (value + '%') : ('0'+'%'),
        },
      },
    },
    animation: {
      duration: 4000, // Reduce animation duration
      easing: 'easeInOutQuart',
      mode: 'progressive',
    },
  };

  return (
    <div style={{ margin: '50px', padding: '12px', fontFamily: 'Arial, sans-serif', borderRadius: '8px', boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.1)' }}>
      <Heading as="h2" mb={4}>Intensity Chart</Heading>
      <Bar data={chartData} options={chartOptions} plugins={[ChartDataLabels]} />
    </div>
  );
};

export default IntensityChart;
