import { ComponentStory, ComponentMeta } from '@storybook/react'
import Column from '~components/Column'
import theme from '@laboriosi/evalu8-tokens/theme.json'

export default {
  title: 'Container/Column',
  component: Column,
} as ComponentMeta<typeof Column>

const Template: ComponentStory<typeof Column> = (args) => <Column {...args} />

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
