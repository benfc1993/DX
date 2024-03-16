import { fadeInAnim, linearMoveAnim } from '@/lib/index'
import { RectElement, SlideData, TitleElement } from '@/lib/index'
import p5 from 'p5'
import { titleFontSize } from '../..'
import { slideBackground } from './baseSlide'
import { typeAnim } from '../../animations/typeAnim'

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
              { x: 350, y: '50%' },
              {
                text: title,
                size: titleFontSize,
                alignment: { h: 'left', v: 'center' },
                color: color,
              },
            ),
          animation: typeAnim,
          duration: 100,
        },
      },
    },
  ],
})
