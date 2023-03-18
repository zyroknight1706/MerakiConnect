import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import logo from './data/logo.png'

const Container = styled.div`
    flex: 1;
    height: 100vh;
    width: 100px;
    position: sticky;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 220px;
    border-right: 1px solid red;
    display: flex;
    flex-direction: column;
    background-color: #000;
`

const Li = styled.li`
    flex: 1;
    list-style: none;
    justify-content: center;
    align-items: center;
    color: white;
`

const Logo = styled.img`
    flex: 1;
    padding: 1rem 0;
    max-width: 130px;
    max-height: 200px;
`

const Button = styled.button`
    padding: 15px;
    margin: 7px;
    background-color: red;
    border: none;
`

const SideBar = ({LoggedIn}) => {
  return (
    <Container>
        <Link to="/"><Logo src={logo}></Logo></Link>
        <Li><Button><Link to="/"><FaIcons.FaHome style={{color:"white", margin: "5px"}}/>Home</Link></Button></Li>
        <Li><Button><Link to="/Explore"><FaIcons.FaFire style={{color:"white", margin: "5px"}} />Explore</Link></Button></Li>
        <Li><Button><Link to="/Dashboard"><FaIcons.FaSuitcase style={{color:"white", margin: "5px"}}/>Dashboard</Link></Button></Li>
        <Li><Button><Link to="/AboutUs"><FaIcons.FaQuestion style={{color:"white", margin: "5px"}}/>About Us</Link></Button></Li>
        <Li><Button><Link to={LoggedIn ? "/Profile" : "/Login"}>{LoggedIn ? <FaIcons.FaAddressCard style={{color:"white", margin: "5px"}}/> : <FaIcons.FaPen style={{color:"white", margin: "5px"}} />}{LoggedIn ? "Profile" : "Login"}</Link></Button></Li>
    </Container>
  )
}

export default SideBar
