import React, { useState } from 'react';

function SuscriberPage() {
  const [dynamicId, setDynamicId] = useState('');
  const GetAllSubscriber = () => {
    // Redirect to the subscriber 
    window.open('https://youtube-subscriber-backend.onrender.com/subscriber', '_blank');
  };

  const GetAllSubscriberNames = () => {
    // Redirect to the subscriber name
    window.open('https://youtube-subscriber-backend.onrender.com/subscriber/name', '_blank');
  };

  const handleInputChange = (event) => {
    // Update the dynamicId state as the user types
    setDynamicId(event.target.value);
  };
  const DynamicRender = () => {
    // Open a new tab with the dynamic ID in the URL
    window.open(`https://youtube-subscriber-backend.onrender.com/subscriber/${dynamicId}`, '_blank');
  };



  return (
    <div className="container mx-auto my-8">
  <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
    <div className="text-2xl font-bold mb-4">YouTuber Subscriber</div>
    <hr className="mb-6" />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Get All Subscribers Button */}
      <div className="border p-4 rounded-md">
        <label className="block text-sm font-bold text-gray-700 mb-2">Get Subscribers Details</label>
        <button className="btn-blue" onClick={GetAllSubscriber}>
          Get All
        </button>
      </div>

      {/* Get All Subscriber Name Button */}
      <div className="border p-4 rounded-md">
        <label className="block text-sm font-bold text-gray-700 mb-2">Get Subscribers Name</label>
        <button className="btn-blue" onClick={GetAllSubscriberNames}>
          Get Name
        </button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {/* Input for Subscriber ID */}
      <div className="border p-4 rounded-md">
        <label className="block text-sm font-bold text-gray-700 mb-2">Subscriber ID</label>
        <input
          className="input-field"
          type="text"
          placeholder="123456789"
          value={dynamicId}
          onChange={handleInputChange}
        />
        <p className="text-gray-600 text-xs italic">Sample ID: 659d03d02d827b5d839acccf</p>
      </div>

      {/* Search Button */}
      <div className="border p-4 rounded-md">
        <label className="block text-sm font-bold text-gray-700 mb-2">Search ID</label>
        <button className="btn-blue" onClick={DynamicRender}>
          Search
        </button>
      </div>
    </div>
  </div>
</div>

  
  );
}

export default SuscriberPage;