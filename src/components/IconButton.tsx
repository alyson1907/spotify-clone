import React from 'react'
import * as Icons from 'react-icons/all'
import './styles/IconButton.scss'

type Props = {
  icon: keyof typeof Icons
  size: number
  fill?: string
  style?: React.CSSProperties
  className?: string
  onClick?: () => void
}

const IconButton: React.FC<Props> = ({ icon, size, fill, style, className, onClick }) => {
  const Icon = Icons[icon]
  return <Icon className={`icon-button ${className}`} style={style} size={size} fill={fill} onClick={onClick} />
}

IconButton.defaultProps = {
  icon: 'BiQuestionMark',
  size: 32,
  onClick: () => {},
}

export default IconButton
