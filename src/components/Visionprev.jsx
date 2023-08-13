import React from 'react';
import ReactPlayer from 'react-player';
import { ListGroup, Container } from 'react-bootstrap';
import './App.css';

const Vision = () => {
  return (
    <Container>
      <h1 className="display-4">Vision</h1>
      <div className="text-center">
        <img src="/vision1.png" alt="Vision Image" className="img-fluid" />
      </div>
      <p className="lead">
       Our mission statement is: To integrate the world’s financial systems into one protocol.
</p>
      <p className="lead">
	  Our vision is for a single account transaction to generate access to all the financial services a user wants, including complex financial products.

      </p>
      <p className="lead">
	  This can be implemented via DeFi Composition. This is a design which allows multiple DeFi protocols to be integrated into a single tranasction. 
      </p>
      <p className="lead">
        An example would be a user wants to buy an option on a RWA with some future debt and lender wants protection. The future debt is a forward foward contract, the option is a call or put, and the protection is equivalent to a future credit default swap. In DeFi we can innovate new financial instruments. Some features are below: 
      </p>
      <div className="lead text-left">
        <div className="d-flex ">
          <ListGroup>
            <ListGroup.Item>Complex products available to users.</ListGroup.Item>
            <ListGroup.Item>Liquidity can be aggregated across DeFi protocols.</ListGroup.Item>
            <ListGroup.Item>Risk can be reduced via increased transparency and trusted building blocks.</ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      <p className="lead">
      </p>
    </Container>
  );
};

export default Vision;

