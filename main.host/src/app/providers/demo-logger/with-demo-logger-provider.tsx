import { ComponentType } from 'react'

import { DemoLoggerProvider } from './demo-logger-provider'

export const withDemoLoggerProvider =
  <Props extends {}>(Component: ComponentType<Props>) =>
  // eslint-disable-next-line react/display-name
  (props: Props) =>
    (
      <DemoLoggerProvider>
        <Component {...props} />
      </DemoLoggerProvider>
    )
