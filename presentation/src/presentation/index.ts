import { titleSlide } from './slides/templates/main'
import { fonts } from './fontsList'
import { images } from './imagesList'
import { documentationExample } from './slides/documentationExample'
import { uiUxSlide } from './slides/uiUx'
import { diDxSlide } from './slides/diDx'
import { coverSlide } from './slides/cover'
import { refactoringOne } from './slides/refactoringSlideOne'
import { refactoringTwo } from './slides/refactoringSlideTwo'
import { PresentationData, startPresentation } from 'p5-present'

export const colors: Record<string, [number, number, number]> = {
  teal: [60, 161, 156],
  orange: [250, 130, 101],
  blue: [116, 152, 194],
  red: [233, 85, 81],
  yellow: [250, 192, 92],
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
}

export const presentation: PresentationData<typeof fonts, typeof images> = {
  titleFont: 'nerdfont-bold',
  titleFontSize: 100,
  textFont: 'nerdfont-medium',
  mainTextFontSize: 46,
  fonts,
  images,
  slides: [
    coverSlide,
    uiUxSlide,
    diDxSlide,
    titleSlide('Navigation', colors.red),
    titleSlide('APIs', colors.yellow),
    titleSlide('Testing', colors.teal),
    titleSlide('Refactoring', colors.blue),
    refactoringOne,
    refactoringTwo,
    titleSlide('.env.local', colors.orange),
    titleSlide('Documentation', colors.red),
    documentationExample(),
    titleSlide('Bloat', colors.yellow),
  ],
}

export const { titleFontSize, mainTextFontSize } = presentation

startPresentation(presentation)
