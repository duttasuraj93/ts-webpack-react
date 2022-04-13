import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../hooks'
import { logoutUser } from '../../redux/reducers/auth'

export default function Home() {

  const reduxAuth = useAppSelector((state) => state.auth)
  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  return (
    <div>
      <h1></h1>
      <button className='primary' onClick={() => navigate('/albums')}>Go to Albums</button>
      {
        reduxAuth.isLoggedIn ?
          <div>
            <button className='primary' onClick={(e) => dispatch(logoutUser())}>Logout</button>
          </div>
          :
          <div>
            <button className='primary' onClick={() => navigate('/login')}>Login</button>
          </div>
      }
    </div>
  )
}
