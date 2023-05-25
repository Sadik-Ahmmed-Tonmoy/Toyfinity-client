import React, { useEffect, useState } from 'react';
import { ScrollRestoration, useLoaderData, useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';
AOS.init();

const ViewDetails = () => {

  const { id } = useParams();

  const [allToysData, setAllToysData] = useState();


  useEffect(() => {
    fetch(`https://toyfinity-server.up.railway.app/details/${id}`)
      .then(res => res.json())
      .then(data => setAllToysData(data))
  }, [])

  return (
    <div>
      <Helmet>
        <title>View Details | Toyfinity</title>
      </Helmet>
      <div data-aos="flip-left"><img className='w-full h-96' src={allToysData?.image} alt="" /></div>
      <h2 className='m-5 font-bold text-4xl text-center'>{allToysData?.name}</h2>
      <div className='p-2'>
        <p><span className='font-bold'>Seller Name: </span>{allToysData?.sellerName}</p>
        <p className='mb-2'><span className='font-bold'>Seller Name: </span>{allToysData?.sellerEmail}</p>
        <p><span className='font-bold'>Category: </span>{allToysData?.subCategory}</p>
        <div className='flex justify-evenly'>
          <p><span className='font-bold'>Price: $</span>{allToysData?.price}</p>
          <p><span className='font-bold'>Rating: </span>{allToysData?.rating} </p>
        </div>
        <p><span className='font-bold'>Available Quantity: </span>{allToysData?.availableQuantity} pieces</p>
        <p className='my-5'><span className='font-bold'>Detail description: </span>{allToysData?.detailDescription}</p>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default ViewDetails;