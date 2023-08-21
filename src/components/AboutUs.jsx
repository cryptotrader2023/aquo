import React from 'react';
import ReactPlayer from 'react-player';

const AboutUs = () => {
  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <h1 className="display-4">About Us</h1>
        <p className="lead">
          Aquo is a new DeFi protocol using DeFi composition which we call DeFi 2.0. Aquo was founded by  

	   <a href="https://uk.linkedin.com/in/trevorleeoakley" target="_blank" rel="noopener noreferrer" className="white-link">Trevor Lee Oakley</a>.
        </p>
      </div>

      <div className="row">
        <div className="col-md-12">
 <div className="text-center">
        <img src="/aboutus.png" alt="About Us" className="img-fluid" />
      </div>
      </div>
      </div>

      <div className="jumbotron mt-5">
        <h1 className="display-6">Blockchain</h1>
        <p className="lead">
          Aquo has a strong focus on smart contract development including complex smart contracts. We are focused on the Ethereum blockchain.
        </p>
      </div>
      
	  <div className="jumbotron mt-5">
        <h1 className="display-6">Financial</h1>
        <p className="lead">
	  Due to the nature of financial products, we have a strong focus on complex financial products including derivatives, synthetic assets, pricing models, and risk management.
        </p>
      </div>

	  <div className="jumbotron mt-5">
        <h1 className="display-6">Compliance</h1>
        <p className="lead">
	  DeFi is largely unregulated but we focus on common sense compliance to ensure users control their monies. We are a non-custody solution and hence funds are managed directly in smart contracts (code accounts) or by users via their own wallets.
        </p>
      </div>

	  <div className="jumbotron mt-5">
        <h1 className="display-6">Infrastructure</h1>
        <p className="lead">
	  Cloud infrastrure does matter along with security protocols and hence we have specialisms in this sector for hosting a website and building apps as needed.
        </p>
      </div>

	  <div className="jumbotron mt-5">
        <h1 className="display-6">Marketing</h1>
        <p className="lead">
	  Marketing is key to our project and our marketing team focuses on building user confidence which is critical to the project and branding.

        </p>
      </div>

	  <div className="jumbotron mt-5">
        <h1 className="display-6">Business</h1>
        <p className="lead">
	  The business end of Aquo is focused on profit models, costs, feasibilities, and company finances (not user funds).
        </p>
      </div>
                    <div className="jumbotron mt-5">
<div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        url='https://www.youtube.com/watch?v=GGNmCBBhFRQ'
        width='100%'
        height='100%'
          controls={true}
      />
    </div>
          </div>

    </div>
  );
};

export default AboutUs;

