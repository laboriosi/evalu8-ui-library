import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from '~components/Button'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  children: 'Lorem Ipsum',
  disabled: false,
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  children: 'Lorem Ipsum',
  disabled: false,
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  variant: 'tertiary',
  children: 'Lorem Ipsum',
  disabled: false,
}
