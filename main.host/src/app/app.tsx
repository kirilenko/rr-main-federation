import { FC } from 'react'
import { Global } from '@emotion/react'

import { Header } from '@shared/ui'
import Wbs from '@widgets/wbs'

import StyledApp from './styles/app.style'
import GlobalStyles from './styles/global.style'

const App: FC = () => (
  <>
    <Global styles={GlobalStyles} />
    <StyledApp>
      <h1>main.host</h1>
      <Header title="shared.ui.header in main.host" />
      <Wbs />
    </StyledApp>
    <h1>main.host</h1>
  </>
)

export default App
