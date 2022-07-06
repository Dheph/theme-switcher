import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme["PRIMARY_COLOR"]};
`;

export const SwitchButton = styled.Text`
  padding: 15px;
  margin: 5px;
  border: 1px solid blue;
  border-radius: 10px;
  font-size: 18px;
  color: ${(props) => props.theme["TITLE_COLOR"]};
`;
