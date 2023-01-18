import styled from "styled-components";

export const Toggler = styled.div`
  width: 45px;

  label {
    position: absolute;
    width: 45px;
    height: 24px;
    background-color: var(--bg-color-light);
    border-radius: 50px;
    cursor: pointer;
  }
  input {
    display: none;
  }

  .slider {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: 0.3s;
  }

  input:checked ~ .slider {
    background-color: var(--light);
  }

  .slider::before {
    content: "";
    position: absolute;
    top: 4px;
    left: 5px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    box-shadow: inset 6px -4px 0px 0px var(--light);
    background-color: var(--bg-color-light);
    transition: 0.3s;
  }

  input:checked ~ .slider::before {
    transform: translateX(20px);
    background-color: var(--bg-color-light);
    box-shadow: none;
  }
`;
