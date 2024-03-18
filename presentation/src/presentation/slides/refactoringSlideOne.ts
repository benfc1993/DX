import { Sketch, TextElement } from '@/lib/index'
import { RectElement } from '@/lib/index'
import { ElementGroup } from '@/lib/index'
import { SlideData } from '@/lib/index'
import { colors } from '..'
import { slideBackground } from './templates/baseSlide'

const thermometer = (p: Sketch, color: [number, number, number]) => [
  new RectElement(
    p,
    { x: 0, y: 30 },
    {
      size: { w: 10, h: 100 },
      color: [111, 111, 111],
      radius: [0, 0, 10, 10],
    },
  ),
  new RectElement(
    p,
    { x: 0, y: -70 },
    {
      size: { w: 20, h: 100 },
      color: color,
      radius: [10, 10, 0, 0],
    },
  ),
  new RectElement(
    p,
    { x: 0, y: -20 },
    {
      size: { w: 40, h: 10 },
      color: color,
    },
  ),
]

export const refactoringOne: SlideData = {
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
        thermometer: {
          element(p) {
            return new ElementGroup(
              p,
              { x: '55%', y: '35%', rot: 30 },
              thermometer(p, colors.red),
            )
          },
        },
        thermometerTwo: {
          element(p) {
            return new ElementGroup(
              p,
              { x: '40%', y: '45%', rot: -80 },
              thermometer(p, colors.yellow),
            )
          },
        },
      },
    },
  ],
}
