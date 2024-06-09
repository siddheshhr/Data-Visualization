import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Navbar from "./Navbar";
import IntensityChart from "./IntensityChart";
import Pie from "./Pie";
import TopicsRadarChart from "./TopicChart";
import CountryChart from "./Country";
import RegionChart from "./RegionChart";
import RelevanceBubbleChart from "./Relevance";
import LikelihoodRadarChart from "./LikelihoodChart";
import Footer from "./Footer";
import { ChakraProvider } from "@chakra-ui/react";

Chart.register(CategoryScale);

const Main = () => {
  const [data, setData] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const API_URL = "http://localhost:5000/getusers"; // Correct the URL if needed
      try {
        const response = await axios.get(`${API_URL}`);
        console.log(response.data); // Log the fetched data for debugging
        setData(response.data);
        setFilteredData(response.data); // Set the initial filtered data to the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDataFromApi();
  }, []);

  const handleTopicChange = (event) => {
    const topic = event.target.value;
    if (event.target.checked) {
      setSelectedTopics([...selectedTopics, topic]);
    } else {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    }
  };

  const applyFilters = () => {
    const filtered = data.filter((item) =>
      selectedTopics.length === 0 || selectedTopics.some((topic) => item.topics.includes(topic))
    );
    setFilteredData(filtered);
  };

  return (
    <ChakraProvider>
      <Navbar />
      <div className="mt-10 p-2">
        <div>
          <h3>Filter by Topics</h3>
          {Array.from(new Set(data.flatMap((item) => item.topics))).map((topic) => (
            <div key={topic}>
              <input
                type="checkbox"
                id={topic}
                value={topic}
                checked={selectedTopics.includes(topic)}
                onChange={handleTopicChange}
              />
              <label htmlFor={topic}>{topic}</label>
            </div>
          ))}
          <button onClick={applyFilters}>Apply Filters</button>
        </div>
        {filteredData.length > 0 ? (
          <div>
            <IntensityChart data={filteredData} />
            <Pie data={filteredData} />
            <TopicsRadarChart data={filteredData} />
            <CountryChart data={filteredData} />
            <RegionChart data={filteredData} />
            <RelevanceBubbleChart data={filteredData} />
            <LikelihoodRadarChart data={filteredData} />
          </div>
        ) : (
          <p>No data to display</p>
        )}
      </div>
      <Footer />
    </ChakraProvider>
  );
};

export default Main;