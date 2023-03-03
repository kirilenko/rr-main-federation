import { Context, createContext } from 'react'

export type DemoLoggerState = {}

type DemoLoggerActions = {
  log: (...args: unknown[]) => void
}

export type DemoLoggerContextValue = DemoLoggerState & DemoLoggerActions

const initialDemoLoggerContextValue: DemoLoggerContextValue = {
  log: () => {},
}

export const DemoLoggerContext = ((): Context<DemoLoggerContextValue> =>
  createContext<DemoLoggerContextValue>(
    initialDemoLoggerContextValue as DemoLoggerContextValue,
  ))()
