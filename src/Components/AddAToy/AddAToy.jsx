import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import { ScrollRestoration } from 'react-router-dom';

const AddAToy = () => {

  const { user } = useContext(AuthContext)

  const handleSubmit = event => {
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
    console.log(name, image, sellerName, sellerEmail, subCategory, price, rating, availableQuantity, detailDescription);

    const toyData = {
      name, image, sellerName, sellerEmail, subCategory, price, rating, availableQuantity, detailDescription
    }

    fetch("https://toyfinity-server.up.railway.app/add-a-toy", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(toyData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire(
            'Successful',
            'Added a new toy!',
            'success'
          )
        }

      })

  }

  return (
    <div>
      <Helmet>
        <title>Add A Toy | Toyfinity</title>
      </Helmet>
      <form onSubmit={handleSubmit}>
        <div className='md:grid md:grid-cols-2 gap-3'>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <input type="text" required name='toyName' placeholder="Toy Name" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input type="url" required name='image' placeholder="Toy Image URL" className="input input-bordered" />
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
            <select placeholder='Select Sub Category' required name='subCategory' className="select select-bordered w-full">
              {/* <option disabled selected>Select Sub Category</option> */}
              <option></option>
              <option>Marvel Universe Toy</option>
              <option>DC Universe Toy</option>
              <option>Transformers toy</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input required type="number" name='price' placeholder="$Price" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input required type="number" name='rating' placeholder="Rating" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input required type="number" name='availableQuantity' placeholder="Available Quantity" className="input input-bordered" />
          </div>
        </div>
        <div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Detail description</span>
          </label>
          <textarea required type="text" name='detailDescription' placeholder="Detail description" className="textarea textarea-bordered textarea-lg w-full " ></textarea>
        </div>
          <div className="form-control mt-6">
            <input type="submit" className="btn btn-primary" value="Submit" />
          </div>
        </div>
      </form>
      <ScrollRestoration />
    </div>
  );
};

export default AddAToy;