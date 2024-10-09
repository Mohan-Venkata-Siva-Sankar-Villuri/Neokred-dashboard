import React, { useEffect, useState, useMemo } from "react";

function RecentOrdersTable({ filter }) {
  const allOrders = useMemo(
    () => [
      {
        id: 3000,
        date: "2024-04-02",
        customer: "Dries Vincent",
        event: "Six Fingers — DJ Set",
        amount: "$80.00",
      },
      {
        id: 3001,
        date: "2024-05-19",
        customer: "Tom Cook",
        event: "Bear Hug: Live in Concert",
        amount: "$80.00",
      },
      {
        id: 3002,
        date: "2024-05-21",
        customer: "Dries Vincent",
        event: "Six Fingers — DJ Set",
        amount: "$114.99",
      },
      {
        id: 3003,
        date: "2024-04-12",
        customer: "Lindsay Walton",
        event: "Bear Hug: Live in Concert",
        amount: "$299.00",
      },
      {
        id: 3004,
        date: "2024-10-05",
        customer: "Whitney Francis",
        event: "We All Look The Same",
        amount: "$150.00",
      },
      {
        id: 3005,
        date: "2024-03-05",
        customer: "Michael Foster",
        event: "We All Look The Same",
        amount: "$80.00",
      },
      {
        id: 3006,
        date: "2024-01-23",
        customer: "Lindsay Walton",
        event: "Viking People",
        amount: "$80.00",
      },
      {
        id: 3007,
        date: "2024-08-25",
        customer: "Leonard Krasner",
        event: "Bear Hug: Live in Concert",
        amount: "$299.00",
      },
      {
        id: 3008,
        date: "2024-10-01",
        customer: "Tom Cook",
        event: "Viking People",
        amount: "$114.99",
      },
      {
        id: 3009,
        date: "2024-05-18",
        customer: "Dries Vincent",
        event: "Six Fingers — DJ Set",
        amount: "$299.00",
      },
      {
        id: 3010,
        date: "2024-01-19",
        customer: "Tom Cook",
        event: "Viking People",
        amount: "$150.00",
      },
      {
        id: 3011,
        date: "2023-10-17",
        customer: "Leslie Alexander",
        event: "We All Look The Same",
        amount: "$80.00",
      },
      {
        id: 3012,
        date: "2023-12-01",
        customer: "Dries Vincent",
        event: "Bear Hug: Live in Concert",
        amount: "$299.00",
      },
      {
        id: 3013,
        date: "2024-10-04",
        customer: "Courtney Henry",
        event: "We All Look The Same",
        amount: "$299.00",
      },
      {
        id: 3014,
        date: "2023-10-28",
        customer: "Michael Foster",
        event: "Six Fingers — DJ Set",
        amount: "$299.00",
      },
      {
        id: 3015,
        date: "2024-08-16",
        customer: "Lindsay Walton",
        event: "Bear Hug: Live in Concert",
        amount: "$299.00",
      },
      {
        id: 3016,
        date: "2023-12-14",
        customer: "Tom Cook",
        event: "Viking People",
        amount: "$114.99",
      },
      {
        id: 3017,
        date: "2024-02-17",
        customer: "Leonard Krasner",
        event: "Viking People",
        amount: "$80.00",
      },
      {
        id: 3018,
        date: "2024-07-26",
        customer: "Dries Vincent",
        event: "Bear Hug: Live in Concert",
        amount: "$114.99",
      },
      {
        id: 3019,
        date: "2024-02-16",
        customer: "Tom Cook",
        event: "Six Fingers — DJ Set",
        amount: "$114.99",
      },
      {
        id: 3020,
        date: "2023-10-23",
        customer: "Lindsay Walton",
        event: "We All Look The Same",
        amount: "$80.00",
      },
      {
        id: 3021,
        date: "2023-12-09",
        customer: "Michael Foster",
        event: "Six Fingers — DJ Set",
        amount: "$299.00",
      },
      {
        id: 3022,
        date: "2024-09-21",
        customer: "Emily Selman",
        event: "Viking People",
        amount: "$299.00",
      },
      {
        id: 3023,
        date: "2024-01-07",
        customer: "Lindsay Walton",
        event: "Viking People",
        amount: "$114.99",
      },
      {
        id: 3024,
        date: "2024-06-28",
        customer: "Leslie Alexander",
        event: "Six Fingers — DJ Set",
        amount: "$80.00",
      },
      {
        id: 3025,
        date: "2024-04-15",
        customer: "Courtney Henry",
        event: "Viking People",
        amount: "$80.00",
      },
      {
        id: 3026,
        date: "2023-11-20",
        customer: "Michael Foster",
        event: "Six Fingers — DJ Set",
        amount: "$150.00",
      },
      {
        id: 3027,
        date: "2024-04-03",
        customer: "Leonard Krasner",
        event: "Six Fingers — DJ Set",
        amount: "$80.00",
      },
      {
        id: 3028,
        date: "2024-08-22",
        customer: "Kristin Watson",
        event: "Six Fingers — DJ Set",
        amount: "$150.00",
      },
      {
        id: 3029,
        date: "2024-05-26",
        customer: "Kristin Watson",
        event: "Bear Hug: Live in Concert",
        amount: "$80.00",
      },
    ],
    []
  );

  const [filteredOrders, setFilteredOrders] = useState(allOrders); // Display all orders by default

  useEffect(() => {
    const now = new Date();
    let filtered = [];

    if (filter === "week") {
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(now.getDate() - 7);
      filtered = allOrders.filter(
        (order) => new Date(order.date) >= oneWeekAgo
      );
    } else if (filter === "month") {
      const oneMonthAgo = new Date();
      oneMonthAgo.setDate(now.getDate() - 30);
      filtered = allOrders.filter(
        (order) => new Date(order.date) >= oneMonthAgo
      );
    } else if (filter === "year") {
      const oneYearAgo = new Date();
      oneYearAgo.setFullYear(now.getFullYear() - 1);
      filtered = allOrders.filter(
        (order) => new Date(order.date) >= oneYearAgo
      );
    }

    setFilteredOrders(filtered);
  }, [filter, allOrders]);

  return (
    <div className="overflow-x-auto mt-8">
      <h2 className="text-lg font-semibold mb-4 text-white">Recent orders</h2>
      <div className="overflow-hidden rounded-lg bg-gray-800">
        <table className="min-w-full table-auto lg:table-fixed">
          <thead className="text-gray-400 border-b border-gray-600">
            <tr>
              <th className="px-6 py-3 text-left w-1/6">Order number</th>
              <th className="px-6 py-3 text-left w-1/6">Purchase date</th>
              <th className="px-6 py-3 text-left w-1/4">Customer</th>
              <th className="px-6 py-3 text-left w-1/4">Event</th>
              <th className="px-6 py-3 text-left w-1/6">Amount</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {filteredOrders.map((order) => (
              <tr key={order.id} className="border-b border-gray-700">
                <td className="px-6 py-4">{order.id}</td>
                <td className="px-6 py-4">
                  {new Date(order.date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">{order.customer}</td>
                <td className="px-6 py-4">{order.event}</td>
                <td className="px-6 py-4">{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentOrdersTable;
