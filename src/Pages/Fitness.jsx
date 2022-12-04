import React,{useEffect,useState} from 'react'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';
import axios from 'axios';
// import fitness from '../fitness.json';


function Fitness() {
  const url ="../Navigation/";

  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get("https://new-backend-nu.vercel.app/api/fitness")
    .then((res)=>setData(res.data));
  });

  return (
    <section>
      <div className="homeData"> 
              <img src="https://i.pinimg.com/originals/db/53/04/db530491ca513c39ed6e7d40934c9f95.jpg" style={{height:"550px",width:"800px",borderRadius:"20px"}} className="im1"/>

              <img src="https://th.bing.com/th/id/OIP.6wF3afepP5BWKVPsOqp6IgHaEu?pid=ImgDet&rs=1"  style={{height:"200px", width:"200px"}}  className="im2"/>

              <img src="https://uploads-ssl.webflow.com/5da5f09c0608e6318d1196af/5e21ea1f86c0b5a623db23a6_athletic-outcomes-functional-fitness-class-1-Md.jpg"  style={{height:"200px", width:"200px"}} className="im3"/>

        
      </div>

      <section>  <br /> <br />
      <div className='latest'>
        <h1>The Latest</h1>
        <div className='linebr'></div>
        <Link to={url} >
        <div className="inner">

        
          {/* {
            fitness && fitness.map(fitness=>{
              return(
                <div className="box" key={fitness.id}>
                  <img src={fitness.icon} alt="loading" className="imgR"/>
                  {fitness.caption}
                  <br/>

                  </div>
              )
            })
          } */}

{
          data.map((fitness)=>{
            const {id,icon,caption}= fitness;
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
            // fitness && fitness.map(fitness =>{
            //   return(
            //     <div className="box" key={fitness.id}>
            //       <img src={fitness.icon} alt="loading" className="imgR"/>
            //       <span className="caption">{fitness.caption} </span><br/>
            //       {/* {fitness.details} */}
                 
            //       <br/>   
            //       <div className="line2"></div>
            //       </div>
                  
            //   )
            // })
          }

{ data.map((fitness) =>{
              const {id,icon,caption, details}= fitness;
              return(
                <div className="box" key={id}>
                  <img src={icon} alt="loading" className="imgR"/>
                  <span className="caption">{caption} </span><br/>
                  {/* {details} */}
                 
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
            // fitness && fitness.map(fitness =>{
            //   return(
            //     <div className="box2" key={fitness.id}>
            //       {/* <img src={fitness.icon} alt="loading" className="imgR"/> */}
            //       <div className="caption">{fitness.caption}</div>
            //      <div classNameme="details"> {fitness.details}</div>
            //       <br/>   
            //       {/* <div className="line2"></div> */}
            //       </div>
                  
            //   )
            // })
          }

           { data.map((fitness) =>{
              const {id,icon,caption, details}= fitness;
              return(
                <div className="box" key={id}>
                  <img src={icon} alt="loading" className="imgR"/>
                  <span className="caption">{caption} </span><br/>
                  {details}
                 
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

export default Fitness