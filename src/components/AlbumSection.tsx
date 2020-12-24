import React from 'react'
import 'components/styles/AlbumSection.scss'

type Props = {
  title: string
  onTitleClick?: () => void
  onSeeAllClick?: () => void
}

const AlbumSection: React.FC<Props> = ({ children, title, onTitleClick, onSeeAllClick }) => {
  return (
    <section className='album-section-container'>
      <div className='section-title'>
        <h2 className='title-text' onClick={onTitleClick}>
          {title}
        </h2>
        <p className='see-all-text' onClick={onSeeAllClick}>SEE ALL</p>
      </div>
      <div className='album-cards-wrapper'>{children}</div>
    </section>
  )
}

AlbumSection.defaultProps = {
  title: '',
  onTitleClick: () => {
    console.log('Section title clicked')
  },
  onSeeAllClick: () => {
    console.log('See All clicked')
  },
}

export default AlbumSection
