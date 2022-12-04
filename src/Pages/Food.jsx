import React from 'react'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';
import food from '../food.json';


function Food() {

  const url ="../Navigation/";

  return (
   
    <section>
      <div className="homeData"> 
              <img src="https://th.bing.com/th/id/OIP.SVQuKv9AV3rBM5ZnfCmtigHaE8?pid=ImgDet&rs=1" style={{height:"550px",width:"800px",borderRadius:"20px"}} className="im1"/>

              <img src="https://volumeone.org/uploads/image/article/034/788/34788/header_2880x/113460_113460_198_Donut_Sams_Menomonie_2020_AndreaP_3_1200.jpg"  style={{height:"200px", width:"200px"}}  className="im2"/>

              <img src="https://static.toiimg.com/photo/imgsize-636293,msid-72375570/72375570.jpg"  style={{height:"200px", width:"200px"}} className="im3"/>

        
      </div>

      <section>  <br /> <br />
      <div className='latest'>
        <h1>The Latest</h1>
        <div className='linebr'></div>
        <Link to={url} >
        <div className="inner">

        
          {
            food && food.map(food =>{
              return(
                <div className="box" key={food.id}>
                  <img src={food.icon} alt="loading" className="imgR"/>
                  {food.caption}
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
            food && food.map(food =>{
              return(
                <div className="box" key={food.id}>
                  <img src={food.icon} alt="loading" className="imgR"/>
                  <span className="caption">{food.caption} </span><br/>
                  {/* {food.details} */}
                 
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
            food && food.map(food =>{
              return(
                <div className="box2" key={food.id}>
                  {/* <img src={food.icon} alt="loading" className="imgR"/> */}
                  <div className="caption">{food.caption}</div>
                 <div classNameme="details"> {food.details}</div>
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

export default Food




