import * as React from 'react'
import { useAppDispatch } from '../../../hooks'
import { setUser } from '../../redux/reducers/auth'


const Login: React.FC = () => {

  const dispatch = useAppDispatch()
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [error, setError] = React.useState<string>('');

  const submitForm = () => {

    var emailTest = /\S+@\S+\.\S+/.test(email);
    var passwordTest = /[0-9a-zA-Z]{8,}$/.test(password);

    if (!emailTest) {
      return setError('Not a valid email')
    }

    if (!passwordTest) {
      return setError('Password must be 8 characters')
    }

    let data = {
      email: email,
      password: password,
      isLoggedIn: true
    }
    dispatch(setUser(data))
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)

  }

  return (
    <div>
      <h1>Login</h1>
      <div>
        <input className='primary' placeholder='Email' required type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className='primary' placeholder='Password' required type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className='primary' onClick={submitForm} type="submit">Submit</button>
      </div>
      {
        error && (
          <div>{error}</div>
        )
      }
    </div>
  )
}

export default Login;