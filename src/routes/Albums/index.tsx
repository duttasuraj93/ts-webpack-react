import { useEffect } from 'react'
import './index.scss'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { getAlbums, albumStatus, albumPage } from '../../redux/reducers/albums'
import AlbumCard from './components/AlbumCard/AlbumCard';
import AddAlbum from './components/AddAlbum/AddAlbum';


const Albums: React.FC = () => {

  const dispatch = useAppDispatch()
  const reduxAlbums = useAppSelector((state) => state.albums)
  const loading = useAppSelector(albumStatus)
  const page = useAppSelector(albumPage)

  useEffect(() => {
    dispatch(getAlbums({page}))
  }, [])


  if (loading === 'loading') return <div>Loading</div>
  if (loading === 'failed') return <div>Failed to fetch albums</div>

  return (
    <div>
      <AddAlbum />
      <div className='albums-container'>
        {reduxAlbums.albumList.map((item: any) => <AlbumCard album={item} />)}
      </div>
      <button onClick={(e) => dispatch(getAlbums({page}))}>Load More</button>
    </div>
  )
}


export default Albums;