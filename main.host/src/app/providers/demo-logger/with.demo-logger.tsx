import { ComponentType } from 'react'

import { DemoLoggerProvider } from './demo-logger.provider'

export const withDemoLogger =
  <Props extends {}>(Component: ComponentType<Props>) =>
  (props: Props) =>
    (
      <DemoLoggerProvider>
        <Component {...props} />
      </DemoLoggerProvider>
    )
