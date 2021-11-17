import { useMemo } from "react";
import styled from "styled-components";
import {
  Seoul,
  Gyeonggi,
  Incheon,
  Gangwon,
  Chungnam,
  Chungbuk,
  Sejong,
  Daejeon,
  Gyeongnam,
  Gyeongbuk,
  Jeonbuk,
  Jeonnam,
  Ulsan,
  Busan,
  Daegu,
  Gwangju,
  Jeju,
} from "../area/all_area";

import areaData from "../test/AREA.json";
// 코로나 단계별 색상
const fillColor = ["#82c9ff", "#52b4ff", "#0091ff", "#4453f2"];

const StyleDistLevel = styled.div`
  .dist_level {
    position: absolute;
    width: 45px;
    height: 50px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    text-align: center;
    user-select: none;
    cursor: pointer;
    .area {
      margin-top: 3px;
      color: rgba(0, 0, 0, 0.7);
    }
    .level {
      font-weight: bold;
    }
  }
`;

export function DistLevel({ onAreaClick }: { onAreaClick: Function }) {
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
    <StyleDistLevel>
      <div
        className="dist_level"
        onClick={(e: any) => onAreaClick("서울")}
        style={{ top: "200px", left: "305px" }}
      >
        <div className="area">서울</div>
        <div className="level">{transAreaData["서울"].DIST_LEVEL}</div>
      </div>
      <div
        className="dist_level"
        onClick={(e: any) => onAreaClick("경기")}
        style={{ top: "140px", left: "280px" }}
      >
        <div className="area">경기</div>
        <div className="level">{transAreaData["경기"].DIST_LEVEL}</div>
      </div>
      <div
        className="dist_level"
        onClick={(e: any) => onAreaClick("인천")}
        style={{ top: "210px", left: "200px" }}
      >
        <div className="area">인천</div>
        <div className="level">{transAreaData["인천"].DIST_LEVEL}</div>
      </div>
      <div
        className="dist_level"
        onClick={(e: any) => onAreaClick("강원")}
        style={{ top: "170px", left: "430px" }}
      >
        <div className="area">강원</div>
        <div className="level">{transAreaData["강원"].DIST_LEVEL}</div>
      </div>
      <div
        className="dist_level"
        onClick={(e: any) => onAreaClick("충북")}
        style={{ top: "350px", left: "360px" }}
      >
        <div className="area">충북</div>
        <div className="level">{transAreaData["충북"].DIST_LEVEL}</div>
      </div>
      <div
        className="dist_level"
        onClick={(e: any) => onAreaClick("충남")}
        style={{ top: "350px", left: "230px" }}
      >
        <div className="area">충남</div>
        <div className="level">{transAreaData["충남"].DIST_LEVEL}</div>
      </div>
      <div
        className="dist_level"
        onClick={(e: any) => onAreaClick("세종")}
        style={{ top: "340px", left: "300px" }}
      >
        <div className="area">세종</div>
        <div className="level">{transAreaData["세종"].DIST_LEVEL}</div>
      </div>
      <div
        className="dist_level"
        onClick={(e: any) => onAreaClick("대전")}
        style={{ top: "440px", left: "300px" }}
      >
        <div className="area">대전</div>
        <div className="level">{transAreaData["대전"].DIST_LEVEL}</div>
      </div>
      <div
        className="dist_level"
        onClick={(e: any) => onAreaClick("전북")}
        style={{ top: "520px", left: "290px" }}
      >
        <div className="area">전북</div>
        <div className="level">{transAreaData["전북"].DIST_LEVEL}</div>
      </div>
      <div
        className="dist_level"
        onClick={(e: any) => onAreaClick("전남")}
        style={{ top: "620px", left: "310px" }}
      >
        <div className="area">전남</div>
        <div className="level">{transAreaData["전남"].DIST_LEVEL}</div>
      </div>
      <div
        className="dist_level"
        onClick={(e: any) => onAreaClick("광주")}
        style={{ top: "580px", left: "220px" }}
      >
        <div className="area">광주</div>
        <div className="level">{transAreaData["광주"].DIST_LEVEL}</div>
      </div>
      <div
        className="dist_level"
        onClick={(e: any) => onAreaClick("경북")}
        style={{ top: "400px", left: "480px" }}
      >
        <div className="area">경북</div>
        <div className="level">{transAreaData["경북"].DIST_LEVEL}</div>
      </div>
      <div
        className="dist_level"
        onClick={(e: any) => onAreaClick("경남")}
        style={{ top: "570px", left: "430px" }}
      >
        <div className="area">경남</div>
        <div className="level">{transAreaData["경남"].DIST_LEVEL}</div>
      </div>
      <div
        className="dist_level"
        onClick={(e: any) => onAreaClick("대구")}
        style={{ top: "480px", left: "460px" }}
      >
        <div className="area">대구</div>
        <div className="level">{transAreaData["대구"].DIST_LEVEL}</div>
      </div>
      <div
        className="dist_level"
        onClick={(e: any) => onAreaClick("울산")}
        style={{ top: "510px", left: "540px" }}
      >
        <div className="area">울산</div>
        <div className="level">{transAreaData["울산"].DIST_LEVEL}</div>
      </div>
      <div
        className="dist_level"
        onClick={(e: any) => onAreaClick("부산")}
        style={{ top: "580px", left: "520px" }}
      >
        <div className="area">부산</div>
        <div className="level">{transAreaData["부산"].DIST_LEVEL}</div>
      </div>
      <div
        className="dist_level"
        onClick={(e: any) => onAreaClick("제주")}
        style={{ top: "880px", left: "200px" }}
      >
        <div className="area">제주</div>
        <div className="level">{transAreaData["제주"].DIST_LEVEL}</div>
      </div>
    </StyleDistLevel>
  );
}

