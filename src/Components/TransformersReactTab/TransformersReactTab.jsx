import React, { useContext } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
AOS.init();

const TransformersReactTab = ({ transToy }) => {

  const {user} = useContext(AuthContext)

  const handleToast = () => {
    if (!user) {
      toast("Login First to see details !!")
    }
  }

  return (
    <div data-aos="zoom-out">
      <div className="card w-auto bg-base-100 shadow-xl mb-2 md:mx-12">
        <figure><img className='w-80 h-60' src={transToy?.image} alt="Shoes" /></figure>
        <div className="card-body p-3 md:p-5">
          <h2 className="card-title">{transToy?.name}</h2>
          <p>{transToy?.discription}</p>
          <br />
          <p className='font-bold text-2xl'>Price: ${transToy?.price}</p>
          <div className="card-actions justify-end">
            <p>Ratings: {transToy?.ratings}<span className='flex'><AiFillStar className='text-yellow-400' /><AiFillStar className='text-yellow-400' /><AiFillStar className='text-yellow-400' /><AiFillStar className='text-yellow-400' /><AiFillStar className='text-yellow-400' /></span></p>
            <Link onClick={handleToast} to={`/tabToys/${transToy?._id}`}><button className="btn btn-primary">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformersReactTab;