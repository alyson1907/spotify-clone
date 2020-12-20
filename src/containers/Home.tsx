import React, { useState } from 'react'
import SideBar from 'components/SideBar'
import './styles/Home.scss'

const Home: React.FC = () => {
  const [selectedSideBar, setSelectedSideBar] = useState(0);

  const sideBarSections: Array<any> = [
    {
      icon: 'VscHome',
      name: 'Home',
      onClick: () => {setSelectedSideBar(0)}
    },
    {
      icon: 'VscSearch',
      name: 'Search',
      onClick: () => {setSelectedSideBar(1)}
    },
    {
      icon: 'VscLibrary',
      name: 'Your Library',
      onClick: () => {setSelectedSideBar(2)}
    },
  ]

  return (
    <div className='Home'>
      <SideBar sections={sideBarSections} selectedSection={selectedSideBar} />
      <div style={{ backgroundColor: '#212121', display: 'flex', flex: 4 }} />
    </div>
  )
}

export default Home
