import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../card.css'
import axios from 'axios'
import Cards from '../Components/Cards';
import Records from '../Records.json';
import Footer from '../Components/Footer'
// import Navigation from './Navigation';
// import {useSelector} from 'react-redux';

const Home = ({img,caption,id}) => {
  const [data,setdata]= useState([]);
  const url="../Navigation/"+id;

  // useEffect(()=>{
  //   axios('./records.json')
  //   .then((myJson)=> {setdata(myJson.data);});
  // },[]);

  
  return (
    <>
   <section>

    <div className="homeData"> 
             
    <Link to={`/Pages/Naigation/${1}`} >

              <img src="https://images.pexels.com/photos/461956/pexels-photo-461956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{height:"550px",width:"800px",borderRadius:"20px"}} className="im1"/>

              <img src="https://th.bing.com/th/id/OIP.zyhpDZBjDpRu0dlu2BqDFwHaEo?pid=ImgDet&rs=1"  style={{height:"200px", width:"200px"}}  className="im2"/>

              <img src="https://th.bing.com/th/id/OIP.zyhpDZBjDpRu0dlu2BqDFwHaEo?pid=ImgDet&rs=1"  style={{height:"200px", width:"200px"}} className="im3"/>
    </Link>

      </div>
   
    </section> 


    

    
            
           

    <br />  



     <section>  <br /> <br />
      <div className='latest'>
        <h1>The Latest</h1>
        <div className='linebr'></div>
        <Link to={url} >
        <div className="inner">

        
          {
            Records && Records.map(record =>{
              return(
                <div className="box" key={record.id}>
                  <img src={record.icon} alt="loading" className="imgR"/>
                  {record.caption}
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
            Records && Records.map(record =>{
              return(
                <div className="box" key={record.id}>
                  <img src={record.icon} alt="loading" className="imgR"/>
                  <span className="caption">{record.caption} </span><br/>
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
            Records && Records.map(record =>{
              return(
                <div className="box2" key={record.id}>
                  {/* <img src={record.icon} alt="loading" className="imgR"/> */}
                  <div className="caption">{record.caption}</div>
                 <div classNameme="details"> {record.details}</div>
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

    {/* <Navigation/> */}

    <Footer/>
    
  </>
  )
}

export default Home

{/* <div className="container gridss">
{
    data.map((val,i)=>{
        
            return <Cards img={val.img} name={val.caption} key={1} />
        
            
    })
}    
</div> */}














{/* <div className="imgd">

{
   data.map((val,i)=>{

    return <Cards img={val.img} name={val.caption} key={i} />

    
})
}

</div> */}