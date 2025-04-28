import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

function Products() {
  const [addingProduct, setAddingProduct] = useState(false)
  const [itemName, setItemName] = useState("")
  const [itemDesc, setItemDesc] = useState("")
  const [itemPrice, setItemPrice] = useState()
  const [products, setProducts] = useState([])

  function handleAddProduct() {
    setAddingProduct(true)
  }

  function handleSubmitProduct(e){
    e.preventDefault()
    axios.post('http://localhost:3000/admin/addproduct', {itemName, itemDesc, itemPrice})
      .then((res)=>{
        toast.success()
        console.log(res)
      })
      .catch((err)=>{
        toast.success()
        console.log(res)
      })
  }

  return (

    <div>
      <ToastContainer />
      <h1>View or Manage Products</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button className='btn btn-warning'>Edit</button>
              <button className='btn btn-danger ms-2'>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button className='btn btn-lg btn-success' onClick={handleAddProduct}>Add Product</button>


      <dialog open={addingProduct}>
        <h3>Add Product</h3>
        <form onSubmit={handleSubmitProduct}>
          <div className="mb-3">
            <label htmlFor="itemName" className="form-label">
              Item Name
            </label>
            <input
              type="text"
              className="form-control"
              id="itemName"
              value={itemName}
              onChange={(e)=> setItemName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="itemDesc" className="form-label">
              Item Description
            </label>
            <input
              type="text"
              className="form-control"
              id="itemDesc"
              value={itemDesc}
              onChange={(e)=> setItemDesc(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="itemPrice" className="form-label">
              Item Price
            </label>
            <input
              type="number"
              className="form-control"
              id="itemPrice"
              value={itemPrice}
              onChange={(e)=> setItemPrice(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </dialog>
    </div>


  )
}

export default Products
