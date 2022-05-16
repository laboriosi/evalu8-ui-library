import { Formik } from 'formik'
import { Props } from './types'
import * as Styled from './styled'

function Form<Values>({ className, children, autoComplete, ...props }: Props<Values>) {
  return (
    <Formik {...props}>
      {(formikProps) => (
        <Styled.Form
          autoComplete={autoComplete}
          className={className}
          aria-label={props['aria-label']}
        >
          {typeof children === 'function' ? children(formikProps) : children}
        </Styled.Form>
      )}
    </Formik>
  )
}

Form.defaultProps = {
  autoComplete: 'off',
  validateOnBlur: true,
  validateOnMount: true,
}

export default Form
