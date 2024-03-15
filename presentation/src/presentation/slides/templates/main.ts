import { fadeInAnim } from "@/lib/index";
import { RectElement, SlideData, TitleElement } from "@/lib/index";
import p5 from "p5";
import { titleFontSize } from "../..";
import { slideBackground } from "./baseSlide";

export const titleSlide = (
  title: string,
  color: [number, number, number],
): SlideData => ({
  title,
  background: slideBackground,
  frames: [
    {
      in: {
        title: {
          element: (p: p5) =>
            new TitleElement(
              p,
              { x: "50%", y: "50%" },
              {
                text: title,
                size: titleFontSize,
                alignment: { h: "center", v: "center" },
                color: color,
              },
            ),
          animation: fadeInAnim,
        },
      },
    },
  ],
});
