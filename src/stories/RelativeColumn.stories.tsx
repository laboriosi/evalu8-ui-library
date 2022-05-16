import { ComponentStory, ComponentMeta } from '@storybook/react'
import RelativeColumn from '~components/RelativeColumn'
import theme from '@laboriosi/evalu8-tokens/theme.json'

export default {
  title: 'Container/RelativeColumn',
  component: RelativeColumn,
} as ComponentMeta<typeof RelativeColumn>

const Template: ComponentStory<typeof RelativeColumn> = (args) => (
  <RelativeColumn {...args} />
)

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
      <span
        style={{
          position: 'absolute',
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis nibh, aliquet
        sed scelerisque sodales, ultricies sit amet enim.
      </span>
    </>
  ),
}
