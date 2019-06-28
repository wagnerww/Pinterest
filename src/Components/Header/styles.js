import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderMenu = styled.header`
  top: 0px;
  width: 100%;
  background: #ffffff;
  z-index: 3;
  border-bottom: 1px solid #efefef;
`;

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 8px 15px;
`;

export const ContainerItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const ContainerItemCol2 = styled(ContainerItem)`
  flex: 2 1 260px;
`;

export const LinkHeader = styled(Link)`
  font-weight: bold;
  padding: 10px 15px;
  color: ${props => (props.path === props.to && props.to ? "#000" : "#8e8e8e")};
  border-radius: 50px;
  background: transparent;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background: #efefef;
  }

  &:hover > div {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const IconLink = styled(LinkHeader)`
  padding: 10px;
  font-size: 0.8em;
`;

export const IconLogo = styled(IconLink)`
  color: #e60023;
  font-size: 1em;
`;

export const ContainerSearch = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 11px 15px;
  background: #efefef;
  border-radius: 10px;
  font-size: 0.9em;
  margin-right: 5px;

  & i {
    margin-right: 10px;
    font-size: 1.2em;
    color: #8e8e8e;
  }

  & form {
    flex: 1;
  }

  & input {
    background: transparent;
    border: none;
    font-size: 1em;
    width: 100%;
    color: #211922;
    font-weight: bold;
    align-self: flex-end;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    border-radius: 50%;
    margin-right: 5px;
  }
`;
