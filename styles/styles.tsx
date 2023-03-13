import styled from "styled-components/native";
import Constants from "expo-constants";
import { Dimensions } from "react-native";
const { height: ScreenHeight } = Dimensions.get("window");

interface CustomButtonProps {
  color: string;
  onPress?: () => void;
}
interface ButtonTextProps {
  color: string;
}
export const Text = styled.Text`
  font-size: 62px;
  font-weight: 800;
  color: ${(props) => props.theme.palette.common.white};
  margin: 0;
  padding: 0;
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
export const StatusBar = styled.StatusBar``;
export const Img = styled.Image.attrs({
  resizeMode: "cover",
})`
  width: 100%;
  height: auto;
`;
export const WrapperForm = styled.View`
  flex: 2;
  padding-top: 30px;
  padding-left: ${ScreenHeight * 0.05}px;
  padding-right: ${ScreenHeight * 0.05}px;

  flex: 2;
  background-color: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;
export const Button = styled.Text`
  color: ${(props) => props.theme.palette.primary.main};
  background-color: ${(props) => props.theme.palette.common.white};
  padding: 20px 90px;
  font-size: 20px;
  border-radius: 5px;
`;

export const CustomButton = styled.Text<CustomButtonProps>`
  margin-top: 40px;
  background-color: ${(props) => props.color};
  padding: 20px 90px;
  border-radius: 10px;
  text-align: center;
`;
export const ButtonText = styled.Text<ButtonTextProps>`
  color: ${(props) => props.color};
  text-align: center;
  font-size: 20px;
`;
