import React from "react";

const TopicsFilter = ({ data, setData }) => {
  const handleTopicChange = (e) => {
    const topic = e.target.value;
    const filteredData = data.filter((item) => item.topics.includes(topic));
    setData(filteredData);
  };

  return (
    <div>
      <label htmlFor="topics">Topics:</label>
      <select id="topics" name="topics" onChange={handleTopicChange}>
        <option value="">All Topics</option>
        {data.reduce((topics, item) => {
          item.topics.forEach((topic) => {
            if (!topics.includes(topic)) topics.push(topic);
          });
          return topics;
        }, []).map((topic, index) => (
          <option key={index} value={topic}>{topic}</option>
        ))}
      </select>
    </div>
  );
};

export default TopicsFilter;
