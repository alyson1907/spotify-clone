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

const renderSpotifyLogo = () => {
  return (
    <div className='spotify-logo-container'>
      <SpotifyLogo className='logo' fill={theme.fontLight} />
      <h2>Spotify</h2>
    </div>
  )
}

const renderSections = (sections?: Array<Section>, selectedSection = 0) => {
  return sections!.map(({ icon, name, onClick }, idx) => {
    const Icon = VscIcons[icon]
    return (
      <div key={name} className={`sections-container ${selectedSection === idx && 'selected'}`} onClick={onClick}>
        <Icon className='section-icon' color={theme.fontLight} size={24} />
        <p className='section-name'>{name}</p>
      </div>
    )
  })
}

const renderPlaylists = (playlists?: Array<Playlist>) => {
  return (
    <div className='playlists-container'>
      <p className='playlists-title'>PLAYLISTS</p>
    </div>
  )
}

const SideBar: React.FC<ISideBar> = ({ sections, playlists, selectedSection }) => {
  return (
    <div className='container'>
      {renderSpotifyLogo()}
      {renderSections(sections, selectedSection)}
      {renderPlaylists(playlists)}
    </div>
  )
}

SideBar.defaultProps = {
  sections: [{ icon: 'VscTriangleRight', name: '', onClick: () => {} }],
  playlists: [],
  selectedSection: 0,
}

export default SideBar
