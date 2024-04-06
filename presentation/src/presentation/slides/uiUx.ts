import { slideBackground } from './templates/baseSlide'
import { colors, presentation } from '..'
import { bulletPoints, fadeInAnim, TextElement, SlideData } from 'p5-present'

export const uiUxSlide: SlideData = {
  title: 'UI / UX',
  background: slideBackground,
  frames: [
    {
      in: {
        uiux: {
          element: (p) =>
            new TextElement(
              p,
              {
                x: '50%',
                y: '40%',
              },
              {
                alignment: { h: 'center', v: 'center' },
                text: 'UI / UX',
                size: presentation.titleFontSize,
                font: presentation.titleFont,
                color: colors.orange,
              },
            ),
          animation: fadeInAnim,
          duration: 200,
        },
      },
    },
    ...bulletPoints(
      'stakeholders',
      ['Product Owner', 'Client', 'Customers'],
      {
        x: '50%+-200',
        y: '60%',
      },
      { size: 46 },
    ),
  ],
}
