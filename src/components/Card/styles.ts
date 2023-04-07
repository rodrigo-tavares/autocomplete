import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  border: 1px solid #eee;
  margin-top: 2em;
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #0c1932;
  margin: 0 0 1rem;
`;

export const Label = styled.span<{ bold?: boolean }>`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #0c193299;
  width: 100%;
  ${({ bold }) => bold && `font-weight: 500`}
`;

export const GroupInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;
`;

export const GroupItem = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 132px;
`;
