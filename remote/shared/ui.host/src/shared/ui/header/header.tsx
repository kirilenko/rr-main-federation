import { FC } from 'react'

type Props = {
  title: string
}
const Header: FC<Props> = ({ title }) => <h2>{title}</h2>

export default Header
