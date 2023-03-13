import styled from "styled-components/native";
import Constants from "expo-constants";
import { Dimensions } from "react-native";
const { height: ScreenHeight } = Dimensions.get("window");

export const Text = styled.Text`
  font-size: 62px;
  font-weight: 800;
  color: ${(props) => props.theme.palette.common.white};
  margin: 0;
  padding: 0;
`;

export const ErrorText = styled.Text`
  color: red;
  font-weight: bold;
  position: relative;
`;
export const TitleTextLogin = styled.Text`
  flex: 1;
  font-size: 62px;
  font-weight: 800;
  color: ${(props) => props.theme.palette.common.white};
  margin: 0;
  padding: 0;
`;
export const WrapperTitleLogin = styled.View`
  flex: 1;
  padding: 10px;
  margin-top: 30px;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  background-color: ${(props) => props.theme.palette.primary.main};
  padding-top: ${Constants.statusBarHeight}px;
`;
export const WrapperText = styled.View``;
export const ScrollView = styled.ScrollView`
  ${ScreenHeight}px;
`;

export const WrapperForm = styled.View`
  flex: 2;
  padding-top: 30px;
  padding-left: ${ScreenHeight * 0.05}px;
  padding-right: ${ScreenHeight * 0.05}px;
  background-color: ${(props) => props.theme.palette.common.white};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const TextInput = styled.TextInput`
  padding-top: 3px;
  padding-bottom:10px;
  border-radius: 4px;
  border-bottom-color: ${(props) => props.theme.palette.common.grey};
  border-bottom-width: 1px;
}}
`;
export const Wrapper = styled.View`
  padding: 0 12px;
`;
export const MiniText = styled.Text`
  color: ${(props) => props.theme.palette.primary.main};
  margin-top: 20px;
  margin-bottom: 30px;
  font-weight: bold;
`;
export const WrapperButtonAC = styled.View`
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const Form = styled.View``;
export const WrapperLabel = styled.View`
  flex-direction: row;
  padding-top: 50px;
  align-items: center;
`;

export const LabelText = styled.Text`
  color: ${(props) => props.theme.palette.common.grey};
  font-size: 18px;
`;

export const Submit = styled.Text`
  color: ${(props) => props.theme.palette.common.white};
  background-color: ${(props) => props.theme.palette.primary.main};
  padding: 20px 90px;
  font-size: 20px;
  border-radius: 5px;
  text-align: center;
  justify-content: center;
`;
export const ContainerLogin = styled.SafeAreaView`
  background-color: ${(props) => props.theme.palette.primary.main};
  height: ${ScreenHeight}px;
`;

export const Icon = styled.Image`
  padding: 10px;
  margin-right: 10px;
`;

export const LoginText = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: ${(props) => props.theme.palette.common.black};
`;
