import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Box, Heading } from '@chakra-ui/react';

const TopicsPolarAreaChart = ({ data }) => {
  // Create a map to store total relevance for each topic
  const topicRelevanceMap = data.reduce((acc, item) => {
    acc[item.topic] = (acc[item.topic] || 0) + item.relevance;
    return acc;
  }, {});

  const topics = Object.keys(topicRelevanceMap);
  const chartData = {
    labels: topics,
    datasets: [
      {
        data: Object.values(topicRelevanceMap),
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 205, 86, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scale: {
      ticks: {
        beginAtZero: true,
        stepSize: 0.5,
        max: 2,
      },
    },
  };
{/* <div style={{ margin: '50px', padding: '12px', fontFamily: 'Arial, sans-serif', borderRadius: '8px', boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.1)' }}>
      <Heading as="h2" mb={4}>Intensity Chart</Heading>
      <Bar data={chartData} options={chartOptions} plugins={[ChartDataLabels]} />
    </div> */}
  return (
    <div style={{ margin: '50px', padding: '12px', fontFamily: 'Arial, sans-serif', borderRadius: '8px', boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.1)'}}>
      <Box width="800px" height="850px">  
      <Heading as="h2" mb={3}>
        Topics Chart
      </Heading>
      <PolarArea data={chartData} options={chartOptions} />
    </Box>
    </div>
    
  );
};

export default TopicsPolarAreaChart;
