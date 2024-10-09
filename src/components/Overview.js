import React from "react";
import OverviewCard from "./OverviewCard";

function Overview({ filter, setFilter }) {
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="bg-gray-900 text-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-m">Overview</h1>
        <div>
          <select
            value={filter}
            onChange={handleFilterChange}
            className="bg-gray-800 text-white p-2 rounded-md w-full sm:w-48 md:w-64 lg:w-80"
          >
            <option className="sm:text-sm md:text-base lg:text-lg" value="week">
              Last week
            </option>
            <option
              className="sm:text-sm md:text-base lg:text-lg"
              value="month"
            >
              Last month
            </option>
            <option className="sm:text-sm md:text-base lg:text-lg" value="year">
              Last year
            </option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <OverviewCard title="Total revenue" value="$2.6M" change="+4.5%" />
        <OverviewCard title="Average order value" value="$455" change="-0.5%" />
        <OverviewCard title="Tickets sold" value="5,888" change="+4.5%" />
        <OverviewCard title="Pageviews" value="823,067" change="+21.2%" />
      </div>
    </div>
  );
}

export default Overview;
