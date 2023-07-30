import { Dispatch, ForwardedRef, forwardRef, SetStateAction, useRef } from "react";
import styled from "styled-components";

const Input = forwardRef(
  (
    props: { placeholder: string; onChange: Dispatch<SetStateAction<string>> },
    submit: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <BaseInput
        onChange={(e) => {
          props.onChange(e.target.value);
          console.log("히히 값저장됨 ㅋ");
        }}
        placeholder={props.placeholder}
        ref={submit}
      />
    );
  }
);

export default Input;

const BaseInput = styled.input`
  width: 30rem;
  height: 3rem;

  padding: 0.25rem 1rem;
  outline: none;

  border: 2px solid #d2d2d2;
  border-radius: 5px;

  font-family: "pretendard";
  font-size: 1rem;

  transition-timing-function: cubic-bezier(0.3, 0.26, 0.26, 1.41);
  transition-duration: 0.5s;

  &::placeholder {
    color: #d2d2d2;
  }

  &:focus {
    transform: scale(1.05);
    border: 2px solid #8b8b8b;
  }
`;
