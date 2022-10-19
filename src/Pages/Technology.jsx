import React from 'react'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';
import tech from '../tech.json';


function Technology() {
 
  const url ="../Navigation/";


  return (
    <section>
      <div className="homeData"> 
              <img src="https://www.inspirisys.com/images/practices-overview/header-practice-overview.jpg" style={{height:"550px",width:"800px",borderRadius:"20px"}} className="im1"/>

              <img src="https://www.cxoinsightme.com/wp-content/uploads/2020/07/AI_shutterstock_1722492775-scaled.jpg"  style={{height:"200px", width:"200px"}}  className="im2"/>

              <img src="https://www.blackhawkintelligence.com/wp-content/uploads/2018/04/shu-Artificial-intelligence-1066092968-sdecoret-1500x1000.jpg"  style={{height:"200px", width:"200px"}} className="im3"/>

        
      </div>

      <section>  <br /> <br />
      <div className='latest'>
        <h1>The Latest</h1>
        <div className='linebr'></div>
        <Link to={url} >
        <div className="inner">

        
          {
            tech && tech.map(tech =>{
              return(
                <div className="box" key={tech.id}>
                  <img src={tech.icon} alt="loading" className="imgR"/>
                  {tech.caption}
                  <br/>

                  </div>
              )
            })
          }
        </div>
        </Link>

          
      </div> <br/>

     
    </section>
          <br />

          <section>
      <div className='articles'>
      <h1>The Articles</h1>
      <div className='linebr'></div>
      <div className="innerA">
          {
            tech && tech.map(tech =>{
              return(
                <div className="box" key={tech.id}>
                  <img src={tech.icon} alt="loading" className="imgR"/>
                  <span className="caption">{tech.caption} </span><br/>
                  {/* {tech.details} */}
                 
                  <br/>   
                  <div className="line2"></div>
                  </div>
                  
              )
            })
          }
                
          

        </div>
      </div>
    </section>


    <section>
      <div className='Stories'>
      <h1>Lastest Stories</h1>
      <div className='linebr'></div>
      <div className="innerL">
          {
            tech && tech.map(tech =>{
              return(
                <div className="box2" key={tech.id}>
                  {/* <img src={tech.icon} alt="loading" className="imgR"/> */}
                  <div className="caption">{tech.caption}</div>
                 <div classNameme="details"> {tech.details}</div>
                  <br/>   
                  {/* <div className="line2"></div> */}
                  </div>
                  
              )
            })
          }
                
          

        </div>
      </div>
    </section>

    <section>
      <div className="advert">
        Advertisement
      </div>
    </section> 

      <Footer/>
    </section> 
  )
}

export default Technology