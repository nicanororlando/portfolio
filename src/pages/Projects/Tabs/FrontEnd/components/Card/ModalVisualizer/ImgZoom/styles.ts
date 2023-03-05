import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  overflow: hidden;
  margin: auto;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: all 0.5s ease;
  }
`;
