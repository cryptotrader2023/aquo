import React from 'react';
import ReactPlayer from 'react-player';
import { ListGroup, Container } from 'react-bootstrap';
import './App.css';

const Liquidity = () => {
  return (
    <Container>
      <h1 className="display-4">Liquidity</h1>
      <div className="text-center">
        <img src="/liquidity.png" alt="Liquidity" className="img-fluid" />
      </div>
      <p className="lead">
       Liquidity is critical to any financial market. Liquidity is defined as the ease of converting a security into cash without affecting the market price. In DeFi ecosystems, liquidity comes from a market which enough buyers and sellers so that orders are filled easily.

</p>
      <p className="lead">
	  Under the Aquo design which integrates DeFi protocols, then buyers and sellers from different platforms could seamlessly trade. We are focused on derivatives and for RWAs the trades would be in synthetic assets (tracking the RWA price via an oracle).

      </p>
      <p className="lead">
      </p>
      <p className="lead">
      </p>
      <div className="lead text-left">
      </div>
      <p className="lead">
      </p>
    </Container>
  );
};

export default Liquidity;

