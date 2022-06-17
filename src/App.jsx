import logo from './logo.svg';
import './App.css';
import MenuAppBar, { Home } from './Components/Home';
import {Routes, Route, Navigate} from "react-router-dom";
import { useSelector } from 'react-redux';
import { SignIn } from './Components/Signin';
import { SignUp } from './Components/Signup';
function App() {
  const isAuth = useSelector((store)=>store.isAuthenticate);
  console.log(isAuth,'is auth home');
  // if the user is not logged in then the some will be private and not accesseble with out login
  const PrivateRoute = ({isAuth,children})=>{
    console.log(isAuth,'inside priveate route')  
    return isAuth ? children : <Navigate to={'/login'}/>;
  }
  return (
    <div className="App">
      <Routes>
        
        <Route path='*' element={'404 not found'}/>
        {/* Private route */}
        <Route path='/' element ={
                                  <PrivateRoute isAuth={isAuth}>
                                      <Home/>
                                  </PrivateRoute>
                                }/>

      <Route path='/login' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
         
      </Routes>
    </div>
  );
}

export default App;
