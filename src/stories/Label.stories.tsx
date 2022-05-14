import { ComponentStory, ComponentMeta } from '@storybook/react'
import Label from '~components/Label'

export default {
  title: 'Typography/Label',
  component: Label,
} as ComponentMeta<typeof Label>

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Lorem',
  error: false,
}

export const Error = Template.bind({})
Error.args = {
  children: 'Lorem',
  error: true,
}
