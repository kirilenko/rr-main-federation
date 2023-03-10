import { FC } from 'react'
import { Global } from '@emotion/react'

import { useEnvResolver } from '@app/providers'
import { cnc, DivProps } from '@shared/lib'
import { DemoButton, DemoHeader } from '@shared/ui'
import Wbs from '@widgets/wbs'
import { useDemoLogger } from './providers/demo-logger'
import { withProviders } from './providers'

import StyledApp from './styles/app.style'
import GlobalStyles from './styles/global.style'

type Props = DivProps<{}>

const App: FC<Props> = (divProps) => {
  useDemoLogger().log('App.render log from DemoLogger')

  const { getEnv } = useEnvResolver()

  return (
    <>
      <Global styles={GlobalStyles} />
      <StyledApp {...divProps} className={cnc('App')}>
        <h1>main.host</h1>
        <DemoHeader title="shared.ui.header in main.host" />
        <DemoButton title="shared.ui.button in main.wbs" />
        <Wbs />
      </StyledApp>
      <h1>main.host</h1>
      <div style={{ display: 'none' }}>{`${getEnv(
        'VITE_TIMESTAMP',
      )} / mode: ${getEnv('MODE')}`}</div>{' '}
    </>
  )
}

export default withProviders(App)
