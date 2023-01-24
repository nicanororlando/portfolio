import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--container-color);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 0.75rem;
  text-align: center;

  .card-icon {
    font-size: 2rem;
    color: var(--title-color);
    margin-bottom: 0.25rem;
  }

  .card-title,
  .card-data {
    font-size: var(--small-font-size);
  }

  .card-title {
    font-weight: var(--font-medium);
  }

  .card-data {
    display: block;
    margin-bottom: 0.75rem;
  }

  .card-button {
    color: var(--text-color);
    font-size: var(--small-font-size);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.25rem;
  }

  .button-icon {
    font-size: 1rem;
    transition: 0.3s;
  }

  .card-button:hover .button-icon {
    transform: translate(0.25rem);
  }
`;
