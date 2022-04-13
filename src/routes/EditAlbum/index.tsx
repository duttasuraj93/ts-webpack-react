import * as React from 'react'
import { useAppDispatch } from '../../../hooks'
import { updateAlbum } from '../../redux/reducers/albums'
import { useNavigate, useParams } from "react-router-dom";

interface AlbumDetails {
  userId: number,
  id: number,
  title: string
}

const EditAlbum: React.FC = () => {


  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  let { id } = useParams();

  const [loading, setLoading] = React.useState<boolean>(true)
  const [albumDetails, setAlbumDetails] = React.useState<AlbumDetails[]>([])
  const [albumTextValue, setTextValue] = React.useState('')
  const [showUpdated, setShowUpdated] = React.useState<boolean>(false)


  async function getAlbums() {
    await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`,)
      .then(res => res.json())
      .then(res => {
        setAlbumDetails([res])
        setTextValue(res.title)
        setLoading(false)
        console.log(albumDetails);
      }).catch(err => {
        console.log("error");
      })
  }

  React.useEffect(() => {

    getAlbums()


  }, [])

  const update = (id: number, userId: number) => {
    let data = {
      id: id,
      userId: userId,
      title: albumTextValue
    }
    dispatch(updateAlbum(data))
    setShowUpdated(true)

    setTimeout(() => {
      setShowUpdated(false)
    }, 2000);
  }

  if(loading) return <div>Loading</div>


  return (
    <div>
      <div>
      <input className='primary' type="text" value={albumTextValue} onChange={(e) => setTextValue(e.target.value)} />
      {
        showUpdated && (
          <div>Updated</div>
        )
      }
      </div>
      <button className='primary' onClick={(e) => update(albumDetails[0].id, albumDetails[0].userId)}>Update</button>
      <button className='primary' onClick={(e) => navigate(`/albums`)}>go back to albums</button>
    </div>
  )
}



export default EditAlbum