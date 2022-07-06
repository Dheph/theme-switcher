import React from "react";
import * as S from "./styles";

interface IProps {
  switcher: () => void;
}

export default function Home({ switcher }: IProps) {
  return (
    <S.Container>
      <S.SwitchButton onPress={switcher}>Switch</S.SwitchButton>
    </S.Container>
  );
}
