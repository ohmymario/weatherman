import styled from 'styled-components';

const StyledForecastGraphContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 95%;
  border-radius: 25px;
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.5);
  padding: 20px 0 20px 0;
  min-height: 464px;
  transition: all 0.3s ease-in-out;
  &::after {
    content: "";
    border-radius: 25px;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    box-shadow: 0px 0px 12px -5px rgba(82, 82, 173);
  }
  &:hover::after {
    opacity: 1;
  }

  .forecast-btns-container {
    width: 80%;
    padding: 15px 15px 0px 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .forecast-btns-container button {
    font-size: 1rem;
    font-weight: 600;
    color: rgb(170, 170, 170);
    outline: none;
    cursor: pointer;
    background: transparent;
    padding: 15px 40px;
    border-radius: 20px;
    border: none;
    transition: all 0.3s linear;
  }

  .forecast-btns-container button:hover {
    box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.1);
    color: rgb(130, 130, 130);
  }

  .forecast-btns-container button:active,
  .forecast-btns-container button:focus {
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.18);
  }

  .forecast-btns-container button.active-btn {
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.18);
    color: rgb(65, 65, 139);
  }

  .forecast-graph-container {
    width: 100%;
    height: 400px;
  }

  .spinner {
    margin: 100px auto 0;
    width: 100%;
    text-align: center;
  }

  .spinner > div {
    width: 25px;
    height: 25px;
    margin: 10px;
    background-color: #333;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  .spinner .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .spinner .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%, 80%, 100% { -webkit-transform: scale(0) }
    40% { -webkit-transform: scale(1.0) }
  }

  @keyframes sk-bouncedelay {
    0%, 80%, 100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    } 40% {
      -webkit-transform: scale(1.0);
      transform: scale(1.0);
    }
  }

`

export default StyledForecastGraphContainer;
