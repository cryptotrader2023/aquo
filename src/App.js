import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Navbar  variant="dark" expand="lg" className="custom-navbar">
          <div className="container">
            <NavLink className="navbar-brand" exact to="/">  
	  <img src="/whitelogo.png" alt="Logo" className="logo-img" />
</NavLink>
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav">
              <Nav className="ml-auto lead">
                <Nav.Item>
                  <NavLink className="nav-link" exact to="/" activeClassName="active">Home</NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink className="nav-link" to="/about" activeClassName="active">About</NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink className="nav-link" to="/vision" activeClassName="active">Vision</NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink className="nav-link" to="/asset-tokenization" activeClassName="active">Tokenization</NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink className="nav-link" to="/security-compliance" activeClassName="active">Security</NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink className="nav-link" to="/investment-opportunities" activeClassName="active">Investment</NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink className="nav-link" to="/derivatives-integration" activeClassName="active">Derivatives</NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink className="nav-link" to="/business-models" activeClassName="active">Business</NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink className="nav-link" to="/market-size" activeClassName="active">Market</NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink className="nav-link" to="/join-us" activeClassName="active">Join</NavLink>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>

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
    </div>
  );
};

export default App;

