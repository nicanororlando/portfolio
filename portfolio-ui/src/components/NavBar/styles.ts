import styled from "styled-components";

interface TogglerDL {
  active?: boolean;
}

export const Container = styled.div``;

export const Header = styled.div`
  background-color: var(--container-color);
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
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
  justify-content: space-between;
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
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
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
    transition: 0.3s;
    color: var(--nav-link-color);
  }

  .nav__icon,
  .nav__close {
    display: none;
  }

  /* Active link */
  .active-link,
  .nav__link:hover {
    color: var(--title-color-active);
  }
  .active-link,
  .nav__link:hover {
    color: var(--title-color-active);
  }

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

    .nav__close {
      display: flex;
      justify-content: end;
      margin-top: 30px;
      font-size: 1.5rem;
      cursor: pointer;
      color: var(--title-color);
    }

    #light .nav__close:hover {
      color: var(--title-color-active);
    }
    #dark .nav__close:hover {
      color: var(--title-color-active);
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

export const DarkLightToggler = styled.div`
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
