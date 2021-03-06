import React from 'react'
import 'components/styles/AlbumCard.scss'

type Props = {
  img: string
  title: string
  description: string
  onClick?: () => void
}

type descrLengthType = (description: string, maxLength?: number) => string
const handleDescriptionMaxLength: descrLengthType = (description, maxLength = 50) => {
  return description.length > maxLength ? description.slice(0, maxLength) + '...' : description
}

const AlbumCard: React.FC<Props> = ({ img, title, description, onClick }) => {
  return (
    <div className='album-container'>
      <img className='album-image' src={img} alt={title} loading='lazy' />
      <h4>{title}</h4>
      <p>{handleDescriptionMaxLength(description)}</p>
    </div>
  )
}

AlbumCard.defaultProps = {
  img: '',
  title: '',
  description: '',
  onClick: () => {
    console.log('AlbumCard clicked')
  },
}

export default AlbumCard
