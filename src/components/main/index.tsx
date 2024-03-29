import styled from "styled-components";
import * as S from "../../style/index";

const Main = () => {
  return (
    <Container>
      <OneLineDesc>오네가네,</OneLineDesc>
      <OneLineDesc>당신의 택배를 안전하고 편리하게</OneLineDesc>
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

const OneLineDesc = styled.div`
  white-space: nowrap;

  font-size: 4rem;
  font-weight: 500;
  font-family: "Pretendard-Regular";

  margin-bottom: 20px;

  color: ${S.headerStyle.text3};
  opacity: 0.8;
  overflow: hidden;
`;

export default Main;
