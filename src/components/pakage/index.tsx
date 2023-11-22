import styled from "styled-components";
import { usePackage } from "../../apis/usePackage";
import { headerStyle } from "../../style";

const PackageDesc = ({ data }: { data: Object[] }) => {
  const { deletePackage } = usePackage();

  const dataType = [
    "택배 번호",
    "상품명",
    "수령 상태",
    "등록 시간",
    "운송장번호",
    "-",
  ].map((element) => {
    return (
      <PackageAttribute style={{ color: "#6d6d6d", fontSize: "1.125rem" }}>
        {element}
      </PackageAttribute>
    );
  });

  const timestamp = (시간: any) => {
    const date = 시간.split("T")[0];
    const time = 시간.split("T")[1];
    console.log(time);
    const 시각 = new Date(date + " " + time);
    const 진짜마지막 = new Date(시각.setHours(시각.getHours() + 18))
      .toISOString()
      .replace("T", " ")
      .substring(0, 19);
    return 진짜마지막;
  };

  return (
    <Container>
      {dataType}
      {data.map((element: any, i) => {
        return (
          <>
            <Pnumber>{element.id}</Pnumber>
            <ProductName>{element.parcelNickname}</ProductName>
            <CurrentState>
              {element.state === "NOT_ARRIVED"
                ? "배송중"
                : element.state.replace("STATE_", "") + " 번 사물함"}
            </CurrentState>
            <Sdate>{timestamp(element.getDate)}</Sdate>
            <Pid>{element.trackingNumber}</Pid>
            <Del onClick={() => deletePackage(element.id)}>삭제</Del>
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
  grid-template-columns: repeat(6, minmax(3.075rem, max-content));
  grid-row-gap: 3rem;

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

const ProductName = styled.div`
  width: 150px;
`;

const CurrentState = styled.div``;

const Sdate = styled.div`
  color: #5c5c5c;
`;

const Pid = styled.div`
  color: #5c5c5c;
`;

const Del = styled.div`
  color: red;
  cursor: pointer;
`;

const PackageRow = styled.div<{ number: number }>`
  background-color: ${({ number }) => (number % 2 === 0 ? "white" : "#D2D2D2")};
`;

const PackageAttribute = styled.div`
  width: 150px;
`;
