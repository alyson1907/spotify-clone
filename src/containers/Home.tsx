import React from 'react'
import SideBar from 'components/SideBar'
import './styles/Home.scss'

const sideBarSections: Array<any> = [
  {
    icon: 'VscHome',
    name: 'Home',
    onClick: () => {console.log('Home clicked')}
  },
  {
    icon: 'VscSearch',
    name: 'Search',
    onClick: () => {console.log('Search clicked')}
  },
  {
    icon: 'VscLibrary',
    name: 'Your Library',
    onClick: () => {console.log('Your Library clicked')}
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
