import React from 'react'
import { Link } from 'react-router-dom'


function Landing() {
  return (
    <>
    <div className='w-100 d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
      <div className='row p-5 shadow '>
         <div className='col d-flex flex-column justify-content-center'>
           <h1>Media Player 2024</h1>
             <p>Explore media player for youtube video upload and management. You can add and manage videos, cataegories and even check watch history </p>
         <div>
         <Link to={"/dash"} className='btn btn-success'>Explore</Link>
         </div>
      </div>
  
    <div  className='col'>
      <img  src="https://media.istockphoto.com/id/1393595909/vector/minimal-video-player-or-media-player-interface-in-perspective-view-social-media-concept.jpg?s=612x612&w=0&k=20&c=Tch8382_NYJaztKHmA_rphfjblMKsRkPNKl7_PG6ISA=" 
      className='img-fluid shadow' alt="img" />
    </div>
    </div>
    </div>
    <div className='mt-3 p-5'>
      <h2 className='text-center'>Features</h2>
      <div className='d-flex mt-2 flex-row justify-content-between'>

      <div className="card" style={{width:'18rem'}}>
      <img src="https://cdn.dribbble.com/users/3635718/screenshots/7163576/media/2a7c89c5fe7a8316fa0cbadb71719940.gif" style={{height:"300px"}} className="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">Upload Videos</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  </div>
     
<div className="card" style={{width:'18rem'}}>
      <img src="https://camo.githubusercontent.com/c3f096893b5f0f1c34e950a714a3b1a652f47c050ba8f89a95d4db9ebebc2aa1/68747470733a2f2f6d69722d73332d63646e2d63662e626568616e63652e6e65742f70726f6a6563745f6d6f64756c65732f646973702f33316139373235383733373035392e356130373730356234623536352e676966"  style={{height:"300px"}} className="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">Watch Videos</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  </div>

  <div className="card" style={{width:'18rem'}}>
      <img src="https://cdn.dribbble.com/users/1357768/screenshots/4071342/youtubekids-anim1.gif"   style={{height:"300px"}} className="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">View History</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  </div>
  </div>
  </div>
  <div className='mt-5 d-flex justify-content-center flex-row align-items-center p-5'>
        <div className='col'>
            <h2>Simple,Fast and Secured</h2>
            <p style={{textAlign:"justify"}}> Media Player 2024 is a plateform for simple and faster youtube video uploading and management video watch history to where you get a simple video player interface with the app itself</p>
        </div>
        <div className='col p-5'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/nEAgCecB-XY?si=zwa_Z0CXmICbX9AS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
  </div>
    </>
  )
}

export default Landing