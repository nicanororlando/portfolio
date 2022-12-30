import styled from "styled-components";

interface IText {
  fontSize: number;
}

export const Text = styled.div<IText>`
  font-size: ${(props) => props.fontSize + "px"};
`;
