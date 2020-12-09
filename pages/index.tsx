import React from 'react';
import Link from 'next/link';
import styled from 'styled-components'

const index= () => {
  const Title = styled.h1`
  color: red;
`;
  return(
    <div>
      <Title>
        index
      </Title>
    </div>
  )
}

export default index