import React, { useMemo, useState } from "react";
import Korea, { DistLevel } from "../components/Korea";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import styled from "styled-components";
import areaData from "../test/AREA.json";
import AreaDetailGraph from "../components/AreaDetailGraph";
import { Button, DatePicker } from "antd";
import moment from "moment";

const StyleArea = styled.div`
  display: flex;
  .chart {
    margin-top: 50px;

    p {
      text-align: center;
    }
  }
  .area_num {
    font-weight: bold;
    font-size: 1.3rem;
    margin-bottom: 5px;
  }
`;
const dateFormat = "YYYY/MM/DD";
function AreaPage() {
  const [date, setDate] = useState(moment().format(dateFormat));

  const [area, setArea] = useState("");
  const transAreaData = useMemo(() => {
    const newObj: { [key: string]: ReturnType<() => typeof areaData.AREA[0]> } =
      {};
    areaData.AREA.forEach((item) => {
      newObj[item.NAME] = item;
      delete newObj.NAME;
    });
    return newObj;
  }, []);
  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <DatePicker
          onChange={(e) => e && setDate(e.format(dateFormat))}
          defaultValue={moment("2021-11-14", dateFormat)}
          format={dateFormat}
        />
      </div>
      <StyleArea>
        <div className="map">
          <DistLevel onAreaClick={setArea} top={0} />
          <Korea onAreaClick={setArea} />
        </div>
        <div>
          {area === "" ? (
            <div className="chart">
              <BarChart
                width={900}
                height={600}
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
              <p>????????? ?????? ?????? ?????????</p>
            </div>
          ) : (
            <div style={{ textAlign: "center", marginTop: "30px" }}>
              <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
                {area} ?????? ?????? ?????????
              </h1>
              <p>{transAreaData[area].DATE} ??????</p>
              <div className="area_num">
                ????????? ??? : {transAreaData[area].CONFIRMED}???
              </div>
              <div className="area_num">
                ???????????? : {transAreaData[area].DIST_LEVEL}??????
              </div>

              <div className="area_num">
                ????????? ??? : {transAreaData[area].ISOLATED}???
              </div>

              <div className="area_num">
                ????????? ??? : {transAreaData[area].RECOVERED}???
              </div>

              <div className="area_num">
                ????????? ??? : {transAreaData[area].DESEASED}???
              </div>
              <div className="chart">
                <BarChart
                  width={800}
                  height={250}
                  data={Object.entries(transAreaData[area])
                    .filter(
                      (v) =>
                        v[0] !== "DATE" &&
                        v[0] !== "NAME" &&
                        v[0] !== "DIST_LEVEL"
                    )
                    .map((v) => {
                      let name = v[0];
                      if (name === "CONFIRMED") name = "?????????";
                      if (name === "ISOLATED") name = "?????????";
                      if (name === "DESEASED") name = "?????????";
                      if (name === "RECOVERED") name = "?????????";
                      return {
                        name,
                        value: v[1],
                      };
                    })}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#d88484" />
                </BarChart>
                <p>?????????</p>
              </div>
              <Button type="primary" onClick={() => setArea("")}>
                ?????? ????????????
              </Button>
            </div>
          )}
        </div>
      </StyleArea>
    </div>
  );
}

export default AreaPage;
