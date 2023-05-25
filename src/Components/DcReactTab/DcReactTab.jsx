import React, { useContext } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
AOS.init();

const DcReactTab = ({ dcToy }) => {

  const {user} = useContext(AuthContext)

  const handleToast = () => {
    if (!user) {
      toast("Login First to see details !!")
    }
  }
  return (
    <div data-aos="flip-left">
      <div className="card w-auto bg-base-100 shadow-xl mb-2 md:mx-12">
      <figure><img className='w-80 h-60' src={dcToy?.image} alt="Shoes" /></figure>
      <div className="card-body p-3 md:p-5">
        <h2 className="card-title">{dcToy?.name}</h2>
        <p>{dcToy?.discription}</p>
        <br />
        <p className='font-bold text-2xl'>Price: ${dcToy?.price}</p>
        <div className="card-actions justify-end">
          <p>Ratings: {dcToy?.ratings}<span className='flex'><AiFillStar className='text-yellow-400' /><AiFillStar className='text-yellow-400' /><AiFillStar className='text-yellow-400' /><AiFillStar className='text-yellow-400' /><AiFillStar className='text-yellow-400' /></span></p>
          <Link onClick={handleToast} to={`/tabToys/${dcToy?._id}`}><button className="btn btn-primary">View Details</button></Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DcReactTab;