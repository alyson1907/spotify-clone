import React from 'react'
import SideBarButton from 'components/SideBarButton'
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
  icon: keyof typeof VscIcons
  iconBackground: string
  text: string
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
  return (
    <div className='sections-container'>
      {sections!.map(({ icon, name, onClick }, idx) => {
        const Icon = VscIcons[icon]
        return (
          <SideBarButton key={name} text={name} isSelected={selectedSection === idx} onClick={onClick}>
            <Icon className='section-icon' color={theme.fontLight} size={24} />
          </SideBarButton>
        )
      })}
    </div>
  )
}

const renderPlaylists = (playlists: Array<Playlist>) => {
  const toRender: Array<Playlist> = [{ icon: 'VscAdd', iconBackground: 'white', text: 'Create Playlist' }, ...playlists]

  return (
    <div className='playlists-container'>
      <p className='playlists-title'>PLAYLISTS</p>
      {toRender!.map(({ iconBackground, text, icon }) => {
        const Icon = VscIcons[icon]
        return (
          <SideBarButton text={text}>
            <div className='playlists-icon-wrapper' style={{ background: iconBackground }}>
              <Icon size={16} strokeWidth={0.5} />
            </div>
          </SideBarButton>
        )
      })}
    </div>
  )
}

const SideBar: React.FC<ISideBar> = ({ sections, playlists, selectedSection }) => {
  return (
    <div className='container'>
      {renderSpotifyLogo()}
      {renderSections(sections, selectedSection)}
      {renderPlaylists(playlists || [])}
      <hr className='divider' />
    </div>
  )
}

SideBar.defaultProps = {
  sections: [{ icon: 'VscTriangleRight', name: '', onClick: () => {} }],
  playlists: [],
  selectedSection: 0,
}

export default SideBar
