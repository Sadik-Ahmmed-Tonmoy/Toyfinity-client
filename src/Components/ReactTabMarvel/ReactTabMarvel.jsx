import React, { useContext } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from '../Provider/AuthProvider';
AOS.init();

const ReactTabMarvel = ({marvelToy}) => {
  const {user} = useContext(AuthContext)

  const handleToast = () => {
    if (!user) {
      toast("Login First to see details !!")
    }
  }

  return (
    <div data-aos="fade-right">
      <div className="card w-auto bg-base-100 shadow-xl mb-2 md:mx-12">
    <figure><img className='w-80 h-60' src={marvelToy?.image} alt="Shoes" /></figure>
    <div className="card-body p-3 md:p-5">
      <h2 className="card-title">{marvelToy?.name}</h2>
      <p>{marvelToy?.discription}</p>
      <br />
      <p className='font-bold text-2xl'>Price: ${marvelToy?.price}</p>
      <div className="card-actions justify-end">
        <p>Ratings: {marvelToy?.ratings}<span className='flex'><AiFillStar className='text-yellow-400' /><AiFillStar className='text-yellow-400' /><AiFillStar className='text-yellow-400' /><AiFillStar className='text-yellow-400' /><AiFillStar className='text-yellow-400' /></span></p>
        <Link onClick={handleToast} to={`/tabToys/${marvelToy?._id}`}><button className="btn btn-primary">View Details</button></Link>
      </div>
    </div>
  </div>
    </div>
  );
};

export default ReactTabMarvel;