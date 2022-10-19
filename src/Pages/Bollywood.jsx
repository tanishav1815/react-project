import React from 'react'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';
import bolly from '../bolly.json';



function Bollywood() {

  const url="../Navigation/";

  return (

<section>
      <div className="homeData"> 
              <img src="https://wallpapercave.com/wp/wp6626727.jpg" style={{height:"550px",width:"800px",borderRadius:"20px"}} className="im1"/>

              <img src="https://th.bing.com/th/id/R.a124c9cd07fc70b23c1afd357d2a9ce2?rik=Xmt%2b37tAKgMNGQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-XxfSjb_2u6A%2fVjxMqCcne1I%2fAAAAAAAADVg%2fVImCT2dOMDo%2fs1600%2fYeh-Jawaani-Hai-Deewani-Hot-Deepika-Padukone-movie-poster.jpg&ehk=Xpr5ifJD1CZgiRjtoVDLkbyD6gIFVASPLGgvMGfxkAw%3d&risl=&pid=ImgRaw&r=0"  style={{height:"200px", width:"200px"}}  className="im2"/>

              <img src="https://images.bewakoof.com/utter/content/4805/content_Mission_Mangal__2019_-_Motivational_Bollywood_Movies_-_Bewakoof_Blog.jpg"  style={{height:"200px", width:"200px"}} className="im3"/>

        
      </div>

      <section>  <br /> <br />
      <div className='latest'>
        <h1>The Latest</h1>
        <div className='linebr'></div>
        <Link to={url} >
        <div className="inner">

        
          {
            bolly && bolly.map(bolly =>{
              return(
                <div className="box" key={bolly.id}>
                  <img src={bolly.icon} alt="loading" className="imgR"/>
                  {bolly.caption}
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
            bolly && bolly.map(bolly =>{
              return(
                <div className="box" key={bolly.id}>
                  <img src={bolly.icon} alt="loading" className="imgR"/>
                  <span className="caption">{bolly.caption} </span><br/>
                  {/* {record.details} */}
                 
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
            bolly && bolly.map(bolly=>{
              return(
                <div className="box2" key={bolly.id}>
                  {/* <img src={record.icon} alt="loading" className="imgR"/> */}
                  <div className="caption">{bolly.caption}</div>
                 <div classNameme="details"> {bolly.details}</div>
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

export default Bollywood;