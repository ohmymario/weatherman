import styled from 'styled-components';

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 150px;
  padding: 20px 15px 20px 15px;
  border-radius: 15px;
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);
  color: ${props => props.color};
  background: ${props => props.color};
  margin: 1rem;
  :hover {
    /* fix box shadow for animations */
    box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.9);
  }

  p {
    color: white;
  }

  .icon-container {
    height: 80px;
    width: 80px;
    background: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }

  .card-icon {
    color: currentColor;
    font-size: 1.8rem;
    height: 1.8rem;
  }

  .card-data {
    font-family: "Roboto", sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 5px 0 5px 0;
  }

  .card-data span {
    font-size: 0.9rem;
    padding-left: 0.1rem;
    letter-spacing: 0.5px;
  }

  .card-description {
    font-size: 1rem;
    padding: 0 0 5px 0;
  }
`

export default StyledCardContainer;
