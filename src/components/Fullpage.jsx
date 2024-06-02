import { DownOutlined } from "@ant-design/icons";

import { Button } from "antd";
const imageurl =
  "https://images.unsplash.com/photo-1495592822108-9e6261896da8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmV0d29yayUyMGRhdGF8ZW58MHx8MHx8fDA%3D";
const imageurl2 =
  "https://images.unsplash.com/photo-1510906594845-bc082582c8cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV0d29yayUyMGRhdGElMjBibGFja3xlbnwwfHwwfHx8MA%3D%3D";
const App = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <main className="container mx-auto py-6">
        <section
          className="bg-cover bg-center h-screen relative "
          style={{
            backgroundImage: `url(${imageurl})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold mb-4">
              Visualize Your Network Data
            </h1>
            <p className="text-xl mb-6 text-gray-200 max-w-2xl text-center">
              Dive deep into network traffic and security data with our powerful
              visualization tools. Gain actionable insights and improve your
              network security posture.
            </p>
            <Button
              type="primary"
              size="large"
              icon={<DownOutlined />}
              onClick={handleScroll}
            >
              Explore Now
            </Button>
          </div>
        </section>
        <section
          className="p-12 bg-cover bg-center h-screen relative"
          style={{
            backgroundImage: `url(${imageurl2})`,
          }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Quick Insights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900 to-indigo-700 text-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Top Source IPs</h3>
                <ul className="list-disc list-inside text-gray-100 space-y-1">
                  <li>8.42.77.171: 64 alerts</li>
                  <li>138.68.3.71: 17 alerts</li>
                  <li>185.53.91.55: 6 alerts</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-900 to-cyan-700 text-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Alert Severities</h3>
                <ul className="list-disc list-inside text-gray-100 space-y-1">
                  <li>Severity 2: 253 alerts</li>
                  <li>Severity 3: 1 alert</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-900 to-teal-700 text-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Top Destination Ports
                </h3>
                <ul className="list-disc list-inside text-gray-100 space-y-1">
                  <li>Port 1433: 41 alerts</li>
                  <li>Port 5060: 24 alerts</li>
                  <li>Port 22: 22 alerts</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-900 to-orange-700 text-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Distribution of Alerts by Protocol
                </h3>
                <ul className="list-disc list-inside text-gray-100 space-y-1">
                  <li>TCP: 241 alerts</li>
                  <li>UDP: 44 alerts</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-900 to-rose-700 text-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Distribution of Alerts by Category
                </h3>
                <ul className="list-disc list-inside text-gray-100 space-y-1">
                  <li>Misc Attack: 146 alerts</li>
                  <li>Potentially Bad Traffic: 64 alerts</li>
                  <li>Attempted Information Leak: 43 alerts</li>
                  <li>Not Suspicious Traffic: 1 alert</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-900 to-pink-700 text-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Traffic Data by Severity
                </h3>
                <ul className="list-disc list-inside text-gray-100 space-y-1">
                  <li>
                    Severity 2: Attempted Information Leak (43), Misc Attack
                    (146), Potentially Bad Traffic (64)
                  </li>
                  <li>Severity 3: Not Suspicious Traffic (1)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
