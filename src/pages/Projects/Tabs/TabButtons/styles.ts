import styled from "styled-components";

export const Container = styled.div`
  button {
    border: 1px solid var(--tab-bg-color-active);
    border-radius: 10px 10px 0px 0px;
    height: 37px;
    white-space: nowrap;
    transition: 0.3s;
    background-color: var(--tab-bg-color);
    color: var(--color-contrast-dark);
    :hover {
      background-color: var(--tab-bg-color-active);
      border-color: var(--tab-bg-color-active);
      color: var(--color-contrast-light);
      font-weight: 500;
    }
  }

  .active {
    background: var(--tab-bg-color-active);
    border-color: var(--tab-bg-color-active);
    color: var(--color-contrast-light);
    font-weight: 500;
  }
`;
