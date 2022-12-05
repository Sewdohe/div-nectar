import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

const PostContainer = styled.div`
  max-width: 80%;
  margin: auto auto;
  font-size: 16px;
`

const PostLayout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <PostContainer>{children}</PostContainer>
  )
}

export default PostLayout