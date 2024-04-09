import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { NamesList } from './NamesList'

const meta = {
  title: 'Example/NamesList',
  component: NamesList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NamesList>

export default meta
type Story = StoryObj<typeof meta>

export const SingleName: Story = {
  args: {
    names: ['Sally'],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByTestId('name-Sally')).toBeInTheDocument()
  },
}

export const MultipleNames: Story = {
  args: {
    names: ['Sally', 'Rudolf', 'Nish', 'Alice', 'Yuki', 'Mwaba', 'Farzana'],
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)

    for (const name of args.names) {
      await expect(canvas.getByTestId(`name-${name}`)).toBeInTheDocument()
    }
  },
}

export const NoNames: Story = {
  args: {
    names: [],
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    args.names = ['Ben']

    await expect(canvas.getByTestId('names-empty')).toBeInTheDocument()
  },
}
