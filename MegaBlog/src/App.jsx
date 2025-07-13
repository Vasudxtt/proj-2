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
    setLoading(false)
  })
 },[])

 const dispatch = useDispatch();
 
 return !loading ?(
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>test</div>
 ):(null)
}

export default App
