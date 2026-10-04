/* ==========================================================
   STREET SIGNS
========================================================== */

function drawStreetSign(sign) {
  const p =
    project(
      sign.x,
      sign.y,
      105
    );

  const s = p.scale;

  const color =
    sign.color ||
    "#4beaff";

  ctx.save();

  glow(color, 9);

  ctx.fillStyle =
    "rgba(8,13,17,.93)";

  ctx.strokeStyle = color;

  ctx.lineWidth =
    Math.max(
      1,
      1.5 * s
    );

  const w =
    160 * s;

  const h =
    30 * s;

  ctx.fillRect(
    p.x - w / 2,
    p.y - h,
    w,
    h
  );

  ctx.strokeRect(
    p.x - w / 2,
    p.y - h,
    w,
    h
  );

  ctx.fillStyle = color;

  ctx.textAlign = "center";

  ctx.font =
    `${Math.max(
      9,
      11 * s
    )}px sans-serif`;

  ctx.fillText(
    sign.text,
    p.x,
    p.y - 10 * s
  );

  ctx.restore();
}


/* ==========================================================
   PROPS
========================================================== */

function drawProp(prop) {
  const p =
    project(
      prop.x,
      prop.y
    );

  const s = p.scale;

  ctx.save();

  switch (prop.type) {
    case "bike":
      ctx.strokeStyle =
        "#8b969a";

      ctx.lineWidth =
        Math.max(
          1,
          2 * s
        );

      ctx.beginPath();

      ctx.arc(
        p.x - 10 * s,
        p.y - 6 * s,
        7 * s,
        0,
        Math.PI * 2
      );

      ctx.arc(
        p.x + 11 * s,
        p.y - 6 * s,
        7 * s,
        0,
        Math.PI * 2
      );

      ctx.stroke();

      ctx.beginPath();

      ctx.moveTo(
        p.x - 10 * s,
        p.y - 6 * s
      );

      ctx.lineTo(
        p.x,
        p.y - 18 * s
      );

      ctx.lineTo(
        p.x + 11 * s,
        p.y - 6 * s
      );

      ctx.lineTo(
        p.x - 3 * s,
        p.y - 6 * s
      );

      ctx.lineTo(
        p.x - 10 * s,
        p.y - 6 * s
      );

      ctx.stroke();

      break;


    case "scooter":
      ctx.fillStyle =
        "#252c31";

      ctx.fillRect(
        p.x - 16 * s,
        p.y - 11 * s,
        31 * s,
        10 * s
      );

      ctx.fillStyle =
        "#7c878c";

      ctx.fillRect(
        p.x + 6 * s,
        p.y - 31 * s,
        3 * s,
        23 * s
      );

      ctx.fillStyle =
        "#d5b52f";

      ctx.fillRect(
        p.x - 13 * s,
        p.y - 23 * s,
        15 * s,
        12 * s
      );

      break;


    case "vending":
      ctx.fillStyle =
        "#d4d7d6";

      ctx.fillRect(
        p.x - 15 * s,
        p.y - 48 * s,
        30 * s,
        48 * s
      );

      ctx.save();

      glow(
        "#69dfff",
        9
      );

      ctx.fillStyle =
        "#6edaf2";

      ctx.fillRect(
        p.x - 10 * s,
        p.y - 40 * s,
        20 * s,
        22 * s
      );

      ctx.restore();

      ctx.fillStyle =
        "#43494a";

      for (let i = 0; i < 3; i++) {
        ctx.fillRect(
          p.x - 7 * s,
          p.y -
          36 * s +
          i * 6 * s,
          14 * s,
          2 * s
        );
      }

      break;


    case "trash":
      ctx.fillStyle =
        "#41494b";

      ctx.fillRect(
        p.x - 10 * s,
        p.y - 20 * s,
        20 * s,
        20 * s
      );

      ctx.fillStyle =
        "#262d2e";

      ctx.fillRect(
        p.x - 11 * s,
        p.y - 22 * s,
        22 * s,
        4 * s
      );

      break;


    case "boxes":
      ctx.fillStyle =
        "#8b6742";

      ctx.fillRect(
        p.x - 14 * s,
        p.y - 13 * s,
        24 * s,
        13 * s
      );

      ctx.fillStyle =
        "#705136";

      ctx.fillRect(
        p.x - 4 * s,
        p.y - 25 * s,
        20 * s,
        13 * s
      );

      ctx.strokeStyle =
        "rgba(50,35,25,.4)";

      ctx.strokeRect(
        p.x - 4 * s,
        p.y - 25 * s,
        20 * s,
        13 * s
      );

      break;


    case "plant":
      ctx.fillStyle =
        "#57463a";

      ctx.fillRect(
        p.x - 7 * s,
        p.y - 10 * s,
        14 * s,
        10 * s
      );

      ctx.fillStyle =
        "#3f6d4c";

      for (let i = 0; i < 4; i++) {
        ctx.beginPath();

        ctx.ellipse(
          p.x +
          (i - 1.5) * 4 * s,
          p.y -
          18 * s -
          (i % 2) * 5 * s,
          5 * s,
          10 * s,
          (i - 1.5) * .3,
          0,
          Math.PI * 2
        );

        ctx.fill();
      }

      break;


    case "bench":
      ctx.fillStyle =
        "#665343";

      ctx.fillRect(
        p.x - 29 * s,
        p.y - 14 * s,
        58 * s,
        8 * s
      );

      ctx.fillRect(
        p.x - 29 * s,
        p.y - 25 * s,
        58 * s,
        7 * s
      );

      ctx.fillStyle =
        "#3d4244";

      ctx.fillRect(
        p.x - 23 * s,
        p.y - 7 * s,
        4 * s,
        9 * s
      );

      ctx.fillRect(
        p.x + 19 * s,
        p.y - 7 * s,
        4 * s,
        9 * s
      );

      break;


    case "barrier":
      ctx.strokeStyle =
        "#ff8b52";

      ctx.lineWidth =
        4 * s;

      ctx.beginPath();

      ctx.moveTo(
        p.x - 27 * s,
        p.y - 18 * s
      );

      ctx.lineTo(
        p.x + 27 * s,
        p.y - 18 * s
      );

      ctx.stroke();

      ctx.strokeStyle =
        "#ddd4bd";

      ctx.lineWidth =
        2 * s;

      for (let i = -2; i <= 2; i++) {
        ctx.beginPath();

        ctx.moveTo(
          p.x +
          i * 11 * s -
          4 * s,
          p.y - 22 * s
        );

        ctx.lineTo(
          p.x +
          i * 11 * s +
          4 * s,
          p.y - 14 * s
        );

        ctx.stroke();
      }

      break;


    case "cone":
      ctx.fillStyle =
        "#ff7648";

      ctx.beginPath();

      ctx.moveTo(
        p.x,
        p.y - 24 * s
      );

      ctx.lineTo(
        p.x - 9 * s,
        p.y
      );

      ctx.lineTo(
        p.x + 9 * s,
        p.y
      );

      ctx.closePath();
      ctx.fill();

      ctx.fillStyle =
        "#ddd8c9";

      ctx.fillRect(
        p.x - 6 * s,
        p.y - 11 * s,
        12 * s,
        3 * s
      );

      break;


    case "utility":
      ctx.fillStyle =
        "#515e62";

      ctx.fillRect(
        p.x - 13 * s,
        p.y - 35 * s,
        26 * s,
        35 * s
      );

      ctx.strokeStyle =
        "rgba(200,210,210,.25)";

      ctx.strokeRect(
        p.x - 13 * s,
        p.y - 35 * s,
        26 * s,
        35 * s
      );

      ctx.fillStyle =
        "#262e31";

      ctx.fillRect(
        p.x + 5 * s,
        p.y - 19 * s,
        3 * s,
        5 * s
      );

      break;


    case "umbrella":
      ctx.strokeStyle =
        "#6f797e";

      ctx.lineWidth =
        1.5 * s;

      ctx.beginPath();

      ctx.moveTo(
        p.x,
        p.y
      );

      ctx.lineTo(
        p.x,
        p.y - 27 * s
      );

      ctx.stroke();

      ctx.fillStyle =
        "rgba(76,90,100,.78)";

      ctx.beginPath();

      ctx.arc(
        p.x,
        p.y - 29 * s,
        18 * s,
        Math.PI,
        Math.PI * 2
      );

      ctx.fill();

      break;


    case "drain":
      ctx.strokeStyle =
        "rgba(130,145,150,.45)";

      ctx.strokeRect(
        p.x - 15 * s,
        p.y - 4 * s,
        30 * s,
        7 * s
      );

      for (let i = -10; i <= 10; i += 5) {
        ctx.beginPath();

        ctx.moveTo(
          p.x + i * s,
          p.y - 4 * s
        );

        ctx.lineTo(
          p.x + i * s,
          p.y + 3 * s
        );

        ctx.stroke();
      }

      break;


    case "metro": {
      const st = (typeof METRO_STATIONS !== "undefined") ? METRO_STATIONS[prop.station] : null;
      ctx.fillStyle = "#18272d";
      ctx.fillRect(p.x - 28*s, p.y - 42*s, 56*s, 42*s);
      ctx.fillStyle = "rgba(93,220,239,.18)";
      ctx.fillRect(p.x - 23*s, p.y - 36*s, 46*s, 25*s);
      ctx.strokeStyle = st?.color || "#62e8ff";
      ctx.lineWidth = Math.max(1,2*s);
      ctx.strokeRect(p.x - 28*s, p.y - 42*s, 56*s, 42*s);
      ctx.fillStyle = st?.color || "#62e8ff"; glow(ctx.fillStyle,8);
      ctx.beginPath();ctx.arc(p.x-15*s,p.y-28*s,7*s,0,Math.PI*2);ctx.stroke();noGlow();
      ctx.fillStyle="#e9fbff";ctx.font=`${Math.max(7,8*s)}px sans-serif`;ctx.textAlign="left";ctx.fillText("地铁",p.x-4*s,p.y-25*s);
      ctx.fillStyle="rgba(200,235,240,.7)";ctx.fillRect(p.x-20*s,p.y-9*s,40*s,3*s);
      break;
    }

    case "acstack":
      drawAC(
        prop.x,
        prop.y,
        18
      );
      break;
  }

  ctx.restore();
}


