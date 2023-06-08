import React from 'react';

const AboutUs = () => {
  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <h1 className="display-4">About Us</h1>
        <p className="lead">
          Aquo is a leading blockchain-powered investment platform that aims to revolutionize the investment landscape. We believe in the transformative power of asset tokenization and are committed to unlocking liquidity and providing innovative investment opportunities.
        </p>
      </div>

      <div className="row">
        <div className="col-md-6">
          <img className="img-fluid" src="/aboutus.png" alt="Team Image" />
        </div>
        <div className="col-md-6">
          <div className="mt-4">
            <h2 className="display-6">Building a Strong and Diverse Team</h2>
            <p className="lead">
              At Aquo, we understand the importance of assembling a talented and diverse team. Our team comprises professionals with diverse skill sets and expertise across various domains to drive innovation, navigate regulatory landscapes, and deliver exceptional value to our investors.
            </p>
            <h4 className="display-6">Founder</h4>
            <p className="lead">
              Our founder possesses a deep understanding of blockchain technology and its intersection with financial services. With a strong foundation in the industry, they provide a holistic perspective on the regulatory and technical aspects of the business.
            </p>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h4 className="display-6">Developers</h4>
          <p className="lead">
            Our development team consists of highly skilled professionals who are experts in blockchain, cloud computing, and database management. They ensure that our technology infrastructure remains robust, secure, and scalable, enabling us to deliver cutting-edge solutions and a seamless user experience.
          </p>

          <h4 className="display-6">Investment Specialists</h4>
          <p className="lead">
            Our investment specialists research the market and assess investment risks to deliver a risk rating with an asset rating. They analyse on-going investments to provide direction for new features and new liquidity models.
        </p>
	  </div>

        <div className="col-md-6">
          <h4 className="display-6">Legal and Accounting Professionals</h4>
          <p className="lead">
            To ensure compliance and legal efficacy, we collaborate with external legal and accounting professionals. They provide invaluable guidance in navigating complex regulatory environments and maintaining the highest standards of transparency and accountability.
          </p>

          <h4 className="display-6">Marketing Specialists</h4>
          <p className="lead">
            Our marketing team employs innovative strategies to create awareness, attract investors, and promote the benefits of our platform. They possess expertise in tokenization and digital marketing, helping us build a strong brand presence and drive user engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

