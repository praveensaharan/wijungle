import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Table, ConfigProvider, theme } from "antd";
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  Cell,
} from "recharts";
import Loading from "./Loading";

const baseUrl = "https://fast-plots.onrender.com";

const DynamicChart = ({ title, xAxisKey, yAxisKey, dataKey, apiUrl }) => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/${apiUrl}`);
        const data = response.data.data.slice(1).map(([xValue, yValue]) => ({
          [xAxisKey]: xValue,
          [yAxisKey]: parseInt(yValue),
        }));
        setChartData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl, xAxisKey, yAxisKey]);

  const handleMouseEnter = (data, index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(-1);
  };

  const columns = [
    {
      title: xAxisKey,
      dataIndex: xAxisKey,
      key: xAxisKey,
    },
    {
      title: yAxisKey,
      dataIndex: yAxisKey,
      key: yAxisKey,
    },
  ];

  if (loading) {
    return <Loading />;
  }

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <div className="p-10 bg-black text-white min-h-screen">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <Row justify="center">
          <Col span={20}>
            <BarChart width={800} height={400} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey={xAxisKey} stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip
                contentStyle={{ backgroundColor: "#333", borderColor: "#444" }}
              />
              <Legend />
              <Bar dataKey={yAxisKey} fill="#8884d8">
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={index === activeIndex ? "#82ca9d" : "#8884d8"}
                    onMouseEnter={() => handleMouseEnter(entry, index)}
                    onMouseLeave={handleMouseLeave}
                  />
                ))}
              </Bar>
            </BarChart>
          </Col>
        </Row>
        <Row justify="center" style={{ marginTop: 20 }}>
          <Col span={20}>
            <Table
              dataSource={chartData}
              columns={columns}
              pagination={false}
              className=""
              scroll={{ x: true }}
              bordered
            />
          </Col>
        </Row>
      </div>
    </ConfigProvider>
  );
};

export default DynamicChart;
