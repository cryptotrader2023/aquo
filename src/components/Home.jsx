import React from 'react';
import ReactPlayer from 'react-player';

const Home = () => {
  const videoOptions = {
    width: '100%',
    controls: true,
  };
  return (
    <div className="container">
      <h1 className="text-center">Welcome to Aquo</h1>
      <div className="row">
        <div className="col-md-12 text-center">
          <div style={{ maxWidth: '100%', maxHeight: 'auto', display: 'inline-block' }}>

	      <ReactPlayer
              url={`https://www.youtube.com/watch?v=SE1371YbFPI`}
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
              <a href="aquopitchdeck.pptx" className="btn btn-primary btn-lg ml-2">Aquo Pitch Deck</a>
            </div>
          </div>
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
      <div className="text-center">
        <img src="/home.png" alt="Vision Image" className="img-fluid" style={{ height: "400px" }} />
      </div>
    </div>
  );
};

export default Home;

