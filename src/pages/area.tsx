import React, { useState } from "react";
import Korea, { DistLevel } from "../components/Korea";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";
import areaData from "../test/AREA.json";

const StyleArea = styled.div`
  display: flex;

  .chart {
    margin-top: 50px;

    p {
      text-align: center;
    }
  }
`;

function AreaPage() {
  const [area, setArea] = useState("");
  return (
    <StyleArea>
      <div className="map">
        <DistLevel />
        <Korea onAreaClick={setArea} />
      </div>
      <div className="chart">
        <BarChart
          width={900}
          height={400}
          data={areaData.AREA}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="NAME" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="CONFIRMED" fill="#d88484" />
          <Bar dataKey="ISOLATED" fill="#8884d8" />
          <Bar dataKey="DESEASED" fill="#4b4b4b" />
          <Bar dataKey="RECOVERED" fill="#82ca9d" />
          <Bar dataKey="DIST_LEVEL" fill="#898dff" />
        </BarChart>
        <p>지역별 전일 대비 그래프</p>
      </div>
    </StyleArea>
  );
}

export default AreaPage;
