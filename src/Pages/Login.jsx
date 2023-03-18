import React from 'react'
import styled from 'styled-components'
import * as FaIcon from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Container = styled.div`
    margin: 90px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`

const Form = styled.div`
    flex: 1;
    width: 25%;
    align-items: center;
`

const Input = styled.input`
    flex: 1;
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
`

const Button = styled.button`
    flex: 1;
    background-color: #fff;
    color: #262626;
    padding: 14px 20px;
    margin: 0;
    border: 2px solid #262626;
    cursor: pointer;
    width: 100%;
    transition: 1s;
    :hover {
        background-color: #262626;
        color: #fff;
    }
`

const Small = styled.div`
    flex: 1;
    font-size: 12.5px;
`

const P = styled.p`
    flex:1;
    align-items: center;
    text-align: center;
    margin: 10px;
`

const Google = styled.button`
    flex: 1;
    flex-direction: column;
    align-items: center;
    bacground-color: #fff;
    color: #262626;
    padding: 14px 20px;
    margin: 8px 0;
    border: 2px solid #262626;
    cursor: pointer;
    width: 100%;
    transition: 1s;
    :hover {
        background-color: black;
        color: white;
    }

`

const LinkedIn = styled.button`
flex: 1;
flex-direction: column;
align-items: center;
bacground-color: #fff;
color: blue;
padding: 14px 20px;
margin: 8px 0;
border: 2px solid blue;
cursor: pointer;
width: 100%;
transition: ease-in-out .5s;
:hover {
    background-color: blue;
    color: white;
}
`

const Login = () => {
  return (
    <Container>
      <Form>
      <h1>Login to use all the features:</h1>
      <Input placeholder="email" />
      <Input placeholder="Password" type="password"/>
      <Button>Sign In</Button>
      <Small>Don't have an account? <Link to="/SignUp">Sign Up</Link></Small>
      <P>------------- OR ------------</P>
      <Google><FaIcon.FaGoogle />       Sign In with Google</Google>
      <LinkedIn><FaIcon.FaLinkedin />      Sign In with LinkedIn</LinkedIn>
      </Form>
    </Container>
  )
}

export default Login
