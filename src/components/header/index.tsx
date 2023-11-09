import styled from "styled-components";
import * as S from "../../style/index";
import { Link, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { UserData } from "../../state";
import { useState } from "react";
import { useLogout } from "../../apis/useLogout";

const Header = () => {
  const CurrentLocation = useLocation().pathname;
  const userData = useRecoilValue(UserData);
  const [isProfileClicked, setIsProfileClicked] = useState(false);
  const { logout } = useLogout();

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
        {!userData ? (
          //"https://auth.bssm.kro.kr/oauth?clientId=d674a77d&redirectURI=https://onegane.kro.kr/redirect"
          <a href="https://auth.bssm.kro.kr/oauth?clientId=d674a77d&redirectURI=http://localhost:3000/redirect">
            <RegisterBtn>로그인</RegisterBtn>
          </a>
        ) : (
          <UserName
            onClick={() => {
              setIsProfileClicked(!isProfileClicked);
            }}
          >
            {userData.data.name}
            {isProfileClicked && (
              <LogoutButton onClick={() => logout()}>로그아웃</LogoutButton>
            )}
          </UserName>
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

const UserName = styled.div`
  position: relative;
  cursor: pointer;

  font-size: 1.1rem;
  font-weight: 500;
  padding: 5px;
  font-family: "Pretendard-Regular";
  color: ${S.headerStyle.thema};
`;

const LogoutButton = styled.div`
  position: absolute;
  bottom: -2.75rem;
  left: 0;
  width: 8rem;
  height: fit-content;
  background-color: ${S.headerStyle.bg};
  color: ${S.headerStyle.text2};

  border-radius: 5px;
  padding: 5px;
`;

export default Header;
