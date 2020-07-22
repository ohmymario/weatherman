import styled from 'styled-components';

const StyledErrorModalContainer = styled.div`

   .error-modal {
      width: 500px;
      height: 370px;
      position: fixed;
      left: 50%;
      top: 40%;
      border-radius: 10px;
      overflow:hidden;
      transform: translate(-50%, -50%);
      z-index: 1041;
      background: rgba(57, 56, 189, 1);
      color: white;
      @media screen and (max-width: 600px) {
         width: 85%;
      }
   }

   .error-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1040;
      width: 100vw;
      height: 100vh;
      background-color: #000;
      opacity: .5;
   }

   .error-image {
      height: 40%;
      background: rgb(84, 83, 208, 1);
      display: flex;
      justify-content: center;
      align-items: center;
   }

   .error-message {
      height: 60%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      h3 {
         font-size: 2.75rem;
         padding-bottom: 1rem;
      }

      p {
         font-size: 1.2rem;
         padding-bottom: 1.2rem;
      }

      button {
         font-size: 1.2rem;
         font-weight: 600;
         padding: 1rem 2rem;
         border-radius: 15px;
         border: none;
         cursor: pointer;
         &:focus {
            outline: none;
         }
      }

   }

`;

export default StyledErrorModalContainer;
