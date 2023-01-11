import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

export const Starss = styled(AiFillStar)`
  font-size: 1.7rem;
  color: ${(props) => (props.flag === "true" ? "#fcdc14" : "lightgray")};
`;
