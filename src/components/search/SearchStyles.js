import styled from 'styled-components';

const StyledSearchContainer = styled.div`
  width: 40%;
  padding: 1rem 1rem 0 0;
  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 570px) {
    width: 100%;
  }

  .search {
    width: 85%;
    position: relative;
    display: inline-block;
  }

  .searchIcon,
  .submitIcon {
    position: absolute;
    top: 0.5rem;
    right: 0;
    cursor: pointer;
    transition: all 0.25s linear;
    &:hover,
    &:hover {
      filter: brightness(90%);
      transform: scale(1.05);
    }
  }

  .submitIcon {
    z-index: 1000;
  }

  #inputSubmit {
    display: none;
  }

  input[type="text"] {
    background-color: transparent;
    font-size: 2.5rem;
    height: 2.5rem;
    display: inline-block;
    font-family: "Raleway";
    font-weight: 200;
    border: none;
    outline: none;
    color: #555;
    width: 0%;
    transition: width 0.45s cubic-bezier(0, 0.795, 0, 1),
      border-bottom 0.1s linear;
    cursor: pointer;
    &:focus:hover {
      border-bottom: 1px solid rgba(121, 121, 121, 0.7);
    }
    /* show the input if either focused or text is present */
    &:focus,
    &:not(:placeholder-shown) {
      width: 87%;
      z-index: -1;
      border-bottom: 1px solid #bbb;
      cursor: text;
    }
  }

  input[type="submit"]:hover {
    opacity: 0.8;
  }
`;

export default StyledSearchContainer;
