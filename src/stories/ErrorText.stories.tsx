import { ComponentStory, ComponentMeta } from '@storybook/react'
import ErrorText from '~components/ErrorText'

export default {
  title: 'Typography/ErrorText',
  component: ErrorText,
} as ComponentMeta<typeof ErrorText>

const Template: ComponentStory<typeof ErrorText> = (args) => <ErrorText {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Lorem ipsum dolor sit amet',
}
