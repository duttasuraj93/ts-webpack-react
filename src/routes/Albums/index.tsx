import * as React from 'react'
import './index.scss'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { getAlbums, albumStatus, albumPage } from '../../redux/reducers/albums'
import AlbumCard from './components/AlbumCard/AlbumCard';
import AddAlbum from './components/AddAlbum/AddAlbum';
import { logoutUser } from '../../redux/reducers/auth'


const Albums: React.FC = () => {

  const dispatch = useAppDispatch()
  const reduxAlbums = useAppSelector((state) => state.albums)
  const loading = useAppSelector(albumStatus)
  const page = useAppSelector(albumPage)

  React.useEffect(() => {
    if (reduxAlbums.albumList.length === 0) {
      dispatch(getAlbums({ page }))
    }
  }, [])

  if (loading === 'loading') return <div>Loading</div>
  if (loading === 'failed') return <div>Failed to fetch albums</div>

  return (
    <div className='wrapper'>
      <AddAlbum />
      <div className='albums-container'>
        {reduxAlbums.albumList.map((item: any) => <AlbumCard album={item} />)}
      </div>
      <button className='primary' onClick={(e) => dispatch(getAlbums({ page }))}>Load More</button>
      <button className='danger' onClick={(e) => dispatch(logoutUser())}>Logout</button>
    </div>
  )
}


export default Albums;