import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import './App.css'
import { login,logout } from './store/authSlice';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

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
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
      <Header/>
      <Footer/>
    </div>
  </div>
 ):(null)
}

export default App
