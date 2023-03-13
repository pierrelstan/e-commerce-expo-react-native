import React from "react";
import * as S from "../styles/styles";

function SplashScreen({ navigation }: any) {
  return (
    <S.Container>
      <S.WrapperText>
        <S.Text>Find your Gadget</S.Text>
      </S.WrapperText>
      <S.Img
        alt="splash"
        source={require("../assets/Saly-19.png")}
        style={{
          aspectRatio: 1 * 1,
        }}
      />

      {/* <S.Button
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        Get started
      </S.Button> */}
      <S.CustomButton
        color={"#fff"}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <S.ButtonText color={"#5a56e9"}>Get started</S.ButtonText>
      </S.CustomButton>
    </S.Container>
  );
}

export default SplashScreen;
