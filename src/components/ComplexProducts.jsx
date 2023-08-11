import React from 'react';
import ReactPlayer from 'react-player';
import { ListGroup, Container } from 'react-bootstrap';
import './App.css';

const ComplexProducts = () => {
  return (
    <Container>
      <h1 className="display-4">Complex Products</h1>
      <div className="text-center">
        <img src="/complexproducts.png" alt="Complex Products" className="img-fluid"  />
      </div>
      <p className="lead">
       In TradFi, complex products are critical to the success of the TradFi financial markets. These products consist of CDOs, CDSs, derivatives, CMOs, and many more products. Derivatives themselves have different structures, and they can also be nested. For DeFi succeed, similar products are needed.

</p>
      <p className="lead">
	  Aquo uses a money lego approach which has trusted building blocks. These building blocks allow complex products to be built.

      </p>
      <p className="lead">
      </p>
    </Container>
  );
};

export default ComplexProducts;

