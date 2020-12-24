import React from 'react'
import AlbumSection from 'components/AlbumSection'
import AlbumCard from 'components/AlbumCard'
import 'containers/styles/Home.scss'

const Home: React.FC = () => {
  const albumSections = [
    {
      title: 'Para você e sua família',
      titleClick: () => {},
      seeAllClick: () => {},
      albumCards: [
        {
          img: 'https://picsum.photos/320',
          title: 'Lorem Picsum',
          description: 'This is a fake description but you dont know it is actually fake',
        },
        {
          img: 'https://picsum.photos/320',
          title: 'Lorem Picsum',
          description: 'This is a fake description but you dont know it is actually fake',
        },
        {
          img: 'https://picsum.photos/320',
          title: 'Lorem Picsum',
          description: 'This is a fake description but you dont know it is actually fake',
        },
        {
          img: 'https://picsum.photos/320',
          title: 'Lorem Picsum',
          description: 'This is a fake description but you dont know it is actually fake',
        },
        {
          img: 'https://picsum.photos/320',
          title: 'Lorem Picsum',
          description: 'This is a fake description but you dont know it is actually fake',
        },
        {
          img: 'https://picsum.photos/320',
          title: 'Lorem Picsum',
          description: 'This is a fake description but you dont know it is actually fake',
        },
      ],
    },
  ]
  return (
    <>
      {albumSections.map((section) => {
        const { title, titleClick, seeAllClick, albumCards } = section
        return (
          <AlbumSection key={title} title={title} onTitleClick={titleClick} onSeeAllClick={seeAllClick}>
            {albumCards.map((card, idx) => {
              return <AlbumCard key={idx} img={card.img} title={card.title} description={card.description} />
            })}
          </AlbumSection>
        )
      })}
    </>
  )
}

export default Home
