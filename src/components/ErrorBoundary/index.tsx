import React from 'react'
import BugsnagPluginReact from '@bugsnag/plugin-react'
import Bugsnagjs from '@bugsnag/js'
import { Props } from './types'

function ErrorBoundary({ children, FallbackComponent, apiKey, environment }: Props) {
  if (environment === 'production') {
    Bugsnagjs.start({ apiKey, plugins: [new BugsnagPluginReact()] })

    const BugsnagBoundary = Bugsnagjs.getPlugin('react')?.createErrorBoundary(React)

    if (BugsnagBoundary)
      return (
        <BugsnagBoundary FallbackComponent={FallbackComponent}>
          {children}
        </BugsnagBoundary>
      )
  }

  return children
}

export default ErrorBoundary
