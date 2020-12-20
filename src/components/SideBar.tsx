import React from 'react'
import 'components/styles/SideBar.scss'
import * as VscIcons from 'react-icons/vsc'
import { IconType } from 'react-icons/lib'
import theme from 'theme'

type Section = {
  icon: keyof typeof VscIcons
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
  return (
    <div className='container'>
      {sections!.map(({ icon, name }) => {
        const Icon = VscIcons[icon]
        return (
          <div className='section'>
            <Icon className='section-icon' color={theme.fontLight} size={24} />
            <p className='section-name'>{name}</p>
          </div>
        )
      })}
    </div>
  )
}

SideBar.defaultProps = {
  sections: [{ icon: 'VscTriangleRight', name: '', onClick: () => {} }],
  playlists: [],
}

export default SideBar
