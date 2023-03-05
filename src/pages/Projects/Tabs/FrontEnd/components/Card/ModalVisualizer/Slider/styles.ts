import styled from "styled-components";
import CarouselComponent from "react-slick";

export const Carousel = styled(CarouselComponent)`
  .slick-track {
    transform: translate3d(0px, 0px, 0px);
    width: 500px;
    height: 500px;
    cursor: pointer;
  }

  .slick-dots {
    bottom: 15%;
    right: 32%;
    width: unset;

    li {
      margin: 0;
      padding: 0;
      transition-duration: 0.3s;
      width: max-content;
      height: max-content;

      button {
        transition-duration: 0.3s;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: rgba(209, 209, 209, 0.33);
        margin: 0;
        padding: 0;
        :before {
          display: none;
        }

        :hover {
          background: #01cc9d;
        }
      }

      + li {
        margin-left: 6px !important;
      }
    }

    .slick-active {
      button {
        width: 24px;
        height: 7px;
        background: #01cc9d;
        border-radius: 10px;
      }
    }
  }
  @media (max-width: 740px) {
    .slick-dots {
      bottom: 4%;
      left: 0;
      right: 0;
    }
  }
`;

export const ButtonLeft = styled.button`
  opacity: ${(props) => (props.disabled ? 0 : 1)};
  visibility: ${(props) => (props.disabled ? "hidden" : "visible")};
  transition-duration: 0.3s;
  position: absolute;
  z-index: 1;
  width: max-content;
  height: max-content;
  bottom: 40%;
  top: unset;
  right: unset;
  left: 3%;

  div {
    background: #01cc9d;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  svg {
    width: 30px;
    height: 30px;
    color: #ffffff;
  }

  ::before {
    display: none;
  }
`;

export const ButtonRight = styled.button`
  opacity: ${(props) => (props.disabled ? 0 : 1)};
  visibility: ${(props) => (props.disabled ? "hidden" : "visible")};
  transition-duration: 0.3s;
  position: absolute;
  z-index: 1;
  width: max-content;
  height: max-content;
  bottom: 40%;
  top: unset;
  left: unset;
  right: 3%;

  div {
    background: #01cc9d;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  svg {
    width: 30px;
    height: 30px;
    color: #ffffff;
  }

  ::before {
    display: none;
  }
`;
