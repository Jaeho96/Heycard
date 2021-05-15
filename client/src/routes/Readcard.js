import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "../Components/Sidebar";

//명함 만들기 main 화면
const MakemainPositioner = styled.div`
  display: flex;
`;
// 출력폼
const Outputform = styled.div`
  display: flex;
  width: 80%;
  height: 100vh;
  margin-top: 1rem;
  justify-content: center;
  border-style: solid;
`;

const Outputlayer = styled.div`
  display: flex;
  width: 90%;
  height: 90%;
  border-style: solid;
  border-radius: 20px;
  font-family: "Noto Sans KR", sans-serif;
  align-items: center;
  flex-direction: column;
`;

function Readcard() {
  return (
    <MakemainPositioner>
      <Sidebar />
      <Outputform>
        <Outputlayer>{/* 여기 명함 이미지 넣기 */}</Outputlayer>
      </Outputform>
    </MakemainPositioner>
  );
}

export default Readcard;
