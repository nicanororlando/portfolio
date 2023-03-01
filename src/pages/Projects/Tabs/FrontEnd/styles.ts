import styled from "styled-components";

export const ContainerOut = styled.div`
  background: var(--container-color);
  padding: 35px;
  border-radius: 0 0 15px 15px;
  margin-top: 1px;

  @media (max-width: 1500px) {
    padding: 30px;
    padding-top: 0;
  }
  @media (max-width: 1200px) {
    padding: 26px;
    padding-top: 0;
  }
  @media (max-width: 990px) {
    padding: 0px;
    padding-top: 0;
  }
`;

export const Container = styled.div`
  position: relative;
  .profile-icon {
    background-color: #03c2ff;
    border-radius: 25px;
    height: 40px;
    width: 40px;
    color: #ffffff;
    font-size: 14px;
  }
  .profile-icon2 {
    background-color: #03c2ff;
    border-radius: 25px;
    height: 40px;
    width: 40px;
    color: #000000;
    font-size: 14px;
  }
  .col-lg-12 {
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }
`;
