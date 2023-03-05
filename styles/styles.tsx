import styled from "styled-components/native";
import Constants from "expo-constants";

export const Text = styled.Text`
  font-size: 62px;
  font-weight: 800;
  color: ${(props) => props.theme.palette.common.white};
  margin: 0;
  padding: 0;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  background-color: ${(props) => props.theme.palette.primary.main};
  padding-top: ${Constants.statusBarHeight + "px"};
`;
export const WrapperText = styled.View``;

export const StatusBar = styled.StatusBar``;
export const Img = styled.Image.attrs({
  resizeMode: "cover",
})`
  width: 100%;
  height: auto;
`;

export const Button = styled.Text`
  color: ${(props) => props.theme.palette.primary.main};
  background-color: ${(props) => props.theme.palette.common.white};
  padding: 20px 90px;
  font-size: 20px;
  border-radius: 5px;
`;
