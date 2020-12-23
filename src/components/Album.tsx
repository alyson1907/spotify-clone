import React from 'react'
import 'components/styles/Album.scss'
import { CgMaximizeAlt } from 'react-icons/cg'

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

const Album: React.FC<Props> = ({ img, title, description, onClick }) => {
  return (
    <div className='album-container'>
      <img className='album-image' src={img} alt={title} />
      <h4>{title}</h4>
      <p>{handleDescriptionMaxLength(description)}</p>
    </div>
  )
}

Album.defaultProps = {
  img: '',
  title: '',
  description: '',
  onClick: () => {},
}

export default Album
