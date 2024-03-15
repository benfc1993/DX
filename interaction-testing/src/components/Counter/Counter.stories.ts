import type { Meta, StoryObj } from '@storybook/react'
import { expect, fn, userEvent, within } from '@storybook/test'
import { Counter } from './Counter'

const meta = {
  title: 'Example/Counter',
  component: Counter,
  parameters: {
    layout: 'centered',
  },
  args: {
    onCountChanged: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Counter>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  name: 'single click',
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)

    const button = canvas.getByTestId('count-button')
    await userEvent.click(button)

    await expect(canvas.getByTestId('count-text')).toHaveTextContent('1')
    await expect(args.onCountChanged).toHaveBeenCalledWith(1)
  },
}

export const MultipleClicks: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const button = canvas.getByTestId('count-button')
    const clicks = 5
    for (let i = 0; i < clicks; i++) {
      await userEvent.click(button)
    }

    await expect(canvas.getByTestId('count-text')).toHaveTextContent(
      clicks.toString(),
    )
  },
}
