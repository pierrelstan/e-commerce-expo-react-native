import React from "react";
import { Button, Container, Img, Text, WrapperText } from "../styles/styles";

function SplashScreen({ navigation }: any) {
  return (
    <Container>
      <WrapperText>
        <Text>Find your Gadget</Text>
      </WrapperText>
      <Img
        alt="splash"
        source={require("../assets/Saly-19.png")}
        style={{
          aspectRatio: 1 * 1,
        }}
      />

      <Button
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        Get started
      </Button>
    </Container>
  );
}

export default SplashScreen;
