import { ImageElement, fadeInAnim, SlideData } from 'p5-present'
import { slideBackground } from './templates/baseSlide'

export const documentationExample = (): SlideData => ({
  title: 'Documentation Example',
  background: slideBackground,
  frames: [
    {
      in: {
        image: {
          element(p) {
            return new ImageElement(
              p,
              { x: '50%', y: '50%' },
              { image: 'documentation-example', size: { w: '80%' } },
            )
          },
          animation: fadeInAnim,
          duration: 150,
        },
      },
    },
  ],
})
