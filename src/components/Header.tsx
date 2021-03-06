import React, { useState } from 'react'
import IconButton from 'components/IconButton'
import LongButton from 'components/LongButton'
import { VscSearch } from 'react-icons/vsc'
import { useHistory } from 'react-router-dom'
import theme from 'theme'
import './styles/Header.scss'

type Props = {
  searchBar?: boolean
}

const Header: React.FC<Props> = ({ searchBar }) => {
  const history = useHistory()
  const [search, setSearch] = useState('')

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const clearSearch = () => {
    setSearch('')
  }

  return (
    <div className='header-container'>
      <div className='header-navigation'>
        <IconButton icon='VscChevronLeft' size={24} fill={theme.fontLight} onClick={history.goBack} />
        <IconButton
          className='forward-icon'
          icon='VscChevronRight'
          size={24}
          fill={theme.fontLight}
          onClick={history.goForward}
        />
        {searchBar && (
          <div className='search-input'>
            <VscSearch className='' size={18} fill={theme.black} />
            <input placeholder='Search for Artists, Songs or Podcasts' onChange={handleSearch} value={search} />
            {search && 
          <IconButton icon='MdCancel' size={20} fill={theme.black} onClick={clearSearch} />
      }
          </div>
        )}
      </div>
      <div className='header-login'>
        <LongButton containerClass='signup-btn' textClass='signup-btn-text' text='SIGN UP' />
        <LongButton text='LOG IN' />
      </div>
    </div>
  )
}

Header.defaultProps = {
  searchBar: true,
}

export default Header
