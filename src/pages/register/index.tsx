import styled from "styled-components";
import * as C from "../../components/index";

const Register = () => {
  return (
    <Container>
      <C.Title title="택배 등록"></C.Title>
    </Container>
  );
};

export default Register;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  padding-top: 4.5rem;
  box-sizing: border-box;
`;
