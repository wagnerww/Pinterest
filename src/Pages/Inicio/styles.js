import styled from "styled-components";

export const Container = styled.section`
  max-width: 1320px;
  margin: 0 auto;
  padding: 30px 20px;
  /*display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;*/
  column-width: 250px;
  width: 100%;
  column-gap: 5px;
`;

export const ContainerConcluido = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin: 50px 0;
  font-size: 1.5em;
  color: #8e8e8e;
`;

export const ConcluidoDetail = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  color: #e25369;
  font-size: 1.2em;
`;

export const SeparadorConcluido = styled.div`
  width: 100%;
  margin: 0 10px;
  background: #e25369;
  height: 5px;
`;
