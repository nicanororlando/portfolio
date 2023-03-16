import styled from "styled-components";

interface ITab {
  active: boolean;
}

export const Tab = styled.div<ITab>`
  display: ${(props) => (props.active ? "block" : "none")};
`;

export const Section = styled.div``;
