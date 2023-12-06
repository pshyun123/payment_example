import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import boy from "../Image/boy.png";
import girl from "../Image/girl.png";

function Home() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div>
        <h2> Voice Story AI</h2>
        <h4>음성을 돋보여주는 음성변환 웹서비스 입니다.</h4>
        <h4>아래 캐릭터 버튼을 눌러 테스트 또는 결제를 해주세요.</h4>
      </div>
      <ButtonContainer>
        <Button onClick={() => navigate("/payment")}>
          <img src={girl} width="60px" height="60px" alt="girl" />
          에스텔라
        </Button>
        <Button onClick={() => navigate("/certification")}>
          <img src={boy} width="60px" height="60px" alt="boy" />
          알폰스
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  > div {
    position: absolute;
    left: 0;
    right: 0;
  }
  > div:first-child {
    background-color: #ffcd28;
    top: 0;
    bottom: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    > * {
      color: #000;
    }

    h4 {
      margin: 0;
      line-height: 1.5;
    }
  }
  > div:nth-child(2) {
    top: 50%;
    bottom: 0;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 40%;
  margin-top: -5rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 10rem;
    width: 15rem;
    margin: 0 10rem;
    border: none;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.13);
    .anticon {
      margin-bottom: 0.5rem;
      font-size: 2rem;
      & + span {
        margin: 0;
      }
    }
  }
`;

export default Home;
