import React,{useState,useEffect} from 'react'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';
import axios from 'axios';
// import bolly from '../bolly.json';




function Bollywood() {

  const url="../Navigation/";

  // const [data,setData] = useState([]);
  // useEffect (()=>{
  //     fetch(`https://backend-blog-taani.herokuapp.com/home/bollywood`)
  //     .then (res=>res.json())
  //     .then(data=> setData(data))
  // }, []);

  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get("https://new-backend-nu.vercel.app/api/bollywood")
    .then((res)=>setData(res.data));
  })


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

        
          {/* {
             data.map(() =>{
              return(
                <div className="box" key={data.id}>
                  <img src={data.icon} alt="loading" className="imgR"/>
                  {data.caption}
                  <br/>

                  </div>
              )
            })
          } */}

        {/* {data.map((bollywood)=>{
        const {id,caption,details} = bollywood;
        return <div className='card' key={id}>
          <h2>{caption}</h2>
          <p>{details}</p>
        </div>
        })} */}


        {
          data.map((bollywood)=>{
            const {id,icon,caption}= bollywood;
            return <div className='box' key={id}>
              <img src={icon} alt="loading" className='imgR' />
              {caption}
            </div>
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
            data.map((bollywood) =>{
              const {id,icon,caption}= bollywood;
              return(
                <div className="box" key={id}>
                  <img src={icon} alt="loading" className="imgR"/>
                  <span className="caption">{caption} </span><br/>
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
            data.map((bollywood)=>{
              const {id,details,icon,caption}= bollywood;
              return(
                <div className="box2" key={id}>
                  <img src={icon} alt="loading" className="imgR"/>
                  <div className="caption">{caption}</div>
                 <div classNameme="details"> {details}</div>
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