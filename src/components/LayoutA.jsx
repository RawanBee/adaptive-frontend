import React from "react";

function LayoutA() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Layout A - Beginner View</h2>
      <p className="text-gray-700 mb-2">
        Welcome to the onboarding experience!
      </p>
      <ul className="list-disc pl-5 text-gray-600">
        <li>Step-by-step tutorials</li>
        <li>Getting started checklist</li>
        <li>Helpful tips and tricks</li>
      </ul>
    </div>
  );
}

export default LayoutA;
