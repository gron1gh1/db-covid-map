import React from "react";
import "./App.css";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DailyPage from "./pages/daily";
import AreaPage from "./pages/area";
import VaccinePage from "./pages/vaccine";
import UserPage from "./pages/user";
import LoginPage from "./pages/login";

const { Header, Content, Footer } = Layout;
function App() {
  return (
    <Layout className="layout">
      <Router basename="/db-covid-map">
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key={"1"}>
              <Link to={"/"}>지역별 현황 </Link>
            </Menu.Item>
            <Menu.Item key={"3"}>
              <Link to={"/vaccine"}>백신별 현황 </Link>
            </Menu.Item>
            <Menu.Item key={"2"}>
              <Link to={"/daily"}>일별 현황 </Link>
            </Menu.Item>
            <Menu.Item key={"4"}>
              <Link to={"/user"}>유저 정보</Link>
            </Menu.Item>

            <div
              style={{
                position: "absolute",
                right: "40px",
                fontSize: "1.2rem",
                cursor: "pointer",
              }}
            >
              <Link to={"/login"}>로그인</Link>
            </div>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px", height: "100vh" }}>
          <Routes>
            <Route path="/" element={<AreaPage />} />
            <Route path="/daily" element={<DailyPage />} />
            <Route path="/vaccine" element={<VaccinePage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Content>
      </Router>
    </Layout>
  );
}

export default App;
