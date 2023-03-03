import { FC, PropsWithChildren } from 'react'

import {
  DemoLoggerContext,
  DemoLoggerContextValue,
} from './demo-logger-context'

type DemoLoggerProviderProps = PropsWithChildren<{}>

export const DemoLoggerProvider: FC<DemoLoggerProviderProps> = ({
  children,
}) => {
  const value: DemoLoggerContextValue = {
    // tmp fn:
    log: (p) => console.log(p), // eslint-disable-line no-console
  }

  return (
    <DemoLoggerContext.Provider {...{ value }}>
      {children}
    </DemoLoggerContext.Provider>
  )
}
