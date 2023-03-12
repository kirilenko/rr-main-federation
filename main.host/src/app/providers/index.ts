import compose from 'compose-function'

import { withDemoLogger } from './demo-logger'
import { withEnvResolverProvider } from './env-resolver'

export const withProviders = compose(
  withEnvResolverProvider.bind({
    env: import.meta.env,
  }),
  withDemoLogger,
)

export { useEnvResolver, withEnvResolverProvider } from './env-resolver'
