import React from "react";
import { Button, Container } from "../styles/styles";

const LoginScreen = ({ navigation }: any) => {
  return (
    <Container>
      <Button
        onPress={() => {
          navigation.push("Splash");
        }}
      >
        Go back
      </Button>
    </Container>
  );
};

export default LoginScreen;
