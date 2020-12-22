import React from 'react'
import IconButton from 'components/IconButton'
import LongButton from 'components/LongButton'
import './styles/Header.scss'
import theme from 'theme'

const Header: React.FC = () => {
  return (
    <div className='header-container'>
      <div className='header-navigation'>
        <IconButton icon='VscChevronLeft' size={24} fill={theme.fontLight} />
        <IconButton className='forward-icon' icon='VscChevronRight' size={24} fill={theme.fontLight} />
      </div>
      <div className='header-login'>
        <LongButton containerClass='signup-btn' textClass='signup-btn-text' text='SIGN UP' />
        <LongButton text='LOG IN' />
      </div>
    </div>
  )
}

export default Header
