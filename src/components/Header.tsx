import React from 'react'
import IconButton from 'components/IconButton'
import LongButton from 'components/LongButton'
import { useHistory } from 'react-router-dom'
import theme from 'theme'
import './styles/Header.scss'

const Header: React.FC = () => {
  const history = useHistory()
  return (
    <div className='header-container'>
      <div className='header-navigation'>
        <IconButton icon='VscChevronLeft' size={24} fill={theme.fontLight} onClick={history.goBack} />
        <IconButton className='forward-icon' icon='VscChevronRight' size={24} fill={theme.fontLight} onClick={history.goForward} />
      </div>
      <div className='header-login'>
        <LongButton containerClass='signup-btn' textClass='signup-btn-text' text='SIGN UP' />
        <LongButton text='LOG IN' />
      </div>
    </div>
  )
}

export default Header
