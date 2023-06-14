import React from 'react'
import './Home.css'


import left from '../img/left.png'
import right from '../img/right.png'
import cola from '../img/cola.png'
import chicken from '../img/chicken.png'
import leaf from '../img/leaf.png'
import veg from '../img/veg.png'
import dry from '../img/dry.png'
import fruit from '../img/fruit.png'
import window from '../img/window.png'
import menu from '../img/menu.png'
import banana from '../img/banana.png'
import apple from '../img/apple.png'
import mango from '../img/mango.png'
import blackberry from '../img/blackberry.png'
import strawberry from '../img/strawberry.png'
import pom from '../img/pom.png'
import orenge from '../img/orenge.png'
import guava from '../img/guava.png'



export default function Shop() {
  return (
   <>

   {/* row one ------ */}
   <div className='container-fluid text-center mt-5 mb-5 bgt'>
    <h2 style={{color:"white"}}>Organi Shop</h2>
    <b><label style={{color:"white"}}>Home-</label></b><label style={{color:"white"}}>Shop</label>
   </div>
   
   {/* row twoooo------ */}

   <div className='container'>
    <div className='row'>
    <div className='col-sm-2 '>
      <h4>Department</h4><br />
      <p>Fresh Meat</p>
      <p>Vegitables</p>
      <p>Fruit & Nut</p>
      <p>Ocean Food</p>
      <p>Butter</p>
      <p>Fastfood</p>
      <p>Egg</p>
      <p>Crisps</p><br />
      <h4>Price</h4>
      <input type={'range'} width={100}/>
      <h6 style={{color:"red"}}>$10 - $100</h6><br />
      <h4>Colors</h4>
      <span className='dot2 w'></span><label>white</label>
      <span className='dot2 g'></span><label>Gray</label><br />
      <span className='dot2 r'></span><label>white</label>
      <span className='dot2 b'></span><label>Gray</label><br />
      <span className='dot2 bl'></span><label>white</label>
      <span className='dot2 gr'></span><label>Gray</label><br /><br />
      <h4>Popular Size</h4>
      <label className='size'>Large</label><label className='size'>Medium</label><br/>
      <label className='size'>Small</label><label className='size'>Tiny</label><br /><br/>
      <div className='row mb-3'>
        <div className='col'>
          <h5>Latest Products</h5>
        </div>
        <div className='col text-end'>
          <label className='arow1'><img src={left} alt='l' /></label><label className='arow1'><img src={right} alt='l' /></label>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
        <img src={cola} alt='l' width={80} style={{background:"rgb(245, 242, 242)"}}/>
        </div>
        <div className='col'>
          <p>cola</p>
          <h6>$30.00</h6>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col'>
        <img src={chicken} alt='l' width={80} height={70} style={{background:"rgb(245, 242, 242)"}}/>
        </div>
        <div className='col'>
          <p>chicken</p>
          <h6>$30.00</h6>
        </div>
      </div>
      <div className='row mt-3 mb-5'>
        <div className='col'>
        <img src={leaf} alt='l' width={80} style={{background:"rgb(245, 242, 242)"}}/>
        </div>
        <div className='col'>
          <p>leaf</p>
          <h6>$30.00</h6>
        </div>
      </div>

    </div>
    <div className='col ms-2'>   {/* saleoff  col start*/}
    <h4>Sale Off</h4>
    <hr className='hrsale'/>
    <div className='row'>
        <div className='col pt-5 me-3 text-center' style={{background:"rgb(245, 242, 242)"}}>
        <img src={veg} alt='banana' width={250} />
        </div>
        <div className='col pt-5 me-3 text-center' style={{background:"rgb(245, 242, 242)"}}>
        <img src={dry} alt='apple' width={200} />
        </div>
        <div className='col  me-3 pt-5 text-center' style={{background:"rgb(245, 242, 242)"}}>
        <img src={fruit} alt='juice' width={200} />
        </div>
      </div>
      <div className='row'>
        <div className='col me-3 text-center'>
          <p>veg</p>
          <h6>$30.00</h6>
        </div>
        <div className='col me-3 text-center'>
        <p>Fruit</p>
          <h6>$30.00</h6><br />
          <span className='dot2 w'></span><span className='dot2 b'></span>
        </div>
        <div className='col me-3 text-center'>
        <p>Fruit</p>
          <h6>$30.00</h6>
        </div>
      </div>
      <hr />

      <div className='row mt-4'>
        <div className='col'>
          <label>Sort By&nbsp;&nbsp;</label><b><label>&nbsp;Default</label></b>
        </div>
        <div className='col text-center'>
        <b><label>16</label></b><label>&nbsp;&nbsp;Products found</label>
        </div>
        <div className='col text-end'>
          <img src={window} alt='l' /><img src={menu} alt='l' />
        </div>
      </div>


      <div className='row mt-4'>
        <div className='col pt-5 me-3 text-center' style={{background:"rgb(245, 242, 242)"}}>
        <img src={banana} alt='banana' width={180} />
        </div>
        <div className='col pt-5 me-3 text-center' style={{background:"rgb(245, 242, 242)"}}>
        <img src={apple} alt='apple' width={200} />
        </div>
        <div className='col  me-3 pt-5 text-center' style={{background:"rgb(245, 242, 242)"}}>
        <img src={mango} alt='juice' width={200} />
        </div>
      </div>
      <div className='row'>
        <div className='col me-3 text-center'>
          <p>veg</p>
          <h6>$30.00</h6>
        </div>
        <div className='col me-3 text-center'>
        <p>Fruit</p>
          <h6>$30.00</h6><br />
        </div>
        <div className='col me-3 text-center'>
        <p>Fruit</p>
          <h6>$30.00</h6>
        </div>
      </div>

      <div className='row'>
        <div className='col pt-5 me-3 text-center' style={{background:"rgb(245, 242, 242)"}}>
        <img src={blackberry} alt='banana' width={210} />
        </div>
        <div className='col pt-5 me-3 text-center' style={{background:"rgb(245, 242, 242)"}}>
        <img src={strawberry} alt='apple' width={180} />
        </div>
        <div className='col  me-3 pt-5 text-center' style={{background:"rgb(245, 242, 242)"}}>
        <img src={pom} alt='juice' width={200} />
        </div>
      </div>
      <div className='row'>
        <div className='col me-3 text-center'>
          <p>veg</p>
          <h6>$30.00</h6>
        </div>
        <div className='col me-3 text-center'>
        <p>Fruit</p>
          <h6>$30.00</h6><br />
          </div>
        <div className='col me-3 text-center'>
        <p>Fruit</p>
          <h6>$30.00</h6>
        </div>
      </div>


      <div className='row'>
        <div className='col pt-5 me-3 text-center' style={{background:"rgb(245, 242, 242)"}}>
        <img src={chicken} alt='banana' width={200} />
        </div>
        <div className='col pt-5 me-3 text-center' style={{background:"rgb(245, 242, 242)"}}>
        <img src={leaf} alt='apple' width={200} />
        </div>
        <div className='col  me-3 pt-5 text-center' style={{background:"rgb(245, 242, 242)"}}>
        <img src={fruit} alt='juice' width={200} />
        </div>
      </div>
      <div className='row'>
        <div className='col me-3 text-center'>
          <p>veg</p>
          <h6>$30.00</h6>
        </div>
        <div className='col me-3 text-center'>
        <p>Fruit</p>
          <h6>$30.00</h6><br />
          </div>
        <div className='col me-3 text-center'>
        <p>Fruit</p>
          <h6>$30.00</h6>
        </div>
      </div>


      <div className='row'>
        <div className='col pt-5 me-3 text-center' style={{background:"rgb(245, 242, 242)"}}>
        <img src={orenge} alt='banana' width={200} />
        </div>
        <div className='col pt-5 me-3 text-center' style={{background:"rgb(245, 242, 242)"}}>
        <img src={guava} alt='apple' width={200} />
        </div>
        <div className='col  me-3 pt-5 text-center' style={{background:"rgb(245, 242, 242)"}}>
        <img src={cola} alt='juice' width={200} />
        </div>
      </div>
      <div className='row'>
        <div className='col me-3 text-center'>
          <p>veg</p>
          <h6>$30.00</h6>
        </div>
        <div className='col me-3 text-center'>
        <p>Fruit</p>
          <h6>$30.00</h6><br />
          </div>
        <div className='col me-3 text-center'>
        <p>Fruit</p>
          <h6>$30.00</h6>
        </div>
      </div>



     </div>{/* col end */}


    </div>
    <div className='row text-center mt-5 mb-3'> 
    <div className='col'>
    <span className='dot3'>1</span>
    <span className='dot3'>2</span>
    <span className='dot3'>3</span>
    <span className='dot3'><img src={right} alt='l'/> </span>
    </div>
    </div>
   </div>
   
   
   </>
  )
}
