import React, { useState } from 'react'
import SideBar from 'components/SideBar'
import Header from 'components/Header'
import './styles/Main.scss' 

const Main: React.FC = () => {
  const [selectedSideBar, setSelectedSideBar] = useState(0)

  const sideBarSections: Array<any> = [
    {
      icon: 'VscHome',
      name: 'Home',
      onClick: () => {
        setSelectedSideBar(0)
      },
    },
    {
      icon: 'VscSearch',
      name: 'Search',
      onClick: () => {
        setSelectedSideBar(1)
      },
    },
    {
      icon: 'VscLibrary',
      name: 'Your Library',
      onClick: () => {
        setSelectedSideBar(2)
      },
    },
  ]

  const sideBarPlaylists: Array<any> = [
    {
      icon: 'VscHeart',
      iconBackground: 'linear-gradient(135deg,#450af5,#c4efd9)',
      text: 'Liked Songs',
    },
  ]

  return (
    <div className='main-container'>
        <SideBar sections={sideBarSections} playlists={sideBarPlaylists} selectedSection={selectedSideBar} />
      <div className='main-wrapper'>
        <Header />
      </div>
    </div>
  )
}

export default Main
