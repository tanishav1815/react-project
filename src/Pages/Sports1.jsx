import React from 'react'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';
import Sports from '../Sports.json'

function Sports1() {

  const url ="../Navigation/";

  return (
    <section>
    <div className="homeData"> 
            <img src="https://th.bing.com/th/id/R.0dd3688f782fa6b118105dc2c7c90880?rik=JWpG8W9ZazDm6A&riu=http%3a%2f%2favante.biz%2fwp-content%2fuploads%2fHollywood-Movie-Wallpapers-HD%2fHollywood-Movie-Wallpapers-HD-064.jpg&ehk=4YN2FZPDIzsvfT0HvtCbO7Mo%2bP34EvhNMlgcHtNSIMU%3d&risl=&pid=ImgRaw&r=0" style={{height:"550px",width:"800px",borderRadius:"20px"}} className="im1"/>

            <img src="https://www.dailyhawker.in/wp-content/uploads/2020/01/Hollywood-Adventure-movies-960x540.png"  style={{height:"200px", width:"200px"}}  className="im2"/>

            <img src="https://th.bing.com/th/id/OIP.utMdqbLuqkyGLaId2KUeegHaKj?pid=ImgDet&w=500&h=713&rs=1"  style={{height:"200px", width:"200px"}} className="im3"/>

      
    </div>

    <section>  <br /> <br />
      <div className='latest'>
        <h1>The Latest</h1>
        <div className='linebr'></div>
        <Link to={url} >
        <div className="inner">

        
          {
            Sports && Sports.map(Sports =>{
              return(
                <div className="box" key={Sports.id}>
                  <img src={Sports.icon} alt="loading" className="imgR"/>
                  {Sports.caption}
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
            Sports && Sports.map(Sports =>{
              return(
                <div className="box" key={Sports.id}>
                  <img src={Sports.icon} alt="loading" className="imgR"/>
                  <span className="caption">{Sports.caption} </span><br/>
                  {/* {Sports.details} */}
                 
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
            Sports && Sports.map(Sports =>{
              return(
                <div className="box2" key={Sports.id}>
                  {/* <img src={Sports.icon} alt="loading" className="imgR"/> */}
                  <div className="caption">{Sports.caption}</div>
                 <div classNameme="details"> {Sports.details}</div>
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

export default Sports1;