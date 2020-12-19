import React from 'react'
import SideBar from 'components/SideBar'
import './styles/Home.scss'

const Home:React.FC = () => {
  return (
    <div className='Home'>
      <SideBar />
      <div style={{backgroundColor: '#212121', display: 'flex', flex: 4}} />
    </div>
  )
}

export default Home
