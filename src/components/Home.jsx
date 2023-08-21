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
Aquo is a DeFi composition project defining DeFi 2.0. The pitchdeck on this page has more details.

	 For suitable investors in DeFi projects, there are pre-seed opportunities to invest now in <a href="https://www.linkedin.com/company/aquoassets"  target="_blank" rel="noopener noreferrer" className="white-link">Aquo</a>.
          </p>
	  </div>
      </div>
	  <div className="row">

	  <div className="col-md-12 text-center">
<div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        url='https://www.youtube.com/watch?v=8Xq7CO7gk80'
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
	    <div className="text-center">
      </div>
          <p className="lead">
</p>
          <p className="lead">
	    Aquo is working to provide integrations as follows:
          </p>
          <ul className="lead">
            <li>Integration of DeFi protocols into a single transaction</li>
            <li>Construction of complex financial products e.g. options, lending, swaps into one transaction </li>
	    <li>Risk management via transparency, collateralization, and trusted building blocks</li>
	    <li>Developing a new ERC standard for DeFi protocol integrations</li>
	  <li>Core services for asset tokenization, integration into decentralized oracles, and synthetic assets</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;

