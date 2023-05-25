import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { RxUpdate } from 'react-icons/rx';
import { MdDeleteForever } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const MyToysTableRow = ({ toy, i, reloadData, setReloadData }) => {

  const {_id, image, name, sellerName, sellerEmail, subCategory, price, rating, availableQuantity,
    detailDescription } = toy;

// delete
    const handleDelete = (_id) =>{
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {

          fetch(`https://toyfinity-server.up.railway.app/all-toys/${_id}`, {
            method: "DELETE"
          })
          .then(res => res.json())
          .then(data => {
            if(data.deletedCount > 0) {
              setReloadData(!reloadData)
              Swal.fire(
                'Deleted!',
                'Your toy has been deleted.',
                'success'
              )
            }
          })
         
        }
      })
    }


  return (
    <tr data-aos="zoom-in">
      <th>{i + 1}</th>
      <td><img className='w-28' src={image} alt="" /></td>
      <td>{name}</td>
      <td>{sellerName}</td>
      <td>{subCategory}</td>
      <td className='text-center'>${price}</td>
      <td className='text-center'>{rating}</td>
      <td className='text-center'>{availableQuantity}</td>
      <td><Link to={`/update/${_id}`}><button className='btn btn-outline'><RxUpdate className='me-1' /> Update</button></Link></td>
      <td><button onClick={() => handleDelete(_id)} className='btn btn-outline'> <MdDeleteForever className='me-1'/>Delete</button></td>

    </tr>
  );
};

export default MyToysTableRow;