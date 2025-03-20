import React from "react";

function LayoutB() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">
        Layout B - Power User View
      </h2>
      <p className="text-gray-700 mb-2">Advanced features unlocked.</p>
      <ul className="list-disc pl-5 text-gray-600">
        <li>Advanced analytics dashboard</li>
        <li>Productivity shortcuts</li>
        <li>Customizable widgets</li>
      </ul>
    </div>
  );
}

export default LayoutB;
