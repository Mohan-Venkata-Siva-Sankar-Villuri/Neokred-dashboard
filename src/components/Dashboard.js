import React, { useState } from 'react';
import Overview from './Overview';
import RecentOrdersTable from './RecentOrdersTable';

function Dashboard({ sidebarOpen, setSidebarOpen} ) {
  const [filter, setFilter] = useState('week');

  return (
    <div className="flex-1 p-6 lg:pl-10 bg-gray-900 text-white max-h-180 overflow-y-auto" onClick={()=>setSidebarOpen(false)}>
      <h1 className="text-xl mb-6">Good afternoon, Erica</h1>
      <Overview filter={filter} setFilter={setFilter} />
      <RecentOrdersTable filter={filter} />
    </div>
  );
}

export default Dashboard;
