import React from 'react'
import './Footer.css'



import f from '../img/f.png'
import t from '../img/t.png'
import i from '../img/in.png'
import pin from '../img/pin.png'
import atm from '../img/atm.png'
import paypal from '../img/paypal.png'
import cc from '../img/cc.png'
import skrill from '../img/skrill.png'
import visa from '../img/visa.png'


export default function Footer() {
  return (
    <>
    <div className='container-fluid nc'>
        <div className='container'>
            <div className='row pt-5 frow1'>
                <div className='col-sm-4'>
                    <h2 className='un'>OGANI</h2>
                    
                        <p>Address:60-49 Road 11378 New York</p>
                        <p>Phone: +p1&nbsp;989866</p>
                        <p>Email:hello@gmail.com</p>
                   
                </div>
                <div className='col text-center'>
                    <h5>Useful Links</h5>
                    <p> About us</p>
                    <p>About Our Shop</p>
                    <p>Secure Shopping</p>
                    <p>Privacy Policy</p>
                    <p>Our Sitemap</p>
                </div>
                <div className='col text-center'>
                    <p>&nbsp;</p>
                    <p> About us</p>
                    <p>Who We Are</p>
                    <p>Our Services</p>
                    <p>Projects </p>
                    <p>Contact</p>
                    
                </div>
                <div className='col-sm-4'>
                    <h5>Join our NewsLetter Now</h5>
                    <p>Get Email updates about our latest shop and special offers</p><br/>
                    <input type={'search'} className='search1' placeholder='Enter Your Mail'  />
                 <button style={{background:"rgb(10, 212, 44)",color:"white"}}>SUBSCRIBE</button>
                 <br /><br/>
                 <img src={f} alt='f' className='logo'/><img src={t} alt='t' className='logo' /> <img src={i} alt='f' className='logo' /><img src={pin} alt='t' className='logo' />
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col'>
                    <p>Copyight @2023 All right reserved | This template is made with puvi</p>
                </div>
                <div className='col text-end'>
                <img src={skrill} alt='f' className='logo1'/><img src={atm} alt='t' className='logo1' /> <img src={paypal} alt='f' className='logo1' /><img src={cc} alt='t' className='logo1' /><img src={visa} alt='t' className='logo1' />
                    </div>
            </div>
        </div>
    </div>
    
    </>
  )
}
