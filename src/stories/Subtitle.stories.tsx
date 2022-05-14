import { ComponentStory, ComponentMeta } from '@storybook/react'
import Subtitle from '~components/Subtitle'

export default {
  title: 'Typography/Subtitle',
  component: Subtitle,
} as ComponentMeta<typeof Subtitle>

const Template: ComponentStory<typeof Subtitle> = (args) => <Subtitle {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Lorem ipsum dolor sit amet',
}
