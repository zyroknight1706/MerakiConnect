import React from 'react'
import Sidebar from '../Components/Sidebar'
import Posts from '../Components/Posts'
import Searchbar from '../Components/Searchbar'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  background-color: #000;
  color: #ffffff;
`

const Home = ({LoggedIn}) => {
  return (
    <Container>
      <Sidebar LoggedIn={LoggedIn}/>
      <Posts />
      <Searchbar />
    </Container>
  )
}

export default Home
