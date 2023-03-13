import React from "react";
import * as S from "../components/Form/Form.style";
import * as SharedStyle from "../styles/styles";
import LoginForm from "../components/Form/LoginForm";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LoginScreen = ({ navigation }: any) => {
  return (
    <S.ContainerLogin>
      <SharedStyle.StatusBar />
      <S.WrapperTitleLogin>
        <S.TitleTextLogin>Welcome back</S.TitleTextLogin>
      </S.WrapperTitleLogin>

      <S.WrapperForm>
        <S.ScrollView>
          <LoginForm />
        </S.ScrollView>
      </S.WrapperForm>
    </S.ContainerLogin>
  );
};

export default LoginScreen;
