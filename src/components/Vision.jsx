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
        Since the 1990s, there have been enormous changes in financial services with Nobel prizes for <a href="https://www.nobelprize.org/prizes/economic-sciences/1997/press-release/" target="_blank" rel="noopener noreferrer" className="white-link">options pricing models</a> (Merton and Scholes), <a href="https://www.nobelprize.org/prizes/economic-sciences/1990/press-release/" target="_blank" rel="noopener noreferrer" className="white-link">portfolio theory</a> (Markowitz), and the CAPM (Sharpe). These developments have led to the growth of financial services, financial instruments, derivatives, and considerable growth in trade and assets.
      </p>
      <p className="lead">
        Now in the 2020s, new changes are happening led by decentralization, the quest to lower risk, widen financial services globally, and to enable growth. Decentralization was an initial impetus for these changes, but those ideas have been extended to CBDCs, <a href="https://www.bis.org/publ/othp33.pdf" target="_blank" rel="noopener noreferrer" className="white-link">synthetic CBDCs</a>, and the acceptance that a blockchain can be used to settle a contractual condition via an exeucting smart contract which is replicated to ensure integrity.
      </p>
      <p className="lead">
        The concept of tokenization has existed since the mid-2010s, but now in 2023, we have a considerable interest in synthetic tokens and defining the next wave of financial change.
      </p>
      <p className="lead">
        At Aquo, we believe that the next wave of financial change will involve the following:
      </p>
      <div className="lead text-left">
        <div className="d-flex ">
          <ListGroup>
            <ListGroup.Item>Synthetic Tokens whose value is derived from the NFT value (underlying asset value)</ListGroup.Item>
            <ListGroup.Item>Liquidity via DAOs replacing Securitization concepts in traditional finance</ListGroup.Item>
            <ListGroup.Item>Novel Derivatives based on smart contracts and collateralized derivatives</ListGroup.Item>
            <ListGroup.Item>Clearing Houses replaced by Decentralized Clearing Networks</ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      <p className="lead">
        Just as from the 1980s onward, there was widespread change, we believe that a new wave of change is happening now. With this new change, the following will happen:
      </p>
      <div className="lead text-left">
        <div className="d-flex ">
          <ListGroup>
            <ListGroup.Item>Growth in Financial Services via new Financial Instruments</ListGroup.Item>
            <ListGroup.Item>Widening of Financial Services with Globalization to include billions more people than today</ListGroup.Item>
            <ListGroup.Item>Greater stability and Liquidity due to decentralizing risk</ListGroup.Item>
          </ListGroup>
        </div>
      </div>
	            <div className="col-md-12 text-center">
<div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        url='https://www.youtube.com/watch?v=TK8T9aBrrCI'
        width='100%'
        height='100%'
          controls={true}
      />
    </div>
          </div>
    </Container>
  );
};

export default Vision;

