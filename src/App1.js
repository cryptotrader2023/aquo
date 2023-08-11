import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Vision from './components/Vision';
import AssetTokenization from './components/AssetTokenization';
import SecurityCompliance from './components/SecurityCompliance';
import InvestmentOpportunities from './components/InvestmentOpportunities';
import DerivativesIntegration from './components/DerivativesIntegration';
import BusinessModels from './components/BusinessModels';
import MarketSize from './components/MarketSize';
import JoinUs from './components/JoinUs';
import './ColorStyles.css';

const App = () => {
  return (
    <Router>
	        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#0C64DA' }}>

        <div className="container">
          <NavLink className="navbar-brand" exact to="/">AQUO</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/" activeClassName="active">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" activeClassName="active">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/vision" activeClassName="active">Vision</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/asset-tokenization" activeClassName="active">Tokenization</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/security-compliance" activeClassName="active">Security</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/investment-opportunities" activeClassName="active">Investment</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/derivatives-integration" activeClassName="active">Derivatives</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/business-models" activeClassName="active">Business</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/market-size" activeClassName="active">Market</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/join-us" activeClassName="active">Join</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/asset-tokenization" element={<AssetTokenization />} />
          <Route path="/security-compliance" element={<SecurityCompliance />} />
          <Route path="/investment-opportunities" element={<InvestmentOpportunities />} />
          <Route path="/derivatives-integration" element={<DerivativesIntegration />} />
          <Route path="/business-models" element={<BusinessModels />} />
          <Route path="/market-size" element={<MarketSize />} />
          <Route path="/join-us" element={<JoinUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