function Korea({ onAreaClick }: { onAreaClick: Function }) {
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
    <svg width="700px" height="900px" viewBox="0 0 800 1200">
      <Seoul
        fill={fillColor[transAreaData["서울"].DIST_LEVEL - 1]}
        onClick={(e: any) => onAreaClick(e.target.id)}
      />
      <Gyeonggi
        fill={fillColor[transAreaData["서울"].DIST_LEVEL - 1]}
        onClick={(e: any) => onAreaClick(e.target.id)}
      />
      <Gangwon
        fill={fillColor[transAreaData["강원"].DIST_LEVEL - 1]}
        onClick={(e: any) => onAreaClick(e.target.id)}
      />
      <Incheon
        fill={fillColor[transAreaData["인천"].DIST_LEVEL - 1]}
        onClick={(e: any) => onAreaClick(e.target.id)}
      />
      <Chungnam
        fill={fillColor[transAreaData["충남"].DIST_LEVEL - 1]}
        onClick={(e: any) => onAreaClick(e.target.id)}
      />
      <Chungbuk
        fill={fillColor[transAreaData["충북"].DIST_LEVEL - 1]}
        onClick={(e: any) => onAreaClick(e.target.id)}
      />
      <Sejong
        fill={fillColor[transAreaData["세종"].DIST_LEVEL - 1]}
        onClick={(e: any) => onAreaClick(e.target.id)}
      />
      <Daejeon
        fill={fillColor[transAreaData["대전"].DIST_LEVEL - 1]}
        onClick={(e: any) => onAreaClick(e.target.id)}
      />
      <Gyeongnam
        fill={fillColor[transAreaData["경남"].DIST_LEVEL - 1]}
        onClick={(e: any) => onAreaClick(e.target.id)}
      />
      <Gyeongbuk
        fill={fillColor[transAreaData["경북"].DIST_LEVEL - 1]}
        onClick={(e: any) => onAreaClick(e.target.id)}
      />
      <Jeonbuk
        fill={fillColor[transAreaData["전북"].DIST_LEVEL - 1]}
        onClick={(e: any) => onAreaClick(e.target.id)}
      />
      <Jeonnam
        fill={fillColor[transAreaData["전남"].DIST_LEVEL - 1]}
        onClick={(e: any) => onAreaClick(e.target.id)}
      />
      <Ulsan
        fill={fillColor[transAreaData["울산"].DIST_LEVEL - 1]}
        onClick={(e: any) => onAreaClick(e.target.id)}
      />
      <Busan
        fill={fillColor[transAreaData["부산"].DIST_LEVEL - 1]}
        onClick={(e: any) => onAreaClick(e.target.id)}
      />
      <Daegu
        fill={fillColor[transAreaData["대구"].DIST_LEVEL - 1]}
        onClick={(e: any) => onAreaClick(e.target.id)}
      />
      <Gwangju
        fill={fillColor[transAreaData["광주"].DIST_LEVEL - 1]}
        onClick={(e: any) => onAreaClick(e.target.id)}
      />
      <Jeju
        fill={fillColor[transAreaData["제주"].DIST_LEVEL - 1]}
        onClick={(e: any) => onAreaClick(e.target.id)}
      />
    </svg>
  );
}

export default Korea;
