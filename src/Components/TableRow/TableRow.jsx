import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const TableRow = ({ toy, i }) => {

  const { user } = useContext(AuthContext)

  const {_id, image, name, sellerName, sellerEmail, subCategory, price, rating, availableQuantity,
    detailDescription } = toy;
  console.log(toy);

  const handleDetails = () => {
    if (!user) {
      toast("Login First to see details !!")
    }
  }

  return (
    <tr data-aos="zoom-in">
      <th>{i + 1}</th>
      <td><img className='w-28' src={image} alt="" /></td>
      <td>{name}</td>
      <td>{sellerName}</td>
      <td>{subCategory}</td>
      <td>${price}</td>
      <td>{availableQuantity}</td>
      <td><Link to={`/details/${_id}`}><button onClick={handleDetails} className='btn'>View Details</button></Link></td>

    </tr>
  );
};

export default TableRow; 