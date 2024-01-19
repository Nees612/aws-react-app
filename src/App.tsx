import './App.css'

import { BrowserRouter as Router , Route, Routes, Navigate } from "react-router-dom";
import { Amplify } from 'aws-amplify';

import '@aws-amplify/ui-react/styles.css';
import config from '../../amplify/src/amplifyconfiguration.json';

import NavbarComponent from './Components/NavbarComponent';
import PrivateRouteComponent from './Components/PrivateRouteComponent';

import UserPage from './Components/PageComponents/UserPage/UserPage';

import UserProfile from './Components/PageComponents/UserPage/UserProfile';
import UploadLesson from './Components/PageComponents/UserPage/UploadLesson';
import Requests from './Components/PageComponents/UserPage/Requests';

import LessonsPage from './Components/PageComponents/LessionPage';
import AboutUs from './Components/PageComponents/AboutUsPage';
import HomePage from './Components/PageComponents/HomePage';
import LoginPage from './Components/PageComponents/LoginPage';
import { TableFoot } from '@aws-amplify/ui-react';



Amplify.configure(config);


export function App() {

  return (
    <>
     <Router > 
     <NavbarComponent/>    
      <Routes >
        <Route element={<PrivateRouteComponent/>}>
          <Route path='/userpage' element={<UserPage/>}>
            <Route index element={<UserProfile/>}></Route>
            <Route path='/userpage/my-profile' element={<UserProfile/>}></Route>
            <Route path='/userpage/upload-lesson' element={<UploadLesson/>}></Route>
            <Route path='/userpage/requests' element={<Requests/>}></Route>            
          </Route>
          <Route path='/lessons' element={<LessonsPage/>}></Route>
        </Route>
        <Route path='/login' element={<LoginPage/>}></Route>       
        <Route path='/aboutus' element={<AboutUs/>}></Route>        
        <Route path='/' element={<HomePage/>}></Route>
        <Route path="*" element={<Navigate to="/" replace />}></Route>        
      </Routes>
     </Router>
     <TableFoot><h1>Footer</h1></TableFoot>
    </>
  )
}

export default App;
