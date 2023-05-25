import React, { useEffect, useState } from 'react';
import TableRow from '../TableRow/TableRow';


const Table = ({allToysData}) => {



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
            <th>Available Quantity</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>

          {
            allToysData?.slice(0,20)?.map((toy , i) => <TableRow key={toy._id} toy={toy} i={i}></TableRow>)
          }
         
         
        </tbody>
      </table>
    </div>
  );
};

export default Table;