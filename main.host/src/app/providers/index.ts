import compose from 'compose-function'

import { withDemoLoggerProvider } from './demo-logger'

export const withProviders = compose(withDemoLoggerProvider)
