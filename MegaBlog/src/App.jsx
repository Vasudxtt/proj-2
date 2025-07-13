import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import './App.css'
import { login,logout } from './store/authSlice';

function App() {
 const [loading, setLoading] = useState(true);


 useEffect(()=>{
  authService.getCurrentUser()
  .then((userData)=>{
    if(userData){
      dispatch(login({userData}));
    } else{
      dispatch(logout());
    }
  })
  .finally(()=>{
    setLoading(false);
  })
 },[])

 const dispatch = useDispatch();
 
  return (
    <>
    <h1>A blog app with appwrite
    </h1>
    </>
  )
}

export default App
