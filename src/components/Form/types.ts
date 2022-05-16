import { FormikConfig } from 'formik'

export interface Props<Values> extends FormikConfig<Values> {
  className?: string
  autoComplete?: string
  validateOnBlur?: boolean
  'aria-label'?: string
}
