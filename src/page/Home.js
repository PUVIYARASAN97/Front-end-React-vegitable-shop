import React from 'react'
import './Home.css'

import veg from '../img/veg.png'
import veg1 from '../img/veg1.png'
import juice from '../img/juice.png'
import fruit from '../img/fruit.png'
import dry from '../img/dry.png'
import banana from '../img/banana.png'
import apple from '../img/apple.png'
import mango from '../img/mango.png'
import blackberry from '../img/blackberry.png'
import strawberry from '../img/strawberry.png'
import pom from '../img/pom.png'
import orenge from '../img/orenge.png'
import guava from '../img/guava.png'
import fruit2 from '../img/fruit2.png'
import juice2 from '../img/juice2.png'
import left from '../img/left.png'
import right from '../img/right.png'
import cola from '../img/cola.png'
import chicken from '../img/chicken.png'
import leaf from '../img/leaf.png'
import bean from '../img/bean.jpg'
import sevan1 from '../img/sevan1.jpg'
import seed from '../img/seed.jpg'



export default function Home() {
  return (
    <>
    <div className='container'>
      <div className='row align-self-end mt-4 mb-5'>
        <div className='col-sm-3'>

        </div>
        <div className='col' style={{background:"rgb(245, 242, 242)"}}>
          <div className='row'>
            <div className='col text-center mt-5'>
              <p>FRUIT FRESH</p>
              <h2>Vegitable 100% Organic</h2>
              <p>Free Picup and Delivery Available</p>
              <button style={{color:"white",background:"rgb(10, 212, 44)"}}>SHOP NOW</button>
            </div>
            <div className='col'>
              <img src={veg} alt='veg' width={350} />
            </div>
          </div>
        </div>
      </div>


      {/* row two---------- */}


      <div className='row mb-5'>
        <div className='col pt-5 me-3 text-center' style={{background:"rgb(245, 242, 242)"}}>
        <img src={dry} alt='dry' width={150} />
        <h4 className='r2'>DRY FRUIT</h4>
        </div>
        <div className='col pt-5 me-3 text-center' style={{background:"rgb(245, 242, 242)"}}>
        <img src={veg1} alt='veg1' width={230} />
        <h4 className='r2'>VEGITABLE</h4>
        </div>
        <div className='col  me-3 text-center' style={{background:"rgb(245, 242, 242)"}}>
        <img src={juice} alt='juice' width={200} />
        <h4 className='r2'>JUICE</h4>
        </div>
        <div className='col pt-5 text-center' style={{background:"rgb(245, 242, 242)"}}>
        <img src={fruit} alt='fruit' width={175} />
        <h4 className='r2'>FRUIT</h4>
        </div>
      </div>


      {/* featured project ---- */}


      <div className='row'>
        <div className='col text-center'>
          <h3>featured project</h3>
          <hr className='hr'/>
          <div className='r3'>
            <p className='r31'>All</p>
            <p className='r31'>Oranges</p>
            <p className='r31'>Fresh Meat</p>
            <p className='r31'>Vegitable</p>
            <p className='r31'>Fastfood</p>
          </div>
        </div>
      </div>

      {/* row four 1 items ----- */}

      <div className='row'>
        <div className='col pt-5 me-3 text-center' style={{background:"rgb(245, 242, 242)"}}>
        <img src={banana} alt='banana' width={150} />
        </div>
        <div className='col pt-5 me-3 text-center' style={{background:"rgb(245, 242, 242)"}}>
        <img src={apple} alt='apple' width={210} />
        </div>
        <div className='col  me-3 pt-5 text-center' style={{background:"rgb(245, 242, 242)"}}>
        <img src={mango} alt='juice' width={200} />
        </div>
        <div className='col pt-5 text-center' style={{background:"rgb(245, 242, 242)"}}>
        <img src={blackberry} alt='fruit' width={175} />
        </div>
      </div>
      <div className='row'>
        <div className='col me-3 text-center'>
          <p>Fruit</p>
          <h6>$30.00</h6>
        </div>
        <div className='col me-3 text-center'>
        <p>Fruit</p>
          <h6>$30.00</h6>
        </div>
        <div className='col me-3 text-center'>
        <p>Fruit</p>
          <h6>$30.00</h6>
        </div>
        <div className='col me-3 text-center'>
        <p>Fruit</p>
          <h6>$30.00</h6>
        </div>
      </div>

      {/* row four 2 items ----- */}

      <div className='row'>
        <div className='col pt-5 me-3 text-center' style={{background:"rgb(245, 242, 242)"}}>
        <img src={guava} alt='banana' width={150} />
        </div>
        <div className='col pt-5 me-3 text-center' style={{background:"rgb(245, 242, 242)"}}>
        <img src={orenge} alt='apple' width={210} />
        </div>
        <div className='col  me-3 pt-5 text-center' style={{background:"rgb(245, 242, 242)"}}>
        <img src={pom} alt='juice' width={200} />
        </div>
        <div className='col pt-5 text-center' style={{background:"rgb(245, 242, 242)"}}>
        <img src={strawberry} alt='fruit' width={175} />
        </div>
      </div>
      <div className='row'>
        <div className='col me-3 text-center'>
          <p>Fruit</p>
          <h6>$30.00</h6>
        </div>
        <div className='col me-3 text-center'>
        <p>Fruit</p>
          <h6>$30.00</h6>
        </div>
        <div className='col me-3 text-center'>
        <p>Fruit</p>
          <h6>$30.00</h6>
        </div>
        <div className='col me-3 text-center'>
        <p>Fruit</p>
          <h6>$30.00</h6>
        </div>
      </div>

      {/* Row five ----- */}

      <div className='row mt-5 mb-5'>
        <div className='col me-4' style={{background:"rgb(156, 250, 161)"}}>
          <div className='row'>
            <div className='col'>
            <img src={fruit2} alt='veg' width={300} />
            </div>
            <div className='col text-center pt-5'>
              <h3>Summer Fruit</h3>
              <p>100%Pure Natural Fuit</p>
              <button style={{color:"white",background:"red"}}>Shop Now</button>
            </div>
          </div>

        </div>
        <div className='col' style={{background:"rgb(250, 209, 156)"}}>
        <div className='row'>
            <div className='col'>
            <img src={juice2} alt='veg' width={200} />
            </div>
            <div className='col text-center pt-5'>
              <h3>Drink Fruit Juice</h3>
              <p>With 25% Off All Teas</p>
              <button style={{color:"white",background:"red"}}>Shop Now</button>
            </div>
          </div>

        </div>
      </div>

      {/* row six ----- */}

      <div className='row mb-3'>
        <div className='col'>
          <h5>Latest Products</h5>
        </div>
        <div className='col text-end'>
          <label className='arow'><img src={left} alt='l' /></label><label className='arow'><img src={right} alt='l' /></label>
        </div>
        <div className='col'>
        <h5>Top Products</h5>
        </div>
        <div className='col text-end'>
        <label className='arow'><img src={left} alt='l' /></label><label className='arow'><img src={right} alt='l' /></label>
        </div>
        <div className='col'>
        <h5>Review Products</h5>
        </div>
        <div className='col text-end'>
        <label className='arow'><img src={left} alt='l' /></label><label className='arow'><img src={right} alt='l' /></label>
        </div>
      </div>

      {/* row sixxxxx---- */}

      <div className='row'>
        <div className='col'>
        <img src={cola} alt='l' width={150} style={{background:"rgb(245, 242, 242)"}}/>
        </div>
        <div className='col'>
          <p>cola</p>
          <h6>$30.00</h6>
        </div>
        <div className='col'>
        <img src={cola} alt='l' width={150} style={{background:"rgb(245, 242, 242)"}}/>
        </div>
        <div className='col'>
        <p>cola</p>
          <h6>$30.00</h6>
        </div>
        <div className='col'>
        <img src={cola} alt='l' width={150} style={{background:"rgb(245, 242, 242)"}}/>
        </div>
        <div className='col'>
        <p>cola</p>
          <h6>$30.00</h6>
        </div>
      </div>

      <div className='row mt-3'>
        <div className='col'>
        <img src={chicken} alt='l' width={150} height={100} style={{background:"rgb(245, 242, 242)"}}/>
        </div>
        <div className='col'>
          <p>chicken</p>
          <h6>$30.00</h6>
        </div>
        <div className='col'>
        <img src={chicken} alt='l' width={150} height={100} style={{background:"rgb(245, 242, 242)"}}/>
        </div>
        <div className='col'>
        <p>chicken</p>
          <h6>$30.00</h6>
        </div>
        <div className='col'>
        <img src={chicken} alt='l' width={150} height={100} style={{background:"rgb(245, 242, 242)"}}/>
        </div>
        <div className='col'>
        <p>chicken</p>
          <h6>$30.00</h6>
        </div>
      </div>

      <div className='row mt-3 mb-5'>
        <div className='col'>
        <img src={leaf} alt='l' width={150} style={{background:"rgb(245, 242, 242)"}}/>
        </div>
        <div className='col'>
          <p>leaf</p>
          <h6>$30.00</h6>
        </div>
        <div className='col'>
        <img src={leaf} alt='l' width={150} style={{background:"rgb(245, 242, 242)"}}/>
        </div>
        <div className='col'>
        <p>leaf</p>
          <h6>$30.00</h6>
        </div>
        <div className='col'>
        <img src={leaf} alt='l' width={150} style={{background:"rgb(245, 242, 242)"}}/>
        </div>
        <div className='col'>
        <p>leaf</p>
          <h6>$30.00</h6>
        </div>
      </div>


      {/* row sevan ------ */}

      <div className='row mb-3'>
        <div className='col text-center'>
          <h3>From The Blog</h3>
          <hr className='hr'/>
        </div>
      </div>


      {/* row eight-------- */}

      <div className='row'>
        <div className='col me-3'>
        <img src={sevan1} alt='l' className='e1'/>
        <h6>Cooking tips make simple</h6>
        <p>This is really good, Very Useful and well maintained website. Thank you so much!</p>
        </div>
        <div className='col me-3'>
        <img src={bean} alt='l'  className='e1'/>
        <h6>6 ways to prepare breakfast </h6>
        <p>This is really good, Very Useful and well maintained website. Thank you so much!</p>
        </div>
        <div className='col'>
        <img src={seed} alt='l' className='e1' /> 
        <h6>Visit the clean farm in the US</h6>
        <p>This is really good, Very Useful and well maintained website. Thank you so much!</p>
        </div>
      </div>










    </div>
    </>
  )
}
