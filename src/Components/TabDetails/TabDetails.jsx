import React, { useEffect, useState } from 'react';
import { ScrollRestoration, useLoaderData, useParams } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';
AOS.init();

const TabDetails = () => {

  const { id } = useParams();

  const [allToysData, setAllToysData] = useState();


  useEffect(() => {
    fetch(`https://toyfinity-server.up.railway.app/tabToys/${id}`)
      .then(res => res.json())
      .then(data => setAllToysData(data))
  }, [])


  return (
    <div>
      <Helmet>
        <title>View Details | Toyfinity</title>
      </Helmet>
      <h2 className='m-3 font-bold text-3xl text-center'>Toy Details</h2>
      <div className='flex justify-center'>
        <div data-aos="flip-down">
          <img className='w-96 h-96' src={allToysData?.image} alt="" />
        </div>
      </div>
      <h2 className='m-5 font-bold text-4xl text-center'>{allToysData?.name}</h2>
      <div className='p-2 text-center'>
        <p className='my-2'><span className='font-bold'>Seller Name: </span>{allToysData?.sellerName}</p>
        <p className='my-2'><span className='font-bold'>Seller Name: </span>{allToysData?.sellerEmail}</p>
        <p><span className='font-bold'>Category: </span>{allToysData?.subCategory}</p>
        <p><span className='font-bold'>Price: $</span>{allToysData?.price}</p>
        <p className='flex items-center justify-center'><span className='font-bold'>Rating:  </span>{allToysData?.rating} <span className='flex'> <AiFillStar className='text-yellow-400' /><AiFillStar className='text-yellow-400' /><AiFillStar className='text-yellow-400' /><AiFillStar className='text-yellow-400' /><AiFillStar className='text-yellow-400' /></span></p>
        <p><span className='font-bold'>Available Quantity: </span>{allToysData?.availableQuantity} pieces</p>
        <p className='my-5'><span className='font-bold'>Detail description: </span>{allToysData?.detailDescription}</p>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default TabDetails;