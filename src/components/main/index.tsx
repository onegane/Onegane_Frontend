import styled, { keyframes } from "styled-components";
import * as S from "../../style/index";

const Main = () => {
  return (
    <Container>
      <OneLineDesc starts={1}>오네가네,</OneLineDesc>
      <OneLineDesc starts={2}>당신의 택배를 편안하고 안전하게</OneLineDesc>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;

  background: url("assets/main/backgroundImage.jpg");
  background-size: cover;
  background-repeat: no-repeat;

  box-sizing: border-box;
  padding: 12.5%;
`;

const AnimateDesc = keyframes`
  from {
    opacity: 0.25;
    width: 0px;
  }

  to {
    opacity: 1;
    width: 1000px;
  }
`;

const OneLineDesc = styled.div<{ starts: number }>`
  width: 0;

  white-space: nowrap;

  font-size: 4rem;
  font-weight: 500;
  font-family: "Pretendard-Regular";

  margin-bottom: 20px;

  color: ${S.headerStyle.text3};
  overflow: hidden;

  animation: ${AnimateDesc} 2s forwards;
  animation-delay: ${(props) => props.starts * 1.5}s;
  animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
`;

export default Main;
