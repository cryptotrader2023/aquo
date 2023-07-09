import React from 'react';

const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center">Welcome to Aquo</h1>
      <div className="row">
        <div className="col-md-12">
          <h2>Your Gateway to the Future of Liquidity</h2>
          <ul className="lead">
            <li>Real World Asset Tokenization</li>
            <li>Increased Investment Accessibility</li>
            <li>Security and Compliance for Investments</li>
            <li>Diverse Investment Opportunities</li>
            <li>Integration of Derivatives for Assets</li>
            <li>Innovative Business Models</li>
            <li>Global Reach for Investors</li>
          </ul>
          <p className="lead">
            Join Aquo today and unlock a world of asset liquidity possibilities. Experience seamless digital investment, trustworthy vetting processes, and a community of like-minded investors. Together, let's reshape the future of investments and achieve your financial goals.
          </p>
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
        </div>
      </div>
      <div className="text-center">
        <img src="/home.png" alt="Vision Image" className="img-fluid" style={{ height: "400px" }} />
      </div>
    </div>
  );
};

export default Home;

