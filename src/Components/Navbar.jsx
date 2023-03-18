import React, { useState } from 'react'
import styled from 'styled-components'
import * as FaIcons from 'react-icons/fa'
import { Profile, SignIn } from './NavbarComponents'
import { Link } from 'react-router-dom'
import logo from './data/logo.png'

const Container = styled.div`
  margin: 0;
  padding: 10px;
  max-height: 50px;
  background-color: #262626;
  color: #fff;
  position: sticky;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
`

const Menu = styled.div`
  margin: 0px;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  display: flex;
  transition: 2s;
  :hover {
    background-color: #fff;
  }
`

const Logo = styled.div`
  flex: 1;
  align-items: center;
  padding: 0px 430px;
`

const Image = styled.img`
  padding: 0 40px;
`

const SideBar = styled.div`
  background-color: #262626;
  height: 100vh;
  width: 220px;
  position: absolute;
  top: 0;
  left: 0;
  transition: 1s;
`

const Li = styled.li`
  list-style: none;
  padding: 1rem 2rem;
  border-bottom: solid #fff 1px;
  justify-content: space-between;
  color: white;
  list-style: none;
  text-decoration: none;
`

const Account = styled.div``

const Navbar = ({LoggedIn}) => {

  const [Sidebar, SetSidebar] = useState(false);

  const ToggleSidebar = () => {
    SetSidebar((prevState) => !prevState)
  }

  const sbstyle = {
    transform: Sidebar ? "translateX(0%)" : "translateX(-100%)"
  }

  return (
    <Container>
      <Wrapper>
        <Menu onClick={ToggleSidebar}>
          <FaIcons.FaBars />
        </Menu>
        <Logo><Image src={logo} height="40" width="130" /></Logo>
        <Account>{LoggedIn ? <Profile /> : <SignIn />}</Account>
      </Wrapper>
      <SideBar style={sbstyle}>
        <Li onClick={ToggleSidebar}><FaIcons.FaTimes /></Li>
        <Li><Link to="/"><FaIcons.FaHome />   Home</Link></Li>
        <Li><Link to="/topics"><FaIcons.FaImages />   Topics</Link></Li>
        <Li><Link to="/search"><FaIcons.FaSearch />   Search</Link></Li>
        <Li><Link to="/contact"><FaIcons.FaPhone />   Contact Us</Link></Li>
        <Li><Link to="/about"><FaIcons.FaBook />   About Us</Link></Li>
      </SideBar>
    </Container>
  )
}

export default Navbar
