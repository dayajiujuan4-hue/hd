/* 杭州探索録3 Definitive Edition Ver.1.2 — METRO DATA */
const METRO_STATIONS = {
  qianjiang:{name:"市民中心",line:"4号线 / 7号线",x:1870,y:1180,color:"#7d5cff"},
  oldtown:{name:"定安路",line:"1号线",x:1820,y:2420,color:"#e44c55"},
  wulin:{name:"武林广场",line:"1号线 / 3号线",x:1900,y:780,color:"#e44c55"},
  westlake:{name:"龙翔桥",line:"1号线",x:2760,y:1760,color:"#e44c55"}
};
for (const [mapId, station] of Object.entries(METRO_STATIONS)) {
  const map=MAPS[mapId]; if(!map) continue;
  map.props=map.props||[];
  if(!map.props.some(p=>p.type==="metro")) map.props.push({type:"metro",x:station.x,y:station.y,station:mapId});
}
