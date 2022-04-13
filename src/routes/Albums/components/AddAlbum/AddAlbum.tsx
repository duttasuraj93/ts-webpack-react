import * as React from 'react'
import { addAlbum } from '../../../../redux/reducers/albums'
import { useAppDispatch } from '../../../../../hooks'
import { useNavigate } from "react-router-dom";

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
    <div>
      <h4>Add new Album</h4>
      <input type="text" value={newAlbumInput} onChange={(e) => setNewAlbumInput(e.target.value)} />
      <button onClick={addNewAlbum}>Submit</button>
    </div>
  )
}

export default AddAlbum