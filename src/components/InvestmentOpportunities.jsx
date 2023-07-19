import React from 'react';

const InvestmentOpportunities = () => {
  return (
    <div className="container">
      <h1 className="text-center">Investment Opportunities</h1>
      <div className="row">
        <div className="col-md-12">
          <h2>Investment via Aquo</h2>
          <p className="lead">
	  Aquo is a framework which lists investment opportunities and investors may buy shares in real assets via tokens. Additional investments may be made
	  via derivatives.

          </p>
	   <div className="text-center">
        <img src="/investment.png" alt="Investments Image" className="img-fluid"  />
      </div>
          <h3>Asset Tokens</h3>
          <p className="lead">
	  Once an investor has asset tokens, they are entitled to earnings from the real asset. These are typically dividends. These payments can be made to an account of the nominated by the investor.

          </p>
	  <h3>Derivatives</h3>
	  <p className="lead">
Derivatives are contracts. These contracts may be created using a Bid/Ask on Aquo. Then the contract will be stored in a smart contract and it will executed normally. Margin trade can allow additional risks to be taken. The profit is in premiums for example when using options or by exercising the option. 

	  </p>
        </div>
      </div>
    </div>
  );
};

export default InvestmentOpportunities;

