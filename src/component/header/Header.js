import React from 'react';
import { useSelector } from 'react-redux';
import { FaSearch, FaMicrophone } from 'react-icons/fa';
import { BsFillArrowRightSquareFill, BsCart4 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { IoMdSettings } from 'react-icons/io';
import { Container, Navbar } from 'react-bootstrap';

import './Header.css';

const Header = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <Container>
      <Navbar expand="lg" variant="dark">
        <Container className="d-flex flex-sm-row justify-content-between">
          <h2>
            <Link to="/" className="text-decoration-none">
              <Navbar.Brand className="text-secondary">
                Lizdev Collection
              </Navbar.Brand>
            </Link>
          </h2>
          <div className="justify-content-center text-secondary mx-4 flex-wrap second">
            <a href="#search" className="text-secondary mx-3">
              <FaSearch />
            </a>
            <FaMicrophone className="mx-3" />
            <IoMdSettings />
          </div>
          <div className="justify-content-end text-secondary mx-4 flex-wrap buttons">
            <Link to="/cart" className="ms-2 btn btn-outline-dark">
              <BsCart4 className="mx-2" />
              {state.length}
            </Link>
            <Link
              to="/subscribe"
              className="text-secondary ms-2 btn btn-outline-dark"
            >
              Subscribe
              <BsFillArrowRightSquareFill className="mx-2" />
            </Link>
          </div>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
