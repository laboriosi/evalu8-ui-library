import { ComponentStory, ComponentMeta } from '@storybook/react'
import Input from '~components/Input'

export default {
  title: 'Form/Input',
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  mask: '',
  error: false,
}

export const Error = Template.bind({})
Error.args = {
  mask: '',
  error: true,
}

export const Masked = Template.bind({})
Masked.args = {
  mask: '(99) 9999-9999',
  error: true,
}
