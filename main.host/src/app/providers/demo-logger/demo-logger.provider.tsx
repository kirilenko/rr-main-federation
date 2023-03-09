import { FC, PropsWithChildren, useMemo } from 'react'

import {
  DemoLoggerContext,
  DemoLoggerContextValue,
} from './demo-logger.context'

type DemoLoggerProviderProps = PropsWithChildren<{}>

export const DemoLoggerProvider: FC<DemoLoggerProviderProps> = ({
  children,
}) => {
  const value: DemoLoggerContextValue = useMemo(
    () => ({
      log: (p) => console.log(p), // eslint-disable-line no-console
    }),
    [],
  )

  return (
    <DemoLoggerContext.Provider {...{ value }}>
      {children}
    </DemoLoggerContext.Provider>
  )
}
