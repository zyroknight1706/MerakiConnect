import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    min-height: 40px;
    width: 50vw;
    border-radius: 10px;
    border: 1px solid red;
    padding: 10px 30px 30px 30px;
    margin: 0px;
    background-color: #000;
    color: #fff;
`

const Profile = styled.div`
    display: flex;
    flex-wrap: nowrap;
`

const PfName = styled.div`
    margin-left: 10px;
    padding-top: 1px;
    font-size: 19px;
    flex: 1;
`

const Caption = styled.h1`
    color: white;
    padding-top: 15px;
`

const Text = styled.div`
    padding: 15px;
`

const PFP = styled.img`
    flex: 1;
    border-radius: 100%;
    height: 50px;
    max-width: 50px;
    border: 2px solid red;
`

const Image = styled.img`
    border: 2px solid red;
    max-height: 250px;
    max-width: 100vw;
`

const Post = ({item}) => {
  return (
    <Container>
        <Profile>
            <PFP src={item.pfp} />
            <PfName><Link to="/Profile">{item.pfname}</Link></PfName>
        </Profile>
        <Caption>{item.cap}</Caption>
        <Text>{item.text}</Text>
        {item.isimg ? <Image src={item.img} /> : <hr width="40"/>}
    </Container>
  )
}

export default Post
