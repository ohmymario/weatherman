import styled from 'styled-components';

const StyledWeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0 1rem 0;
  min-height: 130px;

  .weather-description {
    font-size: 1.5rem;
    text-align: center;
    margin: 0;
  }

  .weather-temperature {
    font-weight: 600;
    font-size: 3.2rem;
    position: relative;
  }

  .weather-unit {
    font-size: 1.5rem;
    vertical-align: top;
    position: absolute;
  }

  .icon-spin{
    animation: spin 5s linear infinite;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default StyledWeatherContainer;
