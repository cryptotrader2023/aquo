import React from 'react';

const AssetTokenization = () => {
  return (
    <div className="container">
      <h1 className="display-4">Asset Tokenization</h1>
      <p className="lead">
        Asset tokenization is a core feature of our platform, enabling enhanced liquidity and unlocking new investment opportunities.
      </p>
  <div className="text-center">
        <img src="/token.png" alt="Token Image" className="img-fluid" style={{ height: "400px" }} />
      </div>

      <div className="row">
        <div className="col">
          <h2 className="display-6">ERC20</h2>
          <p className="lead">
            The ERC20 token powers our platform and serves as the backbone of our digital ecosystem. It allows for seamless transactions, fee payments, and incentivization for users. The ERC20 token, the Aquo token, can be used to pay for fees (similar to how BNB works), and be paid to users for referrals and usage of the platform.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h2 className="display-6">ERC721</h2>
          <p className="lead">
            ERC721 tokens represent security tokens for fractional ownership. These tokens enable users to invest in real-world assets, such as real estate or artwork, and benefit from the advantages of fractional ownership.
	  The ERC721 tokens are NFTs are relate to the actual share ownership in the SPV (company owning the asset). The NFT has value when the investment is confirmed and if disputed an ODR process decides on the outcome.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h2 className="display-6">Portfolio SPV</h2>
          <p className="lead">
            Our platform utilizes Portfolio Special Purpose Vehicles (SPVs) to create investment opportunities and diversify risk. Through the pooling of assets, users gain access to a range of investment options and enjoy the benefits of a diversified portfolio. These are also NFTs but for a group asset and there is a vote to join the group asset.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h2 className="display-6">Stablecoin Pegging</h2>
          <p className="lead">
            Stablecoin pegging ensures price stability by linking the value of a token to a specific asset or currency. This mechanism provides confidence and predictability in asset trading, making it easier to transact and invest with reduced volatility. Therefore the value of NFT can be guaranteed for a particular asset. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default AssetTokenization;

