import React from 'react'
import SearchItem, { Props as SearchItemProps } from 'components/SearchItem'
import 'containers/styles/Search.scss'

const items = [
  {
    title: 'Podcasts',
    img: `https://picsum.photos/200?t=${Math.random()}`,
    backgroundColor: '#f93',
    onClick: () => {},
  },
  {
    title: 'Made For You',
    img: `https://picsum.photos/200?t=${Math.random()}`,
    backgroundColor: '#bcf',
    onClick: () => {},
  },
  {
    title: 'New Releases',
    img: `https://picsum.photos/200?t=${Math.random()}`,
    backgroundColor: '#ddf',
    onClick: () => {},
  },
  {
    title: 'Discover',
    img: `https://picsum.photos/200?t=${Math.random()}`,
    backgroundColor: '#c9f',
    onClick: () => {},
  },
]

const renderSearchItems: React.FC<Array<SearchItemProps>> = (searchItems) => {
  return (
    <>
      {searchItems.map((item) => (
        <SearchItem title={item.title} img={item.img} backgroundColor={item.backgroundColor} />
      ))}
    </>
  )
}

const Search: React.FC = () => {
  return (
    <div className='search-container'>
      <h2>Browse all</h2>
      <div className='search-items'>
        {renderSearchItems(items)}
        {renderSearchItems(items)}
        {renderSearchItems(items)}
        {renderSearchItems(items)}
      </div>
    </div>
  )
}

export default Search
