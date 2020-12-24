import React from 'react'
import AlbumSection from 'components/AlbumSection'
import AlbumCard from 'components/AlbumCard'
import 'containers/styles/Home.scss'

const albumSections = [
  {
    title: 'Para você e sua família',
    titleClick: () => {},
    seeAllClick: () => {},
    albumCards: [
      {
        img: `https://picsum.photos/320?t=${Math.random()}`,
        title: 'Lorem Picsum',
        description: 'This is a fake description but you dont know it is actually fake',
      },
      {
        img: `https://picsum.photos/320?t=${Math.random()}`,
        title: 'Lorem Picsum',
        description: 'This is a fake description but you dont know it is actually fake',
      },
      {
        img: `https://picsum.photos/320?t=${Math.random()}`,
        title: 'Lorem Picsum',
        description: 'This is a fake description but you dont know it is actually fake',
      },
      {
        img: `https://picsum.photos/320?t=${Math.random()}`,
        title: 'Lorem Picsum',
        description: 'This is a fake description but you dont know it is actually fake',
      },
      {
        img: `https://picsum.photos/320?t=${Math.random()}`,
        title: 'Lorem Picsum',
        description: 'This is a fake description but you dont know it is actually fake',
      },
      {
        img: `https://picsum.photos/320?t=${Math.random()}`,
        title: 'Lorem Picsum',
        description: 'This is a fake description but you dont know it is actually fake',
      },
    ],
  },

  {
    title: 'Feliz Natal!',
    titleClick: () => {},
    seeAllClick: () => {},
    albumCards: [
      {
        img: `https://picsum.photos/320?t=${Math.random()}`,
        title: 'Feliz Natal',
        description:
          'Compartilhe o amor e a alegria das festas ao som desta playlist de clássicos e originais natalinos, interpretados por grandes da pop music.',
      },
      {
        img: `https://picsum.photos/320?t=${Math.random()}`,
        title: 'Clássicos de Natal',
        description:
          'Uma playlist para acompanhar a árvore de natal, o tender, o perú e o velhinho bonachão que traz presentes. Feliz Natal!',
      },
      {
        img: `https://picsum.photos/320?t=${Math.random()}`,
        title: 'Natal Acústico',
        description: 'Versões acústicas das músicas de natal que você mais ama.',
      },
      {
        img: `https://picsum.photos/320?t=${Math.random()}`,
        title: 'Natal Relax',
        description: 'A playlist ideal para quem quer calma e paz nesse Natal!',
      },
      {
        img: `https://picsum.photos/320?t=${Math.random()}`,
        title: 'Louvores de Natal',
        description: 'Celebre o nascimento de Jesus com louvores e músicas natalinas na voz de adoradores.',
      },
      {
        img: `https://picsum.photos/320?t=${Math.random()}`,
        title: 'Hits de Natal',
        description: 'Os maiores hits de Natal de sempre',
      },
    ],
  },

  {
    title: 'Mood',
    titleClick: () => {},
    seeAllClick: () => {},
    albumCards: [
      {
        img: `https://picsum.photos/320?t=${Math.random()}`,
        title: 'Verão Forever',
        description: 'Aqui o verão dura 365 dias! Passe o protetor solar, aumente o som e aperte o play!',
      },
      {
        img: `https://picsum.photos/320?t=${Math.random()}`,
        title: 'Hits Felizes',
        description: 'Mantenha a energia positiva!',
      },
      {
        img: `https://picsum.photos/320?t=${Math.random()}`,
        title: 'Alto Astral',
        description: 'Hits e clássicos para jogar sua energia lá em cima!',
      },
      {
        img: `https://picsum.photos/320?t=${Math.random()}`,
        title: 'Mood Booster',
        description: "Get happy with today's dose of feel-good songs!",
      },
      {
        img: `https://picsum.photos/320?t=${Math.random()}`,
        title: 'Friozinho',
        description: 'Músicas aconchegantes para aquecer a alma nos dias frios.',
      },
      {
        img: `https://picsum.photos/320?t=${Math.random()}`,
        title: 'Alone Again',
        description: 'When everything is lonely, I can be my best friend.',
      },
    ],
  },
]

const Home: React.FC = () => {
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
