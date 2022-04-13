import * as React from 'react'
import './index.scss'
import { removeAlbum } from '../../../../redux/reducers/albums'
import { useAppDispatch } from '../../../../../hooks'
import { useNavigate } from "react-router-dom";

interface Props {
  album: {
    userId: number
    id: number
    title: string
  }
}

const AlbumCard = ({ album }: Props) => {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const gotoEditAlbum = (id: string | number) => {
    navigate(`/album/edit/${id}`);
  }

  return (
    <div className='album'>
      <div className='album--details'>
        <img src={`https://via.placeholder.com/200?text=${album.title}`} alt="" />
        <div>
          <h4>{album.title}</h4>
          <div className='album--buttons'>
            <button className='primary' onClick={(e) => gotoEditAlbum(album.id)}>Update</button>
            <button className='danger' onClick={(e) => dispatch(removeAlbum(album.id))}>Remove Album</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AlbumCard