import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "../Components/Sidebar";
import Axios from "axios";
import domtoimage from "dom-to-image";
import FileSaver, { saveAs } from "file-saver";
import Modal from "../Components/Modal";

//명함 만들기 main 화면
const MakemainPositioner = styled.div`
  display: flex;
`;
// 출력폼
const Outputform = styled.div`
  display: flex;
  width: 50%;
  height: 100vh;
  margin-top: 1rem;
  justify-content: center;
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

const Outputcorporate = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 90%;
  height: 65px;
  margin-top: 1rem;
  border-bottom-style: solid;
  font-size: 35px;
`;

const Outputname = styled.div`
  width: 90%;
  height: 50px;
  margin-top: 1rem;
  font-size: 50px;
`;

const Outputposition = styled.div`
  width: 90%;
  height: 50px;
  margin-top: 1rem;
  font-size: 30px;
`;

const Outputphonenumber = styled.div`
  width: 90%;
  height: 35px;
  margin-top: 1rem;
  font-size: 20px;
`;

const Outputofficenumber = styled.div`
  width: 90%;
  height: 35px;
  margin-top: 1rem;
  font-size: 20px;
`;

const Outputemail = styled.div`
  width: 90%;
  height: 35px;
  margin-top: 1rem;
  font-size: 20px;
`;

const Outputaddress = styled.div`
  width: 90%;
  height: 35px;
  margin-top: 1rem;
  font-size: 20px;
`;

const Outputintroduceheader = styled.label`
  width: 90%;
  margin-top: 1rem;
  font-size: 25px;
  border-top-style: solid;
  text-align: center;
`;

const Outputintroduce = styled.div`
  width: 90%;
  margin-top: 1rem;
  font-size: 20px;
`;

// 입력폼
const Inputform = styled.div`
  width: 50%;
  height: 100vh;
  margin-top: 1rem;
`;
// 명함 컬러 선택하기
const Cololselector = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  flex-wrap: wrap;
`;

const Colorbuttons = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

// 기본 정보 입력하기
const Infotitle = styled.div`
  display: flex;
  height: 40px;
  justify-content: center;
  font-size: 20px;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

const Infoinputs = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

const Infoinputposition = styled.div``;

const Infoinput = styled.input`
  width: 500px;
  font-size: 15px;
  margin-top: 0.5rem;
  margin-left: 2rem;
  margin-right: 8rem;
  border-radius: 15px;
`;

const Introduceinput = styled.textarea`
  width: 500px;
  height: 230px;
  font-size: 15px;
  margin-top: 1rem;
  margin-left: 2rem;
  margin-right: 8rem;
  border-radius: 15px;
`;

