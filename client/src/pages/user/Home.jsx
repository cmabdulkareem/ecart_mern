import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

function Home() {

  const API = import.meta.env.VITE_BACKEND_URL

  const navigate = useNavigate()

  const [products, setProducts] = useState([])


  useEffect(() => {
    axios.get(`${API}/admin/allproducts`)
      .then((res) => {
        setProducts(res.data.message)
      })
      .catch((err) => {
        toast.error(err.response.data.error)
      })
  }, [])

    return (
      <div className="row justify-content-around">
        <ToastContainer />
        {products.length > 0 ? ( products.map((item, index)=> (<div key={index} className="card" style={{ width: "18rem" }}>
          <img src={`http://localhost:3000/images/products/${item._id}.jpg`} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.itemName}</h5>
            <p className="card-text">
              Desc: {item.itemDesc}
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Rs ₹: {item.itemPrice}</li>
          </ul>
          <div className="card-body">
            <a href="#" className="btn btn-primary">
              Card link
            </a>
          </div>
        </div>)) ): 
        ( <li>No items found</li> )}
      </div>
    )
  }

export default Home
