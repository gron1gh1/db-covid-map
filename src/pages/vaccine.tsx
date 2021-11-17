import { Calendar, DatePicker } from "antd";
import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import styled from "styled-components";
import VaccineData from "../test/VACCINE.json";
import moment from "moment";

const StyleVaccine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .chart {
    margin-top: 20px;
  }
  p {
    font-size: 1.4rem;
  }
  text-align: center;
`;

const dateFormat = "YYYY/MM/DD";
function VaccinePage() {
  const [date, setDate] = useState(moment().format(dateFormat));

  return (
    <StyleVaccine>
      <div className="chart">
        <AreaChart
          width={1200}
          height={600}
          data={VaccineData.VACCINE["2021-11-14"]}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="NAME" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="VACC_ONCE"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="VACC_FULLY"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="VACC_BOOST"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          />
        </AreaChart>
        <p>백신별 데이터</p>
        <DatePicker
          onChange={(e) => e && setDate(e.format(dateFormat))}
          defaultValue={moment("2021-11-14", dateFormat)}
          format={dateFormat}
        />
      </div>
    </StyleVaccine>
  );
}

export default VaccinePage;
