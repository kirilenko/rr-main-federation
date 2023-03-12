import { FC } from 'react'
import { Global } from '@emotion/react'

import { useEnvResolver } from '@app/providers'
import { cnc, DivProps } from '@shared/lib'
import Wbs from '@widgets/wbs'
import { withProviders, withRenderLog } from './providers'

import StyledApp from './styles/app.style'
import GlobalStyles from './styles/global.style'

type Props = DivProps<{}>

const App: FC<Props> = (divProps) => {
  const { getEnv } = useEnvResolver()

  return (
    <>
      <Global styles={GlobalStyles} />
      <StyledApp {...divProps} className={cnc('App')}>
        <h1>main.host</h1>
        <Wbs />
      </StyledApp>
      <h1>main.host</h1>
      <div style={{ display: 'none' }}>{`${getEnv(
        'VITE_TIMESTAMP',
      )} / mode: ${getEnv('MODE')}`}</div>{' '}
    </>
  )
}

export default withProviders(withRenderLog(App))
