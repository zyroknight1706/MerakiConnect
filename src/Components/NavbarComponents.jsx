import React from 'react'
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
    height: 50px;
`

const Profile = () => {
  return (
    <A onClick="">
        <Image src={AccImage}></Image>
    </A>
  )
}

const SignIn = () => {
    return (
        <Button onClick="">
            Sign In
        </Button>
    )
}

export {SignIn, Profile}