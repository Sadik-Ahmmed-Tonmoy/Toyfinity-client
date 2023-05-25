import React, { useEffect, useState } from 'react';
import Table from '../Table/Table';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ScrollRestoration } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';

AOS.init();

const AllToys = () => {

  const [allToysData, setAllToysData] = useState();
  const [searchValue, setSearchValue] = useState("")
  console.log(searchValue);


  useEffect(() => {
    fetch('https://toyfinity-server.up.railway.app/all-toys')
      .then(res => res.json())
      .then(data => setAllToysData(data))
  }, [])



  const handleSearch = () => {
    fetch(`https://toyfinity-server.up.railway.app/nameSearch/${searchValue}`)
      .then(res => res.json())
      .then(data => setAllToysData(data))
  }

  return (
    <div>
      <Helmet>
        <title>All Toys | Toyfinity</title>
      </Helmet>
      <div data-aos="zoom-in" className="form-control m-3">
        <div className='text-center'>
          <input type="text" onChange={(event) => setSearchValue(event.target.value)} placeholder="Type here..." className="input input-bordered w-full" />
          <button onClick={handleSearch} className="btn btn-wide m-3">Search</button>
        </div>
      </div>
      <h3 className='text-2xl font-bold text-center'>All Toys</h3>
      <Table allToysData={allToysData}></Table>
      {
        allToysData === undefined &&
        <div className='flex justify-center'>
          <MoonLoader
            color="#36d7b7"
            size={150}
          />
        </div>
      }
      <ScrollRestoration />
    </div>
  );
};

export default AllToys;