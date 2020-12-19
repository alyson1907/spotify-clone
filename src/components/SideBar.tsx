import React from 'react'

type Section = {
  icon: string
  name: string
  onClick?: () => void
}

type Playlist = {
  img: string
  name: string
}

interface ISideBar {
  sections?: Array<Section>
  playlists?: Array<Playlist>
}

const SideBar: React.FC<ISideBar> = ({ sections, playlists }) => {
  return <div className='container'>
    <p>Side bar</p>
    <p>Side bar</p>
    <p>Side bar</p>
    <p>Side bar</p>
    <p>Side bar</p>
  </div>
}

SideBar.defaultProps = {
  sections: [],
  playlists: [],
}

export default SideBar
