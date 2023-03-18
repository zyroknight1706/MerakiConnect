import React from 'react'
import styled from 'styled-components'
import * as FaIcons from 'react-icons/fa'

const Container = styled.div`
    flex: 1;
    padding: 10px;
    height: 100vh;
    width: 50px;
    border-left: 1px solid red;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    align-items: center;
`

const Input = styled.input`
    background-color: #000;
    padding: 10px;
    width: 15vw;
    box-shadow: none;
    margin: 10px;
    border: 1px solid red;
`

const Searchbar = () => {
  return (
    <Container>
        <FaIcons.FaSearch style={{padding: "2px"}}/> 
        <Input placeholder="Search for your categories!"/>
    </Container>
  )
}

export default Searchbar
