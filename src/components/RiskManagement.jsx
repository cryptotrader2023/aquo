import React from 'react';
import ReactPlayer from 'react-player';
import { ListGroup, Container } from 'react-bootstrap';
import './App.css';

const RiskManagement = () => {
  return (
    <Container>
      <h1 className="display-4">Risk Management</h1>
      <div className="text-center">
        <img src="/riskmanagement.png" alt="RiskManagement Image" className="img-fluid" />
      </div>
      <p className="lead">
	  Risk Management is critical in all financial ecosystems. Aquo reduces risk by increased transparency and using collateralization in the derivative contracts.

</p>
      <p className="lead">
        Also Aquo uses trusted building blocks (smart contract components) which also reduces risk. The solutions are non-custody so there is no risk for the centralized manager committing fraud.
      </p>
      <p className="lead">
      </p>
      <p className="lead">
      </p>
    </Container>
  );
};

export default RiskManagement;

