import styled from "styled-components";

interface TogglerDL {
  active?: boolean;
}

export const Container = styled.div``;

export const Header = styled.div`
  background-color: var(--body-color);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: var(--z-fixed);

  /*------------------------------ BREAKPOINTS --------------------------------*/
  /* md */
  @media screen and (max-width: 768px) {
    top: initial;
    bottom: 0;
  }
`;

export const Nav = styled.div`
  height: calc(var(--header-height) + 1.5rem);
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;

  .nav__logo {
    font-weight: var(--font-medium);
    color: var(--title-color);
  }

  .nav__toggle {
    display: none;
    font-weight: var(--font-medium);
    color: var(--title-color);
  }

  /*------------------------------ BREAKPOINTS --------------------------------*/
  /* md */
  @media screen and (max-width: 768px) {
    height: var(--header-height);

    .nav__toggle {
      display: block;
      font-size: 1.1rem;
      margin-right: 3px;
      cursor: pointer;
    }
  }
`;

export const NavMenu = styled.div<TogglerDL>`
  /*------------------------------ BREAKPOINTS --------------------------------*/
  /* md */
  @media screen and (max-width: 768px) {
    position: fixed;
    bottom: ${(props) => (props.active ? 0 : "-100%")};
    left: 0;
    width: 100%;
    padding: 2rem 0 0.8rem;
    box-shadow: 0 0 10px var(--border-primary);
    border-radius: 1.5rem 1.5rem 0 0;
    transition: 0.3s;
    background-color: var(--body-color);
  }
`;

export const NavList = styled.div`
  position: relative;

  .nav__list {
    display: flex;
    column-gap: 2rem;
  }

  .nav__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
    color: var(--nav-link-color);
    transition: 0.3s;
    opacity: 0;
    animation: slideTop 0.5s ease forwards;
    animation-delay: calc(0.2s * var(--i));
  }

  .nav__icon,
  .nav__close,
  .toggler {
    display: none;
  }

  /* Active link */
  .active-link,
  .nav__link:hover {
    color: var(--nav-link-color-active);
    font-weight: var(--font-semi-bold);
  }
  .active-link,
  .nav__link:hover {
    color: var(--nav-link-color-active);
    font-weight: var(--font-semi-bold);
  }

  /* a {
    font-size: 18px;
    color: var(--text-color);
    text-decoration: none;
    font-weight: var(--font-medium);
    margin-left: 35px;
  } */

  /*------------------------------ BREAKPOINTS --------------------------------*/
  /* lg */
  @media screen and (max-width: 992px) {
    .nav__list {
      column-gap: 1rem;
    }
  }

  /* md */
  @media screen and (max-width: 768px) {
    .nav__list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      padding: 0;
      margin: 0;
    }

    .nav__icon {
      font-size: 1.2rem;
    }

    .toggler,
    .nav__close,
    .dropdown-container {
      display: flex;
      justify-content: end;
      margin: 30px 0 10px 10px;
      font-size: 1.5rem;
      cursor: pointer;
      color: var(color: var(--nav-link-color) ;);
    }

    ul .dropdown-container {
      display: none;
    }

    #light .nav__close:hover {
      color: var(--nav-link-color-active);
    }
    #dark .nav__close:hover {
      color: var(--nav-link-color-active);
    }

    .nav__icon {
      display: block;
    }
  }

  /* xs */
  @media screen and (max-width: 350px) {
    .nav__menu {
      padding: 2rem 0.25rem 0.8rem;
    }

    .nav__list {
      column-gap: 0;
    }
  }
`;
