import styled from "styled-components";
import * as C from "../../components/index";
import * as S from "../../style";

import { useState, useRef, useEffect } from "react";

const Register = () => {
  const [packageNumber, setPackageNumber] = useState("");
  const submit = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log(packageNumber);
  }, [packageNumber]);

  const CheckInput = (content: string, element: HTMLInputElement) => {
    content === ""
      ? (element.style.border = "2px solid #ff8b8b")
      : (element.style.border = "2px solid #D2D2D2");
  };

  return (
    <Container>
      <C.Title title="택배 등록"></C.Title>
      <RegisterContainer>
        <ShowRegisterProgress>
          <ShowIcon imgLink="assets/register/step1.svg" />
          <ShowIcon imgLink="assets/register/next.svg" />
          <ShowIcon imgLink="assets/register/step2.svg" />
          <ShowIcon imgLink="assets/register/next.svg" />
          <ShowIcon imgLink="assets/register/step3.svg" />
        </ShowRegisterProgress>
        <WriteRegisterInfo>
          <C.BaseInput
            ref={submit}
            onChange={setPackageNumber}
            placeholder="운송장 번호를 입력해주세요!"
          />
          <SubmitButton
            onClick={() => CheckInput(packageNumber, submit.current!)}
          >
            택배 등록하기
          </SubmitButton>
        </WriteRegisterInfo>
      </RegisterContainer>
    </Container>
  );
};

export default Register;

const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding-top: 4.5rem;
  padding-bottom: 4.5rem;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
`;

const RegisterContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 8rem;
`;

const ShowRegisterProgress = styled.div`
  display: flex;
  gap: 1rem;
`;

const ShowIcon = styled.div<{ imgLink: string }>`
  width: 240px;
  height: 160px;
  background-image: url(${(props) => props.imgLink});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const WriteRegisterInfo = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 4rem;
`;

const SubmitButton = styled.button`
  width: 12.5rem;
  height: 50px;

  background-color: ${S.headerStyle.thema};
  color: ${S.headerStyle.bg};

  border: 0;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  font-family: "Pretendard-Regular";

  cursor: pointer;
  transition-timing-function: ease-out;
  transition-duration: 0.2s;

  &:hover {
    background-color: ${S.headerStyle.hoverbg2};
  }
`;
