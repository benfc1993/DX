import { Position, Sketch, SlideElement, TextElement } from '@/lib/index'
import { RectElement } from '@/lib/index'
import { ElementGroup } from '@/lib/index'
import { SlideData, fadeInAnim } from '@/lib/index'
import { slideBackground } from './templates/baseSlide'

class Arrow extends SlideElement {
  length: number
  thickness = 5
  arrowHeight = this.thickness * 1.5
  constructor(p: Sketch, position: Position, length: number) {
    super(p, position)
    this.length = length
  }
  draw() {
    this.drawElement(() => {
      this.sketch.fill(222, 222, 222)
      this.sketch.stroke(222, 222, 222)
      this.sketch.rect(
        this.pixelPosition.x,
        this.pixelPosition.y,
        this.length - 20,
        this.thickness,
      )
      const midY = this.pixelPosition.y + this.thickness / 2
      this.sketch.triangle(
        this.pixelPosition.x + this.length - 20,
        midY + this.arrowHeight,
        this.pixelPosition.x + this.length,
        midY,
        this.pixelPosition.x + this.length - 20,
        midY - this.arrowHeight,
      )
    })
  }
}
export const refactoringTwo: SlideData = {
  title: 'Documentation Example',
  background: slideBackground,
  frames: [
    {
      in: {
        box: {
          element(p) {
            return new ElementGroup(p, { x: '50%', y: '50%' }, [
              new RectElement(
                p,
                { x: 0, y: 0 },
                { size: { w: '25%', h: '20%' }, color: [222, 222, 222] },
              ),
              new TextElement(
                p,
                { x: 0, y: 0 },
                {
                  text: 'f(x)',
                  color: [33, 33, 33],
                  alignment: { h: 'center', v: 'center' },
                },
              ),
            ])
          },
        },
      },
    },
    {
      in: {
        rhs: {
          element(p) {
            return new ElementGroup(p, { x: '35%+-150', y: '50%' }, [
              new TextElement(p, { x: 0, y: -40 }, { text: 'Input' }),
              new Arrow(p, { x: 0, y: 0 }, 150),
            ])
          },
          animation: fadeInAnim,
          duration: 150,
        },
        lhs: {
          element(p) {
            return new ElementGroup(p, { x: '65%', y: '50%' }, [
              new TextElement(p, { x: 0, y: -40 }, { text: 'Output' }),
              new Arrow(p, { x: 0, y: 0 }, 150),
            ])
          },
          animation: fadeInAnim,
          duration: 150,
        },
      },
    },
    {
      in: {
        rhsInput: {
          element(p) {
            return new TextElement(
              p,
              { x: '35%+-75', y: '50%+90' },
              { text: '10', alignment: { h: 'center' } },
            )
          },
          animation: fadeInAnim,
          duration: 150,
        },
      },
    },
    {
      in: {
        lhsInput: {
          element(p) {
            return new TextElement(
              p,
              { x: '65%+75', y: '50%+90' },
              { text: '21', alignment: { h: 'center' } },
            )
          },
          animation: fadeInAnim,
          duration: 150,
        },
      },
    },
  ],
}
