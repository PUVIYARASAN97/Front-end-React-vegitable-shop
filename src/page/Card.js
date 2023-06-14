import React, { useState } from 'react'
import './Home.css'


import veg from '../img/veg.png'
import veg1 from '../img/veg1.png'
import fruit from '../img/fruit.png'
import { useNavigate } from 'react-router-dom'

export default function Card() {

  // Increment +++++
    const [a,setName]=useState(0)
    function Increment(){
      setName(a+1)
  }
  const [b,setName1]=useState(0)
    function Increment1(){
      setName1(b+1)
  }
  const [c,setName2]=useState(0)
    function Increment2(){
      setName2(c+1)
  }

  // Decrement------

  const [ad,setNamed]=useState(1)
    function Decrement(){
      setNamed(a-ad)
  }
  const [bd,setNamed1]=useState(b)
    function Decrement1(){
      setNamed1(bd-1)
  }
  const [cd,setNamed2]=useState(0)
    function Decrement2(){
      setNamed2(cd-1)
  }
  




  const navigate = useNavigate();
  function handleClick(){
    navigate('/Check')
  }
  return (
    <>
    {/* row one ------ */}
   <div className='container-fluid text-center mt-5 mb-5 bgt'>
    <h2 style={{color:"white"}}>Shopping Cart</h2>
    <b><label style={{color:"white"}}>Home-</label></b><label style={{color:"white"}}>Shopping Cart</label>
   </div>

   {/* roe two ------ */}

   <div className='container'>

    <div className='row'>
      <div className='col-sm-2'>
        <h5>Products</h5>
      </div>
      <div className='col'>

      </div>
      <div className='col-sm-2'>
        <h5>Price</h5>
      </div>
      <div className='col-sm-2'>
        <h5>Quantity</h5>
      </div>
      <div className='col-sm-2'>
        <h5>Total</h5>
      </div>
    </div><hr />

    <div className='row'>
      <div className='col-sm-2' style={{background:"rgb(245, 242, 242)"}}>
      <img src={veg} alt='banana' width={150} />
      </div>
      <div className='col align-self-center'>
        <p>vegitable pack</p>
      </div>
      <div className='col-sm-2 align-self-center'>
        <h5>$55.00</h5>
      </div>
      <div className='col-sm-2 align-self-center'>
      <span className='dot4' onClick={Decrement}>-</span><span className='dot4'>{a}</span><span className='dot4' onClick={Increment}>+</span>
      </div>
      <div className='col-sm-2 align-self-center'>
        <h5>${a*55}</h5>
      </div>
    </div><hr />

    <div className='row'>
      <div className='col-sm-2' style={{background:"rgb(245, 242, 242)"}}>
      <img src={veg1} alt='banana' width={150} />
      </div>
      <div className='col align-self-center'>
        <p>vegitable pack</p>
      </div>
      <div className='col-sm-2 align-self-center'>
        <h5>$60.00</h5>
      </div>
      <div className='col-sm-2 align-self-center'>
      <span className='dot4' onClick={Decrement1}>-</span><span className='dot4'>{b}</span><span className='dot4' onClick={Increment1} >+</span>
      </div>
      <div className='col-sm-2 align-self-center'>
        <h5>${b*60}</h5>
      </div>
    </div><hr />

    <div className='row'>
      <div className='col-sm-2' style={{background:"rgb(245, 242, 242)"}}>
      <img src={fruit} alt='banana' width={150} />
      </div>
      <div className='col align-self-center'>
        <p>Fruit pack</p>
      </div>
      <div className='col-sm-2 align-self-center'>
        <h5>$105.00</h5>
      </div>
      <div className='col-sm-2 align-self-center'>
      <span className='dot4' onClick={Decrement2}>-</span><span className='dot4'>{c}</span><span className='dot4' onClick={Increment2} >+</span>
      </div>
      <div className='col-sm-2 align-self-center'>
        <h5>${c*105}</h5>
      </div>
    </div><hr />


    <div className='row'>
      <div  className='col-sm-6 text-start'>
        <h5 className='update'>CONTINEW SHOPPING</h5>
      </div>
      <div  className='col-sm-6 justify-content-end'>
        <h5 className='update1'>UPDATE CART</h5>
        </div>
    </div>


    <div className='row mt-5'>
      <div className='col'>
        <h5>Discount Codes</h5><br />
        <input type={'text'} placeholder='Enter your coupan code'/><button style={{background:"rgb(53, 41, 26)",color:"white"}}>APPLY COUPAN</button>
      </div>
      <div className='col pb-3' style={{background:"rgb(245, 242, 242)"}}>
      <h5>Cart Total</h5><br />
        <div className='row'>
          <div className='col'>
            <h6>Subtotal</h6>
          </div>
          <div className='col'>
            <h6 style={{color:"red"}}>$450.97</h6>
          </div>
        </div><hr />
        <div className='row'>
          <div className='col'>
    
            <h6>Total</h6>
          </div>
          <div className='col'>
            <h6 style={{color:"red"}}>$450.97</h6><br />
          </div>
        </div>
        <button className='check' onClick={ (e) => handleClick()}>PROCEED TO CHECKOUT</button>
      </div>
    </div>




   </div>
    </>
  )
}
