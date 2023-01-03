import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { AppDispatch } from "./redux/config/configStore";
import { __addPost } from "./redux/modules/PostsSlice";

function App() {
  const [inputVal, setInputVal] = useState("");
  const handleInputChange = ({
    currentTarget: { value },
  }: React.FormEvent<HTMLInputElement>): void => {
    setInputVal(value);
  };

  // default Dispatch type does not know about thunks.
  // In order to correct dispatch thunks, you need to use specific customized AppDispatch type from the store that includes th thunk middleware types.
  // cf. https://redux-toolkit.js.org/tutorials/typescript
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();
  const handleSubmit = () => {
    try {
      if (inputVal.length === 0) return alert("한글자 이상 입력해주세요.");
      dispatch(__addPost(inputVal));
      alert("항해99 귀는 당나귀 귀~");
    } finally {
      setInputVal("");
    }
  };

  return (
    <Wrapper>
      <Title>🎍항해99 대나무 숲🎍</Title>
      <InputWraper>
        <Input
          value={inputVal}
          onChange={handleInputChange}
          type="text"
          placeholder="항해99 귀는 당나귀 귀~"
        />
        <SubmitBtn onClick={handleSubmit}>제출</SubmitBtn>
      </InputWraper>
      <MsgList>
        <Msg>{}</Msg>
      </MsgList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1``;

const InputWraper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const Input = styled.input`
  padding: 0;
  width: 300px;
  height: 50px;
  text-indent: 10px;
`;

const SubmitBtn = styled.button`
  padding: 0 20px;
  height: 50px;
  background-color: greenyellow;
  border: none;
`;

const MsgList = styled.div`
  padding-top: 20px;
`;

const Msg = styled.div`
  padding: 20px;
  border: 2px solid rgba(0, 255, 0, 0.5);
`;

export default App;
