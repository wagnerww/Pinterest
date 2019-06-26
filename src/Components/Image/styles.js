import styled from "styled-components";

export const Button = styled.button`
  display: none;
  padding: 11px 15px;
  background: #e60023;
  color: #ffffff;
  font-weight: bold;
  font-size: 0.95em;
  border: 0px;
  border-radius: 10px;
  cursor: pointer;
  z-index: 1;
  position: absolute;
  align-self: flex-end;
  margin-top: 10px;
  right: 20px;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Container = styled.div`
  max-width: 250px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 10px 15px 10px;
  border-radius: 8px;
  cursor: zoom-in;
  position: relative;
  -webkit-column-break-inside: avoid;

  & img {
    border-radius: 8px;
    object-fit: contain;
  }

  & span {
    margin-top: 10px;
    font-weight: bold;
    color: #211922;
    font-size: 0.9em;
  }

  &:hover {
    background: #efefef;
  }

  &:hover ${Button} {
    display: block;
  }

  &:hover img {
    filter: brightness(0.8);
  }
`;
