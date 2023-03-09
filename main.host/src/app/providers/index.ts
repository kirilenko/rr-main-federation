import compose from 'compose-function'

import { withDemoLoggerProvider } from './demo-logger'
import { withEnvResolver } from './env-resolver'

export const withProviders = compose(
  withEnvResolver.bind({
    env: import.meta.env,
  }),
  withDemoLoggerProvider,
)

export { useEnvResolver, withEnvResolver } from './env-resolver'
