import * as C from "../../components/index";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useGetList } from "../../apis/useGetList";
import { useNavigate } from "react-router-dom";

const View = () => {
  const router = useNavigate();
  const { getList } = useGetList();
  const [listdata, setListdata] = useState<Object[]>([]);

  useEffect(() => {
    const promise = getList();
    promise.then((data) => {
      setListdata(data);
      console.log(listdata);
    });
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인이 필요한 기능입니다.");
      router("/");
    }
  }, []);

  return (
    <>
      <Container>
        <C.Title title="택배 조회" />
        <SubContainer>
          <C.PakageDesc data={listdata} />
        </SubContainer>
      </Container>
    </>
  );
};

export default View;

const Container = styled.div`
  width: 100%;
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
