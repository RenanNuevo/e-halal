// import Login from './components/Login'
// import Login2 from './components/Login2'
// import Login3 from './components/Login3';

// function App() {
//   return (
//     <div>
//       <Login />
//       <Login2 />
//       <Login3 />
//     </div>
//   );
// }

// export default App;



import React from 'react';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './components/Signup';
import LoginPage from './components/Login';
import Dashboard from './dashboard/dashboard'

function App() {
  return (
    // <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
    // <div className="max-w-md w-full space-y-8">
    <div>

     <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    {/* </div> */}
  </div>
  );
}

export default App;
