import { ComponentStory, ComponentMeta } from '@storybook/react'
import FooterText from '~components/FooterText'

export default {
  title: 'Typography/FooterText',
  component: FooterText,
} as ComponentMeta<typeof FooterText>

const Template: ComponentStory<typeof FooterText> = (args) => <FooterText {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Lorem ipsum dolor sit amet',
  bold: false,
}

export const Bold = Template.bind({})
Bold.args = {
  children: 'Lorem ipsum dolor sit amet',
  bold: true,
}
