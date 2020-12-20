import React from 'react'
import 'components/styles/SideBar.scss'
import * as VscIcons from 'react-icons/vsc'
import { ReactComponent as SpotifyLogo } from 'assets/spotifyIcon.svg'
import theme from 'theme'

type Section = {
  icon: keyof typeof VscIcons
  name: string
  onClick?: () => void
}

type Playlist = {
  img: String
  name: String
}

interface ISideBar {
  sections?: Array<Section>
  playlists?: Array<Playlist>
  selectedSection: number
}

const renderSectionBtns = (sections?: Array<Section>, selectedSection = 0) => {
  return sections!.map(({ icon, name, onClick }, idx) => {
    const Icon = VscIcons[icon]
    return (
      <div key={name} className={`section ${selectedSection === idx && 'selected'}`} onClick={onClick}>
        <Icon className='section-icon' color={theme.fontLight} size={24} />
        <p className='section-name'>{name}</p>
      </div>
    )
  })
}

const renderSpotifyLogo = () => {
  return (
    <div className='spotify-logo-container'>
      <SpotifyLogo className='logo' fill='currentColor' />
      <h2>Spotify</h2>
    </div>
  )
}

const SideBar: React.FC<ISideBar> = ({ sections, playlists, selectedSection }) => {
  return (
    <div className='container'>
      {renderSpotifyLogo()}
      {renderSectionBtns(sections, selectedSection)}
    </div>
  )
}

SideBar.defaultProps = {
  sections: [{ icon: 'VscTriangleRight', name: '', onClick: () => {} }],
  playlists: [],
  selectedSection: 0,
}

export default SideBar
