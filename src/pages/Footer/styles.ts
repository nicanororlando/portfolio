import styled from "styled-components";

export const Foot = styled.footer`
  position: absolute;
  left: 0;
  right: 0;
  background-color: var(--container-color);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Container = styled.footer`
  margin: auto;
  padding: 2rem 0 3rem;

  .title,
  .link {
    color: var(--title-color);
  }

  .title {
    text-align: center;
    margin-bottom: 3rem;
  }

  .list {
    display: flex;
    justify-content: center;
    column-gap: 1.5rem;
    margin-bottom: 2rem;
    padding: 0;
  }

  .link:hover {
    color: var(--title-color-active);
  }

  .social {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    column-gap: 1.25rem;
  }

  .social-link {
    background-color: var(--text-color);
    color: var(--container-color);
    font-size: 1.125rem;
    padding: 0.4rem 0.6rem;
    border-radius: 0.5rem;
    display: inline-flex;
  }

  .social-link:hover {
    background-color: var(--text-color-active);
  }

  .copy {
    display: block;
    margin-top: 4.5rem;
    color: var(--title-color);
    text-align: center;
    font-size: var(--smaller-font-size);
  }
`;
