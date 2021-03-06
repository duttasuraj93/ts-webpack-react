import * as React from 'react';
import "./app.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';
import { useAppSelector, useAppDispatch } from './hooks'
import { setUser } from './src/redux/reducers/auth'

const Login = React.lazy(() => import('./src/routes/Login'));
const Home = React.lazy(() => import('./src/routes/Home'));
const Albums = React.lazy(() => import('./src/routes/Albums'));
const EditAlbum = React.lazy(() => import('./src/routes/EditAlbum'));

const App: React.FC = () => {
  const reduxAuth = useAppSelector((state) => state.auth)
  const reduxTheme = useAppSelector((state) => state.theme)
  const dispatch = useAppDispatch()

  React.useEffect(() => {

    const email = localStorage.getItem('email')
    const password = localStorage.getItem('password')
    if (email && password) {
      let data = {
        email: email,
        password: password,
        isLoggedIn: true
      }
      dispatch(setUser(data))
    }

  }, [])



  return (
    <div className="App" data-theme={reduxTheme}>
      <Router>
        <React.Suspense fallback={`Loading`}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={reduxAuth.isLoggedIn ? <Navigate to="/" /> : <Login />} />
            {/* Protected Routes starts from here */}
            <Route element={<ProtectedRoute auth={reduxAuth.isLoggedIn} />}>
              <Route path='/albums' element={<Albums />} />
              <Route path='/album/edit/:id' element={<EditAlbum />} />
            </Route>
            {/* Fallback route */}
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Routes>
        </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
