import { ComponentStory, ComponentMeta } from '@storybook/react'
import Field from '~components/Field'
import Form from '~components/Form'

export default {
  title: 'Form/Field',
  component: Field,
  decorators: [
    (Story) => (
      <Form
        initialValues={{ lorem: '' }}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        <Story />
      </Form>
    ),
  ],
} as ComponentMeta<typeof Field>

const Template: ComponentStory<typeof Field> = (args) => <Field {...args} />

export const Primary = Template.bind({})
Primary.args = {
  name: 'lorem',
  label: 'Lorem',
  mask: '',
}
