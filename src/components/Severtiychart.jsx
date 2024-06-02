import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Table, ConfigProvider, theme } from "antd";
import Loading from "./Loading";

const TrafficChart = () => {
  const [data, setData] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fast-plots.onrender.com/data_of_alerts_by_category_and_severity"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return (
      <div className="text-white">
        <Loading />
      </div>
    );
  }

  const flattenData = Object.keys(data.data).map((severity) => {
    return {
      severity: `Severity ${severity}`,
      ...data.data[severity],
    };
  });

  const columns = [
    {
      title: "Severity",
      dataIndex: "severity",
      key: "severity",
    },
    {
      title: "Attempted Information Leak",
      dataIndex: "Attempted Information Leak",
      key: "Attempted Information Leak",
    },
    {
      title: "Misc Attack",
      dataIndex: "Misc Attack",
      key: "Misc Attack",
    },
    {
      title: "Not Suspicious Traffic",
      dataIndex: "Not Suspicious Traffic",
      key: "Not Suspicious Traffic",
    },
    {
      title: "Potentially Bad Traffic",
      dataIndex: "Potentially Bad Traffic",
      key: "Potentially Bad Traffic",
    },
  ];

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.compactAlgorithm,
      }}
    >
      <div className="p-10 bg-black text-white min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Traffic Data by Severity</h1>
        <p className="text-lg mb-8">
          This chart and table display the traffic data categorized by severity.
          The bars represent different types of traffic activities, helping to
          visualize the frequency of each type within each severity category.
        </p>
        <div className="flex justify-center mb-8">
          <BarChart width={800} height={400} data={flattenData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="severity" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip
              contentStyle={{ backgroundColor: "#333", borderColor: "#444" }}
            />
            <Legend />
            <Bar
              dataKey="Attempted Information Leak"
              stackId="a"
              fill="#8884d8"
            />
            <Bar dataKey="Misc Attack" stackId="a" fill="#82ca9d" />
            <Bar dataKey="Not Suspicious Traffic" stackId="a" fill="#ffc658" />
            <Bar dataKey="Potentially Bad Traffic" stackId="a" fill="#ff7300" />
          </BarChart>
        </div>
        <Table
          dataSource={flattenData}
          columns={columns}
          pagination={false}
          className=""
          scroll={{ x: true }}
          bordered
        />
      </div>
    </ConfigProvider>
  );
};

export default TrafficChart;
