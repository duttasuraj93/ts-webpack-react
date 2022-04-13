import * as React from 'react'
import './index.scss'
import { addAlbum } from '../../../../redux/reducers/albums'
import { useAppDispatch } from '../../../../../hooks'

const AddAlbum: React.FC = () => {

  const dispatch = useAppDispatch()
  const [newAlbumInput, setNewAlbumInput] = React.useState<string>('')

  const addNewAlbum = () => {
    if (!newAlbumInput.replace(/\s/g, '').length) return;
    let body = {
      userId: 1,
      id: Math.floor(Math.random() * 1000),
      title: newAlbumInput
    }
    dispatch(addAlbum(body))
    setNewAlbumInput('')
  }

  return (
    <div className='add-album--container'>
      <input className='primary' placeholder='Add new album' type="text" value={newAlbumInput} onChange={(e) => setNewAlbumInput(e.target.value)} />
      <button className='primary' onClick={addNewAlbum}>Submit</button>
    </div>
  )
}

export default AddAlbum