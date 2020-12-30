import React from 'react'
import 'components/styles/SearchItem.scss'

export type Props = {
  title: string
  img: string
  backgroundColor: string
  onClick?: () => void
}

const handle3DigitsHex = (hex: string) => {
  if (hex.length === 4) {
    return (
      '#' +
      hex
        .split('#')
        .pop()
        ?.split('')
        .reduce((acc, ch) => (acc += `${ch}${ch}`), '')
    )
  }
  return hex
}

const SearchItem: React.FC<Props> = ({ title, img, backgroundColor, onClick }) => {
  backgroundColor = handle3DigitsHex(backgroundColor)
  return (
    <div
      className='search-item-container'
      style={{ background: `linear-gradient(0deg,${backgroundColor},${backgroundColor}77)` }}
      onClick={onClick}>
      <h3>{title}</h3>
      <img src={img} className='search-item-image' alt={img} />
    </div>
  )
}

SearchItem.defaultProps = {
  title: '',
  img: 'https://picsum.photos/200',
  backgroundColor: '#ccc',
  onClick: () => {
    console.log('SearchItem clicked')
  },
}

export default SearchItem
