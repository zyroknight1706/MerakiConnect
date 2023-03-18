import React from 'react'
import styled from 'styled-components'
import Searchbar from '../Components/Searchbar'
import SideBar from '../Components/Sidebar'

const Container = styled.div`
  background-color: #000;
  display: flex;
  color: white;
`

const Profiler = styled.div`
  flex: 1;
`

const PFP = styled.img`
  border-radius: 100%;
`

const PFName = styled.div``

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`



const Profile = (item) => {
  return (
    <Container>
      <SideBar />
      <Profiler>
        <PFP src={item.pfp} />
        <PFName>{item.name}</PFName>
        <Grid>
          <div style={{flex:"1"}}>Email: </div>
          <div style={{flex:"1"}}>{item.mail}</div>
          <div style={{flex:"1"}}>Phone: </div>
          <div style={{flex:"1"}}>{item.num}</div>
        </Grid>
      </Profiler>
      <Searchbar />
    </Container>
  )
}

export default Profile
