import styled from "styled-components";
import * as S from "../../style/index";

const Main = () => {
  return (
    <Container>
      <OneLineDesc>오네가네,</OneLineDesc>
      <OneLineDesc>어쩌고저쩌고</OneLineDesc>
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
  font-size: 4.5rem;
  font-weight: 600;
  font-family: "Pretendard-Regular";

  color: ${S.headerStyle.text3};
`;

export default Main;
