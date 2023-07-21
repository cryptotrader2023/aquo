import React, { useState } from 'react';


const AssetTokenization = () => {

  const [isImageHovered, setIsImageHovered] = useState(false);


	  const handleImageClick = () => {
    window.location.href = '/realasset1.png';
  };

	 const handleMouseEnter = () => {
    setIsImageHovered(true);
  };

  const handleMouseLeave = () => {
    setIsImageHovered(false);
  };

  const cursorStyle = isImageHovered ? { cursor: 'pointer' } : {};

  return (
    <div className="container">
      <h1 className="display-4">Asset Tokenization</h1>
      <p className="lead">
        Asset tokenization is a core feature of our platform, enabling enhanced liquidity and unlocking new investment opportunities.
      </p>

<div className="text-center">
        <img
          src="/realasset1.png"
          alt="Real Asset"
          className="img-fluid"
          style={{ ...cursorStyle, maxWidth: '100%', height: 'auto' }}
          onClick={handleImageClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>



      <div className="row">
        <div className="col">
          <h2 className="display-6">ERC20</h2>
          <p className="lead">
	  The Aquo token (ERC20) will be launched to power the actual Aquo platform. In a similar manner to how the BNB coin works, the Aquo token will allow users to pay fees, earn rewards, and to trade the token normally as is done for the BNB coins.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h2 className="display-6">ERC721</h2>
          <p className="lead">
	    The NFTs are the actual digital representation of the SPV shares. They are minted against the actual shares in the SPV. The NFT price is fixed by an Oracle and a synthetic token which tracks the SPV financial performance (e.g. profits, dividends, retained earnings, net worth). 
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h2 className="display-6">Trading Synthetic Tokens</h2>
          <p className="lead">
	    Trading NFTs and changing actual shares in the SPV would be a costly and time consuming series of events. Therefore, we will mint synthetic tokens for the NFTs on a one-to-one basis. Then as the owners trade, they can trade the synthetic tokens. This will result in token holders having claims to the NFTs. The NFTs then have claims to the actual SPV shares.
          </p>
	  <p className="lead">
             An example follows. Alice buys 100 NFTs for an SPV which has 100 shares. Each share costs 1,000 dollars. Alice sells all the NFTs to Bob. Bob then wants to claim to the SPV shares and hence the SPV has to change ownership to Bob. Off-chain systems are maintained for security. This is a costly way to maintain shares.
	  </p>
	  <p className="lead">
             It is more cost effective to trade a synthetic token and not the NFT. Hence the NFT itself is minted and claims against the shares and the NFT is owned by the SPV itself. For 100 shares being issued, the shares are all owned by the SPV and also the NFTs are owned by the SPV. Then the synthetic tokens are minted and traded. Alice has 100 synthetic tokens which she sells to Bob. Then Bob has the claims against the NFTs and hence the SPV.
	  </p>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h2 className="display-6">Stablecoin Pegging</h2>
          <p className="lead">
            Market volatility for real assets will cause investors to lose money. Hence trades are fixed to an agreed price via a synthetic token which tracks price.

          </p>
        </div>
      </div>
    </div>
  );
};

export default AssetTokenization;

