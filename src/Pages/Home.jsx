import React from 'react'
import Navbar from '../Components/Navbar.jsx'
import Posts from '../Components/Posts.jsx'
import styled from 'styled-components'

const Container = styled.div``

const Home = () => {
  return (
    <Container>
      <Navbar LoggedIn={false} class="navbar"/>
      <Posts />
    </Container>
  )
}

export default Home
