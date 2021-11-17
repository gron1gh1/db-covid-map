import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import styled from "styled-components";

const StyleLogin = styled.div`
  label {
    font-size: 1.4rem;
    margin-top: 6px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 300px;
  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
  .RRN {
    display: flex;
  }
`;

function LoginPage() {
  const [frontNum, setFrontNum] = useState("");
  const [backNum, setBackNum] = useState("");

  const handleLogin = () => {
    const RRN = `${frontNum}-${backNum}`;
    console.log(RRN);
  };
  return (
    <StyleLogin>
      <h1>COVID-19 알림이 로그인</h1>
      <div className="RRN">
        <Form.Item
          label="주민등록번호"
          rules={[
            { required: true, message: "주민등록번호 앞자리를 입력해주세요." },
          ]}
        >
          <Input
            style={{ fontSize: "1.4rem" }}
            value={frontNum}
            onChange={(e) => setFrontNum(e.target.value)}
          />
        </Form.Item>
        <p
          style={{
            marginLeft: "5px",
            marginRight: "5px",
            fontWeight: "bold",
            lineHeight: "40px",
          }}
        >
          -
        </p>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: "주민등록번호 뒷자리를 입력해주세요." },
          ]}
        >
          <Input.Password
            value={backNum}
            onChange={(e) => setBackNum(e.target.value)}
            style={{ fontSize: "1.4rem", width: "220px" }}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "100px", height: "46px" }}
            onClick={handleLogin}
          >
            로그인
          </Button>
        </Form.Item>
      </div>
    </StyleLogin>
  );
}

export default LoginPage;
