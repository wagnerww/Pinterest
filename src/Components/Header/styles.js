import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkHeader = styled(Link)`
  font-weight: bold;
  padding: 10px 15px;
  color: #8e8e8e;
  border-radius: 50px;
  background: transparent;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background: #efefef;
  }
`;

export const IconLink = styled(LinkHeader)`
  padding: 10px;
`;
