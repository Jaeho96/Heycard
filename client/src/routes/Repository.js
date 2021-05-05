import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Sidebar from "../Components/Sidebar";
import Axios from "axios";
import axios from "axios";
import Card from "../Components/Card";

//명함 만들기 main 화면
const MakemainPositioner = styled.div`
  display: flex;
`;
// 출력폼
const Outputform = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin-top: 4rem;
  justify-content: center;
`;

const Outputlayer = styled.div`
  display: flex;
  width: 90%;
  height: 90%;

  font-family: "Noto Sans KR", sans-serif;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

function Repository({ usertoken, usermail }) {
  const [data, setData] = useState([]);
  const { repositoken } = usertoken || {}; // App.js에서 token값 가져오기
  const { reposimail } = usermail || {}; // App.js에서 logmail값 가져오기

  useEffect(() => {
    let completed = false; //초기에는 실행해야 되기때문에 false flag 변수
    //query를 리턴하는 함수를 result에 할당
    async function get() {
      const result = await axios.get("http://localhost:3001/api/get");
      if (!completed) setData(result.data);
    }
    get();
    return () => {
      completed = true;
    };
    //query가 변할때 useEffect를 실행해야하는 시점이다.
  }, []);

  return (
    <MakemainPositioner>
      <Sidebar />
      <Outputform>
        <Outputlayer>
          {data.map((item) => (
            <Card
              key={item.title}
              address={item.adress}
              color={item.color}
              coporate={item.corporate}
              img={item.img}
              introduce={item.introduce}
              logmail={item.logmail}
              mail={item.mail}
              name={item.name}
              officenumber={item.officenumber}
              phonenumber={item.phonenumber}
              title={item.title}
              token={item.token}
            />
          ))}
        </Outputlayer>
      </Outputform>
    </MakemainPositioner>
  );
}

export default Repository;
