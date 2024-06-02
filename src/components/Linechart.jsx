import React, { useEffect, useState, useRef } from "react";
import { Line } from "@antv/g2plot";
import { Spin } from "antd";

const LineGraph = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const lineGraphRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fast-plots.onrender.com/heatmap_data"
        );
        const responseData = await response.json();
        const transformedData = responseData.data.map((d) => ({
          totalHours: parseInt(d.hours) + parseInt(d.minutes) / 60,
          value: d.value,
        }));

        setData(transformedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0 && !lineGraphRef.current) {
      renderLineGraph();
    }
  }, [data]);

  const renderLineGraph = () => {
    lineGraphRef.current = new Line(document.getElementById("container"), {
      data,
      xField: "totalHours",
      yField: "value",
      seriesField: "value",
      point: {
        size: 5,
        shape: "diamond",
        style: {
          fillOpacity: 0.8,
          stroke: "#f72111",
          lineWidth: 1,
        },
      },
      xAxis: {
        title: {
          text: "Total Hours (Hours + Minutes converted to Hours)",
        },
      },
      yAxis: {
        title: {
          text: "Value",
        },
      },
      tooltip: {
        formatter: (datum) => {
          return {
            name: "Value",
            value: datum.value,
            title: `Total Hours: ${datum.totalHours.toFixed(2)}`,
          };
        },
      },
      legend: {
        position: "top-right",
      },
      color: ({ value }) => {
        if (value < 1) return "#b8f5d5";
        if (value < 3) return "#FFA940";
        if (value < 5) return "#FFD666";
        if (value < 8) return "#A0D911";
        return "#52C41A";
      },
    });
    lineGraphRef.current.render();
  };

  return (
    <div className="p-20 bg-black text-white min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">Line Graph</h1>
      <p className="text-lg mb-8">
        This graph shows the relationship between total hours and the
        corresponding values. The data points are color-coded based on their
        values to provide a clear visual representation.
      </p>
      <div className="w-full h-96 relative">
        {loading && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Spin />
          </div>
        )}
        <div id="container" className="w-full h-full"></div>
      </div>
    </div>
  );
};

export default LineGraph;
