import styled from "styled-components";

export const Section = styled.div`
  .home__container {
    row-gap: 7rem;
  }

  .home__content {
    grid-template-columns: 116px repeat(2, 1fr);
    padding-top: 5.5rem;
    column-gap: 2rem;
    align-items: center;
  }

  .home__social {
    display: grid;
    grid-template-columns: max-content;
    row-gap: 1rem;
  }

  .home__img {
    background: var(--background-photo);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    box-shadow: inset 0 0 0 9px rgb(255, 255, 255 / 30%);
    order: 1;
    justify-self: center;
    width: 300px;
    height: 300px;
    animation: profile__animate 8s ease-in-out infinite 1s;
  }

  @keyframes profile__animate {
    0% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }
    100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
  }

  @keyframes zoomIn {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  /*------------------------------ BREAKPOINTS --------------------------------*/

  /* md */
  @media screen and (max-width: 992px) {
    .home__content {
      grid-template-columns: 100px repeat(2, 1fr);
      column-gap: 1rem;
    }

    .home__img {
      width: 250px;
      height: 250px;
      box-shadow: inset 0 0 0 8px rgb(255, 255, 255 / 30%);
    }
  }

  /* sm */
  @media screen and (max-width: 768px) {
    .home__content {
      grid-template-columns: 0.5fr 3fr;
      padding-top: 3.5rem;
    }

    .home__img {
      order: initial;
      justify-self: initial;
      box-shadow: inset 0 0 0 6px rgb(255, 255, 255 / 30%);
      width: 200px;
      height: 200px;
    }
  }

  /* xxs */
  @media screen and (max-width: 350px) {
    .home__img {
      width: 180px;
      height: 180px;
    }
  }
`;
