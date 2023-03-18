import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import AccImage from './data/AccImage.jpg'

const A = styled.a`
    height: 5px;
`

const Image = styled.img`
    border-radius: 100%;
    height: 30px;
    width: 30px;
`

const Button = styled.button`
    padding: 2rem 2rem;
    max-height: 25px;
    border: 5px solid #262626;
    align-items: center;
    text-style: none;
    background-color: #fff;
    color: #262626;
    cursor: pointer;
    transition: .5s;
    :hover {
        background-color: #262626;
        color: #fff;
    }
`

const Profile = () => {
  return (
    <A onClick="">
        <Image src={AccImage} onClick=""></Image>
    </A>
  )
}

const SignIn = () => {
    return (
        <Button>
            <Link to="/Login" style={{textDecoration: "none", color: "#262626"}}>Sign In</Link>
        </Button>
    )
}

export {SignIn, Profile}