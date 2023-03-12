import { ComponentType } from 'react'

import { DemoLoggerProvider } from './demo-logger.provider'

export const withDemoLoggerProvider =
  <Props extends {}>(Component: ComponentType<Props>) =>
  (props: Props) =>
    (
      <DemoLoggerProvider>
        <Component {...props} />
      </DemoLoggerProvider>
    )
