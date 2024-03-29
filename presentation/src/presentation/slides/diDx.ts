import { SlideData, bulletPoints, fadeInAnim } from '@/lib/index'
import { slideBackground } from './templates/baseSlide'
import { TextElement } from '@/lib/index'
import p5 from 'p5'
import { colors, presentation } from '..'

export const diDxSlide: SlideData = {
  title: 'DI / DX',
  background: slideBackground,
  frames: [
    {
      in: {
        uiux: {
          element: (p: p5) =>
            new TextElement(
              p,
              {
                x: '50%',
                y: '40%',
              },
              {
                alignment: { h: 'center', v: 'center' },
                text: 'DI / DX',
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
      'stakeholders',
      ['Developers'],
      {
        x: '50%+-200',
        y: '60%',
      },
      { size: 46 },
    ),
  ],
}
