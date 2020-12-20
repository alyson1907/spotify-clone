import React from 'react'
import SideBar from 'components/SideBar'
import './styles/Home.scss'

const sideBarSections: Array<any> = [
  {
    icon: 'VscHome',
    name: 'Home',
  },
  {
    icon: 'VscSearch',
    name: 'Search',
  },
  {
    icon: 'VscLibrary',
    name: 'Your Library',
  },
]

const Home: React.FC = () => {
  return (
    <div className='Home'>
      <SideBar sections={sideBarSections} />
      <div style={{ backgroundColor: '#212121', display: 'flex', flex: 4 }} />
    </div>
  )
}

export default Home
