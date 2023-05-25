import React, { useContext, useEffect, useState } from 'react';
import MyToyTable from '../MyToyTable/MyToyTable';
import { AuthContext } from '../Provider/AuthProvider';
import { Helmet } from 'react-helmet';
import { ScrollRestoration } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';

const MyToys = () => {

  const { user } = useContext(AuthContext)

  const [allToys, setAllToys] = useState([]);
  const [reloadData, setReloadData] = useState("false")

  useEffect(() => {
    fetch(`https://toyfinity-server.up.railway.app/my-toys?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setAllToys(data))
  }, [user, reloadData])

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption === "default") {
      handleAllData();
    }
    else if (selectedOption === "lowToHigh") {
      handleLowToHigh();
    }
    else if (selectedOption === "highToLow") {
      handleHighToLow();
    }
  };

  const handleAllData = () => {
    console.log("all");
    fetch(`https://toyfinity-server.up.railway.app/my-toys?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setAllToys(data))
  };
  const handleLowToHigh = () => {
    console.log("Price: Low to high");
    fetch(`https://toyfinity-server.up.railway.app/my-toys/ascending?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setAllToys(data))
  };

  const handleHighToLow = () => {
    console.log("Price: High to low");
    fetch(`https://toyfinity-server.up.railway.app/my-toys/descending?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setAllToys(data))
  };

  return (
    <div>
      <Helmet>
        <title>My Toys | Toyfinity</title>
      </Helmet>
      <div data-aos="fade-right" className='flex justify-end md:mt-3'>
        <select className="select select-bordered w-full max-w-xs m-3" onChange={handleSelectChange}>
          <option value="default">Input order</option>
          <option value="lowToHigh">Price: Low to high</option>
          <option value="highToLow">Price: High to low</option>
        </select>
      </div>
      <MyToyTable allToys={allToys} reloadData={reloadData} setReloadData={setReloadData}></MyToyTable>
      {
        allToys.length === 0 &&
        <div className='flex justify-center mx-auto mt-8 md:w-3/12'>
          <div className="alert shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span className='text-center'>You did't add any toy yet <br/> To add: click on "add a toy" button on navbar.</span>
            </div>
          </div>
        </div>
      }
      <ScrollRestoration />
    </div>
  );
};

export default MyToys;