/* 杭州探索録3 Definitive Edition Ver.1.2 — METRO FAST TRAVEL */
let metroOpen=false;
const metroPanel=document.createElement("div");metroPanel.id="metroPanel";metroPanel.className="v12-panel hidden";document.getElementById("game").appendChild(metroPanel);
function nearestMetro(){if(scene!=="city")return null;const s=METRO_STATIONS[currentMapId];if(!s)return null;return dist(player.x,player.y,s.x,s.y)<105?s:null;}
function openMetro(){metroOpen=true;keys.w=keys.a=keys.s=keys.d=keys.arrowup=keys.arrowdown=keys.arrowleft=keys.arrowright=false;renderMetro();metroPanel.classList.remove("hidden");}
function closeMetro(){metroOpen=false;metroPanel.classList.add("hidden");}
function renderMetro(){
 metroPanel.innerHTML=`<div class="v12-head"><span>杭州地铁 · 深夜线</span><button data-close>×</button></div><div class="v12-sub">HANGZHOU METRO / NIGHT EXPLORER</div><div class="metro-line"></div><div class="metro-list">${Object.entries(METRO_STATIONS).map(([id,s])=>`<button class="metro-stop ${id===currentMapId?"current":""}" data-map="${id}" ${id===currentMapId?"disabled":""}><i style="--line:${s.color}"></i><span><b>${s.name}</b><small>${MAPS[id].name} · ${s.line}</small></span><em>${id===currentMapId?"現在地":"乗車"}</em></button>`).join("")}</div><div class="v12-foot">駅を選択すると地区間を直接移動します</div>`;
 metroPanel.querySelector("[data-close]").onclick=closeMetro;
 metroPanel.querySelectorAll("[data-map]:not([disabled])").forEach(b=>b.onclick=()=>metroTravel(b.dataset.map));
}
function metroTravel(mapId){
 const s=METRO_STATIONS[mapId];if(!s)return;closeMetro();switchMapData(mapId);player.x=s.x;player.y=s.y+125;camera.x=player.x;camera.y=player.y;transitionLock=1.2;updateLocationUI();showDistrictCard();if(typeof journalState!=="undefined"){journalState.metroTrips=(journalState.metroTrips||0)+1;saveJournal();markMapVisited();}
 fade.active=true;fade.phase="in";fade.alpha=1;fade.target=null;
}
const _metroUpdateInteraction=updateInteraction;updateInteraction=function(){_metroUpdateInteraction();const s=nearestMetro();if(s){interactionTarget={type:"metro",station:s};interactionBox.classList.remove("hidden");interactionText.textContent=`地下鉄 ${s.name}`;}};
const _metroInteract=interact;interact=function(){if(interactionTarget?.type==="metro"){openMetro();return;}_metroInteract();};
const _metroUpdatePlayer=updatePlayer;updatePlayer=function(dt){if(metroOpen||!journal.classList.contains("hidden"))return;_metroUpdatePlayer(dt);};
window.addEventListener("keydown",e=>{if(e.key==="Escape"&&metroOpen)closeMetro();});
