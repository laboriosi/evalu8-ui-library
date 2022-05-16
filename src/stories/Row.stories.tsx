import { ComponentStory, ComponentMeta } from '@storybook/react'
import Row from '~components/Row'
import theme from '@laboriosi/evalu8-tokens/theme.json'

export default {
  title: 'Container/Row',
  component: Row,
} as ComponentMeta<typeof Row>

const Template: ComponentStory<typeof Row> = (args) => <Row {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: (
    <>
      <div
        style={{
          width: 100,
          height: 100,
          margin: 10,
          background: theme.brand.background.default,
        }}
      />
      <div
        style={{
          width: 100,
          height: 100,
          margin: 10,
          background: theme.brand.background.default,
        }}
      />
    </>
  ),
}
