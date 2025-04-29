import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

function Products() {
  const [addingProduct, setAddingProduct] = useState(false)
  const [itemName, setItemName] = useState("")
  const [itemDesc, setItemDesc] = useState("")
  const [itemPrice, setItemPrice] = useState()
  const [itemImage, setItemImage] = useState(null)
  const [products, setProducts] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3000/admin/allproducts')
    .then((res)=>{
      setProducts(res.data.message)
    })
    .catch((err)=>{
      toast.error(err.response.data.error)
    })
  }, [addingProduct])

  function handleAddProduct() {
    setAddingProduct(true)
  }

  function handleSubmitProduct(e){
    e.preventDefault()
    axios.post('http://localhost:3000/admin/addproduct', {itemName, itemDesc, itemPrice, itemImage},
      {
        headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    
      .then((res)=>{
        toast.success(res.data.message)
        setAddingProduct(false)
      })
      .catch((err)=>{
        toast.error(err.response.data.error)
      })
  }

  return (

    <div>
      <ToastContainer />
      <h1>View or Manage Products</h1>
      <table className="table">
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
          {products.length>0 ? (products.map((product, index) => (<tr key={index}>
            <th scope="row">{index+1}</th>
            <td>{product.itemName}</td>
            <td>{product.itemDesc}</td>
            <td>{product.itemPrice}</td>
            <td>
              <button className='btn btn-warning'>Edit</button>
              <button className='btn btn-danger ms-2'>Delete</button>
            </td>
          </tr>) )) : (<tr>
            <td>No products found</td>
          </tr>)}
          
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
          <div className="mb-3">
            <label htmlFor="itemImage" className="form-label">
              Item Image
            </label>
            <input
              type="file"
              className="form-control"
              id="itemImage"
              onChange={(e)=> setItemImage(e.target.files[0])}
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
