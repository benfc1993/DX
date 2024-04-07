import { ImageElement, SlideData, TextElement, TitleElement } from 'p5-present'
import { colors, presentation } from '..'
import { slideBackground } from './templates/baseSlide'

export const endSlide: SlideData = {
  title: 'DX',
  background: slideBackground,
  frames: [
    {
      in: {
        message: {
          element: (p) =>
            new TitleElement(
              p,
              { x: '50%', y: '35%' },
              {
                text: 'Thanks for listening',
                size: presentation.titleFontSize,
                font: presentation.titleFont,
                alignment: { h: 'center' },
                color: colors.teal,
              },
            ),
        },
        qrcode: {
          element: (p) =>
            new ImageElement(
              p,
              { x: '50%', y: '65%' },
              { image: 'qrcode', size: { h: '35%' } },
            ),
        },
        codeUrl: {
          element: (p) =>
            new TextElement(
              p,
              { x: '50%', y: '90%' },
              {
                text: 'github.com/benfc1993/dx',
                alignment: { h: 'center' },
              },
            ),
        },
      },
    },
  ],
}
