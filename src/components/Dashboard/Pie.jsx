import React from "react";
import { Pie } from "react-chartjs-2";
import { Box, Heading, useColorModeValue } from "@chakra-ui/react";

const PieChart = ({ data }) => {
  const sectors = {};

  data.forEach((entry) => {
    if (!sectors[entry.sector]) {
      sectors[entry.sector] = 0;
    }
    sectors[entry.sector] += entry.intensity;
  });

  const getRandomColor = (index) => {
    const colors = [
      "#8A2BE2",
      "#FF1493",
      "#1E90FF",
      "#FFA500",
      "#8B008B",
      "#556B2F",
      "#FF6347",
      "#00FF00",
      "#4B0082",
      "#DC143C",
      "#00FFFF",
      "#9932CC",
      "#6A5ACD",
      "#F08080",
      "#FFA07A",
      "#20B2AA",
      "#FFC0CB",
      "#32CD32",
      "#D8BFD8",
      "#FF7F50",
    ];
    return colors[index % colors.length];
  };

  const chartData = {
    labels: Object.keys(sectors),
    datasets: [
      {
        data: Object.values(sectors),
        backgroundColor: Object.keys(sectors).map((_, index) =>
          getRandomColor(index)
        ),
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        position: "average",
      },
    },
    animation: {
      animateRotate: true, // Enable rotation animation
      animateScale: true, // Enable scaling animation
      duration: 2000, // Set animation duration
    },
  };

  return (
    <Box
      p={6}
      borderRadius={20}
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
      mt={50}
      ml={50}
      shadow="md"
      pb={100}
      bg={useColorModeValue("white", "gray.800")}
      maxHeight={700}
      overflow="hidden"
    >
      <Heading as="h2" mb={4}>
        Pie Chart
      </Heading>

      <Pie data={chartData} options={chartOptions} />
    </Box>
  );
};

export default PieChart;
