import React, { useState } from 'react';
import StyledErrorModalContainer from './ErrorModalStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ErrorModal = (props) => {

  const { errorMessage, setErrorMessage } = props;

  return (
    <StyledErrorModalContainer>

      <div className='error-backdrop' onClick={() => setErrorMessage({error: false})}></div>

      <div className='error-modal'>
        <div className='error-image'>
          <FontAwesomeIcon icon="times-circle" size="6x" />
        </div>
        <div className='error-message'>
          <h3>Error!</h3>
          <p>{errorMessage.message}</p>
          <button onClick={() => setErrorMessage({error: false})}>Try Again</button>
        </div>
      </div>

    </StyledErrorModalContainer>
  )
};

export default ErrorModal;
