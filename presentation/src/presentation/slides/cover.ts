import {
  fadeInAnim,
  fadeOutAnim,
  ImageElement,
  SlideData,
  TextElement,
  TitleElement,
} from '@/lib/index'
import { slideBackground } from './templates/baseSlide'
import { colors, presentation } from '..'
import { ElementGroup } from '@/lib/index'

export const coverSlide: SlideData = {
  title: 'First slide',
  background: slideBackground,
  frames: [
    {
      in: {
        title: {
          element: (p) =>
            new TitleElement(
              p,
              { x: '50%', y: '50% + -60' },
              {
                text: 'DX',
                alignment: { h: 'center', v: 'center' },
                size: presentation.titleFontSize,
              },
            ),
          animation: fadeInAnim,
          duration: 200,
          simultaneous: true,
        },
        divider: {
          element: (p) =>
            new TitleElement(
              p,
              { x: '50%', y: '50%' },
              {
                text: '...',
                alignment: { h: 'center', v: 'center' },
                size: presentation.titleFontSize,
                color: colors.teal,
              },
            ),
          animation: fadeInAnim,
          duration: 200,
          simultaneous: true,
        },
        subTitle: {
          element: (p) =>
            new TextElement(
              p,
              { x: '50%', y: '50% + 106' },
              {
                text: 'The forgotten stakeholder',
                alignment: { h: 'center', v: 'center' },
                size: presentation.mainTextFontSize,
              },
            ),
          animation: fadeInAnim,
          duration: 200,
          simultaneous: true,
        },
        github: {
          element: (p) =>
            new ElementGroup(p, { x: '50%', y: '95%' }, [
              new TextElement(
                p,
                { x: 0, y: -100 },
                {
                  text: 'Ben Feldberg Collins',
                  size: presentation.mainTextFontSize,
                  alignment: { h: 'center', v: 'center' },
                },
              ),
              new TextElement(
                p,
                { x: -85, y: -5 },
                {
                  text: 'benfc1993',
                  size: presentation.mainTextFontSize,
                  alignment: { h: 'left', v: 'center' },
                  color: colors.teal,
                },
              ),
              new ImageElement(p, { x: -125, y: 0 }, { image: 'gh' }),
            ]),
          animation: fadeInAnim,
          duration: 200,
          simultaneous: true,
        },
      },
    },
    {
      out: {
        title: {
          animation: fadeOutAnim,
          duration: 200,
          simultaneous: true,
        },
        divider: {
          animation: fadeOutAnim,
          duration: 200,
          simultaneous: true,
        },
        subTitle: {
          animation: fadeOutAnim,
          duration: 200,
          simultaneous: true,
        },
        github: {
          animation: fadeOutAnim,
          duration: 200,
          simultaneous: true,
        },
      },
    },
  ],
}
