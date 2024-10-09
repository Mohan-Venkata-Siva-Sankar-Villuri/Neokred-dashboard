import React from 'react';

function OverviewCard({ title, value, change }) {
  const isPositiveChange = change.startsWith('+');

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h3 className="text-sm m-2">{title}</h3>
      <p className="text-2xl font-semibold m-2">{value}</p>
      <div className="flex items-center text-sm m-2">
      <p className={`${isPositiveChange ? 'text-green-500 bg-green-800' : 'text-red-500 bg-red-800'} p-1  rounded`}>
        {change}
      </p>
      <span className="ml-2 text-gray-400">from last week</span>
    </div>
    </div>
  );
}

export default OverviewCard;
