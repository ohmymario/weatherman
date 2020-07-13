import React from 'react';
import FlagIconFactory from 'react-flag-icon-css';

import styled from 'styled-components';

const StyledFlagContainer = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
`

const CountryFlag = (props) => {
  const {flagCountry} = props;
  const FlagIcon = FlagIconFactory(React, { useCssModules: false })
  return (
    <StyledFlagContainer>
      <FlagIcon code={flagCountry.toLowerCase()} size='lg' />
    </StyledFlagContainer>
  )
};

export default CountryFlag;
