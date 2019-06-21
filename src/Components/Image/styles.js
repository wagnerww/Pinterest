import styled from "styled-components";

export const Actions = styled.div`
  display: none;
  padding-top: 10px;
  padding-right: 30px;
  position: absolute;
  justify-content: flex-end;
  width: 100%;
  z-index: 1;
`;

export const Container = styled.div`
  max-width: 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 10px 15px 10px;
  border-radius: 8px;
  cursor: zoom-in;
  position: relative;

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

  &:hover ${Actions} {
    display: flex;
  }

  &:hover img {
    filter: brightness(0.8);
  }
`;

export const Button = styled.button`
  padding: 11px 15px;
  background: #e60023;
  color: #ffffff;
  font-weight: bold;
  font-size: 0.95em;
  border: 0px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;
