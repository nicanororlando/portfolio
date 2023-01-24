import styled from "styled-components";

export const Section = styled.div``;

export const Container = styled.div`
  grid-template-columns: repeat(2, max-content);
  justify-content: center;
  column-gap: 6rem;
  padding-bottom: 3rem;

  /*------------------------------ BREAKPOINTS --------------------------------*/
  /* lg */
  @media screen and (max-width: 992px) {
    column-gap: 3rem;
  }

  /* md */
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 3rem;
  }
`;

export const Content = styled.div`
  .contact__title {
    text-align: center;
    font-size: var(--h3-font-size);
    font-weight: var(--font-medium);
    margin-bottom: 1rem;
  }
  .form {
    width: 360px;
  }

  .form-div {
    position: relative;
    margin-bottom: 2rem;
    height: 4rem;
  }

  .form-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border: 2px solid rgba(0, 0, 0, 0.3);
    background: none;
    color: var(--text-color);
    outline: none;
    border-radius: 0.75rem;
    padding: 1.3rem;
    z-index: 1;
  }

  .form-tag {
    position: absolute;
    top: -0.75rem;
    left: 1.25rem;
    font-size: var(--smaller-font-size);
    padding: 0.25rem;
    background-color: var(--body-color);
    z-index: 10;
  }

  .form-area {
    height: 11rem;
  }

  .form-area textarea {
    resize: none;
    height: 11rem;
  }

  .error {
    font-size: var(--smaller-font-size);
    color: red;
  }
  .success {
    font-size: var(--smallest-font-size);
    color: green;
  }

  /*------------------------------ BREAKPOINTS --------------------------------*/
  /* sm */
  @media screen and (max-width: 768px) {
    .form {
      margin: 0 auto;
    }
  }

  /* sm */
  @media screen and (max-width: 576px) {
    .form {
      width: 100%;
    }
  }
`;

export const Info = styled.div`
  display: grid;
  row-gap: 1rem;
  grid-template-columns: 300px;

  /*------------------------------ BREAKPOINTS --------------------------------*/
  /* md */
  @media screen and (max-width: 768px) {
    justify-content: center;
  }

  /* sm */
  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;
