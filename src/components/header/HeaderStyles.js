import styled from 'styled-components';

const StyledHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  margin: 1rem 0 1rem 0;
  /* TEST NOT KEEPING */
  min-height: 7rem;
  max-height: 16rem;

  .header-location,
  .header-country {
    font-weight: 600;
  }

  .header-location {
    font-size: 6.5rem;
    text-transform: capitalize;
  }

  .header-country {
    font-size: 5rem;
    text-transform: uppercase;
  }
`;

export default StyledHeaderContainer;
