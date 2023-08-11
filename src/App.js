import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Vision from './components/Vision';
import Liquidity from './components/Liquidity';
import ComplexProducts from './components/ComplexProducts';
import RiskManagement from './components/RiskManagement';
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
                  <NavLink className="nav-link" to="/liquidity" activeClassName="active">Liquidity</NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink className="nav-link" to="/complex-products" activeClassName="active">Complex Products</NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink className="nav-link" to="/risk-management" activeClassName="active">Risk Management</NavLink>
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
            <Route path="/liquidity" element={<Liquidity />} />
            <Route path="/complex-products" element={<ComplexProducts />} />
            <Route path="/risk-management" element={<RiskManagement />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;

