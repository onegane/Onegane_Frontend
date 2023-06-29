import * as C from "../../components/index";
import styled from "styled-components";

const View = () => {
  return (
    <>
      <Container>
        <C.Title title="택배 조회" />
        <SubContainer>
          <C.PakageDesc />
        </SubContainer>
      </Container>
    </>
  );
};

export default View;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  padding-top: 4.5rem;
  box-sizing: border-box;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
`;
