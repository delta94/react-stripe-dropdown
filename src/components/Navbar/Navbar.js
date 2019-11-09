import React from 'react';
import styled from 'styled-components';

import Menu from './NavItems'
import ProductsComponent from '../DropDown/ProductsComponent';
import DevelopersComponent from '../DropDown/DevelopersComponent';
import CompanyComponent from '../DropDown/CompanyComponent';

const navConfig = [
  { title: 'Products', component: <ProductsComponent /> },
  { title: 'Developers', component: <DevelopersComponent /> },
  { title: 'Company', component: <CompanyComponent /> },
]

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #5533ff, #0ec3ff);
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  color: white;
  height: 65px;
  padding: 0 250px;

  .logo {
    flex: 1;
  }

  @media all and (max-width: 1200px) {
    padding: 0 100px;
  }
`


const Navbar = () => {
  return (
    <NavWrapper>
      <h2 className="logo">Logo</h2>

      <Menu>
        {navConfig.map((item, index) => {
          return (
            <Menu.Item
              key={index}
              title={item.title}
            >
              {item.component}
            </Menu.Item>
          )
        })}
      </Menu>
    </NavWrapper>
  );
}
export default Navbar;