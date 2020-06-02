import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../../style/style.css';

export const NavigationBar = () => (
    <ul className="navbar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/recipes">Recipes</Link></li>
          <li><Link to="/healthyTips">Health Tips</Link></li>
    </ul>
)
