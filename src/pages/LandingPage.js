import React from 'react';
import Link from '../components/Link'

const LandingPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{width:"100vw", height:"100vh"}}>
      <h1 className="mb-5" style={{fontSize:"120px", fontWeight:"100"}}>Timer</h1>
      <div class="circle-ripple"></div>
      <div className="d-flex flex-column flex-md-row justify-content-between">
        <Link className="select my-3 mx-md-3 work-btn" href='/work'>Work</Link>
        <Link className="select my-3 mx-md-3 sleep-btn" href='/'>Sleep</Link>
        <Link className="select my-3 mx-md-3 birth-btn" href='/'>Birth Control</Link>
      </div>
    </div>
  );
}

export default LandingPage;
