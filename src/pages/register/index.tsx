import styled from "styled-components";
import * as C from "../../components/index";
import * as S from "../../style";

import { useState, useRef, useEffect } from "react";
import { usePackage } from "../../apis/usePackage";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const router = useNavigate();
  const [packageNumber, setPackageNumber] = useState("");
  const [packageName, setPackageName] = useState("");
  const { regiserPackage } = usePackage();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인이 필요한 기능입니다.");
      router("/");
    }
  }, []);

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
          <InputSection>
            <C.BaseInput
              onChange={setPackageNumber}
              placeholder="운송장 번호를 입력해주세요!"
              value={packageNumber}
            />
            <C.BaseInput
              onChange={setPackageName}
              placeholder="택배 별명을 입력해주세요!"
              value={packageName}
            />
          </InputSection>
          <SubmitButton
            onClick={() => {
              setPackageName("");
              setPackageNumber("");
              regiserPackage(packageName, packageNumber);
            }}
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

  gap: 6rem;
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

  gap: 2rem;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
