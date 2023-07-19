import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import './App.css';

const Home = () => {
	const videoOptions = {
  width: '100%',
  height: 'auto',
  controls: true,
};

  return (
    <div className="container">
      <h1 className="text-center">Welcome to Aquo</h1>
      <div className="row">
	  <div className="col-md-12 ">

          <p className="lead">
	  Aquo is an early stage project looking to revolutionize financial services. There are early stage investment opportunities in Aquo. 
          </p>
	  </div>
      </div>
	  <div className="row">

	  <div className="col-md-12 text-center">
<div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        url='https://www.youtube.com/watch?v=SE1371YbFPI'
        width='100%'
        height='100%'
	  controls={true}
      />
    </div>
	  </div>
        <div className="col-md-12">
	  <div className="text-center">
            <p className="lead">Read more from our white papers</p>
            <div className="btn-group">
              <a href="aquosummary.pdf" className="btn btn-primary btn-lg">Aquo Summary White Paper</a>
	     <span style={{ width: "10px" }}></span>
              <a href="aquowp.pdf" className="btn btn-primary btn-lg ml-2">Aquo Full White Paper</a>
            </div>
          </div>
	  <div className="text-center">
            <p className="lead">Read our exec docs</p>
            <div className="btn-group">
              <a href="aquo-exec.pdf" className="btn btn-primary btn-lg">Aquo Exec Summary</a>
	     <span style={{ width: "10px" }}></span>
              <a href="aquopitchdeck.pptx" className="btn btn-primary btn-lg ml-2">Aquo Pitch Deck (PPTX)</a>
	     <span style={{ width: "10px" }}></span>
              <a href="aquopitchdeck.pdf" className="btn btn-primary btn-lg ml-2">Aquo Pitch Deck (PDF)</a>
            </div>
          </div>
          <p className="lead">
	          <Link to="/business-models" className="text-white">Aquo Videos</Link>
</p>
          <p className="lead">
            Join Aquo today and unlock a world of asset liquidity possibilities. Experience seamless digital investment, trustworthy vetting processes, and a community of like-minded investors. Together, let's reshape the future of investments and achieve your financial goals.
          </p>
          <ul className="lead">
            <li>Real World Asset Tokenization</li>
            <li>Increased Investment Accessibility</li>
            <li>Security and Compliance for Investments</li>
            <li>Diverse Investment Opportunities</li>
            <li>Integration of Derivatives for Assets</li>
            <li>Innovative Business Models</li>
            <li>Global Reach for Investors</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;

