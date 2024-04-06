import {
  AnimationFn,
  PixelPositionRot,
  Position,
  SlideElement,
  TextElement,
} from 'p5-present'

export const typeAnim: AnimationFn = (
  el: SlideElement,
  _position: PixelPositionRot,
  _endPixelPosition: PixelPositionRot,
  duration: number,
  endPos: Position,
) => {
  if (!(el instanceof TextElement)) return new Promise((res) => res())

  const fullText = el.getText()

  const fullDuration = (fullText.length + 1) * duration

  return new Promise((resolve) => {
    let currLength = 0

    el.setText('')

    const int = setInterval(() => {
      if (currLength > fullText.length) {
        el.setText(fullText)
      }

      el.setText(fullText.slice(0, currLength))
      currLength += 1
    }, duration)

    setTimeout(() => {
      clearInterval(int)
      el.setText(fullText)
      return resolve()
    }, fullDuration)
  })
}
