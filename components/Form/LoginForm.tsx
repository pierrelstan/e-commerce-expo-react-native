import React from "react";
import * as customStyle from "../../styles/styles";
import * as S from "./Form.style";
import { useForm, Controller } from "react-hook-form";

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // const onChange = (arg: any) => {
  //   return {
  //     value: arg.nativeEvent.text,
  //   };
  // };

  // console.log("errors", errors);
  const onSubmit = (data: any) => console.log(data);
  return (
    <S.Wrapper>
      <S.LoginText>Login</S.LoginText>
      <S.WrapperLabel>
        <S.Icon
          source={require("../../assets/Message.png")}
          alt="icon"
          style={{
            width: 10,
          }}
        />

        <S.LabelText>Email</S.LabelText>
      </S.WrapperLabel>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <S.TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
        name="email"
      />
      {errors.email && <S.ErrorText>This is required.</S.ErrorText>}
      <S.WrapperLabel>
        <S.Icon
          source={require("../../assets/Lock.png")}
          alt="icon"
          style={{
            width: 10,
          }}
        />

        <S.LabelText>Password</S.LabelText>
      </S.WrapperLabel>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <S.TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={true}
          />
        )}
        name="password"
      />
      {errors.password && <S.ErrorText>This is required.</S.ErrorText>}
      <S.MiniText>Forgot passcode ?</S.MiniText>
      <customStyle.CustomButton
        color={"#5a56e9"}
        onPress={handleSubmit(onSubmit)}
      >
        <customStyle.ButtonText color={"#fff"}>Login</customStyle.ButtonText>
      </customStyle.CustomButton>
      <S.WrapperButtonAC>
        <customStyle.ButtonText color={"#5a56e9"}>
          Create an account
        </customStyle.ButtonText>
      </S.WrapperButtonAC>
    </S.Wrapper>
  );
};

export default LoginForm;
