import { useEffect, useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import * as PIXI from "pixi.js";
import { useDispatch, useSelector } from "react-redux";
import { selectEvents, Event } from "../../state/fileSlice";
import { Position, setCanvasPosition } from "../../state/cursorSlice";

declare global {
  interface Window {
    __PIXI_APP__: any;
  }
}

const StyledCanvas = styled.div`
  width: 900px;
  height: 600px;
`;

const app = new PIXI.Application({
  width: 900,
  height: 600,
  backgroundColor: 0xffffff,
  antialias: true,
  resolution: 1,
  preserveDrawingBuffer: true,
});

window.__PIXI_APP__ = app;

const Circle = (
  graphics: PIXI.Graphics,
  x: number,
  y: number,
  size: number,
  color?: number
) => {
  graphics.beginFill(color);
  graphics.drawCircle(x, y, size);
  graphics.endFill();
};

const Canvas = () => {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);

  const canvas = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (canvas.current) canvas.current.appendChild(app.view);
    app.start();

    return () => app.destroy(true);
  }, []);

  const updateCanvasPosition = () => {
    dispatch(
      setCanvasPosition({
        x: canvas.current?.getBoundingClientRect().x || 0,
        y: canvas.current?.getBoundingClientRect().y || 0,
      })
    );
  };

  useLayoutEffect(() => {
    updateCanvasPosition();
    window.addEventListener("resize", updateCanvasPosition);
    return () => window.removeEventListener("resize", updateCanvasPosition);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  app.stage.removeChildren();
  const layer = new PIXI.Container();
  app.stage.addChild(layer);

  events.forEach((event: Event) => {
    // Drawing Line
    if (event.type === "line") {
      if (!event.points || event.points.length === 0) return;

      // Starting with a circle
      if (event.points.length === 1) {
        const circle = new PIXI.Graphics();
        Circle(
          circle,
          event.points[0].x || 0,
          event.points[0].y || 0,
          (event.size || 40) / 2,
          event.color
        );
        layer.addChild(circle);
      }

      // Starting the line
      else {
        const line = new PIXI.Graphics();
        line.lineTextureStyle({
          width: event.size,
          color: event.color,
          alignment: 0.5,
          alpha: 1,
          join: PIXI.LINE_JOIN.ROUND,
          cap: PIXI.LINE_CAP.ROUND,
          miterLimit: 1000,
        });
        line.moveTo(event.points[0].x, event.points[0].y);

        // Adding all steps of the line
        event.points.forEach((point: Position, index: number) => {
          if (index === 0) return;

          // Handling sharp edges by adding a circle
          const circle = new PIXI.Graphics();
          Circle(circle, point.x, point.y, (event.size || 40) / 2, event.color);
          layer.addChild(circle);

          line.lineTo(point.x, point.y);
        });
        layer.addChild(line);
      }
    }
  });

  return <StyledCanvas id="document-canvas" ref={canvas} />;
};

export default Canvas;
