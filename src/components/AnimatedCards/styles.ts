import styled from "styled-components";

export const Container = styled.div`
  font-family: sans-serif;

  .cards {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-wrap: wrap;
    row-gap: 2rem;
    column-gap: 2rem;
    margin-top: 3rem;
  }

  .title {
    color: navy;
    font-weight: 600;
    margin: 0;
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .card {
    overflow: hidden;
    box-shadow: 0 0 10px -2px var(--text-color);
    padding: 2rem;
    border-radius: 1rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .expanded {
    width: fit-content;
    height: fit-content;
    background-color: var(--body-color);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 10;
  }

  .secondary {
    position: absolute;
    top: -55% !important;
    right: -45%;
    height: 10px;
    width: 10px;
    padding: 0.8rem;
    padding-top: 0.9rem;
    background-color: #eee;
    border-radius: 20px;
  }

  .compact {
    background-color: var(--body-color);
    color: var(--text-color);
    height: fit-content;
    padding: 1rem 1.3rem;
    text-align: center;
    border-radius: 1.5rem;
    .title {
      font-size: 15px;
    }
  }

  .title-comp {
    font-size: 1.2rem;
  }

  .exp-card {
    display: flex;
    justify-content: left;
    text-align: left;
    max-width: 25rem;
    .title {
      margin-right: auto;
      margin-bottom: 10px;
      font-size: 1.2rem;
      color: var(--text-color);
    }
    .description {
      margin-top: 0;
      margin-bottom: 0;
      margin-right: auto;
    }
    .foot {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
      .button_redirect {
        width: fit-content;
        border-radius: 10px;
        border: 2px solid transparent;
        background: #90f8b5;
        color: var(--color-contrast-light);
        padding: 3px 11px 3px 10px;
        font-weight: 500;
      }
    }
  }
  .compact .title {
    color: var(--text-color);
    font-size: 1.5em;
  }
`;
