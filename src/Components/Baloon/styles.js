import styled from "styled-components";
import { Container } from "../Image/styles";

export const BaloonContainer = styled.div`
  display: none;
  flex-wrap: wrap;
  justify-content: flex-start;
  position: absolute;
  background: #ffffff;
  color: black;
  min-width: 150px;
  max-width: 300px;
  right: 0px;
  margin-top: 2px;
  margin-right: 5px;
  border-radius: 6px;
  border: 1px solid var(--elements-color);
  z-index: 2;
  box-shadow: -3px 5px 5px #211922;

  & > div {
    display: block;
    overflow: auto;
    max-height: 450px;

    & > div {
      max-width: 100%;
      padding: 10px 5px;
      border-bottom: 1px solid #efefef;
      border-radius: 0px;

      & > img {
        width: 100%;
        height: 180px;
      }
    }
  }
`;
