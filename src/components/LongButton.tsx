import React from 'react'
import 'components/styles/LongButton.scss'

type Props = {
  containerClass?: string
  textClass?: string
  text: string
  onClick?: () => void
}

const LongButton: React.FC<Props> = ({ containerClass, textClass, text, onClick }) => {
  return (
    <div className={`default-long-btn ${containerClass}`} onClick={onClick}>
      <p className={`default-text ${textClass}`}>{text}</p>
    </div>
  )
}

LongButton.defaultProps = {
  containerClass: '',
  textClass: '',
  text: '',
  onClick: () => {
    console.log('LongButton clicked')
  },
}

export default LongButton
