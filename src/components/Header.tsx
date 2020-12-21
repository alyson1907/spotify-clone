import React from 'react'
import IconButton from 'components/IconButton'
import './styles/Header.scss'
import theme from 'theme'

const Header: React.FC = () => {
  return (
    <div className='header-container'>
      <IconButton icon='VscChevronLeft' size={24} fill={theme.fontLight} />
      <IconButton className='forward-icon' icon='VscChevronRight' size={24} fill={theme.fontLight} />
    </div>
  )
}

export default Header
