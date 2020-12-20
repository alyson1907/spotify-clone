import React from 'react'
import 'components/styles/SideBarButton.scss'

type Props = {
  /** Button text to be rendered after children (right most element) */
  text: string
  onClick?: () => void
  isSelected?: boolean
}

const SideBarButton: React.FC<Props> = ({ children, text, onClick, isSelected }) => {
  return (
    <div className={`sidebar-btn-container ${isSelected && 'selected'}`} onClick={onClick}>
      {children}
      <p>{text}</p>
    </div>
  )
}

SideBarButton.defaultProps = {
  text: '',
  onClick: () => {},
  isSelected: false,
}

export default SideBarButton
