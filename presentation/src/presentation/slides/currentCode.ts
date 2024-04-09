import {
  SlideData,
  fadeInAnim,
  TextElement,
  fadeOutAnim,
  ImageElement,
} from 'p5-present'
import { slideBackground } from './templates/baseSlide'
import { presentation } from '..'

export const currentCodeSlide: SlideData = {
  title: 'DI / DX',
  background: slideBackground,
  frames: [
    {
      in: {
        lineOne: {
          element: (p) =>
            new TextElement(
              p,
              {
                x: '50%',
                y: '50%+-30',
              },
              {
                alignment: { h: 'center', v: 'center' },
                text: 'The code works,',
                size: presentation.mainTextFontSize,
                font: presentation.textFont,
              },
            ),
          animation: fadeInAnim,
          duration: 200,
        },
      },
    },
    {
      in: {
        lineTwo: {
          element: (p) =>
            new TextElement(
              p,
              {
                x: '50%',
                y: '50%+30',
              },
              {
                alignment: { h: 'center', v: 'center' },
                text: 'but it is hard to work on.',
                size: presentation.mainTextFontSize,
                font: presentation.textFont,
              },
            ),
          animation: fadeInAnim,
          duration: 200,
        },
      },
    },
    {
      out: {
        lineOne: {
          animation: fadeOutAnim,
          duration: 200,
          simultaneous: true,
        },

        lineTwo: {
          animation: fadeOutAnim,
          duration: 200,
          simultaneous: true,
        },
      },
      in: {
        mechanicOne: {
          element: (p) =>
            new ImageElement(
              p,
              {
                x: '50%',
                y: '50%',
              },
              { image: 'mechanic-1', size: { h: '90%' } },
            ),
          animation: fadeInAnim,
          duration: 200,
        },
      },
    },
    {
      out: {
        mechanicOne: {
          animation: fadeOutAnim,
          simultaneous: true,
        },
      },
      in: {
        mechanicTwo: {
          element: (p) =>
            new ImageElement(
              p,
              {
                x: '50%',
                y: '50%',
              },
              { image: 'mechanic-2', size: { h: '90%' } },
            ),
          animation: fadeInAnim,
        },
      },
    },
    {
      out: {
        mechanicTwo: { animation: fadeOutAnim, simultaneous: true },
      },
    },
  ],
}
