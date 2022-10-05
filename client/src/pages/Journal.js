import React from 'react';
import styled from 'styled-components';
import Header from '../components/sections/Header';

const WrapperStyles = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
`;

const Journal = () => {
  return(
    <>
      <Header />

      <WrapperStyles>
        <p>coming soon</p>
      </WrapperStyles>
    </>
  );
}

export default Journal;