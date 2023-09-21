import styled from "styled-components";
import * as S from "../../style/index";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { UserData } from "../../state";

const Header = () => {
  let CurrentLocation = useLocation().pathname;
  let userData = useRecoilValue(UserData);

  return (
    <Container>
      <HeaderDivider>
        <Link to="/">
          <MainIcon src="assets/header/mainIcon.svg" alt=""></MainIcon>
        </Link>
        <ShortLink to="/view" location={CurrentLocation}>
          택배 조회
          <UnderLine />
        </ShortLink>
        <ShortLink to="/register" location={CurrentLocation}>
          택배 등록
          <UnderLine />
        </ShortLink>
      </HeaderDivider>
      <HeaderDivider>
        {!userData && (
          <a href="https://auth.bssm.kro.kr/oauth?clientId=d674a77d&redirectURI=http://localhost:3000/redirect">
            <RegisterBtn>로그인</RegisterBtn>
          </a>
        )}
      </HeaderDivider>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 4.5rem;

  position: fixed;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${S.headerStyle.bg};
  color: ${S.headerStyle.text2};

  font-size: 1.25rem;
  font-family: "Pretendard-Regular";

  padding: 0 3rem;
  box-sizing: border-box;

  border-bottom: 2px solid ${S.headerStyle.thema};
  z-index: 1;
`;

const HeaderDivider = styled.div`
  width: fit-content;
  height: 100%;

  display: flex;
  gap: 30px;

  align-items: center;
  justify-content: center;
`;

const MainIcon = styled.img`
  cursor: pointer;
`;

const UnderLine = styled.div`
  border-radius: 1px;
`;

const ShortLink = styled(Link)<{ location: string; to: string }>`
  width: 80px;
  height: min-content;

  position: relative;

  display: flex;
  justify-content: center;

  text-align: center;
  cursor: pointer;
  transition-timing-function: ease-out;
  transition-duration: 0.2s;

  text-decoration: none;
  color: ${(props) =>
    props.location === props.to ? S.headerStyle.text1 : S.headerStyle.text2};

  :hover {
    color: ${S.headerStyle.text1};
  }
`;

const RegisterBtn = styled.button`
  width: 100px;
  height: 42px;

  background-color: ${S.headerStyle.thema};
  color: ${S.headerStyle.bg};

  border: 0;
  border-radius: 1rem;
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

export default Header;
