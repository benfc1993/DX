import {
  SlideData,
  bulletPoints,
  fadeInAnim,
  TextElement,
  fadeOutAnim,
} from 'p5-present'
import { slideBackground } from './templates/baseSlide'
import { colors, presentation } from '..'

export const dxSlide: SlideData = {
  title: 'DX',
  background: slideBackground,
  frames: [
    {
      in: {
        ux: {
          element: (p) =>
            new TextElement(
              p,
              {
                x: '10%',
                y: '40%',
              },
              {
                alignment: { h: 'left', v: 'center' },
                text: 'UX Principles',
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
      'uxPrinciples',
      [
        'Focus on the user',
        'Put usability first',
        'Create consistency',
        'Use visual heirarchy',
        'Give the user control',
        'Design for Accessibility',
      ],
      {
        x: '10%',
        y: '60%',
      },
      { size: 46 },
    ),
    {
      out: {
        ux: {
          animation: fadeOutAnim,
          simultaneous: true,
        },
      },
      in: {
        dx: {
          element: (p) =>
            new TextElement(
              p,
              {
                x: '10%',
                y: '40%',
              },
              {
                alignment: { h: 'left', v: 'center' },
                text: 'DX Principles',
                size: presentation.titleFontSize,
                font: presentation.titleFont,
                color: colors.yellow,
              },
            ),
          animation: fadeInAnim,
          simultaneous: true,
        },
      },
    },
    ...bulletPoints(
      'dxPrinciples',
      [
        'Focus on the Developer',
        'Put usability first',
        'Create consistency',
        'Make code readable',
        'Give the developer control',
        'Design for Change',
      ],
      {
        x: '10%',
        y: '60%',
      },
      { size: 46, color: [94, 189, 204] },
    ).map((point, idx) => ({
      out: {
        [`uxPrinciples${idx}`]: {
          animation: fadeOutAnim,
          simultaneous: true,
        },
      },
      ...point,
    })),
  ],
}
