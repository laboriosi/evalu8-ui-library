import { ComponentType, ErrorInfo, ReactNode } from 'react'

export interface Props {
  children: ReactNode
  FallbackComponent: ComponentType<{
    error: Error
    info: ErrorInfo
    clearError: () => void
  }>
  apiKey: string
  environment: string
}
