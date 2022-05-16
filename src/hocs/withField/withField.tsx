import { useField } from 'formik'
import Label from '~components/Label'
import ErrorText from '~components/ErrorText'
import RelativeColumn from '~components/RelativeColumn'
import { ChangeEvent, ComponentType } from 'react'
import { Props } from './types'

function withField<P extends Props>(Component: ComponentType<P>) {
  const NewComponent = (props: P) => {
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
          <Component {...props} {...field} onChange={handleChange} error={error} />
        </RelativeColumn>
        {showError && <ErrorText>{error}</ErrorText>}
      </>
    )
  }

  return NewComponent
}

export default withField
