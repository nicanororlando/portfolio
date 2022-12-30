import React from "react";
import { Text } from "./styles";

interface Props {
  H1?: boolean;
  H2?: boolean;
  H3?: boolean;
  H4?: boolean;
  H5?: boolean;
  H6?: boolean;
  children: string;
}

const config = {
  // families: {
  //   bold: "PTSans_700Bold",
  // },
  sizes: {
    H1: 48,
    H2: 40,
    H3: 32,
    H4: 24,
    H5: 20,
    H6: 18,
  },
};

const Heading: React.FC<Props> = (props) => {
  const fontSize = props.H1
    ? config.sizes.H1
    : props.H2
    ? config.sizes.H2
    : props.H3
    ? config.sizes.H3
    : props.H4
    ? config.sizes.H4
    : props.H5
    ? config.sizes.H5
    : props.H6
    ? config.sizes.H6
    : config.sizes.H3;

  return <Text fontSize={fontSize}>{props.children}</Text>;
};

export default Heading;