function Myspace({ usertoken }) {
  const { token } = usertoken || {}; // App.js에서 token값 가져오기

  const [values, setValues] = useState({
    token: token,
    color: "",
    name: "",
    mail: "",
    corporate: "",
    position: "",
    phonenumber: "",
    officenumber: "",
    address: "",
    introduce: "",
    img: "",
  });

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleChange = (e) => {
    // Basicinfo input eventhandle function
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleClick = (e) => {
    // Colorselect button eventhandle function
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const submit = (e) => {
    const { name } = e.target;
    domtoimage
      .toBlob(document.getElementById("outputimg"))
      .then(function (blob) {
        let reader = new FileReader(); //캡쳐한 blob을 dataurl로 변환
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          let base64data = reader.result;
          setValues({ ...values, [name]: base64data });
        };
      });

    // /api/insert로 json보내기
    // Axios.post("http://localhost:3001/api/insert", {
    //   token: values.token,
    //   color: values.color,
    //   name: values.name,
    //   mail: values.mail,
    //   corporate: values.corporate,
    //   position: values.position,
    //   phonenumber: values.phonenumber,
    //   officenumber: values.officenumber,
    //   address: values.address,
    //   introduce: values.introduce,
    //   img: values.img,
    // });
  };
  console.log(values);

  return (
    <MakemainPositioner>
      <Sidebar />
      <Outputform>
        <Outputlayer id="outputimg" style={{ backgroundColor: values.color }}>
          <Outputcorporate>{values.corporate}</Outputcorporate>
          <Outputname>{values.name}</Outputname>
          <Outputposition>{values.position}</Outputposition>
          <Outputphonenumber>{values.phonenumber}</Outputphonenumber>
          <Outputofficenumber>{values.officenumber}</Outputofficenumber>
          <Outputemail>{values.mail}</Outputemail>
          <Outputaddress>{values.address}</Outputaddress>
          <Outputintroduceheader>INTRODUCE</Outputintroduceheader>
          <Outputintroduce>{values.introduce}</Outputintroduce>
        </Outputlayer>
      </Outputform>
      <Inputform>
        <Cololselector>
          명함 컬러 선택하기
          <Colorbuttons>
            <button name="color" value="red" onClick={handleClick}>
              빨강
            </button>
            <button name="color" value="orange" onClick={handleClick}>
              주황
            </button>
            <button name="color" value="yellow" onClick={handleClick}>
              노랑
            </button>
            <button name="color" value="blue" onClick={handleClick}>
              파랑
            </button>
          </Colorbuttons>
        </Cololselector>
        <Infotitle>기본 정보 입력하기</Infotitle>
        <Infoinputs>
          <Infoinputposition>
            <label>이름</label>
            <Infoinput
              type="text"
              name="name"
              value={values.name}
              placeholder="   이름을 입력하세요"
              onChange={handleChange}
            />
          </Infoinputposition>
          <Infoinputposition>
            <lable>메일주소</lable>
            <Infoinput
              type="text"
              name="mail"
              value={values.mail}
              placeholder="   e-mail을 입력하세요"
              onChange={handleChange}
            />
          </Infoinputposition>
        </Infoinputs>
        <Infotitle>추가 정보 입력하기</Infotitle>
        <Infoinputs>
          <Infoinputposition>
            <label>회사명</label>
            <Infoinput
              type="text"
              name="corporate"
              value={values.corporate}
              placeholder="   회사명을 입력하세요"
              onChange={handleChange}
            />
          </Infoinputposition>
          <Infoinputposition>
            <lable>직급</lable>
            <Infoinput
              type="text"
              name="position"
              value={values.position}
              placeholder="   직급을 입력하세요"
              onChange={handleChange}
            />
          </Infoinputposition>
          <Infoinputposition>
            <lable>휴대폰번호</lable>
            <Infoinput
              type="text"
              name="phonenumber"
              value={values.phonenumber}
              placeholder="   휴대폰번호를 입력하세요(010-XXXX-XXXX)"
              onChange={handleChange}
            />
          </Infoinputposition>
          <Infoinputposition>
            <lable>전화번호</lable>
            <Infoinput
              type="text"
              name="officenumber"
              value={values.officenumber}
              placeholder="   전화번호를 입력하세요(02-XXX-XXXX)"
              onChange={handleChange}
            />
          </Infoinputposition>
          <Infoinputposition>
            <lable>주소</lable>
            <Infoinput
              type="text"
              name="address"
              value={values.address}
              placeholder="   주소를 입력하세요"
              onChange={handleChange}
            />
          </Infoinputposition>
          <Infoinputposition>
            <lable>소개</lable>
            <Introduceinput
              type="text"
              name="introduce"
              value={values.introduce}
              placeholder="   나를 설명할 수 있는 소개글을 작성해보세요"
              onChange={handleChange}
            />
          </Infoinputposition>
          <Infoinputposition>
            <button id="submitbtn" name="img" onClick={submit}>
              버튼
            </button>
            <button onClick={openModal}>모달팝업</button>
            {/* header 부분에 텍스트를 입력한다. */}
            <Modal open={modalOpen} close={closeModal} header="Modal heading">
              {/* Modal.js <main> {props.children} </main>에 내용이 입력된다. */}
              리액트 함수형 모달 팝업창입니다. 쉽게 만들 수 있어요. 같이
              만들어봐요!
            </Modal>
          </Infoinputposition>
        </Infoinputs>
      </Inputform>
    </MakemainPositioner>
  );
}

export default Myspace;
