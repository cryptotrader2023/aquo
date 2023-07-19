import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from 'react-player';

const SecurityCompliance = () => {
  return (
    <div className="container">
      <h1 className="mt-5">Security and Compliance</h1>
	   <div className="text-center">
        <img src="sec.png" alt="Security Image" className="img-fluid" />
      </div>
      <p className="lead">
Aquo is secure framework and the following describes the measures taken.

      </p>
      <ol className="lead">
        <li>
	  The transactions themselves are wallet based and there is no custody at Aquo. Hence normal wallet security applies. We recommend using a mobile device
	  and not a web browser when using a wallet.

        </li>
        <li>
	  The actual ledgers of the real assets are all maintained off-chain by regulated agencies. Hence the actual ownership of the real asset is assured.

        </li>
        <li>
	  The systems use synthetic tokens for trading and they track the price of the NFT (for the real asset). The synthetic tokens are claims against the NFTs and hence we can correct any errors arising from synthetic tokens. 
        </li>
        <li>
	  The system designs use sufficient controls (e.g. collateralized derivatives to ensure integrity).
        </li>
        <li>
	  When any data is stored off-chain, secure procedures and methods are used, eg using SSL certificates, network protocol management (restricting root access, controlling open ports).
        </li>
        <li>
	  Where needed, KYC is used so there is additional security. 
        </li>
        <li>
	  Regular audits, and monitoring. 
        </li>
      </ol>
      <p className="lead">
      </p>
      <p className="lead">
      </p>
	  <div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        url='https://www.youtube.com/watch?v=jJA3AR-tmwE'
        width='100%'
        height='100%'
          controls={true}
      />
    </div>
    </div>
  );
};

export default SecurityCompliance;

