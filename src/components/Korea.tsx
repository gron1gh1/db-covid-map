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

// 코로나 단계별 색상
const fillColor = ["#4088da", "#ffb911", "#fc7001", "#e60000"];

function Korea({ onAreaClick }: { onAreaClick: Function }) {
  return (
    <svg width="700px" height="900px" viewBox="0 0 800 1200">
      <Seoul onClick={(e: any) => onAreaClick(e.target.id)} />
      <Gyeonggi onClick={(e: any) => onAreaClick(e.target.id)} />
      <Gangwon onClick={(e: any) => onAreaClick(e.target.id)} />
      <Incheon onClick={(e: any) => onAreaClick(e.target.id)} />
      <Chungnam onClick={(e: any) => onAreaClick(e.target.id)} />
      <Chungbuk onClick={(e: any) => onAreaClick(e.target.id)} />
      <Sejong onClick={(e: any) => onAreaClick(e.target.id)} />
      <Daejeon onClick={(e: any) => onAreaClick(e.target.id)} />
      <Gyeongnam onClick={(e: any) => onAreaClick(e.target.id)} />
      <Gyeongbuk onClick={(e: any) => onAreaClick(e.target.id)} />
      <Jeonbuk onClick={(e: any) => onAreaClick(e.target.id)} />
      <Jeonnam onClick={(e: any) => onAreaClick(e.target.id)} />
      <Ulsan onClick={(e: any) => onAreaClick(e.target.id)} />
      <Busan onClick={(e: any) => onAreaClick(e.target.id)} />
      <Daegu onClick={(e: any) => onAreaClick(e.target.id)} />
      <Gwangju onClick={(e: any) => onAreaClick(e.target.id)} />
      <Jeju onClick={(e: any) => onAreaClick(e.target.id)} />
    </svg>
  );
}

export default Korea;
