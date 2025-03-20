import React from "react";
import LayoutA from "./LayoutA";
import LayoutB from "./LayoutB";
import { useSelector } from "react-redux";

function Dashboard() {
  const layout = useSelector((state) => state.ui.layout); // 'A' or 'B'

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Adaptive Frontend Dashboard
      </h1>
      {layout === "A" ? <LayoutA /> : <LayoutB />}
    </div>
  );
}

export default Dashboard;
