import compose from 'compose-function'

import { withDemoLogger } from './demo-logger'
import { withEnvResolver } from './env-resolver'

export const withProviders = compose(
  withEnvResolver.bind({
    env: import.meta.env,
  }),
  withDemoLogger,
)

export { useEnvResolver, withEnvResolver } from './env-resolver'
