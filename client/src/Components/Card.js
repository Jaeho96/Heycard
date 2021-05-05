import React, { useState } from "react";
import styled from "styled-components";

const Cardposition = styled.div`
  width: 250px;
  height: 380px;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Img = styled.img`
  min-height: 350px;
`;

const Cardtitle = styled.label`
  font-size: 20px;
`;

const Togglebtn = styled.button`
  position: absolute;
  left: 0px;
  border-style: none;
  background: none;
  cursor: pointer;
`;

const Togglebox = styled.div`
  width: 100px;
  height: 70px;
  background-color: beige;
  position: absolute;
  top: 5px;
  left: 25px;
  display: flex;
  flex-direction: column;
`;

function Card({
  key,
  address,
  color,
  corporate,
  img,
  introduce,
  logmail,
  mail,
  name,
  officenumber,
  phonenumber,
  title,
  token,
}) {
  const [toggleon, setToggleon] = useState(false);

  const onClick = () => {
    setToggleon(!toggleon);
  };

  return (
    <Cardposition>
      <Img src={img} width="250px" height="350px" />
      <div className="card_data">
        <Cardtitle className="card_title">{title}</Cardtitle>
      </div>
      <Togglebtn onClick={onClick}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 14C7.53043 14 8.03914 13.7893 8.41421 13.4142C8.78929 13.0391 9 12.5304 9 12C9 11.4696 8.78929 10.9609 8.41421 10.5858C8.03914 10.2107 7.53043 10 7 10C6.46957 10 5.96086 10.2107 5.58579 10.5858C5.21071 10.9609 5 11.4696 5 12C5 12.5304 5.21071 13.0391 5.58579 13.4142C5.96086 13.7893 6.46957 14 7 14Z"
            fill="black"
          />
          <path
            d="M14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12Z"
            fill="black"
          />
          <path
            d="M17 14C17.5304 14 18.0391 13.7893 18.4142 13.4142C18.7893 13.0391 19 12.5304 19 12C19 11.4696 18.7893 10.9609 18.4142 10.5858C18.0391 10.2107 17.5304 10 17 10C16.4696 10 15.9609 10.2107 15.5858 10.5858C15.2107 10.9609 15 11.4696 15 12C15 12.5304 15.2107 13.0391 15.5858 13.4142C15.9609 13.7893 16.4696 14 17 14Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24 12C24 18.627 18.627 24 12 24C5.373 24 0 18.627 0 12C0 5.373 5.373 0 12 0C18.627 0 24 5.373 24 12ZM22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z"
            fill="black"
          />
        </svg>
      </Togglebtn>
      {toggleon ? (
        <Togglebox>
          <button>공유하기</button>
          <button>수정하기</button>
          <button>삭제하기</button>
        </Togglebox>
      ) : (
        <div />
      )}
    </Cardposition>
  );
}

export default Card;
