import React from 'react';

const AboutUs = () => {
  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <h1 className="display-4">About Us</h1>
        <p className="lead">
          Aquo is a financial framework supported by a team of experts as follows. Aquo was founded by <a href="https://uk.linkedin.com/in/trevorleeoakley" target="_blank" rel="noopener noreferrer" className="white-link">Trevor Lee Oakley</a> in January 2023 which originally an e-commerce platform. After market testing and research, the idea moved to DeFi and the product which is seen today. 
        </p>
      </div>

      <div className="row">
        <div className="col-md-12">
 <div className="text-center">
        <img src="/aboutus.png" alt="About Us" className="img-fluid" />
      </div>
      </div>
      </div>

      <div className="jumbotron mt-5">
        <h1 className="display-6">Blockchain</h1>
        <p className="lead">
          Aquo has a team of specialists in blockchains including EVM chains. Skills include solidity, Web3, Hyperledger Fabric, Corda and more.
        </p>
      </div>
      
	  <div className="jumbotron mt-5">
        <h1 className="display-6">Financial</h1>
        <p className="lead">
          We have specialists in the field of finance including experience of traditional finance, Defi, asset tokenization, Derivatives, Clearing Houses and more.
        </p>
      </div>

	  <div className="jumbotron mt-5">
        <h1 className="display-6">Compliance</h1>
        <p className="lead">
           Our compliance team is versed in legal matters such as leading common law judgments, BVI, law in England and Wales, primary legislation, secondary legislation, and more.
        </p>
      </div>

	  <div className="jumbotron mt-5">
        <h1 className="display-6">Infrastructure</h1>
        <p className="lead">
           We have a team skilled in GCP, AWS, IBM, Azure, VPCs, private blockchains, permissioned blockchains, public blockchains, TCP/IP, data packets and more.
        </p>
      </div>

	  <div className="jumbotron mt-5">
        <h1 className="display-6">Marketing</h1>
        <p className="lead">
           We have marketing specialists to maintain our presence in social media, press statements, articles in the media (eg coindesk), advertising, and more.
        </p>
      </div>

	  <div className="jumbotron mt-5">
        <h1 className="display-6">Business</h1>
        <p className="lead">
           Our business team works out core business models such as transaction fee costs, subscription models, and they also manage internal operating costs for the cloud, and other key services.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

