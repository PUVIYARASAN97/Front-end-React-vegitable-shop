import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'

import mail from '../img/mail.png'
import f from '../img/f.png'
import t from '../img/t.png'
import i from '../img/in.png'
import pin from '../img/pin.png'
import flag from '../img/flag.png'
import user from '../img/user.png'
import heart from '../img/heart.png'
import shop from '../img/shop.png'
import cal from '../img/cal.png'


export default function Navbar() {
  return (
    <>
    
    <div className='container-fluid '>
        <div className='row pt-1 pb-1'>
            <div className='col-sm-3 text-center nc'>
                <img src={mail} alt='mail' /><label>hello@gmail.com</label>
            </div>
            <div className='col-sm-4 nc'>
                <label>Free Shopping for all Order of 599</label>
            </div>
            <div className='col-sm-2 text-end nc'>
            <img src={f} alt='f' className='logo'/><img src={t} alt='t' className='logo' /> <img src={i} alt='f' className='logo' /><img src={pin} alt='t' className='logo' />
            </div>
            <div className='col-sm-1 nc'>
              <select className='drop'>
                <option ><img src={user} alt='flag' />English</option>
                <option><img src={flag} alt='flag' />Tamil</option>
              </select>
            </div>
            <div className='col-sm-2 nc'>
            <img src={user} alt='user' /><label>Login</label>
            </div>
        </div>
    </div>
    <div className='container'>
        <div className='row mt-4'>
        <div className='col-sm-2'>
        <h3>OGANI</h3>
        </div>
        <div className='col-sm-6 text-center' >
        <b><Link to='/' className='link'>Home</Link>
         <Link to='/Shop'className='link'>Shop</Link>
         <Link to='/Card'className='link'>Card</Link>
         <Link className='link'>Blog</Link>
        <Link className='link' >Contact</Link></b>
        </div>
        <div className='col-sm-4 text-end'>
            <img src={heart} alt='heart' className='lh' /><img src={shop} alt='shop' className='lh' /><label className='lh'>item&nbsp;</label><b><label>$150.00</label></b>
        </div>
        </div>
        <div className='row mt-3'>
            <div className='col-sm-3 pt-2'>
                <select className='drop1'>
                    <option>All Department</option>
                    <option>Fresh Meat</option>
                    <option>Vegitable</option>
                    <option>Fruit</option>
                    <option>Ocean Food</option>
                    <option>Fastfood</option>
                    <option>Eggs</option>
                    <option>All Department</option>
                    <option>Fresh Meat</option>
                    <option>Vegitable</option>
                    <option>Fruit</option>
                    <option>Ocean Food</option>
                </select>
            </div>
            <div className='col-sm-6  a pt-3'>
                <select  className='search'>
                    <option>All Categories</option>
                </select>
                <input type={'search'} className='search1' placeholder='What you Need?'  />
                <button style={{background:"rgb(10, 212, 44)",color:"white"}}>SEARCH</button>
            </div>
            <div className='col  '>
                <div className='row'>
                    <div className='col-sm-4 pt-3 ps-5'>
                        <img src={cal} alt='cal'/>
                    </div>
                    <div className='col-sm-8'>
                        <b><h6>+91&nbsp;9898767</h6></b>
                        <label>support&nbsp;24/7 time</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}
