import styled from "styled-components";
import * as S from "../../style/index";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <HeaderDivider>
        <Link to="/">
          <MainIcon src="assets/header/mainIcon.svg" alt=""></MainIcon>
        </Link>

        <ShortLink to="/view">택배 조회</ShortLink>
        <ShortLink to="/register">택배 등록</ShortLink>
      </HeaderDivider>
      <HeaderDivider>
        <RegisterBtn usage="login">로그인</RegisterBtn>
        <RegisterBtn usage="signup">회원가입</RegisterBtn>
      </HeaderDivider>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 78px;

  position: absolute;

  display: flex;
  gap: 30%;
  justify-content: space-evenly;
  align-items: center;

  background-color: ${S.headerStyle.bg};
  color: ${S.headerStyle.text2};

  font-size: 1.25rem;
  font-family: "Pretendard-Regular";

  border-bottom: 2px solid ${S.headerStyle.thema};
`;

const HeaderDivider = styled.div`
  width: max-content;
  height: 100%;

  display: flex;
  gap: 30px;

  align-items: center;
  justify-content: center;
`;

const MainIcon = styled.img`
  cursor: pointer;
`;

const ShortLink = styled(Link)`
  width: max-content;

  text-align: center;
  cursor: pointer;
  transition-timing-function: ease-out;
  transition-duration: 0.2s;

  text-decoration: none;
  color: ${S.headerStyle.text2};

  :hover {
    color: ${S.headerStyle.text1};
  }
`;

const RegisterBtn = styled.button<{ usage: string }>`
  width: 100px;
  height: 42px;

  background-color: ${(props) =>
    props.usage === "login" ? S.headerStyle.bg : S.headerStyle.thema};
  color: ${(props) =>
    props.usage === "login" ? S.headerStyle.thema : S.headerStyle.bg};

  border: 0;
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: 500;
  font-family: "Pretendard-Regular";

  cursor: pointer;
  transition-timing-function: ease-out;
  transition-duration: 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.usage === "login"
        ? S.headerStyle.hoverbg1
        : S.headerStyle.hoverbg2};
  }
`;

export default Header;
