import { Application, Graphics } from "pixi.js";

const msg = document.querySelector<HTMLDivElement>("#msg")!;
const root = document.querySelector<HTMLDivElement>("#app")!;
(async () => {
  const app = new Application();
  await app.init({
    width: 800,
    height: 600,
    background: "gray",
    eventMode: "auto",
  });

  const g0 = new Graphics()
    .moveTo(100, 100)
    .lineTo(200, 100)
    .arc(200, 100, 100, 0, Math.PI / 2, false)
    .closePath()
    .stroke({ width: 10, color: "white" });

  const g1 = new Graphics()
    .moveTo(340, 100)
    .lineTo(440, 100)
    .arc(440, 100, 100, 0, Math.PI / 2, false)
    // .closePath()
    .stroke({ width: 10, color: "green" });

  const g2 = new Graphics()
    .moveTo(100, 300)
    .lineTo(300, 300)
    .lineTo(300, 400)
    .lineTo(100, 400)
    .closePath()
    .stroke({ width: 20, color: "yellow" });

  const g3 = new Graphics()
    .moveTo(400, 300)
    .lineTo(600, 300)
    .lineTo(600, 400)
    .lineTo(400, 400)
    // .closePath()
    .stroke({ width: 20, color: "rebeccapurple" });

  const gs = [g0, g1, g2, g3];

  gs.forEach((g, i) => {
    g.eventMode = "static";
    g.addEventListener("mouseenter", () => {
      msg.textContent = `Mouse entered graphic ${i}`;
    });
    g.addEventListener("mouseleave", () => {
      msg.textContent = `Mouse leaved graphic ${i}`;
    });
  });

  root.appendChild(app.canvas);

  app.stage.addChild(...gs);
})();
