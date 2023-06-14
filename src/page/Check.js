import React from 'react'
import './Home.css'

import pen from '../img/pencil.png'

export default function Check() {
  return (
    <>
    {/* row one ------ */}
   <div className='container-fluid text-center mt-5 mb-5 bgt'>
    <h2 style={{color:"white"}}>Checkout</h2>
    <b><label style={{color:"white"}}>Home-</label></b><label style={{color:"white"}}>Checkout</label>
   </div>
    

    {/* row twooo----- */}
    <div className='container'>


    <div className='row linecode mb-5'>
        <div className='col text-center'>
            <img src={pen} alt='pen' /><label>Have a coupon?<u>Click here</u> to enter your code</label>
        </div>
    </div>

    <h5>Billing Details</h5><hr />

    <div className='row'>
        <div className='col'>  {/*form colum-- strt */}
        <div className='row'>
            <div className='col'>
                <label>First Name*</label><br />
                <input type={'text'} className='textval' />
            </div>
            <div className='col'>
            <label>Last Name*</label><br />
                <input type={'text'} className='textval'/>
            </div>
        </div><br />

        <label>Country*</label><br />
        <input type={'text'} className='textval' /><br /><br />

        <label>Address*</label><br />
        <input type={'text'} placeholder='Street Address' className='textval' /><br /><br />
        <input type={'text'} placeholder='Appartment' className='textval' /><br /><br />

        <label>Town/City*</label><br />
        <input type={'text'} className='textval' /><br /><br />

        <label>Postal code/Zip*</label><br />
        <input type={'text'} className='textval' /><br /><br />

        <div className='row'>
            <div className='col'>
                <label>Phone*</label><br />
                <input type={'number'} className='textval' />
            </div>
            <div className='col'>
            <label>Email*</label><br />
                <input type={'email'} className='textval'/>
            </div>
        </div><br/>

        <input type={'checkbox'} />  <label>&nbsp;&nbsp;Create an Account?</label><br /><br />
        <p>Create a Google Account · Manage your child's account and privacy settings · Set content filters for services like </p>

        <label>Account Password*</label><br />
        <input type={'password'} className='textval' /><br /><br />

        <input type={'checkbox'} />  <label>&nbsp;&nbsp;Ship to a diffrent Address?</label><br /><br />

        <label>Order Notes*</label><br />
        <input type={'text'} className='textval' placeholder='Notes about your order, e.g. Special notes for delivery' /><br /><br />


        </div>   {/*form colum-- end */}



        <div className='col-sm-3 p-3' style={{background:"rgb(245, 242, 242)"}}>   {/* colum 2-- strt */}  
            <h5>Your Order</h5><hr />
            <div className='row'>
                <div className='col'>
                    <h6>Products</h6>
                    <p>Vegitable pack</p>
                    <p>Fresh veg</p>
                    <p>Organic food</p>
                </div>
                <div className='col text-end'>
                <h6>Total</h6>
                    <p>$75.99</p>
                    <p>$150.05</p>
                    <p>$75.89</p>
                </div>
            </div>
            <hr />
            <div className='row'>
                <div className='col'>
                    <h6>Subtotal</h6>
                </div>
                <div className='col text-end'>
                   <h6>$750.09</h6> 
                </div>
            </div>
            <hr />
            <div className='row'>
                <div className='col'>
                    <h6>Total</h6>
                </div>
                <div className='col text-end'>
                   <h6 style={{color:"red"}}>$750.09</h6> 
                </div>
            </div>
            <hr />
            <input type={'checkbox'} /><label>&nbsp; Creat an Account?</label><br /><br />
            <p>Text that is unarticulated and styled differently from normal text, such as misspelled words or proper names in Chinese text. </p>
            <input type={'checkbox'} /><label>&nbsp; Check Payment</label><br />
            <input type={'checkbox'} /><label>&nbsp; Paypal</label><br /><br />
            <button className='porder'>PLACE ORDER</button>
            </div> {/*colum 2-- end*/}
    </div>





    </div>
    </>
  )
}
