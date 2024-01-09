import React, { useState } from 'react';

function SuscriberPage() {
  const [dynamicId, setDynamicId] = useState('');
  const GetAllSubscriber = () => {
    // Redirect to the specified page
    window.open('https://youtubesubscriber-backend-rhdu.onrender.com/subscriber', '_blank');
  };

  const GetAllSubscriberNames = () => {
    // Redirect to the specified page
    window.open('https://youtubesubscriber-backend-rhdu.onrender.com/subscriber/name', '_blank');
  };

  const handleInputChange = (event) => {
    // Update the dynamicId state as the user types
    setDynamicId(event.target.value);
  };

  const DynamicRender = () => {
    // Open a new tab with the dynamic ID in the URL
    window.open(`https://youtubesubscriber-backend-rhdu.onrender.com/subscriber/${dynamicId}`, '_blank');
  };

  const getDoc = () => {
    // Open a new tab with the dynamic ID in the URL
    window.open(`https://documenter.getpostman.com/view/26908207/2s9YeD7Cr1`, '_blank');
  };

  return (
    <div>
      <div class="flex h-screen items-center">
        <div class="w-1/5 lg:w-1/3  bg-green-400 h-12"></div>
        {/* outer box Started here */}
        <div class="w-3/5 lg:w-1/3 bg-gray-900 p-2 rounded">
          {/* youtube sucriber Heading and line here */}
          <div class="block uppercase tracking-wide text-white  text-2xl font-bold mb-2">
            YouTuber Suscriber
          </div>
          <hr class="mb-8 mx-2" />
          {/* inside box started here */}
          <div class="w-full max-w-lg bg-gray-400 rounded p-8">
            <div class="flex flex-wrap -mx-3 mb-6">
              {/* get All Suscriber Button */}
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  Get Suscribers Details
                </label>
                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-full" onClick ={GetAllSubscriber}>
                  Get All
                </button>
              </div>
              {/* get All suscriber Name div here */}
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Get Suscribers Name
                </label>
                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-full" onClick={GetAllSubscriberNames}>
                  Get Name
                </button>
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              {/* input for id div  */}
              <div class="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-SuscribersId">
                  Suscribers Id
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-SuscribersId" type="text" placeholder="123456789"  value={dynamicId} 
                  onChange={handleInputChange}/>
                <p class="text-gray-600 text-xs italic">
                  Sample id : 655dc92bf9da0691d1eed856
                </p>
              </div>
              {/* search button div here  */}
              <div class="w-full md:w-1/3 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Seacrh Id
                </label>
                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-full" onClick={DynamicRender}>
                  Search
                </button>
              </div>
            </div>

            {/* API documenatation button here  */}
            <div class="flex flex-wrap -mx-3 mb-2 items-center justify-center">
              <div class="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded  w-full md:w-" onClick={getDoc}>
                  API Schema Doc
                </button>
              </div>
            </div>
          </div>
          {/* box end here above */}
        </div>
        <div class="w-1/5 lg:w-1/3 bg-green-400 h-12"></div>
      </div>
    </div>
  );
}

export default SuscriberPage;