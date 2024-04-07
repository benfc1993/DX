import { bulletPoints, fadeInAnim, SlideData, TextElement } from 'p5-present'
import { colors, presentation } from '..'
import { slideBackground } from './templates/baseSlide'

export const takeAwaysSlide: SlideData = {
  title: 'DI / DX',
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
                text: 'Takeaways',
                size: presentation.titleFontSize,
                font: presentation.titleFont,
                color: colors.blue,
              },
            ),
          animation: fadeInAnim,
          duration: 200,
        },
      },
    },
    ...bulletPoints(
      'points',
      [
        'Code always changes',
        'Code front to back',
        'Build tools',
        'Usability Vs Functionality',
      ],
      {
        x: '30%',
        y: '60%',
      },
      { size: 46 },
    ),
  ],
}
