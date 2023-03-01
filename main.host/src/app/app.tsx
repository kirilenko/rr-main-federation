import { FC } from 'react'
import { Global } from '@emotion/react'

import { DemoButton, DemoHeader } from '@shared/ui'
import Wbs from '@widgets/wbs'

import StyledApp from './styles/app.style'
import GlobalStyles from './styles/global.style'

const App: FC = () => (
  <>
    <Global styles={GlobalStyles} />
    <StyledApp>
      <h1>main.host</h1>
      <DemoHeader title="shared.ui.header in main.host" />
      <DemoButton title="shared.ui.button in main.wbs" />
      <Wbs />
    </StyledApp>
    <h1>main.host</h1>
  </>
)

export default App
