import React from "react";
import Severtiychart from "./components/Severtiychart";
import DynamicChart from "./components/DynamicChart";
import Linechart from "./components/Linechart";
import Fullpage from "./components/Fullpage";

function App() {
  return (
    <>
      <div className="bg-black text-white min-h-screen">
        <main className="container mx-auto py-6">
          <Fullpage />
          <Severtiychart />
          <Linechart />
          <DynamicChart
            title="Top Source IPs Data"
            xAxisKey="Source IP"
            yAxisKey="Count"
            apiUrl="top_source_ips_data"
          />
          <DynamicChart
            title="Alert Severities Data"
            xAxisKey="Severity"
            yAxisKey="Count"
            apiUrl="alert_severities_data"
          />
          <DynamicChart
            title="Top Destination Ports Data"
            xAxisKey="Destination Port"
            yAxisKey="Count"
            apiUrl="top_destination_ports_data"
          />

          <DynamicChart
            title="Distribution of Alerts by Protocol"
            xAxisKey="Protocol"
            yAxisKey="Count"
            apiUrl="distribution_of_alerts_by_protocol"
          />

          <DynamicChart
            title="Top 3 Destination IPs Targeted"
            xAxisKey="Destination IP"
            yAxisKey="Count"
            apiUrl="top_3_destination_ips_targeted"
          />

          <DynamicChart
            title="Distribution of Alerts by Category"
            xAxisKey="Category"
            yAxisKey="Count"
            apiUrl="distribution_of_alerts_by_category"
          />
        </main>
      </div>
    </>
  );
}

export default App;
