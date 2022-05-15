import { ComponentStory, ComponentMeta } from '@storybook/react'
import CodeInput from '~components/CodeInput'

export default {
  title: 'Form/CodeInput',
  component: CodeInput,
} as ComponentMeta<typeof CodeInput>

const Template: ComponentStory<typeof CodeInput> = (args) => <CodeInput {...args} />

export const Default = Template.bind({})
Default.args = {
  error: false,
}

export const Error = Template.bind({})
Error.args = {
  error: true,
}
