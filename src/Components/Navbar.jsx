import React from 'react'
import styled from 'styled-components'
import * as FaIcons from 'react-icons/fa'
import { Profile, SignIn } from './NavbarComponents'
import { Link } from 'react-router-dom'
import './style.css'

const Container = styled.div`
  margin: 0;
  padding: 0;
  height: 0;
  position: sticky;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #262626;
  color: #fff;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
`

const Menu = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  transition: 5s;
  hover {
    color: green;
  }
`

const Logo = styled.div`
  flex: 1;
  align-items: center;
  padding: 0px 430px;
`

const SideBar = styled.div`
  height: 100vh;
  width: 280px;
  position: absolute;

`

const Li = styled.li`
  
`

const Account = styled.div``

var Sidebar = false;

const SetSidebar = () => {
  Sidebar = !Sidebar;
}

const Navbar = ({LoggedIn, Sidebar}) => {
  return (
    <Container>
      <Wrapper>
        <Menu onClick={SetSidebar}>
          <FaIcons.FaBars />
        </Menu>
        <Logo></Logo>
        <Account>{LoggedIn ? <Profile /> : <SignIn />}</Account>
      </Wrapper>
      <SideBar class={Sidebar?"sidebar-active":"sidebar"}>
        <Li></Li>
        <Li></Li>
        <Li></Li>
        <Li></Li>
        <Li></Li>
      </SideBar>
    </Container>
  )
}

export default Navbar
