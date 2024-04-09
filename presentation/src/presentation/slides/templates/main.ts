import { titleFontSize } from '../..'
import { slideBackground } from './baseSlide'
import { typingAnim } from '../../animations/typeAnim'
import { SlideData, TitleElement } from 'p5-present'

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
          element: (p) =>
            new TitleElement(
              p,
              { x: '10%', y: '50%' },
              {
                text: title,
                size: titleFontSize,
                alignment: { h: 'left', v: 'center' },
                color: color,
              },
            ),
          animation: typingAnim,
          duration: 100,
        },
      },
    },
  ],
})
