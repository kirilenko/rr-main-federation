import { useContext } from 'react'

import {
  DemoLoggerContext,
  DemoLoggerContextValue,
} from './demo-logger-context'

export const useDemoLogger = (): DemoLoggerContextValue =>
  useContext(DemoLoggerContext)
