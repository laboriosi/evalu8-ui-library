import { useField } from 'formik'
import { ChangeEvent, ComponentType } from 'react'
import { Props } from './types'
import Label from '~components/Label'
import ErrorText from '~components/ErrorText'
import RelativeColumn from '~components/RelativeColumn'

function withField<P>(Component: ComponentType<P>) {
  const NewComponent = (props: P & Props) => {
    const [field, { touched, error }] = useField(props)
    const showError = touched && error

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
      field.onChange(event)
      if (props.onChange) props.onChange(event)
    }

    return (
      <>
        <Label error={showError} htmlFor={props.name}>
          {props.label}
        </Label>
        <RelativeColumn>
          <Component {...props} {...field} onChange={handleChange} error={showError} />
          {showError && <ErrorText>{error}</ErrorText>}
        </RelativeColumn>
      </>
    )
  }

  return NewComponent
}

export default withField
