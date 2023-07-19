import React from 'react';
import { ListGroup, Container } from 'react-bootstrap';

const Vision = () => {
  return (
    <div className="container">
      <h1 className="display-4">Vision</h1>
      <div className="text-center">
        <img src="/vision1.png" alt="Vision Image" className="img-fluid" />
      </div>
      <p className="lead">
       Since the 1990s, there were enormous changes in financial services with Nobel prizes for options pricing models (Merton and Scholes), portfolio theory (Markowitz), and the CAPM (Sharpe). These developments led the growth of financial services, financial instruments, derivatives, and considerable growth in trade and assets.
</p>
	  <p className="lead">
      Now in the 2020s, new changes are happening led by decentralization, the quest to lower risk, widen financial services globally, and to enable growth. Decentralization was an initial impetus for these changes, but those ideas have been extended to CBDCs, synthetic CBDCs, and the acceptance that a blockchain can be used to settle a contractual condition via a smart contract which is executing bytecode stored replicated to ensure integrity.
	  </p>

	  <p className="lead">
            The concepts of tokenization have existed since the mid 2010s but now in 2023 we have a considerable interest in synthetic tokens, and how to define the next eave of financial change.
	  </p>
	  <p className="lead">
            At Aquo, we believe that the next wave of financial change will involve the following:
	  </p>
	      <ListGroup>
      <ListGroup.Item>Synthetic Tokens whose value is derived from the NFT value (underlying asset value)</ListGroup.Item>
      <ListGroup.Item>Liquidity via DAOs replacing Securitization concepts in traditional finance</ListGroup.Item>
      <ListGroup.Item>Novel Derivatives based on smart contracts and collateralized derivatives</ListGroup.Item>
      <ListGroup.Item>Clearing Houses replaced by Decentralized Clearing Networks</ListGroup.Item>
    </ListGroup>
      <p className="lead">
	  Just as from the 1980s onward there was widespread change, we think in Aquo a new wave is change is happening now. We this new change some of the following will happen:
      </p>
	  <Container>
      <ul className="list-group">
        <li className="list-group-item">Item 1</li>
        <li className="list-group-item">Item 2</li>
        <li className="list-group-item">Item 3</li>
      </ul>
    </Container>
	      <ListGroup>
      <ListGroup.Item>Growth in Financial Services via new Financial Instruments</ListGroup.Item>
      <ListGroup.Item>Widening of Financial Services with Globalization to include billions more people than today</ListGroup.Item>
      <ListGroup.Item>Greater stability and Liquidity due to decentralizing risk</ListGroup.Item>
    </ListGroup>
    </div>
  );
};

export default Vision;

