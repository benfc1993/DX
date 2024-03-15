import { PresentationData, startPresentation } from "../lib";
import { titleSlide } from "./slides/templates/main";
import { fonts } from "./fontsList";
import { images } from "./imagesList";

export const colors: Record<string, [number, number, number]> = {
  pink: [255, 144, 188],
  lightPink: [255, 187, 208],
  pastelleBlue: [94, 189, 204],
  pastelleGreen: [13, 84, 3],
  pastelleYellow: [255, 255, 0],
  pastelleOrange: [255, 165, 0],
  pastellePurple: [128, 0, 128],
  pastelleCyan: [0, 128, 128],
  pastelleMagenta: [128, 0, 128],
  pastelleBrown: [165, 42, 42],
};

export const presentation: PresentationData<typeof fonts, typeof images> = {
  titleFont: "nerdfont-bold",
  titleFontSize: 100,
  textFont: "nerdfont-medium",
  mainTextFontSize: 46,
  fonts,
  images,
  slides: [
    titleSlide("navigation", colors.pastelleBlue),
    titleSlide("aPIs", colors.pink),
    titleSlide("refactoring", colors.pastelleGreen),
    titleSlide(".env.local", colors.lightPink),
    titleSlide("testing", colors.pastelleCyan),
    titleSlide("documentation", colors.pastelleBrown),
  ],
};

export const { titleFontSize, mainTextFontSize } = presentation;

startPresentation(presentation);
