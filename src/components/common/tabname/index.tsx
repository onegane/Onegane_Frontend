import styled from "styled-components";

const TabName = (props: { title: string }) => {
  return <Title>{props.title}</Title>;
};

export default TabName;

const Title = styled.div`
  font-family: "pretendard";
  font-weight: 600;
  font-size: 1.75rem;
  margin: 2rem 0rem 4rem 8rem;
`;
