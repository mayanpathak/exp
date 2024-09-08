import React, { useState } from 'react';

const ExplorePool = () => {
  // Sample pool data
  const pools = [
    {
      id: 1,
      name: 'Electronics Pool',
      category: 'Electronics',
      select_end: '2024-09-10 12:00:00',
      min_number: 50,
      remaining_slots: 10,
    },
    {
      id: 2,
      name: 'Furniture Pool',
      category: 'Furniture',
      select_end: '2024-09-12 15:00:00',
      min_number: 30,
      remaining_slots: 5,
    },
    {
      id: 3,
      name: 'Clothing Pool',
      category: 'Clothing',
      select_end: '2024-09-13 09:00:00',
      min_number: 20,
      remaining_slots: 3,
    },
    {
      id: 4,
      name: 'Books Pool',
      category: 'Books',
      select_end: '2024-09-15 14:00:00',
      min_number: 100,
      remaining_slots: 60,
    },
    {
      id: 5,
      name: 'Kitchenware Pool',
      category: 'Home & Kitchen',
      select_end: '2024-09-16 18:00:00',
      min_number: 40,
      remaining_slots: 12,
    },
    {
      id: 6,
      name: 'Outdoor Equipment Pool',
      category: 'Sports & Outdoors',
      select_end: '2024-09-18 11:00:00',
      min_number: 80,
      remaining_slots: 25,
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');

  // Filter pools based on search input
  const filteredPools = pools.filter(pool =>
    pool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pool.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to calculate remaining time
  const getRemainingTime = (endTime) => {
    const endDate = new Date(endTime);
    const currentDate = new Date();
    const timeDiff = endDate - currentDate;

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours} hours, ${minutes} minutes remaining`;
  };
  const handleJoinPool = (poolName) => {
    alert(`You have successfully joined ${poolName}`);
  };
  return (
    <div className="container mx-auto p-8 bg-white">
      <h1 className="text-3xl font-bold text-center mb-8">Explore Pools</h1>

      {/* Search bar */}
      <div className="mb-8">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by category or pool name"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
      </div>

      {/* Pool display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPools.length > 0 ? (
          filteredPools.map((pool) => (
            <div key={pool.id} className="border rounded-lg p-6 shadow-md bg-grey-100">
              <h2 className="text-xl font-semibold mb-2">{pool.name}</h2>
              <p className="text-gray-700 mb-2">
                <strong>Category:</strong> {pool.category}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>End Time:</strong> {pool.select_end}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Min Number:</strong> {pool.min_number}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Remaining Slots:</strong> {pool.remaining_slots}
              </p>
              <p className="text-red-500 font-medium mb-4">
                {getRemainingTime(pool.select_end)}
              </p>
              <button className="bg-sky-500 text-white py-2 px-4 rounded hover:bg-sky-700" onClick={() => handleJoinPool(pool.name)}>
                Join Pool
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No pools match your search criteria.</p>
        )}
      </div>
    </div>
  );
};

export default ExplorePool;
