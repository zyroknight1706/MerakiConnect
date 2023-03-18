import React from 'react'
import styled from 'styled-components'
import Post from './Post.jsx'
import { Postdata } from './data/Postdata.js'

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify: space-between;
    background-color: transparent;
    margin: 30px;
`

const Posts = () => {
  return (
    <Container>
      {Postdata.map(item=>(
          <Post item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Posts
