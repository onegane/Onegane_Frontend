import styled from "styled-components";

const PackageDesc = () => {
  const datalen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  const dataType = [
    "택배 번호",
    "상품명",
    "수령 상태",
    "택배사",
    "도착일",
    "수령일",
    "운송장번호",
    "승인",
    "삭제",
  ].map((data) => {
    return <div style={{ color: "#808080", fontSize: "1.125rem" }}>{data}</div>;
  });

  return (
    <Container>
      {dataType}
      {datalen.map(() => {
        return (
          <>
            <Pnumber>32</Pnumber>
            <ProductName>
              오뚜기 진라면 라면 무제한 고르기 30*4입 120봉
            </ProductName>
            <CurrentState>배송중</CurrentState>
            <Pcompany>CJ대한통운</Pcompany>
            <Sdate>2023.03.23</Sdate>
            <Gdate>-</Gdate>
            <Pid>612698465196519124</Pid>
            <Approv> - </Approv>
            <Del>X</Del>
          </>
        );
      })}
    </Container>
  );
};

export default PackageDesc;

const Container = styled.div`
  width: max-content;
  height: min-content;

  position: relative;

  display: grid;
  grid-template-columns: repeat(9, minmax(3.075rem, max-content));
  grid-gap: 2rem;

  font-size: 1rem;
  font-family: "pretendard";

  text-align: center;
  justify-content: space-evenly;
  align-items: center;

  margin-bottom: 4.5rem;

  ::before {
    content: "";

    position: absolute;
    top: 2rem;
    left: -2.5%;

    width: 105%;
    height: 2px;

    background-color: #cccccc;
    border-radius: 0.05rem;
  }
`;

const Pnumber = styled.div``;

const ProductName = styled.div``;

const Pcompany = styled.div``;

const CurrentState = styled.div``;

const Sdate = styled.div`
  color: #5c5c5c;
`;

const Gdate = styled.div`
  color: #5c5c5c;
`;

const Pid = styled.div`
  color: #5c5c5c;
`;

const Approv = styled.div``;

const Del = styled.div``;
