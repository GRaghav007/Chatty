import React, {lazy} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectRoute from './components/auth/ProtectRoute';

// lazy() function is used to import files dynamically instead of importing all at once.
const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Chat = lazy(() => import('./pages/Chat'))
const Groups = lazy(() => import('./pages/Groups'))
const NotFound = lazy(() => import('./pages/NotFound'))

let user = true;

const App = () => {
  return <BrowserRouter>
  
    <Routes>
      {/* It is used to ensure that the user is logged in before going to the HOME page. */}
      <Route element={<ProtectRoute user={user}/>}>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/groups' element = {<Groups></Groups>}></Route>
        <Route path='/chat/:chatId' element = {<Chat/>}></Route>
      </Route>

      <Route path='/login' element = {
        // When the user is logged in, redirect it to the home page,
        <ProtectRoute user = {!user} redirect='/'>
          <Login/>
        </ProtectRoute>
      }></Route>

      <Route path = "*" element={<NotFound/>}>
      </Route>

    </Routes>
  </BrowserRouter>
  
}

export default App
