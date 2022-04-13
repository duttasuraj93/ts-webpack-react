import * as React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../hooks'
import { setUser } from '../../redux/reducers/auth'

export default function Home() {

  const reduxAuth = useAppSelector((state) => state.auth)
  const navigate = useNavigate();
  const dispatch = useAppDispatch()


  const logoutUser = () => {
    interface Data {
      email: null | string,
      password: null | string,
      isLoggedIn: boolean
    }
    let data:  Data = {
      email: null,
      password: null,
      isLoggedIn: false
    }
    dispatch(setUser(data))
    localStorage.removeItem('email')
    localStorage.removeItem('password')
  }

  return (
    <div>
      <h1></h1>
      <button className='primary' onClick={() => navigate('/albums')}>Go to Albums</button>
      {
        reduxAuth.isLoggedIn ?
          <div>
            <button className='primary' onClick={logoutUser}>Logout</button>
          </div>
          :
          <div>
            <button className='primary' onClick={() => navigate('/login')}>Login</button>
          </div>
      }
    </div>
  )
}
