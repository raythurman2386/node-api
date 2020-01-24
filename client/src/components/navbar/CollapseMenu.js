/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { useSpring, animated } from 'react-spring'

const CollapseMenu = ({ navbarState, handleNavbar }) => {
  const { open } = useSpring({ open: navbarState ? 0 : 1 })

  if (navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
        }}
      >
        <NavList handleNavbar={handleNavbar} />
      </CollapseWrapper>
    )
  }
  return null
}

const NavList = ({ handleNavbar }) => (
  <NavLinks>
    <li>
      <Link to='/' onClick={handleNavbar}>
        Home
      </Link>
    </li>
    <li>
      <Link to='/techs' onClick={handleNavbar}>
        Add Technician
      </Link>
    </li>
    <li>
      <Link to='/add-job' onClick={handleNavbar}>
        Add Job
      </Link>
    </li>
  </NavLinks>
)

export default CollapseMenu

const CollapseWrapper = styled(animated.div)`
  background: #2d3436;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  z-index: 1;
`

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`
