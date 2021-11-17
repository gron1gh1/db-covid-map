import React from "react";
import styled from "styled-components";
import QRCode from "react-qr-code";

const StyleUser = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    margin-top: 15px;
  }
  .box {
    margin-top: 100px;
    width: 400px;
    height: 600px;
    background: white;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    text-align: center;
  }

  .vaccine {
    font-size: 1.5rem;
    font-weight: bold;
    color: rgb(0, 131, 254);
  }

  .info {
    font-weight: bold;
    font-size: 1.1rem;
    p {
      margin-bottom: 10px;
      font-weight: lighter;
    }
  }
`;

function UserPage() {
  return (
    <StyleUser>
      <div className="box">
        <h1>{"강선규"}님 유저 정보</h1>
        <QRCode
          value={`https://www.google.co.kr/search?q=${encodeURI(
            "강선규,수원,남성,모더나,2차완료,2021.11.04"
          )}`}
        />
        <div>
          백신접종여부
          <p className="vaccine">
            {"모더나"} 2차 완료 ({"2021.11.04"})
          </p>
        </div>

        <div className="info">
          주민등록번호 <p>000104-*******</p>
        </div>
        <div className="info">
          성별 <p>남성</p>
        </div>

        <div className="info">
          지역 <p>수원</p>
        </div>
      </div>
    </StyleUser>
  );
}

export default UserPage;
