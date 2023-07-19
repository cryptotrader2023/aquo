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
	  Aquo is an early stage project looking to revolutionize financial services. There are early stage investment opportunities in <a href="https://www.linkedin.com/company/aquoassets"  target="_blank" rel="noopener noreferrer" className="white-link">Aquo</a>.
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
	    Aquo provides the following:
          </p>
          <ul className="lead">
            <li>Real World Asset Tokenization Framework</li>
            <li>Price Oracle for the Real Assets</li>
            <li>Pegged Pricing for the Asset Tokens (Synthetic Tokens)</li>
            <li>Liqudiity via DAOs</li>
            <li>Derivatives Creation </li>
            <li>Settlement via DCNs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;

