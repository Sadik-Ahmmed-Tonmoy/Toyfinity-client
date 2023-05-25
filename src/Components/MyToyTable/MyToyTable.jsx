import React, { useContext, useEffect, useState } from 'react';
import MyToysTableRow from '../MyToysTableRow/MyToysTableRow';

const MyToyTable = ({ allToys, reloadData, setReloadData }) => {


  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* head*/}
        <thead>
          <tr className='bg-slate-400'>
            <th>#</th>
            <th>Image</th>
            <th>Toy Name</th>
            <th>Seller Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Ratings</th>
            <th>Available Quantity</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>

          {
            allToys?.slice(0, 20)?.map((toy, i) => <MyToysTableRow setReloadData={setReloadData} reloadData={reloadData} key={toy._id} toy={toy} i={i}></MyToysTableRow>)
          }


        </tbody>
      </table>
    </div>
  );
};

export default MyToyTable;