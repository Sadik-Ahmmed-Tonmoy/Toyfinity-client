import React, { useContext } from 'react';
import { ScrollRestoration, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const UpdateToy = () => {
  

  const toy = useLoaderData();
  const {_id, image, name, sellerName, sellerEmail, subCategory, price, rating, availableQuantity,
    detailDescription } = toy;

    const { user } = useContext(AuthContext)

    const handleUpdate = event => {
      event.preventDefault()
      const name = event.target.toyName.value;
      const image = event.target.image.value;
      const sellerName = event.target.sellerName.value;
      const sellerEmail = event.target.sellerEmail.value;
      const subCategory = event.target.subCategory.value;
      const price = event.target.price.value;
      const rating = event.target.rating.value;
      const availableQuantity = event.target.availableQuantity.value;
      const detailDescription = event.target.detailDescription.value;
  
      const updatedData = {
        name, image, sellerName, sellerEmail, subCategory, price, rating, availableQuantity, detailDescription
      }
  
      fetch(`https://toyfinity-server.up.railway.app/update/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(updatedData)
      })
        .then(res => res.json())
        .then(data => {
          if (data.modifiedCount > 0) {
            Swal.fire(
              'Successful',
              'Updated toy info!',
              'success'
            )
          }
  
        })
  
    }
  

  return (
    <div>
      <Helmet>
        <title>Update Toy Details | Toyfinity</title>
      </Helmet>
      <h2 className='text-center font-bold text-2xl m-3'>Update Toy Details</h2>
    <form onSubmit={handleUpdate}>
      <div className='md:grid md:grid-cols-2 gap-3'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Toy Name</span>
          </label>
          <input type="text" required name='toyName' defaultValue={name} placeholder="Toy Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input type="url" required name='image' defaultValue={image} placeholder="Toy Image URL" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Name</span>
          </label>
          <input type="text" required name='sellerName' defaultValue={user?.displayName} placeholder="Seller Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Email</span>
          </label>
          <input type="email" required name='sellerEmail' defaultValue={user?.email} placeholder="Seller Email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Sub Category</span>
          </label>
          <select required name='subCategory' defaultValue={subCategory} className="select select-bordered w-full">
            <option disabled>Select Sub Category</option>
            <option>Marvel Universe Toy</option>
            <option>DC Universe Toy</option>
            <option>Transformers toy</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input required type="number" name='price' defaultValue={price} placeholder="$Price" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input required type="number" name='rating' defaultValue={rating} placeholder="Rating" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input required type="number" name='availableQuantity' defaultValue={availableQuantity} placeholder="Available Quantity" className="input input-bordered" />
        </div>
      </div>
      <div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Detail description</span>
          </label>
          <textarea required type="text" name='detailDescription' defaultValue={detailDescription} placeholder="Detail description" className="textarea textarea-bordered textarea-lg w-full " ></textarea>
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn btn-primary" value="Update Toy Info" />
        </div>
      </div>
    </form>
    <ScrollRestoration />
  </div>
  );
};

export default UpdateToy;